// Laadt /api/agenda (Pages Function die de HAGRO-iCal omzet naar JSON) en rendert de lijst.
// Werkt op de homepage (#agenda-kort, compact) en op /agenda (#agenda, volledig).

type Event = {
  id: string;
  titel: string;
  start: string; // ISO
  eind: string | null;
  heleDag: boolean;
  locatie: string | null;
  omschrijving: string | null; // platte tekst
  url: string | null;
};

const TZ = 'Europe/Amsterdam';
const fDag = new Intl.DateTimeFormat('nl-NL', { day: 'numeric', timeZone: TZ });
const fMaandKort = new Intl.DateTimeFormat('nl-NL', { month: 'short', timeZone: TZ });
const fWeekdag = new Intl.DateTimeFormat('nl-NL', { weekday: 'short', timeZone: TZ });
const fTijd = new Intl.DateTimeFormat('nl-NL', { hour: '2-digit', minute: '2-digit', timeZone: TZ });
const fMaandLang = new Intl.DateTimeFormat('nl-NL', { month: 'long', year: 'numeric', timeZone: TZ });
const fDatumLang = new Intl.DateTimeFormat('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', timeZone: TZ });

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);
}
function linkify(s: string) {
  return esc(s).replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)])/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
}
function tijdregel(e: Event) {
  if (e.heleDag) return 'hele dag';
  const s = new Date(e.start);
  const t = fTijd.format(s);
  if (!e.eind) return t;
  const eind = new Date(e.eind);
  return `${t} – ${fTijd.format(eind)}`;
}
function kaartLink(loc: string) {
  if (/^https?:\/\//.test(loc)) return `<a href="${esc(loc)}" target="_blank" rel="noopener">online (link)</a>`;
  return `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc)}" target="_blank" rel="noopener">${esc(loc)}</a>`;
}

function itemHtml(e: Event, compact: boolean, voorbij: boolean) {
  const s = new Date(e.start);
  const omschrijving = e.omschrijving?.trim();
  return `<li class="agenda-item${voorbij ? ' voorbij' : ''}">
    <div class="agenda-datum">
      <div class="weekdag">${fWeekdag.format(s)}</div>
      <div class="dag">${fDag.format(s)}</div>
      <div class="maand">${fMaandKort.format(s).replace('.', '')}</div>
    </div>
    <div>
      <p class="agenda-titel">${esc(e.titel)}</p>
      <div class="agenda-meta">
        <span>${esc(tijdregel(e))}</span>
        ${e.locatie ? `<span>${kaartLink(e.locatie)}</span>` : ''}
      </div>
      ${!compact && omschrijving ? `<button class="agenda-toggle" type="button" aria-expanded="false">Meer info</button><div class="agenda-omschrijving" hidden>${linkify(omschrijving)}</div>` : ''}
    </div>
  </li>`;
}

async function laad(): Promise<Event[]> {
  const r = await fetch('/api/agenda', { headers: { accept: 'application/json' } });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const j = await r.json();
  return j.events as Event[];
}

function fout(el: HTMLElement) {
  const ical = (document.querySelector('a[href*="basic.ics"]') as HTMLAnchorElement | null)?.href ?? '#';
  el.innerHTML = `<p class="zacht klein">De agenda kon niet worden geladen. <a href="${ical}">Open de iCal-feed</a> of probeer het later opnieuw.</p>`;
}

async function init() {
  const kort = document.getElementById('agenda-kort');
  const vol = document.getElementById('agenda');
  if (!kort && !vol) return;
  let events: Event[];
  try {
    events = await laad();
  } catch {
    if (kort) fout(kort);
    if (vol) fout(vol);
    return;
  }
  const nu = Date.now();
  const komend = events.filter((e) => new Date(e.eind ?? e.start).getTime() >= nu - 3600_000);

  if (kort) {
    const max = Number(kort.dataset.max ?? 5);
    const lijst = komend.slice(0, max);
    kort.innerHTML = lijst.length
      ? `<ul class="agenda-lijst">${lijst.map((e) => itemHtml(e, true, false)).join('')}</ul>`
      : '<p class="zacht klein">Geen aankomende activiteiten.</p>';
  }

  if (vol) {
    const voorbij = events.filter((e) => new Date(e.eind ?? e.start).getTime() < nu - 3600_000).reverse();
    let html = '';
    let maand = '';
    for (const e of komend) {
      const m = fMaandLang.format(new Date(e.start));
      if (m !== maand) { maand = m; html += `<h2 class="agenda-maandkop">${esc(m)}</h2>`; }
      html += `<ul class="agenda-lijst">${itemHtml(e, false, false)}</ul>`;
    }
    if (!komend.length) html += '<p class="leeg">Geen aankomende activiteiten.</p>';
    if (voorbij.length) {
      html += `<details style="margin-top:28px"><summary class="zacht" style="cursor:pointer">Eerdere activiteiten (${voorbij.length})</summary><div style="margin-top:12px"><ul class="agenda-lijst">${voorbij.slice(0, 40).map((e) => itemHtml(e, false, true)).join('')}</ul></div></details>`;
    }
    vol.innerHTML = html;
    vol.addEventListener('click', (ev) => {
      const b = (ev.target as HTMLElement).closest('.agenda-toggle') as HTMLButtonElement | null;
      if (!b) return;
      const d = b.nextElementSibling as HTMLElement;
      const open = d.hidden;
      d.hidden = !open;
      b.setAttribute('aria-expanded', String(open));
      b.textContent = open ? 'Minder info' : 'Meer info';
    });
    const bijgewerkt = document.getElementById('agenda-bijgewerkt');
    if (bijgewerkt) bijgewerkt.textContent = `${komend.length} aankomende activiteiten · ${fDatumLang.format(new Date())}`;
  }
}

init();
