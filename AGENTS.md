# AGENTS.md — handleiding voor geautomatiseerde bewerkingen (Telegram-bot / agents)

Dit is de bron van **www.leusdocs.nl**: een statische site (Astro) op Cloudflare Pages.
Alle inhoud staat als losse tekstbestanden in deze repo. **Een commit op `main` = automatisch een nieuwe versie van de site** (Cloudflare Pages bouwt binnen ±1–2 minuten).

Alles op de site is openbaar. Er staat geen gevoelige of persoonlijke data in; zet die er ook niet in.

## 1. Waar staat wat

| Wat | Pad | Vorm |
|---|---|---|
| Sociale kaart (één organisatie per bestand) | `content/sociale-kaart/<slug>.md` | YAML-frontmatter + optionele markdown-toelichting |
| Mededelingen (één bericht per bestand) | `content/mededelingen/<jjjj-mm-dd>-<slug>.md` | YAML-frontmatter + markdown-bericht |
| Vaste pagina's | `content/paginas/werkafspraken.md`, `omzettingen.md`, `over-ons.md` | YAML-frontmatter + markdown |
| Bijlagen bij mededelingen | `public/bestanden/<naam>.pdf` | binair; op de site bereikbaar als `/bestanden/<naam>.pdf` |
| Site-instellingen (naam, agenda-feed, repo) | `site.json` | JSON |
| Vaste keuzelijsten (categorieën, afzenders, verwijswijzen) en veldnamen | `shared/velden.mjs` | JS-module — **hier voeg je een nieuwe categorie toe** |

De agenda staat **niet** in deze repo: die is de openbare Google-agenda "HAGRO" (adres in `site.json`). De site leest de iCal-feed live via `functions/api/agenda.js`.

Handige leesbron zonder Git: de gebouwde site publiceert elke collectie als JSON op
`https://www.leusdocs.nl/data/sociale-kaart.json`, `/data/mededelingen.json`, `/data/paginas.json`
(inclusief `pad` van het bronbestand en de `body`). Gebruik dat om te zien wat er staat voordat je iets wijzigt.

## 2. Regels voor bestandsnamen (slugs)

- Alleen `a-z`, `0-9` en `-`; eindigen op `.md`. Geen hoofdletters, spaties of diakrieten.
- Sociale kaart: slug van de naam, bv. `GGZ Centraal` → `ggz-centraal.md`.
- Mededelingen: datum vooraan, bv. `2026-09-14-nieuwe-website.md`.
- De functie `slugify()` in `shared/velden.mjs` is de referentie-implementatie.
- Hernoemen = verwijderen + nieuw aanmaken (de slug is ook de URL van een mededeling: `/mededelingen/<slug>`).

## 3. Sociale kaart — veldenschema

```yaml
---
naam: "GGZ Centraal"                              # verplicht
categorie: "GGZ volwassenen"                      # verplicht, EXACT één uit shared/velden.mjs → CATEGORIEEN
omschrijving: "Specialistische GGZ voor volwassenen en ouderen in de regio Eemland."   # verplicht, 1–2 zinnen
website: "https://www.ggzcentraal.nl"             # optioneel, moet met http(s):// beginnen
telefoon: "033 123 45 67"                         # optioneel, vrije tekst (voorbeeldwaarde)
email: "info@voorbeeld.nl"                        # optioneel, geldig e-mailadres
adres: "Voorbeeldstraat 1, 3831 AA Leusden"        # optioneel (voorbeeldwaarde)
doelgroep: "Volwassenen en ouderen met complexe psychische problematiek"   # optioneel
verwijzen: "Via ZorgDomein"                       # optioneel, EXACT één uit VERWIJSWIJZEN
wachttijd: "ca. 6 weken (intake)"                 # optioneel, vrije tekst
tags: ["sggz", "crisisdienst"]                    # optioneel, lijst van trefwoorden (voor zoeken)
concept: true                                     # optioneel; true = toont label "Nog te controleren"
bijgewerkt: 2026-09-14                            # optioneel, datum JJJJ-MM-DD (laatst gecontroleerd)
bron: "https://sociaalleusden.nl/ggz/…"           # optioneel, waar de gegevens vandaan komen
aanmeldstop: true                                 # optioneel; true = neemt geen nieuwe patiënten aan (rood label op de site)
aanmeldstop_vanaf: 2026-09-01                     # optioneel, JJJJ-MM-DD
aanmeldstop_toelichting: "alleen voor VGZ/Zilveren Kruis"   # optioneel, max 200 tekens
aanmeldstop_gemeld: 2026-09-14                    # datum waarop de aanmeldstop-status voor het laatst is gemeld/gecontroleerd (altijd zetten als je de status aanpast)
---
Optionele toelichting in markdown (verwijscriteria, bijzonderheden, contactpersoon).
```

