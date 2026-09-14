# Cloudflare: Pages, Access en DNS instellen

Eenmalige stappen om `Socev/Leusdocs` live te zetten op www.leusdocs.nl. **Status 14 sep 2026: stappen 1–4 zijn uitgevoerd** (Pages-project `leusdocs`, custom domains, Access-app "Leusdocs beheer" op team `huisdokter.cloudflareaccess.com`). Hieronder ter referentie en voor het geval iets opnieuw moet.

## Stap 1 — Pages-project koppelen aan GitHub (±5 min)

1. Cloudflare-dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Kies GitHub → autoriseer de Cloudflare Pages-app voor de organisatie/het account **Socev** → selecteer repo **Leusdocs**.
3. Build-instellingen:
   - Project name: `leusdocs`
   - Production branch: `main`
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: *(leeg)*
4. **Environment variables** (Production én Preview) — nu alvast zetten kan, maar de Access-waarden komen uit stap 3:
   | Naam | Waarde | Type |
   |---|---|---|
   | `NODE_VERSION` | `22` | text |
   | `GITHUB_TOKEN` | fine-grained PAT, repo `Socev/Leusdocs`, permission **Contents: Read and write** | **secret** |
   | `GITHUB_REPO` | `Socev/Leusdocs` | text |
   | `GITHUB_BRANCH` | `main` | text |
   | `CF_ACCESS_TEAM_DOMAIN` | `huisdokter.cloudflareaccess.com` (bestaand Zero Trust-team) | text |
   | `CF_ACCESS_AUD` | Application Audience tag (stap 3) | text |
5. **Save and Deploy**. De eerste build duurt ±1–2 minuten. Daarna is de site bereikbaar op `https://leusdocs.pages.dev`.
   Controleer: `/`, `/agenda` (moet events tonen, dat bewijst dat de Function werkt), `/sociale-kaart`.

> Maak voor `GITHUB_TOKEN` bij voorkeur een **aparte** PAT aan (naam "leusdocs-beheer"), niet de PAT van de Telegram-bot. Dan kun je ze los van elkaar intrekken.
> Het token dat tijdens de bouw van de site in de chat is gedeeld, is nu bekend buiten GitHub — trek het in (GitHub → Settings → Developer settings → Fine-grained tokens) en maak nieuwe aan.

## Stap 2 — Domein naar Cloudflare (nameservers)

1. Cloudflare-dashboard → **Add a domain** → `leusdocs.nl` → plan **Free**.
2. Cloudflare scant de bestaande DNS-records. Controleer of MX-records (e-mail op @leusdocs.nl, als die bestaan) zijn meegekomen; anders handmatig overnemen bij de huidige registrar vóór je overschakelt.
3. Cloudflare geeft twee nameservers (bv. `ada.ns.cloudflare.com` en `bob.ns.cloudflare.com`). Zet die bij de registrar van leusdocs.nl (waar het domein nu is geregistreerd) in plaats van de huidige nameservers.
4. Wachten tot Cloudflare de zone **Active** meldt (meestal binnen een uur, soms tot 24 uur).
5. Verwijder in de DNS-zone de oude Google Sites-records voor `www` en de apex (`leusdocs.nl`) — dat zijn meestal een CNAME `www → ghs.googlehosted.com` en/of A-records naar Google.

## Stap 3 — Custom domain aan het Pages-project hangen

1. Workers & Pages → **leusdocs** → **Custom domains** → **Set up a custom domain** → `www.leusdocs.nl` → Cloudflare maakt zelf het CNAME-record aan.
2. Nog een keer voor `leusdocs.nl` (apex). Cloudflare maakt een CNAME-flattened record.
3. Optioneel: redirect apex → www. Rules → Redirect Rules → "Redirect from Root to WWW"-sjabloon.
4. Na een paar minuten: `https://www.leusdocs.nl` werkt met certificaat.

## Stap 4 — Cloudflare Access op /beheer (inloggen met e-mailcode)

1. **Zero Trust** (one.dash.cloudflare.com) → bij eerste keer: het team bestaat al: `huisdokter.cloudflareaccess.com`. Free-plan volstaat (tot 50 gebruikers).
2. Zero Trust → **Access** → **Applications** → **Add an application** → **Self-hosted**.
   - Application name: `Leusdocs beheer`
   - Session duration: `1 week` (of naar wens)
   - Application domain — voeg **twee** paden toe:
     - `www.leusdocs.nl` met path `beheer*`
     - `www.leusdocs.nl` met path `api/beheer*`
   - Identity providers: **One-time PIN** (staat standaard aan; e-mailcode, geen account nodig).
3. **Policy**: name `Beheerders`, action **Allow**, include → **Emails** → de e-mailadressen van iedereen die mag bewerken (jij, de POH-GGZ, de apotheek). Uitbreiden kan later altijd. Alternatief: **Emails ending in** `@<praktijkdomein>`.
4. Opslaan. Open de applicatie → **Overview** → kopieer de **Application Audience (AUD) Tag**.
5. Terug naar Workers & Pages → leusdocs → Settings → Environment variables:
   - `CF_ACCESS_TEAM_DOMAIN` = `huisdokter.cloudflareaccess.com` (zonder https://)
   - `CF_ACCESS_AUD` = de AUD-tag
   Daarna **Retry deployment** (of een lege commit) zodat de Function de nieuwe variabelen krijgt.
6. Test: ga in een privévenster naar `https://www.leusdocs.nl/beheer` → Access vraagt om e-mail → code → beheerpagina toont "Ingelogd als …". Sla een testwijziging op en controleer dat er een commit in GitHub verschijnt en de site na ±1–2 min bijgewerkt is.

De Function controleert het Access-token zelf (handtekening, audience, vervaldatum), dus ook als iemand `/api/beheer` rechtstreeks aanroept zonder Access, wordt hij geweigerd.

## Stap 5 — Google Sites uitzetten

Pas als www.leusdocs.nl op Cloudflare werkt: in Google Sites de publicatie van de oude site stoppen (of het custom domain daar loskoppelen), zodat er geen twee sites naast elkaar bestaan.

## Beheer daarna

- **Nieuwe beheerder toevoegen:** Zero Trust → Access → Applications → Leusdocs beheer → Policy → e-mailadres toevoegen. Geen deploy nodig.
- **Categorie toevoegen:** `shared/velden.mjs` bewerken (via GitHub of de bot) → commit → site bouwt.
- **Bouw mislukt?** Workers & Pages → leusdocs → Deployments → de rode deployment openen → log lezen. De melding noemt het content-bestand en veld. Oude site blijft gewoon online.
- **Agenda toont niets?** `/api/agenda` openen: een `fout`-veld in de JSON zegt wat er mis is (meestal: de Google-agenda is niet meer openbaar, of het adres in `site.json` is veranderd).
- **Telegram-bot:** heeft alleen een GitHub-PAT (Contents: read & write) nodig; Cloudflare-toegang is niet vereist omdat elke commit automatisch deployt. Zie `AGENTS.md`.
