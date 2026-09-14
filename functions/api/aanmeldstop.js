// POST /api/aanmeldstop  —  openbaar: iedereen kan melden of een organisatie een aanmeldstop heeft.
//
// Body (JSON): { id: "<slug>", aanmeldstop: true|false, vanaf?: "JJJJ-MM-DD", toelichting?: "…", website?: "" }
//   `website` is een honeypot-veld: mensen laten het leeg, simpele bots vullen het in → genegeerd.
//
// Wat het doet: leest content/sociale-kaart/<id>.md uit GitHub, past ALLEEN de aanmeldstop-velden aan
// (aanmeldstop, aanmeldstop_vanaf, aanmeldstop_toelichting, aanmeldstop_gemeld = vandaag) en commit dat.
// Alle andere velden blijven onaangeroerd. De site bouwt daarna automatisch opnieuw (±1–2 min).
//
// Bewust licht beveiligd (geen login): alleen bestaande vermeldingen, alleen deze velden, korte tekst,
// honeypot, en een eenvoudige limiet per IP (via de Cache API, best effort). Elke melding is terug te
// vinden in de git-geschiedenis en zo nodig terug te draaien via /beheer.

import { githubClient, decodeBase64, maakBestand, splitsFrontmatter } from '../_lib/inhoud.js';
import { COLLECTIES } from '../../shared/velden.mjs';

const MAX_TOELICHTING = 200;
const MAX_PER_UUR = 10;

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const b = await request.json().catch(() => null);
    if (!b || typeof b !== 'object') return json({ fout: 'Ongeldige aanvraag' }, 400);
    if (b.website) return json({ ok: true }); // honeypot: doe alsof, sla niets op

    const id = String(b.id || '');
    if (!/^[a-z0-9-]{1,80}$/.test(id)) return json({ fout: 'Onbekende vermelding' }, 400);
    const aanmeldstop = b.aanmeldstop === true || b.aanmeldstop === 'true';
    const vanaf = aanmeldstop && /^\d{4}-\d{2}-\d{2}$/.test(String(b.vanaf || '')) ? String(b.vanaf) : '';
    const toelichting = String(b.toelichting || '').replace(/\s+/g, ' ').trim().slice(0, MAX_TOELICHTING);

    const ip = request.headers.get('cf-connecting-ip') || 'onbekend';
    if (!(await binnenLimiet(ip))) return json({ fout: 'Te veel meldingen in korte tijd. Probeer het later nog eens.' }, 429);

    const gh = githubClient(env);
    const pad = `${COLLECTIES['sociale-kaart'].map}/${id}.md`;
    const r = await gh.get(pad);
    if (r.status === 404) return json({ fout: 'Vermelding niet gevonden' }, 404);
    if (!r.ok) return json({ fout: 'GitHub niet bereikbaar' }, 502);
    const f = await r.json();
    const { data, body } = splitsFrontmatter(decodeBase64(f.content));

    const vandaag = new Date().toISOString().slice(0, 10);
    data.aanmeldstop = aanmeldstop;
    data.aanmeldstop_vanaf = vanaf;
    data.aanmeldstop_toelichting = toelichting;
    data.aanmeldstop_gemeld = vandaag;

    const inhoud = maakBestand('sociale-kaart', data, body);
    const status = aanmeldstop ? `aanmeldstop${vanaf ? ` vanaf ${vanaf}` : ''}` : 'neemt weer patiënten aan';
    const put = await gh.put(pad, inhoud, `aanmeldstop: ${data.naam || id} — ${status} (gemeld via site)`, f.sha);
    if (!put.ok) return json({ fout: 'Opslaan mislukt', detail: await put.text() }, 502);
    return json({ ok: true, id, aanmeldstop, vanaf, toelichting, gemeld: vandaag });
  } catch (e) {
    return json({ fout: 'Interne fout', detail: String(e?.message || e) }, 500);
  }
}

export async function onRequestGet() {
  return json({ info: 'POST { id, aanmeldstop, vanaf?, toelichting? } om een aanmeldstop te melden. Zie AGENTS.md.' });
}

// Eenvoudige limiet per IP per uur via de Cache API (best effort; per datacenter).
async function binnenLimiet(ip) {
  try {
    const cache = caches.default;
    const uur = Math.floor(Date.now() / 3600e3);
    const key = new Request(`https://leusdocs.nl/__limiet/aanmeldstop/${encodeURIComponent(ip)}/${uur}`);
    const hit = await cache.match(key);
    const n = hit ? Number(await hit.text()) : 0;
    if (n >= MAX_PER_UUR) return false;
    await cache.put(key, new Response(String(n + 1), { headers: { 'cache-control': 'max-age=3600' } }));
    return true;
  } catch {
    return true;
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}