Categorieën (`CATEGORIEEN`) zijn verdeeld in twee groepen (`GROEPEN`); de groep bepaalt op welk tabblad van /sociale-kaart een organisatie staat:

- **GGZ & welzijn** (standaardtabblad): `GGZ volwassenen`, `GGZ jeugd`, `Jeugd & gezin`, `Verslaving`, `Ouderen`, `Welzijn & maatschappelijk werk`, `Gemeente & WMO`, `Werk, inkomen & schulden`
- **Overige zorgverleners**: `Huisartsen`, `Apotheken`, `Tandartsen`, `Fysiotherapie & oefentherapie`, `Diëtetiek, logopedie & ergotherapie`, `Paramedisch`, `Zwangerschap & geboorte`, `Thuiszorg & mantelzorg`, `Verpleeg- en verzorgingshuizen`, `Palliatieve zorg & overlijden`, `Ziekenhuis & specialistische zorg`, `Laboratorium & diagnostiek`, `Overig`

Een nieuwe categorie voeg je toe aan de juiste groep in `shared/velden.mjs`.

Verwijswijzen (`VERWIJSWIJZEN`): `Rechtstreeks (patiënt meldt zichzelf aan)`, `Via ZorgDomein`, `Verwijsbrief huisarts`, `Via gemeente / WMO-loket`, `Onbekend`.

Controleer bij twijfel altijd `shared/velden.mjs` — dat is de waarheid, niet dit document.

### 3a. Aanmeldstop

- `aanmeldstop: true` + optioneel `aanmeldstop_vanaf`/`aanmeldstop_toelichting` → rood label "Aanmeldstop sinds … · toelichting — gemeld <datum>".
- `aanmeldstop` weg of `false` mét `aanmeldstop_gemeld` → groen label "Neemt patiënten aan — gemeld <datum>". Zonder `aanmeldstop_gemeld` wordt niets getoond.
- Iedereen (zonder login) kan de status melden via de knop op /sociale-kaart; dat gaat via `POST /api/aanmeldstop` met `{ "id": "<slug>", "aanmeldstop": true|false, "vanaf": "JJJJ-MM-DD", "toelichting": "…" }`. Die functie past uitsluitend de vier `aanmeldstop_*`-velden aan en zet `aanmeldstop_gemeld` op vandaag. Elke melding is een aparte commit (`aanmeldstop: <naam> — …`).
- **Periodieke controle (opdracht voor de bot):** loop alle items met `aanmeldstop: true` én alle GGZ-items (`/data/sociale-kaart.json`, groep GGZ & welzijn) langs, open de `website`, zoek naar teksten als "aanmeldstop", "wachtlijst", "geen nieuwe cliënten/patiënten", "aanmelden niet mogelijk", "tijdelijk gesloten voor aanmelding" en werk de velden bij via de GitHub API (sectie 7) — altijd met `aanmeldstop_gemeld` op de controledatum, en een korte toelichting die de bron noemt (bv. "volgens website 14-9-2026"). Bij twijfel: niets veranderen en het item rapporteren.

## 4. Mededelingen — veldenschema

```yaml
---
titel: "Nieuwe openingstijden apotheek"           # verplicht
datum: 2026-09-14                                 # verplicht, JJJJ-MM-DD
afzender: "Apotheek"                              # verplicht, EXACT één uit AFZENDERS
samenvatting: "Vanaf 1 oktober op zaterdag open tot 13.00 uur."   # optioneel, 1 zin (staat op de homepage)
links:                                            # optioneel
  - titel: "Openingstijden"
    url: "https://www.voorbeeld.nl/openingstijden"
bestand: "2026-10-openingstijden.pdf"             # optioneel; bestand moet bestaan in public/bestanden/
verloopt: 2026-12-31                              # optioneel; daarna niet meer op de homepage (wel in het archief)
---
Het bericht zelf, in markdown. Mag leeg zijn als de samenvatting volstaat.
```

Afzenders (`AFZENDERS`): `HAGRO Leusden`, `Apotheek`, `POH-GGZ`, `Huisartsenpraktijk`, `Overig`.

## 5. Vaste pagina's

`content/paginas/*.md` met frontmatter `titel` (verplicht) en `bijgewerkt` (optioneel, JJJJ-MM-DD). De body is markdown; tabellen worden ondersteund:

