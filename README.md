# Leusdocs.nl

Website van de huisartsen en apothekers in Leusden & Achterveld: HAGRO-agenda, sociale kaart, mededelingen, werkafspraken en omzettingen.

- **Hosting:** Cloudflare Pages (bouwt automatisch bij elke push op `main`)
- **Techniek:** [Astro](https://astro.build) (statisch) + Pages Functions (`/api/agenda`, `/api/beheer/*`, `/api/aanmeldstop`, `/api/wijziging`)
- **Inhoud bewerken:** via [www.leusdocs.nl/beheer](https://www.leusdocs.nl/beheer) (inloggen met e-mailcode via Cloudflare Access) met een visuele editor (TipTap; slaat op als markdown), of rechtstreeks in `content/` — zie [AGENTS.md](AGENTS.md) voor het exacte formaat.
- **Hosting, Access en DNS instellen:** [docs/cloudflare-setup.md](docs/cloudflare-setup.md)

## Zoeken op de sociale kaart

- Zoeken binnen een tabblad; direct onder het zoekveld (boven de resultaten en de leeg-melding) de knop *Zoektocht uitbreiden naar álle categorieën?* (ook bij 0 treffers), met het
  aantal treffers in de andere tabbladen. Die weergave groepeert per tabblad (daarbinnen per categorie), heeft een eigen
  zoekveld, *Terug naar …* en per tabblad *Alleen in … zoeken*. Deeplink: `/sociale-kaart?q=bloedafname&alle=1`; de terugknop
  van de browser werkt. Zoeken negeert hoofdletters en accenten; aantallen worden via `role="status"` voorgelezen.

## Meldingen van bezoekers (sociale kaart)

- **Aanmeldstop** (alleen tabblad GGZ): knop op de kaart → `POST /api/aanmeldstop` → commit op `main`, dus direct openbaar
  (zo bedoeld). De functie weigert vermeldingen buiten GGZ.
- **Meld een wijziging** (elke kaart, alle tabbladen; adres gewijzigd · bestaat niet meer · contactgegevens · andere info + vrije
  tekst) → `POST /api/wijziging` → **niet gepubliceerd**: de melding gaat naar Cloudflare KV (binding `MELDINGEN`; namespace
  `leusdocs-meldingen`, previews `leusdocs-meldingen-preview`, gekoppeld via de Pages-instellingen, niet via wrangler.toml) en
  staat in [/beheer#meldingen](https://www.leusdocs.nl/beheer#meldingen) achter Access. Daar: *Vermelding bewerken* en
  *Afgehandeld* (= weg uit KV). Niet afgehandeld vervalt na 180 dagen. De repo is openbaar; daarom staan deze meldingen er niet in.
- Wachttijd: leeg = "Wachttijd: geen gemeld" (GGZ altijd, elders per categorie, `WACHTTIJD_CATEGORIEEN`; uit per vermelding met
  `wachttijd_nvt`). Zie AGENTS.md 3a.
- Beide: honeypotveld, limiet 10 per uur per IP (`functions/_lib/limiet.js`), alleen bestaande vermeldingen.
- Lokaal toetsen: `npx wrangler pages dev dist --kv MELDINGEN` (met `BEHEER_ONTWIKKELMODUS=ja` in `.dev.vars` voor /beheer).

## Lokaal draaien

```bash
npm ci
npm run dev                      # alleen de site, op http://localhost:4321 (agenda/beheer werken hier niet)
npm run build && npx wrangler pages dev dist   # site + functions, op http://localhost:8788
```

Voor `/beheer` lokaal: maak `.dev.vars` (staat in .gitignore) met
```
BEHEER_ONTWIKKELMODUS=ja
GITHUB_TOKEN=<fine-grained PAT met Contents: read & write>
```
Let op: wijzigingen die je lokaal via /beheer opslaat, gaan écht naar GitHub.

## Structuur

```
content/sociale-kaart/*.md    één organisatie per bestand
content/mededelingen/*.md     één bericht per bestand
content/paginas/*.md          werkafspraken, medicatieafspraken, omzettingen, over-ons
public/bestanden/             bijlagen (pdf) bij mededelingen
shared/velden.mjs             categorieën, afzenders, veldnamen (één plek)
site.json                     naam, agenda-feed, repo
```
