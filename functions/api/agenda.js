// GET /api/agenda  →  { bron, opgehaald, events: [...] }
// Haalt de openbare iCal-feed van de HAGRO-agenda op (adres in site.json), zet die om naar JSON
// en cachet het resultaat 10 minuten aan de Cloudflare-rand. Herhalende afspraken worden uitgevouwen
// over een venster van 6 maanden terug tot 18 maanden vooruit.

import ICAL from 'ical.js';
import site from '../../site.json';

const CACHE_SECONDEN = 600;

function htmlNaarTekst(s) {
  if (!s) return null;
  let t = String(s)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h\d|tr)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<a\s[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, (_, href, tekst) => (tekst && tekst.trim() && !tekst.includes(href) ? `${tekst.trim()} (${href})` : href))
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return t || null;
}

function naarEvent(vevent, occStart, occEnd, key) {
  const heleDag = occStart.isDate;
  const url = vevent.getFirstPropertyValue('url');
  return {
    id: key,
    titel: vevent.getFirstPropertyValue('summary') || '(zonder titel)',
    start: heleDag ? occStart.toString() : occStart.toJSDate().toISOString(),
    eind: occEnd ? (heleDag ? occEnd.toString() : occEnd.toJSDate().toISOString()) : null,
    heleDag,
    locatie: vevent.getFirstPropertyValue('location') || null,
    omschrijving: htmlNaarTekst(vevent.getFirstPropertyValue('description')),
    url: url ? String(url) : null,
  };
}

export function parseIcs(icsTekst, nu = new Date()) {
  const jcal = ICAL.parse(icsTekst);
  const comp = new ICAL.Component(jcal);
  // Tijdzones uit de feed registreren, zodat TZID-datums goed uitkomen
  for (const tz of comp.getAllSubcomponents('vtimezone')) {
    const zone = new ICAL.Timezone(tz);
    if (!ICAL.TimezoneService.has(zone.tzid)) ICAL.TimezoneService.register(zone.tzid, zone);
  }
  const vanaf = ICAL.Time.fromJSDate(new Date(nu.getTime() - 183 * 86400e3), true);
  const tot = ICAL.Time.fromJSDate(new Date(nu.getTime() + 548 * 86400e3), true);

  const events = [];
  const overrides = new Map(); // uid -> Set(recurrence-id)
  const vevents = comp.getAllSubcomponents('vevent');
  for (const v of vevents) {
    const rid = v.getFirstPropertyValue('recurrence-id');
    if (rid) {
      const uid = v.getFirstPropertyValue('uid');
      if (!overrides.has(uid)) overrides.set(uid, new Set());
      overrides.get(uid).add(rid.toString());
    }
  }
  for (const v of vevents) {
    const ev = new ICAL.Event(v);
    if (v.getFirstPropertyValue('status') === 'CANCELLED') continue;
    if (ev.isRecurring()) {
      const it = ev.iterator();
      let next;
      let n = 0;
      while ((next = it.next()) && n < 500) {
        n++;
        if (next.compare(tot) > 0) break;
        if (overrides.get(ev.uid)?.has(next.toString())) continue; // aangepaste instantie staat apart in de feed
        const det = ev.getOccurrenceDetails(next);
        if (det.endDate.compare(vanaf) < 0) continue;
        events.push(naarEvent(v, det.startDate, det.endDate, `${ev.uid}_${next.toString()}`));
      }
    } else {
      const s = ev.startDate;
      const e = ev.endDate;
      if (!s) continue;
      if ((e ?? s).compare(vanaf) < 0 || s.compare(tot) > 0) continue;
      const rid = v.getFirstPropertyValue('recurrence-id');
      events.push(naarEvent(v, s, e, rid ? `${ev.uid}_${rid.toString()}` : ev.uid));
    }
  }
  events.sort((a, b) => a.start.localeCompare(b.start));
  return events;
}

export async function onRequestGet(context) {
  const cache = caches.default;
  const cacheKey = new Request(new URL(context.request.url).origin + '/api/agenda', { method: 'GET' });
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const bron = site.agenda.icalUrl;
  let res;
  try {
    res = await fetch(bron, { headers: { 'user-agent': 'leusdocs.nl agenda' } });
  } catch (e) {
    return json({ fout: 'Agenda-feed niet bereikbaar', detail: String(e) }, 502);
  }
  if (!res.ok) return json({ fout: `Agenda-feed gaf HTTP ${res.status}` }, 502);
  const tekst = await res.text();
  let events;
  try {
    events = parseIcs(tekst);
  } catch (e) {
    return json({ fout: 'Agenda-feed kon niet worden gelezen', detail: String(e) }, 502);
  }
  const antwoord = json({ bron, opgehaald: new Date().toISOString(), aantal: events.length, events }, 200, {
    'cache-control': `public, max-age=120, s-maxage=${CACHE_SECONDEN}`,
  });
  context.waitUntil(cache.put(cacheKey, antwoord.clone()));
  return antwoord;
}

function json(obj, status = 200, extra = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', ...extra },
  });
}
