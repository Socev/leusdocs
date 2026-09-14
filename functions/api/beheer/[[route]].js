// /api/beheer/*  —  schrijft wijzigingen vanuit /beheer als commit naar GitHub.
//
// Beveiliging: elke aanroep moet een geldig Cloudflare Access-token dragen (header Cf-Access-Jwt-Assertion,
// wordt door Access toegevoegd zodra /beheer* en /api/beheer* achter een Access-applicatie staan).
// Het token wordt hier cryptografisch gecontroleerd tegen de publieke sleutels van je Access-team.
//
// Benodigde omgevingsvariabelen (Cloudflare Pages → Settings → Environment variables):
//   CF_ACCESS_TEAM_DOMAIN  bv. "socev.cloudflareaccess.com"
//   CF_ACCESS_AUD          Application Audience (AUD) tag van de Access-applicatie
//   GITHUB_TOKEN           fine-grained PAT met Contents: read & write op de repo (als *secret*)
//   GITHUB_REPO            optioneel, standaard uit site.json (bv. "Socev/Leusdocs")
//   GITHUB_BRANCH          optioneel, standaard "main"
//   BEHEER_ONTWIKKELMODUS  alleen lokaal ("ja"): slaat de Access-controle over. NOOIT in productie zetten.
//
// Routes:
//   GET    /api/beheer/ik                      → { email }
//   GET    /api/beheer/lijst?collectie=…       → { bestanden: [{ naam, pad, sha }] }   (rechtstreeks uit GitHub)
//   GET    /api/beheer/item?pad=…              → { pad, sha, data, body }
//   PUT    /api/beheer/item                    body { collectie, id?, pad?, sha?, data, body } → { pad, sha }
//   DELETE /api/beheer/item                    body { pad, sha }
//   PUT    /api/beheer/bestand                 body { naam, base64 } → { bestand } (komt in public/bestanden/)

import { VELDEN, COLLECTIES, slugify } from '../../../shared/velden.mjs';
import { githubClient, decodeBase64, controleerPad, valideer, maakBestand, splitsFrontmatter } from '../../_lib/inhoud.js';

const MAX_BESTAND_BYTES = 5 * 1024 * 1024;
const TOEGESTANE_EXTENSIES = ['pdf', 'png', 'jpg', 'jpeg', 'docx', 'xlsx', 'txt'];

export async function onRequest(context) {
  const { request, env, params } = context;
  const route = (params.route || []).join('/');
  try {
    const identiteit = await controleerToegang(request, env);
    if (!identiteit.ok) return json({ fout: identiteit.fout }, identiteit.status);
    const email = identiteit.email;
    const gh = githubClient(env);

    if (request.method === 'GET' && route === 'ik') return json({ email });

    if (request.method === 'GET' && route === 'lijst') {
      const collectie = new URL(request.url).searchParams.get('collectie');
      const map = COLLECTIES[collectie]?.map;
      if (!map) return json({ fout: 'Onbekende collectie' }, 400);
      const r = await gh.get(map);
      if (r.status === 404) return json({ bestanden: [] });
      const lijst = (await r.json()).filter((f) => f.type === 'file' && f.name.endsWith('.md'));
      return json({ bestanden: lijst.map((f) => ({ naam: f.name.replace(/\.md$/, ''), pad: f.path, sha: f.sha })) });
    }

    if (request.method === 'GET' && route === 'item') {
      const pad = new URL(request.url).searchParams.get('pad');
      const chk = controleerPad(pad);
      if (chk) return json({ fout: chk }, 400);
      const r = await gh.get(pad);
      if (r.status === 404) return json({ fout: 'Bestand niet gevonden' }, 404);
      const f = await r.json();
      const tekst = decodeBase64(f.content);
      const { data, body } = splitsFrontmatter(tekst);
      return json({ pad, sha: f.sha, data, body });
    }

    if (request.method === 'PUT' && route === 'item') {
      const b = await request.json();
      const collectie = b.collectie;
      const def = COLLECTIES[collectie];
      if (!def) return json({ fout: 'Onbekende collectie' }, 400);
      const data = b.data || {};
      const fouten = valideer(collectie, data);
      if (fouten.length) return json({ fout: 'Controleer de invoer', fouten }, 422);

      let pad = b.pad;
      if (!pad) {
        if (def.vast) return json({ fout: "Bij pagina's kun je geen nieuwe items maken" }, 400);
        let id = b.id ? slugify(b.id) : slugify(collectie === 'mededelingen' ? `${data.datum}-${data.titel}` : data.naam);
        pad = `${def.map}/${id}.md`;
      }
      const chk = controleerPad(pad, def.map);
      if (chk) return json({ fout: chk }, 400);

      const inhoud = maakBestand(collectie, data, b.body || '');
      const titel = data.naam || data.titel || pad;
      const r = await gh.put(pad, inhoud, `beheer(${collectie}): ${b.sha ? 'wijzig' : 'nieuw'} "${titel}" — ${email}`, b.sha);
      if (!r.ok) return json({ fout: 'GitHub weigerde de wijziging', detail: await r.text() }, 502);
      const res = await r.json();
      return json({ pad, sha: res.content?.sha, commit: res.commit?.sha });
    }

    if (request.method === 'DELETE' && route === 'item') {
      const b = await request.json();
      const chk = controleerPad(b.pad);
      if (chk) return json({ fout: chk }, 400);
      if (!b.sha) return json({ fout: 'sha ontbreekt' }, 400);
      const collectie = Object.keys(COLLECTIES).find((k) => b.pad.startsWith(COLLECTIES[k].map + '/'));
      if (COLLECTIES[collectie]?.vast) return json({ fout: "Pagina's kunnen niet worden verwijderd" }, 400);
      const r = await gh.del(b.pad, `beheer(${collectie}): verwijder ${b.pad} — ${email}`, b.sha);
      if (!r.ok) return json({ fout: 'GitHub weigerde het verwijderen', detail: await r.text() }, 502);
      return json({ verwijderd: b.pad });
    }

    if (request.method === 'PUT' && route === 'bestand') {
      const b = await request.json();
      const ext = String(b.naam || '').split('.').pop().toLowerCase();
      if (!TOEGESTANE_EXTENSIES.includes(ext)) return json({ fout: `Bestandstype niet toegestaan (${TOEGESTANE_EXTENSIES.join(', ')})` }, 400);
      const basis = slugify(String(b.naam).replace(/\.[^.]+$/, ''));
      const naam = `${basis}.${ext}`;
      const bytes = Math.floor((String(b.base64 || '').length * 3) / 4);
      if (bytes > MAX_BESTAND_BYTES) return json({ fout: 'Bestand is groter dan 5 MB' }, 413);
      const pad = `public/bestanden/${naam}`;
      const bestaand = await gh.get(pad);
      const sha = bestaand.ok ? (await bestaand.json()).sha : undefined;
      const r = await gh.putRaw(pad, b.base64, `beheer(bestand): ${naam} — ${email}`, sha);
      if (!r.ok) return json({ fout: 'GitHub weigerde het bestand', detail: await r.text() }, 502);
      return json({ bestand: naam, url: `/bestanden/${naam}` });
    }

    return json({ fout: 'Onbekende route' }, 404);
  } catch (e) {
    return json({ fout: 'Interne fout', detail: String(e?.message || e) }, 500);
  }
}

