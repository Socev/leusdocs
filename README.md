# Leusdocs.nl

Website van de huisartsen en apothekers in Leusden & Achterveld: HAGRO-agenda, sociale kaart, mededelingen, werkafspraken en omzettingen.

- **Hosting:** Cloudflare Pages (bouwt automatisch bij elke push op `main`)
- **Techniek:** [Astro](https://astro.build) (statisch) + twee Pages Functions (`/api/agenda`, `/api/beheer/*`)
- **Inhoud bewerken:** via [www.leusdocs.nl/beheer](https://www.leusdocs.nl/beheer) (inloggen met e-mailcode via Cloudflare Access), of rechtstreeks in `content/` — zie [AGENTS.md](AGENTS.md) voor het exacte formaat.
- **Hosting, Access en DNS instellen:** [docs/cloudflare-setup.md](docs/cloudflare-setup.md)

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
content/paginas/*.md          werkafspraken, omzettingen, over-ons
public/bestanden/             bijlagen (pdf) bij mededelingen
shared/velden.mjs             categorieën, afzenders, veldnamen (één plek)
site.json                     naam, agenda-feed, repo
```
