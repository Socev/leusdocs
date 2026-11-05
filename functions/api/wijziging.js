// POST /api/wijziging  —  openbaar: iedereen kan bij een vermelding op de sociale kaart een wijziging melden
// (adres gewijzigd, bestaat niet meer, contactgegevens, andere info).
//
// Body (JSON): { id: "<slug>", soort: "adres"|"opgeheven"|"contact"|"info", tekst: "…", website?: "" }
//   `website` is een honeypot-veld: mensen laten het leeg, simpele bots vullen het in → genegeerd.
//
// Anders dan /api/aanmeldstop publiceert deze route NIETS: de repo en de site zijn openbaar, en een vrij tekstveld
// kan van alles bevatten. De melding gaat naar Cloudflare KV (binding MELDINGEN, namespace leusdocs-meldingen;
// previews: leusdocs-meldingen-preview) en verschijnt in /beheer onder "Meldingen" (achter Cloudflare Access).
// Een beheerder past de vermelding daar zelf aan en zet de melding op afgehandeld (= verwijderd uit KV).
// Een melding die niemand afhandelt verdwijnt na BEWAARDAGEN vanzelf.
//
// Zelfde bescherming als de aanmeldstop-knop: alleen bestaande vermeldingen, korte tekst, honeypot en een limiet per IP.

import { WIJZIGING_SOORTEN } from '../../shared/velden.mjs';
import { binnenLimiet, json } from '../_lib/limiet.js';

const MAX_TEKST = 1000;
const MAX_PER_UUR = 10;
const BEWAARDAGEN = 180;

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const b = await request.json().catch(() => null);
    if (!b || typeof b !== 'object') return json({ fout: 'Ongeldige aanvraag' }, 400);
    if (b.website) return json({ ok: true }); // honeypot: doe alsof, sla niets op

    const id = String(b.id || '');
    if (!/^[a-z0-9-]{1,80}$/.test(id)) return json({ fout: 'Onbekende vermelding' }, 400);
    const soort = WIJZIGING_SOORTEN.find((s) => s.id === b.soort);
    if (!soort) return json({ fout: 'Kies wat er gewijzigd is' }, 400);
    const tekst = String(b.tekst || '').replace(/\r\n/g, '\n').replace(/[^\S\n]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim().slice(0, MAX_TEKST);
    if (soort.id !== 'opgeheven' && tekst.length < 3) return json({ fout: 'Schrijf erbij wat er anders is' }, 400);

    if (!env.MELDINGEN) return json({ fout: 'Melden is tijdelijk niet mogelijk' }, 503);

    const ip = request.headers.get('cf-connecting-ip') || 'onbekend';
    if (!(await binnenLimiet('wijziging', ip, MAX_PER_UUR))) return json({ fout: 'Te veel meldingen in korte tijd. Probeer het later nog eens.' }, 429);

    // Bestaat de vermelding? Lees de gebouwde lijst van de site zelf (geen GitHub nodig).
    const lijst = await env.ASSETS.fetch(new URL('/data/sociale-kaart.json', request.url));
    if (!lijst.ok) return json({ fout: 'Sociale kaart niet bereikbaar' }, 502);
    const item = ((await lijst.json()).items || []).find((i) => i.id === id);
    if (!item) return json({ fout: 'Vermelding niet gevonden' }, 404);

    const nu = new Date();
    // Omgekeerde tijd in de sleutel: KV geeft sleutels alfabetisch, zo komen de nieuwste meldingen eerst.
    const sleutel = `m:${String(9999999999999 - nu.getTime()).padStart(13, '0')}:${crypto.randomUUID().slice(0, 8)}`;
    const melding = { id, naam: item.naam, categorie: item.categorie, soort: soort.id, tekst, gemeld: nu.toISOString() };
    await env.MELDINGEN.put(sleutel, JSON.stringify(melding), {
      expirationTtl: BEWAARDAGEN * 86400,
      metadata: { id, soort: soort.id, gemeld: melding.gemeld },
    });
    return json({ ok: true });
  } catch (e) {
    return json({ fout: 'Interne fout' }, 500);
  }
}

export async function onRequestGet() {
  return json({ info: 'POST { id, soort, tekst } om een wijziging te melden; komt bij de beheerder, wordt niet direct gepubliceerd.' });
}