```markdown
| Wat | Afspraak |
|---|---|
| Baxter | Recept staken? Stuur een herhaling met aantal 1 en tekst "STOPSTOPSTOP". |
```

Werk bij een inhoudelijke wijziging ook `bijgewerkt` bij. Voeg geen nieuwe bestanden toe in `content/paginas/` zonder ook een `src/pages/<naam>.astro` en een navigatie-item in `src/layouts/Base.astro` te maken.

## 6. YAML-valkuilen

- Zet tekst met `:` , `#`, `"` of een leidende `*`/`-` altijd tussen dubbele aanhalingstekens; escape `"` als `\"`.
- Datums **niet** tussen aanhalingstekens (`datum: 2026-09-14`).
- Booleans: `true`/`false`, zonder aanhalingstekens.
- Lijsten als `["a", "b"]` of als `- a` op aparte regels.
- Bestand in UTF-8, Unix-regeleinden, eindigen met een lege regel.

## 7. Wijzigen via de GitHub API (voor de bot)

Repo: `Socev/Leusdocs`, branch `main`. Gebruik een fine-grained PAT met **Contents: read & write**.

Lezen (geeft ook de `sha` die je nodig hebt om te overschrijven of te verwijderen):
```
GET https://api.github.com/repos/Socev/Leusdocs/contents/content/sociale-kaart/ggz-centraal.md
Headers: Authorization: Bearer <PAT>, Accept: application/vnd.github+json, X-GitHub-Api-Version: 2022-11-28
→ { "sha": "...", "content": "<base64>" }
```

Aanmaken of overschrijven (bij overschrijven `sha` meesturen, anders 409/422):
```
PUT https://api.github.com/repos/Socev/Leusdocs/contents/content/sociale-kaart/ggz-centraal.md
{ "message": "sociale-kaart: GGZ Centraal wachttijd bijgewerkt (bot)", "branch": "main",
  "content": "<base64 van het volledige .md-bestand>", "sha": "<sha bij overschrijven>" }
```

Verwijderen:
```
DELETE https://api.github.com/repos/Socev/Leusdocs/contents/content/sociale-kaart/ggz-centraal.md
{ "message": "sociale-kaart: GGZ Centraal verwijderd (bot)", "branch": "main", "sha": "<sha>" }
```

Map-inhoud opvragen: `GET .../contents/content/sociale-kaart` → lijst met `name`, `path`, `sha`.

Bijlage uploaden: `PUT .../contents/public/bestanden/<slug>.pdf` met de base64 van het bestand (max ±5 MB), daarna in de mededeling `bestand: "<slug>.pdf"` zetten.

Commit-berichten: begin met de collectie (`sociale-kaart:`, `mededelingen:`, `paginas:`) en zeg wat er veranderde. Eén onderwerp per commit.

## 8. Wat gebeurt er na een commit

1. Cloudflare Pages start automatisch een build (`npm run build`).
2. Elk bestand in `content/` wordt gecontroleerd tegen het schema in `src/content.config.ts`. **Bij een fout faalt de build en blijft de oude site online.** De foutmelding in het Pages-bouwlog noemt bestand en veld, bv. `content/sociale-kaart/x.md: categorie: Invalid enum value`.
3. Na een geslaagde build (±1–2 min) staat de wijziging live.

Wil je zeker weten dat een wijziging bouwt vóór je commit: `npm ci && npm run build` lokaal.

## 9. Structuur van de code (alleen nodig als je aan de site zelf werkt)

```
site.json                 instellingen (naam, agenda-feed, repo)
shared/velden.mjs         keuzelijsten + veldenschema (gedeeld door site en beheer)
content/                  alle inhoud (zie boven)
public/                   statische bestanden (bijlagen, favicon, _headers, robots.txt)
src/content.config.ts     Zod-schema's van de collecties (build-validatie)
src/layouts/Base.astro    header/navigatie/footer
src/pages/                pagina's: index, agenda, sociale-kaart, mededelingen/, werkafspraken, omzettingen, over-ons, beheer, data/[collectie].json
src/scripts/agenda.ts     client-side rendering van de agenda
functions/api/agenda.js   Pages Function: iCal → JSON (cache 10 min)
functions/api/beheer/     Pages Function: schrijft vanuit /beheer naar GitHub (achter Cloudflare Access)
docs/cloudflare-setup.md  hosting, Access en DNS
```

`npm run dev` voor de site zonder functions; `npm run build && npx wrangler pages dev dist` voor site + functions (zet `BEHEER_ONTWIKKELMODUS=ja` in `.dev.vars` om /beheer lokaal te testen).