/* ---------- Cloudflare Access ---------- */

async function controleerToegang(request, env) {
  if (env.BEHEER_ONTWIKKELMODUS === 'ja') return { ok: true, email: 'ontwikkelaar@localhost' };
  if (!env.CF_ACCESS_TEAM_DOMAIN || !env.CF_ACCESS_AUD) {
    return { ok: false, status: 503, fout: 'Beheer is nog niet geconfigureerd (CF_ACCESS_TEAM_DOMAIN / CF_ACCESS_AUD ontbreken).' };
  }
  const token = request.headers.get('Cf-Access-Jwt-Assertion') || leesCookie(request, 'CF_Authorization');
  if (!token) return { ok: false, status: 401, fout: 'Niet ingelogd via Cloudflare Access.' };
  try {
    const [h, p, s] = token.split('.');
    const header = JSON.parse(b64urlNaarTekst(h));
    const payload = JSON.parse(b64urlNaarTekst(p));
    if (header.alg !== 'RS256') throw new Error('alg');
    const certs = await haalCerts(env.CF_ACCESS_TEAM_DOMAIN);
    const jwk = certs.keys.find((k) => k.kid === header.kid);
    if (!jwk) throw new Error('kid onbekend');
    const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const geldig = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, b64urlNaarBytes(s), new TextEncoder().encode(`${h}.${p}`));
    if (!geldig) throw new Error('handtekening');
    const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
    if (!aud.includes(env.CF_ACCESS_AUD)) throw new Error('aud');
    if (payload.iss !== `https://${env.CF_ACCESS_TEAM_DOMAIN}`) throw new Error('iss');
    if (payload.exp * 1000 < Date.now()) throw new Error('verlopen');
    return { ok: true, email: payload.email || payload.sub || 'onbekend' };
  } catch (e) {
    return { ok: false, status: 401, fout: `Toegangstoken ongeldig (${e.message}).` };
  }
}

let certsCache = { tijd: 0, data: null };
async function haalCerts(team) {
  if (certsCache.data && Date.now() - certsCache.tijd < 3600e3) return certsCache.data;
  const r = await fetch(`https://${team}/cdn-cgi/access/certs`);
  if (!r.ok) throw new Error('certs niet bereikbaar');
  certsCache = { tijd: Date.now(), data: await r.json() };
  return certsCache.data;
}
function leesCookie(request, naam) {
  const c = request.headers.get('cookie') || '';
  const m = c.match(new RegExp(`(?:^|;\\s*)${naam}=([^;]+)`));
  return m ? m[1] : null;
}
function b64urlNaarBytes(s) {
  const b = atob(s.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(s.length / 4) * 4, '='));
  return Uint8Array.from(b, (c) => c.charCodeAt(0));
}
function b64urlNaarTekst(s) {
  return new TextDecoder().decode(b64urlNaarBytes(s));
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}
