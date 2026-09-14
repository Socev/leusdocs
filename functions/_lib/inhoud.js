// Gedeelde helpers voor de Pages Functions: GitHub-client, frontmatter lezen/schrijven, validatie.
import YAML from 'yaml';
import site from '../../site.json';
import { VELDEN, COLLECTIES } from '../../shared/velden.mjs';

/* ---------- GitHub ---------- */

export function githubClient(env) {
  const repo = env.GITHUB_REPO || site.beheer.githubRepo;
  const branch = env.GITHUB_BRANCH || site.beheer.branch || 'main';
  const token = env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN ontbreekt in de omgevingsvariabelen');
  const basis = `https://api.github.com/repos/${repo}/contents/`;
  const headers = {
    authorization: `Bearer ${token}`,
    accept: 'application/vnd.github+json',
    'user-agent': 'leusdocs-beheer',
    'x-github-api-version': '2022-11-28',
  };
  return {
    get: (pad) => fetch(`${basis}${pad}?ref=${encodeURIComponent(branch)}`, { headers }),
    put: (pad, tekst, message, sha) =>
      fetch(`${basis}${pad}`, { method: 'PUT', headers, body: JSON.stringify({ message, branch, sha, content: encodeBase64(tekst) }) }),
    putRaw: (pad, base64, message, sha) =>
      fetch(`${basis}${pad}`, { method: 'PUT', headers, body: JSON.stringify({ message, branch, sha, content: base64 }) }),
    del: (pad, message, sha) => fetch(`${basis}${pad}`, { method: 'DELETE', headers, body: JSON.stringify({ message, branch, sha }) }),
  };
}
export function encodeBase64(tekst) {
  const bytes = new TextEncoder().encode(tekst);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}
export function decodeBase64(b64) {
  const bin = atob(String(b64).replace(/\n/g, ''));
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

/* ---------- Inhoud ---------- */

export function controleerPad(pad, verwachteMap) {
  if (!pad || typeof pad !== 'string') return 'pad ontbreekt';
  if (pad.includes('..') || pad.startsWith('/')) return 'ongeldig pad';
  const maps = verwachteMap ? [verwachteMap] : Object.values(COLLECTIES).map((c) => c.map);
  if (!maps.some((m) => pad.startsWith(m + '/'))) return 'pad ligt buiten de content-mappen';
  if (!/^[a-z0-9\-/]+\.md$/.test(pad)) return 'bestandsnaam mag alleen kleine letters, cijfers en streepjes bevatten';
  return null;
}

export function valideer(collectie, data) {
  const fouten = [];
  for (const v of VELDEN[collectie]) {
    const w = data[v.naam];
    const leeg = w === undefined || w === null || w === '' || (Array.isArray(w) && w.length === 0);
    if (v.verplicht && leeg) fouten.push(`${v.label} is verplicht`);
    if (leeg) continue;
    if (v.type === 'select' && !v.opties.includes(w)) fouten.push(`${v.label}: "${w}" is geen geldige keuze`);
    if (v.type === 'multi' && (!Array.isArray(w) || w.some((x) => !v.opties.includes(x)))) fouten.push(`${v.label}: alleen ${v.opties.join(', ')} zijn toegestaan`);
    if (v.type === 'url' && !/^https?:\/\/\S+$/.test(w)) fouten.push(`${v.label}: moet beginnen met http:// of https://`);
    if (v.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(w)) fouten.push(`${v.label}: geen geldig e-mailadres`);
    if (v.type === 'date' && !/^\d{4}-\d{2}-\d{2}$/.test(w)) fouten.push(`${v.label}: gebruik JJJJ-MM-DD`);
    if (v.type === 'links') {
      if (!Array.isArray(w)) fouten.push(`${v.label}: moet een lijst zijn`);
      else for (const l of w) if (!l.titel || !/^https?:\/\/\S+$/.test(l.url || '')) fouten.push(`${v.label}: elke link heeft een titel en een geldige url nodig`);
    }
  }
  return fouten;
}

function yamlWaarde(v, type) {
  if (type === 'date') return String(v).slice(0, 10);
  if (type === 'checkbox') return v ? 'true' : 'false';
  if (type === 'tags' || type === 'multi') return JSON.stringify((Array.isArray(v) ? v : String(v).split(',')).map((t) => String(t).trim()).filter(Boolean));
  return JSON.stringify(String(v));
}

// Bouwt het .md-bestand: YAML-frontmatter in vaste veldvolgorde + body.
export function maakBestand(collectie, data, body) {
  const regels = ['---'];
  for (const v of VELDEN[collectie]) {
    const w = data[v.naam];
    if (w === undefined || w === null || w === '') continue;
    if (v.type === 'checkbox' && !w) continue;
    if ((v.type === 'tags' || v.type === 'multi') && (!w || (Array.isArray(w) && !w.length))) continue;
    if (v.type === 'links') {
      if (!Array.isArray(w) || !w.length) continue;
      regels.push(`${v.naam}:`);
      for (const l of w) regels.push(`  - titel: ${JSON.stringify(String(l.titel))}`, `    url: ${JSON.stringify(String(l.url))}`);
      continue;
    }
    regels.push(`${v.naam}: ${yamlWaarde(w, v.type)}`);
  }
  regels.push('---');
  return regels.join('\n') + '\n' + String(body || '').replace(/\r\n/g, '\n').trim() + '\n';
}

export function splitsFrontmatter(tekst) {
  const m = String(tekst).replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: tekst };
  const data = YAML.parse(m[1]) || {};
  for (const k of Object.keys(data)) if (data[k] instanceof Date) data[k] = data[k].toISOString().slice(0, 10);
  return { data, body: m[2].trim() };
}

