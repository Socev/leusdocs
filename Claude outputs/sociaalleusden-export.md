# Sociaal Leusden — export van sociaalleusden.nl

Bron: https://sociaalleusden.nl (WordPress). Geëxporteerd 14 september 2026 via de WP REST API. 91 vermeldingen, gesorteerd op categorie.

Elke vermelding: titel, categorie(ën) op de oude site, datum laatste wijziging, link naar origineel, daarna de inhoud als markdown.

## Categorieën op de oude site (aantal vermeldingen)

- Afgeschermd (0)
- Apotheken (5)
- Bekkenfysiotherapie (2)
- Diëtisten (3)
- Ergotherapie (2)
- Fysiotherapie (14)
- GGZ - psychologie/psychiatrie (15)
- GGZ - psychologie/psychiatrie › Basis (9)
- GGZ - psychologie/psychiatrie › Specialistisch (2)
- Geestelijke begeleiding (2)
- Huisartsen (7)
- Kinderfysiotherapie (5)
- Laboratorium (3)
- Logopedie (1)
- Maatschappelijk werk (4)
- Oefentherapie (7)
- Ouderschap (1)
- Overig (14)
- Overlijden (2)
- POH-GGZ (1)
- Palliatieve zorg (9)
- Revalidatie (1)
- Seksuologie (1)
- Specialistische zorg (1)
- Specialistische zorg › Bariatrie (4)
- Specialistische zorg › Orthopedie (2)
- Thuiszorg (5)
- Verpleeg- en verzorgingshuizen (7)
- Zwangerschap (4)

De categorie *Afgeschermd* (CPA's, Huisartsenposten, SEL-afspraken) bevatte alleen niet-openbare berichten; die zijn via de openbare API niet zichtbaar en staan dus niet in deze export.

## Gewenst terugleverformaat (voor het model dat de vermeldingen nakijkt)

Per organisatie één blok in dit YAML-formaat, exact deze veldnamen (leeg veld = weglaten). `categorie` en `verwijzen` moeten letterlijk uit de lijst hieronder komen.

```yaml
naam: "…"
categorie: "…"                 # zie lijst
omschrijving: "…"              # 1–2 zinnen, wat doet de organisatie
website: "https://…"
telefoon: "…"
email: "…"
adres: "Straat 1, 3831 AA Leusden"
doelgroep: "…"
verwijzen: "…"                 # zie lijst
wachttijd: "…"
tags: ["…", "…"]
concept: true                    # true zolang niet geverifieerd
bron: "https://sociaalleusden.nl/…"   # origineel, ter controle
```

Categorieën (huidige lijst op leusdocs.nl — mag uitgebreid worden, stel dan de nieuwe naam voor): GGZ volwassenen · GGZ jeugd · Jeugd & gezin · Ouderen · Welzijn & maatschappelijk werk · Gemeente & WMO · Verslaving · Thuiszorg & mantelzorg · Paramedisch · Werk, inkomen & schulden · Overig.

Voor de hand liggende uitbreidingen gezien de oude site: Huisartsen · Apotheken · Tandartsen · Fysiotherapie & oefentherapie · Diëtetiek, logopedie & ergotherapie · Zwangerschap & geboorte · Palliatieve zorg & overlijden · Ziekenhuis & specialistische zorg · Laboratorium & diagnostiek · Verpleeg- en verzorgingshuizen.

Verwijswijzen: Rechtstreeks (patiënt meldt zichzelf aan) · Via ZorgDomein · Verwijsbrief huisarts · Via gemeente / WMO-loket · Onbekend.

Let op: de meeste vermeldingen dateren van 2014–2016. Controleer adres, telefoon en website; markeer wat niet meer bestaat met `concept: true` en een opmerking in `omschrijving`.

---

## Apotheken

### Apotheek de Hamershof

- Oude categorie: Apotheken
- Laatst gewijzigd: 2014-02-20
- Origineel: https://sociaalleusden.nl/apotheken/apotheek-de-hamershof

De Brouwerij 14, 3831 ND Leusden  
Tel: 033 4943441  
Fax: 033-4953151  
<www.apotheekdehamershof.nl>

---

### Apotheek de Tolgaarde

- Oude categorie: Apotheken
- Laatst gewijzigd: 2014-08-20
- Origineel: https://sociaalleusden.nl/apotheken/apotheek-de-tolgaarde

de Biezenkamp 150, 3831 JA Leusden  
Tel: 033 – 494 23 03  
Fax: 033 – 432 54 72  
Mail: [zorg@apotheektolgaarde.nl](mailto:zorg@apotheektolgaarde.nl "zorg@apotheektolgaarde.nl") (voor communicatie arts-thuiszorg-apotheek)

---

### Dienstapotheek Eemland

- Oude categorie: Apotheken
- Laatst gewijzigd: 2014-01-19
- Origineel: https://sociaalleusden.nl/apotheken/dienstapotheek-eemland

Maatweg 3, 3813TZ Amersfoort  
Tel: 033-4328500  
Fax: 033-4610038  
[info@dienstapotheekeemland.nl](mailto:info@dienstapotheekeemland.nl)

---

### Huisartsenpraktijk Achterveld De Heelkom

- Oude categorie: Apotheken, Huisartsen
- Laatst gewijzigd: 2014-07-01
- Origineel: https://sociaalleusden.nl/huisartsen/huisartsenpraktijk-de-heelkom

**Apotheekhoudend huisartsenpraktijk**

Gezondheidscentrum De Heelkom  
W. van Amersfoortstraat 36, 3791 AR Achterveld  
Postbus 36, 3790 CA Achterveld  
Tel: 0342-452588  
Fax: 0342-452382  
[www.heelkom.nl](http://www.heelkom.nl "www.heelkom.nl")  
Huisartsen:  
W. Koch / A. Drenth / M. Rietmeijer

---

### Mediq Apotheek Tabaksteeg

- Oude categorie: Apotheken
- Laatst gewijzigd: 2014-01-19
- Origineel: https://sociaalleusden.nl/apotheken/mediq-apotheek-tabaksteeg

Willem Alexanderhof 1, 3832 JN Leusden  
Tel: 033-4333282

---

## Bekkenfysiotherapie

### Bekken in Balans

- Oude categorie: Bekkenfysiotherapie
- Laatst gewijzigd: 2023-03-07
- Origineel: https://sociaalleusden.nl/bekkenfysiotherapeuten/bekken-in-balans

Therapeuten:  
-Isabel Steinmeijer  
-Mirjam Huiskes-Sloots

Adres:  
Larikslaan 2 (2e etage)  
3833AM Leusden  
Mob: 06-43242296  
Mail: [praktijk@bekkeninbalans.nl](mailto:praktijk@bekkeninbalans.nl)[www.bekkeninbalans.nl](http://www.bekkeninbalans.nl)

---

### Bekkenfysiotherapie Gooi en Eemland

- Oude categorie: Bekkenfysiotherapie
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/bekkenfysiotherapeuten/bekkenfysiotherapie-gooi-en-eemland

|  |  |
| --- | --- |
| Mobiel | 06-55502110 |
| Adres | De Hank 4,  3832JL Leusden |
| Opmerkingen | Gezondheidscentrum Tabaksteeg |

---

## Diëtisten

### Diëtist Leusden

- Oude categorie: Diëtisten
- Laatst gewijzigd: 2023-03-07
- Origineel: https://sociaalleusden.nl/dietisten/dietist-leusden

Diëtiste Hoi Sun Snoek  
Diëtist Leusden is gevestigd in het pand van Theo Meijer Sport in Leusden.  
Hoofdvestiging/ postadres:  
Plantageweg 6, 3833 AZ Leusden

Elke maandag is Diëtist Leusden ook te vinden op Zorgplein Tolgaarde:  
Tolplaats 11, 3831 JR Leusden

**Telefoon: 06-83 966 322  
E-mail: [info@dietistleusden.nl](mailto:info@dietistleusden.nl)**  
[www.dietistleusden.nl](https://dietistleusden.nl/)

---

### Diëtistenpraktijk Maria Lunter

- Oude categorie: Diëtisten
- Laatst gewijzigd: 2015-04-16
- Origineel: https://sociaalleusden.nl/dietisten/dietistenpraktijk-maria-lunter

Spreekuren op 2 locaties in Achterveld:

- Amersfoortstraat **28**, Achterveld
- Amersfoortstraat **36**, Gezondheidscentrum De Heelkom, Achterveld

Behandeling volgens afspraak:

T:  0342-451856  
M:  [maria.lunter@kpnmail.nl](mailto:maria.lunter@kpnmail.nl "maria.lunter@kpnmail.nl")  
W:  [www.dietisten-midden-nederland.nl](http://www.dietisten-midden-nederland.nl "www.dietisten-midden-nederland.nl")

Aandachtsgebieden:

- Diabetes mellitus
- Hart- en vaatziekten
- Longziekten (COPD)
- Overgewicht/eetstoornissen bij volwassenen /kinderen
- Maag /darmziekten

---

### Diëtistenpraktijk Puck Ruiter

- Oude categorie: Diëtisten
- Laatst gewijzigd: 2023-03-07
- Origineel: https://sociaalleusden.nl/dietisten/dietistenpraktijk-puck-ruiter

**[www.dietist-ruiter.nl/](http://www.dietist-ruiter.nl/)**

Afspraak maken?

Bel 06-30066285

of mail naar

[info@dietist-ruiter.nl](mailto:info@dietist-ruiter.nl)

Spreekuurlocaties:

**Instituut voor Fysiotherapie “Korte Geer”**

Korte Geer 6

3833 VV Leusden

**De Mulderij**De Mulderij 6  
3831 NV Leusden

---

## Ergotherapie

### Ergotherapie Lisidunahof

- Oude categorie: Ergotherapie
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/ergotherapie/ergotherapie-lisidunahof

|  |  |
| --- | --- |
| Mail | pmd.lisidunahof@beweging3.nl |
| Mobiel | 033 – 432 61 00 |
| Fax | 033-4326102 |
| Opmerkingen | fax sturen tnv ergotherapie P.M.D |

---

### SanErgo

- Oude categorie: Ergotherapie
- Laatst gewijzigd: 2015-01-07
- Origineel: https://sociaalleusden.nl/ergotherapie/sanergo

Lambalgerkom 14, 3831 RP Leusden  
tel. 033-43 24 036 / mob. 06–221 661 21  
[info@sanergo.nl](mailto:info@sanergo.nl "info@sanergo.nl")  
[www.sanergo.nl](http://www.sanergo.nl "www.sanergo.nl")

Computers zijn niet meer weg te denken. Ze raken alle aspecten van ons werkende bestaan. Werkinhoud, werkwijze, werkplek en werkomgeving: niets blijft bij het oude.  
Had je vroeger alleen een vaste werkplek op kantoor, tegenwoordig kun je ook kiezen voor flexwerken, mobiel werken en thuiswerken. Elke situatie heeft zijn eigen, specifieke aandachtspunten op ARBO-  
gebied. Waar je ook computerwerk doet, verantwoord werken is altijd mogelijk. Met een gezonde dosis creativiteit en vindingrijkheid creëert SanErgo overal een ergonomische situatie die aan de ARBO-normen voldoet.

Op kantoor, flexibel, mobiel of thuis: SanErgo adviseert  
Het advies vindt plaats op de werkplek zelf! Persoonlijk advies over aspecten als ergonomische inrichting, passende hulpmiddelen, werkhouding, verlichting en gezond werken komen allemaal aan de orde.

Ergonomie ● Bedrijfsoefentherapie ● Oefentherapie Cesar ● Interieurontwerp

---

## Fysiotherapie

### Academas

- Oude categorie: Fysiotherapie
- Laatst gewijzigd: 2014-07-20
- Origineel: https://sociaalleusden.nl/fysiotherapie/academas

|  |  |
| --- | --- |
| Tel | 033-4343939 |
| Locatie 1 | Bavoortseweg 9a, 3833 BM Leusden |
| Locatie 2 | Rosmolenstraat 110, 3833 KJ Leusden |
| WWW | [www.academas.nl](http://www.academas.nl "www.academas.nl") |
| Opmerkingen | Sport- en bedrijfsarts Wessel Zimmerman houdt hier elke dinsdagavond spreekuur |

---

### Centrum in Balans

- Oude categorie: Fysiotherapie
- Laatst gewijzigd: 2014-07-20
- Origineel: https://sociaalleusden.nl/fysiotherapie/centrum-in-balans

|  |  |
| --- | --- |
| Mail | [centruminbalans@planet.nl](mailto:centruminbalans@planet.nl "centruminbalans@planet.nl") |
| Tel | 033-4951545 |
| Adres | Hamersveldseweg 17, 3833 GK Leusden |
| WWW | [www.centruminbalans.nl](http://www.centruminbalans.nl "www.centruminbalans.nl") |
| Opmerkingen | Eddy Hendriks  Wilma Huizinga  Willianne van Diest  Corien Govaarts  Marjolein Hanse |

---

### Centrum voor Fysio en Manuele Therapie

- Oude categorie: Fysiotherapie, Kinderfysiotherapie, Oefentherapie
- Laatst gewijzigd: 2014-07-20
- Origineel: https://sociaalleusden.nl/fysiotherapie/centrum-voor-fysio-en-manuele-therapie

|  |  |
| --- | --- |
| Mail | [n.engelsman@manueeltherapieleusden.nl](mailto:n.engelsman@manueeltherapieleusden.nl "n.engelsman@manueeltherapieleusden.nl") |
| Mail | [f.giezen@manueeltherapieleusden.nl](mailto:f.giezen@manueeltherapieleusden.nl "f.giezen@manueeltherapieleusden.nl") |
| Mail | [h.doornekamp@manueeltherapieleusden.nl](mailto:h.doornekamp@manueeltherapieleusden.nl "h.doornekamp@manueeltherapieleusden.nl") |
| Mail | [k.debruin@manueeltherapieleusden.nl](mailto:k.debruin@manueeltherapieleusden.nl "k.debruin@manueeltherapieleusden.nl") |
| Mail | [w.lavooij@manueeltherapieleusden.nl](mailto:w.lavooij@manueeltherapieleusden.nl "w.lavooij@manueeltherapieleusden.nl") |
| Tel | 033-4942193 |
| Adres | Lepelaar 8, 3831 DE Leusden |
| WWW | [www.manueeltherapieleusden.nl](http://www.manueeltherapieleusden.nl "www.manueeltherapieleusden.nl") |
| Opmerkingen | -Specialisatie in schouders, samenwerking met Bergman Clinic  -Groepsfysiotherapie na borstkanker  -Beweegprogramma met diëtiste voor kinderen 8-12 jaar |

---

### Fysio Heelkom – Achterveld

- Oude categorie: Fysiotherapie, Kinderfysiotherapie, Oefentherapie
- Laatst gewijzigd: 2014-07-20
- Origineel: https://sociaalleusden.nl/fysiotherapie/fysio-heelkom-achterveld

|  |  |
| --- | --- |
| Mail | [fysiotherapie.achterveld@heelkom.nl](mailto:fysiotherapie.achterveld@heelkom.nl "fysiotherapie.achterveld@heelkom.nl") |
| Fax | 033-4554587 |
| Tel | 0342-451542 |
| Adres | W. van Amersfoortstraat 36, 3791 AR Achterveld |
| Opmerkingen | Bekkenfysiotherapie, Kinderfysiotherapie, Manuele therapie |

---

### Fysio Tolgaarde (Zorgplein Tolgaarde)

- Oude categorie: Fysiotherapie, Kinderfysiotherapie, Oefentherapie
- Laatst gewijzigd: 2018-01-23
- Origineel: https://sociaalleusden.nl/fysiotherapie/fysio-tolgaarde

Fysiotherapeuten: Paul Koekoek, Anouk de Haan, Jan Hendrik Vos

Kinderfysiotherapeut: Marieke Kamphof en Sanne van der Kamp

[Tolplaats 11, 3831 JR Leusden](https://maps.google.com/?q=Tolplaats+11,+3831+JR+Leusden&entry=gmail&source=g)  
[033-4947963](tel:033%20494%207963) / [06-28438423](tel:06%2028438423)  
[www.fysio-tolgaarde.nl](http://www.fysio-tolgaarde.nl/)  
[info@fysio-tolgaarde.nl](mailto:info@fysio-tolgaarde.nl)  
[kinderfysio@fysio-tolgaarde.nl](mailto:kinderfysio@fysio-tolgaarde.nl)

Openingstijden:  
– Maandag 8.00 – 20:30

– Dinsdag 8.00 – 18:00

– Woensdag 08.00 – 20.30 uur

– Donderdag 8.00 – 18:00  
– Vrijdag 08.00- 18.00 uur  
– Zaterdag 09.00-12.30 uur  
Andere tijden op afspraak.

Specialiteiten  
Fysio-en manueeltherapie, kinderfysiotherapie, orofaciaaltherapie, geriatrie, fysiotherapie, behandelingen voor klachten van COPD, Claudicatio Intermittens (etalagebenen)

---

### Fysio-In,  fysio- en manueel therapie

- Oude categorie: Fysiotherapie
- Laatst gewijzigd: 2014-07-20
- Origineel: https://sociaalleusden.nl/fysiotherapie/fysio-in-fysio-en-manueel-therapie

**Ingrid van Valkengoed-Damen**Adres: Klokhoek 18, 3833 GX Leusden  
Mail: [info@fysio-in.nl](mailto:info@fysio-in.nl "info@fysio-in.nl")Tel: 06-37566797  
Web: [www.fysio-in.nl](http://www.fysio-in.nl "www.fysio-in.nl")

-Specialisatie in nek-schouder-arm klachten, wervelkolomklachten  
-Dry Needling  
-Stabiliteitstraining

Gevestigd in-, en samenwerking met Centrum Omnis: centrum voor therapie, coaching en training voor lichaam en geest. (Disciplines: Cesartherapie, bekkenfysiotherapie, acupunctuur, anders afslanken, osteopathie, psychologie, psychotherapie, haptotherapie, pilates, yoga en zwangerschapspilates). Zie ook [www.omnisleusden.nl](http://www.omnisleusden.nl "www.omnisleusden.nl")

---

### Fysiotherapie Leusden

- Oude categorie: Fysiotherapie
- Laatst gewijzigd: 2014-07-25
- Origineel: https://sociaalleusden.nl/fysiotherapie/fysiotherapie-leusden

Locatie 1) Gezondheidscentrum Tabaksteeg, De Hank 4, 3832 JL Leusden  
Locatie 2) Rosmolenstraat 110, 3833 KJ Leusden

Web: [Fysiotherapie-Leusden.nl](http://www.Fysiotherapie-Leusden.nl "Fysiotherapie-Leusden.nl")  
Tel: 033 – 4945155 of 033 – 4942925  
[info@fysiotherapie-leusden.nl](mailto:info@fysiotherapie-leusden.nl "info@fysiotherapie-leusden.nl")

Wij hebben alle fysiotherapeutische expertises in huis:

- Manuele therapie (SOMT/OMT)
- Sportfysiotherapie
- Lymfe- en oedeemtherapie
- Kinderfysiotherapie
- Bekkenfysiotherapie
- Osteopathie
- Arbeidsfysiotherapie
- Dry needling

**Groepstrainingen**  
Voor diverse doelgroepen geven wij medische trainingstherapie, zoals:

- Diabetes
- Reuma en Osteoporose
- COPD (longproblemen)
- Hartfalen
- Overgewicht
- Stress en depressie
- Begin met bewegen

**Openingstijden**  
Maandag t/m vrijdag 7.00 – 21.00 uur  
Zaterdag (in overleg) 8.30 – 12.00 uur  
In overleg met uw therapeut kunnen de tijden voor een behandeling afwijken.

Therapeuten:  
Martin Schermacher, Bert Heeling, Robert Lodema, Corrie Verheij, Tim Tse, Maryse Roelofszen, Wessel Kampen, Hanneke Luykx, Tom Vredeveld, Mariët Jukkema

---

### Instituut voor fysiotherapie “Korte Geer”

- Oude categorie: Fysiotherapie, Oefentherapie
- Laatst gewijzigd: 2014-08-01
- Origineel: https://sociaalleusden.nl/fysiotherapie/de-korte-geer

|  |  |
| --- | --- |
| Mail | info@kortegeer.nl |
| Tel | 033-4942733 |
| Adres | Korte Geer 6 , 3833 VV Leusden |
| WWW | [www.fysiotherapiekortegeer.nl](http://www.fysiotherapiekortegeer.nl "www.fysiotherapiekortegeer.nl") |
| Opmerkingen | Ook aanwezig in de Heelkom (Achterveld)  o.a. ook manuele therapie, spataderen, psychosomatisch, geriatrisch, parkinson; Fysiotherapeuten: Gert Oudshoorn, Margret Kuijer, Christelle Gravier, Karin Lamers |

---

### MTC Leusden

- Oude categorie: Fysiotherapie
- Laatst gewijzigd: 2014-07-20
- Origineel: https://sociaalleusden.nl/fysiotherapie/mtc-leusden

|  |  |
| --- | --- |
| Mail | [info@mtczorg.nl](mailto:info@mtczorg.nl "info@mtczorg.nl") |
| Tel | 033-4531677 |
| Fax | 033 456 66 98 |
| Adres | Speelkamp 28, 3831 PE Leusden |
| WWW | [www.mtcweb.nl](http://www.mtcweb.nl "www.mtcweb.nl") |

---

### Nobels Fysiotherapie

- Oude categorie: Fysiotherapie, Oefentherapie
- Laatst gewijzigd: 2018-03-07
- Origineel: https://sociaalleusden.nl/fysiotherapie/nobels-fysiotherapie

Bitterschoten 25, 3831 PC Leusden  
Tel: 033 – 4337341

Web: [www.nobels-fysiotherapie.nl](http://www.nobels-fysiotherapie.nl/)  
Mail: [info@nobels-fysiotherapie.nl](mailto:info@nobels-fysiotherapie.nl)

Fysiotherapeuten:  
Bob Nobels, Mike Boeve, Nathalie van Dijk, Jolanda van Bemmel, Niels van Ginkel en Hidde de Vries

Openingstijden:  
maandag 07.25 – 22.00 uur  
dinsdag 07.25 – 22.00 uur  
woensdag 07.25 – 22.00 uur  
donderdag 07.25 – 22.00 uur  
vrijdag 7.25 – 20.00 uur  
zaterdag 7.25 – 17.00 uur

Wij willen ons allemaal goed voelen! Nobels fysiotherapie is uitstekend in staat u hierbij te helpen. Bent u herstellende van een sportblessure, ziekenhuisopname of heeft u andere lichamelijke klachten, bij ons bent u in goede handen. Daarnaast kunt u bij ons terecht om ervoor te zorgen dat u lichamelijk in conditie komt én blijft. Wij streven naar een zo persoonlijk mogelijke aanpak! In overleg met u zetten wij de juiste therapie in en maken wij een optimaal behandelplan, zodat uw klachten verminderen, helemaal verdwijnen of stabiliseren.

Zoektermen: fysiotherapie, manuele therapie, psychosomatische fysiotherapie,                 sportfysiotherapie, dry needling, lasertherapie, craniomandibulaire therapie,               oedeemtherapie, sportmassage, bewegingsanalyse, Functional Movement system (FMS).

Daarom: Samen op weg naar beter!

---

### OCA Amersfoort

- Oude categorie: Fysiotherapie, Revalidatie
- Laatst gewijzigd: 2015-03-17
- Origineel: https://sociaalleusden.nl/fysiotherapie/oca-amersfoort

**Poliklinische revalidatie**Met revalidatiearts, psycholoog, fysiotherapie, fitness

**Contact**  
OCA Amersfoort  
Locatie Fit2move  
Disselplein 4  
3829 MD Amersfoort / Hooglanderveen

M 06 555 655 93  
W www.oca-amersfoort.nl  
E ben.vreman@oca-amersfoort.nl

**Voor wie?**  
De programma’s zijn geschikt voor mensen met:  
– Chronische klachten van het bewegingsapparaat/rug, nek, schouder, bekken, reuma, cheonische artritiden, etc  
– Onbegrepen klachten (SOLK)/ RSI / CANS, whiplash, fibromyalgie, etc

---

### Oefentherapie Mensendieck Boerkamp

- Oude categorie: Fysiotherapie, Oefentherapie
- Laatst gewijzigd: 2014-03-31
- Origineel: https://sociaalleusden.nl/fysiotherapie/oefentherapie-mensendieck-boerkamp

Jurrian Boerkamp, Oefentherapeut  
Henegouwen 31  
3831 AD Leusden  
033-4951545 / 06-44826017  
[info@mensendieckboerkamp.nl](mailto:info@mensendieckboerkamp.nl "info@mensendieckboerkamp.nl")  
[www.mensendieckboerkamp.nl](http://www.mensendieckboerkamp.nl "www.mensendieckboerkamp.nl")

## Oefentherapie Mensendieck is onder andere geschikt voor:

- Neurologische of orthopedische aandoeningen
- Reumatische pijn
- Stoornissen in de ademhaling
- Stressklachten
- Hoofdpijn
- Pijn aan het bekken eventueel in relatie met zwangerschap
- Rug-, nek-, schouder- en CANS- (voorheen RSI) klachten

---

### Sterk Oefentherapie

- Oude categorie: Fysiotherapie, Kinderfysiotherapie, Oefentherapie
- Laatst gewijzigd: 2019-02-06
- Origineel: https://sociaalleusden.nl/fysiotherapie/sterk-oefentherapie

Johanneke Dekker – Oefentherapeut Cesar en kinderoefentherapeut  
Sterk Oefentherapie

Website: [www.sterkoefentherapie.nl](http://www.sterkoefentherapie.nl/)  
Mail: [info@sterkoefentherapie.nl](mailto:info@sterkoefentherapie.nl)  
Zorgmail: [sterkoefentherapie@zorgmail.nl](mailto:sterkoefentherapie@zorgmail.nl)  
Telefoon/Whatsapp: 06-34071414

Hoofdlocatie in Leusden: Omnis, Klokhoek 18, 3833 GX

Steekwoorden: oefentherapie, kinderen, DCD, cesar

---

### WIJKfysio

- Oude categorie: Fysiotherapie
- Laatst gewijzigd: 2016-08-31
- Origineel: https://sociaalleusden.nl/fysiotherapie/wijkfysio

**WIJKfysio**

Fysiotherapie en expertisecentrum voor wijk-en ouderenzorg

Rozengaarde 22B

3831CD Leusden

06-3730 4947

[info@wijkfysio.nl](mailto:info@wijkfysio.nl)

[www.wijkfysio.nl](http://www.wijkfysio.nl/)

Openingstijden: ma-vr 8.00-18.00, wo 18.00 -21.00, za 9.00-12.00

Therapeuten:

Diedeke van Wijk (Msc Geriatrie fysiotherapeut, manueel therapeut, ParkinsonNet, valpreventie)

Serina Geurtsen (Geriatrie fysiotherapeut, dry needling, ParkinsonNet, valpreventie)

Marjolein Hanse (Geriatrie fysiotherapeut i.o., specialist duizeligheidsklachten, medical taping)

Expertise:

medisch fitness, claudicatio, vallen verleden tijd, beweeggroep artrose, s@men beter thuis (mantelzorgondersteuning), neurorevalidatie, dementie in beweging en ParkinsonFit

Gratis inloopspreekuur: elke dinsdag van 12 tot 13

---

## GGZ - psychologie/psychiatrie

### HSK Groep

- Oude categorie: GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2014-01-19
- Origineel: https://sociaalleusden.nl/ggz/hsk-groep

Stadsring 175, 3817 BA Amersfoort  
Tel: (033) 479 31 10  
Fax: (033) 476 64 99  
Web: [HSK Amersfoort](http://www.hsk.nl/cms/publish/content/showpage.asp?pageid=67)  
E-mail: [amersfoort@hsk.nl](mailto:amersfoort@hsk.nl)

Ook kinderen 6-18 jaar

---

### JADE Therapie & Coaching

- Oude categorie: GGZ - psychologie/psychiatrie, Overig, Zwangerschap
- Laatst gewijzigd: 2015-06-10
- Origineel: https://sociaalleusden.nl/overig/jade-therapie-coaching

Judith Kooi  
Bennekom: Prins Bernhardlaan 21, 6721 DN Bennekom  
Amersfoort: Koningin Wilhelminalaan 5, 3818 HN Amersfoort  
Tel: 06-12954740  
web: [www.jadetherapie.nl](http://www.jadetherapie.nl "www.jadetherapie.nl")

**Hulp en begeleiding bij:**

- verwerking van verlies van dierbaren, werk, gezondheid, relatie
- vruchtbaarheidsproblemen en onvervulde kinderwens
- adoptie gerelateerde vragen
- besluitvorming bij onbedoelde zwangerschap
- relatieproblemen
- familievragen

Als [contextueel therapeut](http://www.therapiecoaching.nl/content.php?id=22) geef ik erkenning op ervaren onrecht en zoek ik naar helende krachten en resterend vertrouwen. Naast therapeut ben ik ook [supervisor](http://www.therapiecoaching.nl/content.php?id=19).

## **Tarieven en vergoedingen:**

- duur van een gesprek is een uur
- het eerste gesprek is kosteloos (besluitvormingsgesprek bij onbedoelde zwangerschap uitgezonderd)
- vervolgafspraken €75.-

Voor minima reken ik een gereduceerd tarief.

## Registraties:

- lid van de [***NVPA***](http://nvpa.org/) en ***[RBNG](http://rbng.nl/)***
- geregistreerd contextueel hulpverlener
- lid van de ***[Vereniging van contextueel werkers](http://www.contextueelwerkers.nl/)***
- geregistreerd rouwtherapeut [***LSR***](http://www.landelijksteunpuntrouw.nl/)
- gecertificeerd maatschappelijk werkster [***Fiom***](http://www.fiom.nl/)

---

### Kinderpsycholoog Ruland

- Oude categorie: GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2014-01-19
- Origineel: https://sociaalleusden.nl/ggz/kinderpsycholoog-ruland

Stephensonstraat 72  
3817 Amersfoort  
t: 033 – 75 494 68  
e: [nina.ruland@kinderpsycholoogamersfoort.nl](mailto:nina.ruland@kinderpsycholoogamersfoort.nl)  
[www.kinderpsycholoogamersfoort.nl/](http://www.kinderpsycholoogamersfoort.nl/)  
Werkzaam: Nina Ruland  
Leeftijd 0-18 jaar, o.a. sociaal, psychiatrie, leerproblemen, opvoeding

---

### Online: Benzodebaas.nl

- Oude categorie: GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2014-01-21
- Origineel: https://sociaalleusden.nl/ggz/online-benzodebaas-nl

Online therapie voor volwassenen met chronisch benzodiazepinegebruik, zónder indicatie, die willen minderen of stoppen. Aanmelding via de website; Site is onder beheer van Tactus.

[www.benzodebaas.nl](http://www.benzodebaas.nl/)

---

### PCC Amersfoort

- Oude categorie: GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2014-01-19
- Origineel: https://sociaalleusden.nl/ggz/pcc-amersfoort

Maanlander 10, 3824 MP Amersfoort  
Tel: 088 – 46 56 000 / 088 – 46 56 020  
Fax: 088 – 46 56 099  
[www.pccnederland.nl](http://www.pccnederland.nl)  
[Amersfoort@pccnederland.nl](mailto:Amersfoort@pccnederland.nl)

o.a. kinderen (ook obesitas, pesten, scheiding, rouwverwerking), jongeren, volwassenen

---

### Praktijk voor Kindercounseling en Kinder- en Jeugdtherapie

- Oude categorie: GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2018-10-17
- Origineel: https://sociaalleusden.nl/ggz/praktijk-voor-kindercounseling-en-kinder-en-jeugdtherapie

Geachte lezer,

Fijn dat ik ook op deze plek mijn praktijk onder de aandacht kan brengen:

in de ‘Praktijk voor Kindercounseling en Kinder- en Jeugdtherapie’ kunt u terecht voor uiteenlopende sociaal-emotionele problemen van kinderen in de leeftijd van 6 tot 20 jaar en hun opvoeders, zoals:

–          Faalangst  
–          Somberheid/depressie  
–          Pesten  
–          Hoogbegaafdheid  
–          Echtscheiding  
–          Rouwverwerking  
–          Sociale onhandigheid  
–          Agressief gedrag  
–          Concentratie  
–          Angsten  
–          Onzekerheid  
–          Stoornisgerelateerde problematiek (autisme, ADD/ADHD, OCS, hechting, etc.)  
–          Etc.

In mijn praktijk ontvang ik al ruim 10 jaar dagelijks cliënten met bovengenoemde problematiek. In een veilige en kind-vriendelijke omgeving werken we samen op een zo plezierig mogelijke wijze aan het opheffen van de blokkades, zodat innerlijke groei kan plaatsvinden.

Naast de sessies met de client vindt er een nauwkeurig afgestemde ouderbegeleiding plaats, zodat ook zij weer met de juiste tools een goede opvoeding kunnen waarborgen.

Vanaf 2018 is de praktijk tevens opgenomen in de Stichting Kwaliteitsregister Jeugd (SKJ), het beroepsregister voor professionals in de jeugdsector, en staat geregistreerd in de kamer van Jeugd- en Gezinsprofessionals.

 Uiteraard kunt u mij altijd consulteren om te overleggen of ouders en kind bij mij op de juiste plek zijn of dat er naar een andere vorm van hulp gezocht moet worden. Hierin zal ik u zo goed mogelijk adviseren.

 Voor meer informatie omtrent behandelmethodes en overige relevante informatie, verwijs ik u graag naar de site [www.kindertherapie-leusden.nl](http://www.kindertherapie-leusden.nl/).

Vriendelijke groet,

Amanda Stoks, kindercounselor en integratief kinder- en jeugdtherapeut.

---

## GGZ - psychologie/psychiatrie › Basis

### De Geheime Tuin

- Oude categorie: GGZ - psychologie/psychiatrie › Basis, GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2014-01-19
- Origineel: https://sociaalleusden.nl/ggz/de-geheime-tuin

Zielhorsterweg 59, 3813 ZX Amersfoort  
[amersfoort@degeheimetuin.info](mailto:vragen@degeheimetuin.info)  
Web: [De Geheime Tuin Amersfoort](http://www.degeheimetuin.info/degeheimetuin-amersfoort.html "De Geheime Tuin Amersfoort")Aanmelden kan online; Aldaar ook telefoonnummers van behandelaars  
GB-GGZ – Psychologische hulp voor kinderen, jongeren en ouders; Focus op systeem/gezinstherapie

---

### Kracht door Balans

- Oude categorie: GGZ - psychologie/psychiatrie › Basis, GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2017-01-24
- Origineel: https://sociaalleusden.nl/ggz/kracht-door-balans

Praktijk voor psychologie, en biofeedback / neuropsychologie.

**Gezondheid draait om balans**  
Balans tussen moeten en willen, tussen draagkracht en draaglast, tussen actief zijn en ontspannen, tussen denken en voelen.  
Wanneer de balans verstoord is, kunnen klachten ontstaan, zoals gejaagdheid, moeheid, onrust, futloosheid, irritatie, depressieve gevoelens, angstige gevoelens, slaapproblemen en hoofdpijn.  
Bij tijdig ingrijpen verdwijnen de signalen vanzelf. Als dit niet gebeurt kunnen de klachten chronisch worden.

In praktijk Kracht door balans leren mensen hun innerlijke balans herstellen en gezonde keuzes maken. Zodra er weer balans is op psychisch en lichamelijk niveau, zullen de opgebouwde klachten afnemen. De psychologische begeleiding richt zich op veranderingen in het hier en nu en is praktisch van aard. Indien nodig, worden meer lichaamsgerichte methoden ingezet, zoals biofeedback en AVE.

Psychologiepraktijk “Kracht door balans” is een initiatief van Daniëlle Matto, GZ-psycholoog en eerstelijnspsycholoog met specialisatie CSR (stress) coach, biofeedback therapeut en AVE therapeut. Daniëlle werkt samen met Melanie Broekhof. Melanie is opgeleid als basispsycholoog en gewichtsconsulente. Zij verzorgt soms gedeeltes van de behandeling vanwege haar specialisatie in de onderwerpen voeding/gewicht, time management, ontspanning en leeftsijl. Meer informatie over ons vindt u op de pagina “Psychologische zorg”.

U kunt u rechtstreeks bij de praktijk aanmelden voor Psychosociale therapie. Deze wordt (deels) vergoed vanuit de aanvullende verzekering, afhankelijk van hoe u verzekerd bent. Het kan ook zijn dat u verwezen bent door uw huisarts. In dat geval valt de behandeling onder de Generalistische Basis GGZ (GBGGZ). Meer over vergoedingen en voorwaarden vindt u op de pagina “Praktijkinformatie”.

Soms ontstaan wachttijden. Deze wachttijden variëren, afhankelijk van de drukte. De wachttijd staat vermeld op het aanmeldformulier.

**Geboden zorg**  
U kunt in de praktijk terecht voor behandeling in de Generalistische Basis GGZ (GBGGZ). Hiervoor dien u een verwijzing van de huisarts te hebben. Tevens bieden we Psychosociale therapie.

Openingstijden  
Maandag van 9:00 tot 17:30 uur  
Dinsdag van 9:00 tot 13:30 uur  
Woensdag van 9:00 tot 17:30 uur  
Donderdag van 9:00 tot 13:30 uur  
Op vrijdag werkt Melanie Broekhof in de praktijk. Zij is basis psycholoog en gewichtsconsulente.

Praktijkadres:  
De praktijk is gevestigd in holistisch centrum  
Qi-Amersfoort  
Amsterdamseweg 43 A  
3812 RP Amersfoort  
Telefoon: 06-45330846  
Web: [www.krachtdoorbalans.nl](http://www.krachtdoorbalans.nl)  
Email: [info@krachtdoorbalans.nl](mailto:info@krachtdoorbalans.nl)

---

### Medisch Centrum de Mulderij

- Oude categorie: GGZ - psychologie/psychiatrie › Basis, GGZ - psychologie/psychiatrie, Laboratorium
- Laatst gewijzigd: 2020-12-08
- Origineel: https://sociaalleusden.nl/laboratorium/medisch-centrum-de-mulderij

De Mulderij 2, 3831 NV Leusden  
Telefoon (onderzoeken Meander): 033 850 50 50  
Telefoon (POH-GGZ/huisarts): Neem contact op met uw huisarts [www.medischcentrumdemulderij.nl](http://www.medischcentrumdemulderij.nl/ "www.medischcentrumdemulderij.nl")

**U vindt het gebouw achter winkelcentrum De Hamershof, in het centrum van Leusden.**

**CORONA: Let op: Alles gaat op afspraak! Klik hier: [Meander – Bloedafname](https://www.meandermc.nl/patientenportaal/patienten/afdelingen-specialismen/LAB/laboratoria/KCL/bloedafname?&projectid=154abae6-9328-45ca-ab2d-2a159395ad50) voor het maken van een afspraak.**

**Onderzoek**U kunt terecht voor bloedonderzoek, standaard röntgenfoto en een echo. Tevens bieden de huisartsen van Leusden en Achterveld in Medisch Centrum de Mulderij spreekuren bij de praktijkondersteuner GGZ, voor niet- complexe psychische problemen. Voor vragen kunt u terecht bij uw eigen huisarts.

**Openingstijden**

- **Bloedonderzoek**  
  U kunt terecht voor bloedonderzoek op:

  - Maandag t/m vrijdag van 7.30-12.30 uur en 13.00-16.00 uur

  **Röntgenfoto en een echo**

  U kunt terecht voor een standaard röntgenfoto, fundusfotografie en een echo op:

  - Maandag t/m vrijdag 7.30-12.30 uur en 13.00-16.00 uur.

---

### Mindfulness

- Oude categorie: GGZ - psychologie/psychiatrie › Basis, GGZ - psychologie/psychiatrie, GGZ - psychologie/psychiatrie › Specialistisch
- Laatst gewijzigd: 2016-04-01
- Origineel: https://sociaalleusden.nl/ggz/mindfulness

De volgende plekken bieden mindfulness:

WELZIN – http://www.welzin.nl/volwassenen/cursussen-en-trainingen/mindfulness/  
Eline Snel – http://www.elinesnel.com/mindfulness-achtweekse/  
Indigo – https://www.indigo.nl/cursussen/?interventie=209&Mindfulness  
MoleMann Amersfoort  
Praktijk voor psychotherapie en coaching (Leusden) – Bernadette van Raamsdonk  
Praktijk PEP (psychologie en psychotherapie) in Soest  
S.P.E.L. Amersfoort

---

### Online: Interapy

- Oude categorie: GGZ - psychologie/psychiatrie › Basis, GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2014-01-21
- Origineel: https://sociaalleusden.nl/ggz/online-interapy

E-mail: [info@interapy.nl](mailto:info@interapy.nl)Tel: 020-7988300  
Web: [www.interapy.nl](http://www.interapy.nl/)Aanmelding: <https://www.interapy.nl/voor-verwijzers>

Burn-out, paniek, trauma, verkrachting, rouwverwerking, depressie, boulima  
Erkende GGZ-instelling, volledig vergoed door zorgverzekering

---

### Praktijk voor Pedagogische en Psychologische Hulp (Zorgplein Tolgaarde)

- Oude categorie: GGZ - psychologie/psychiatrie › Basis, GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2014-02-07
- Origineel: https://sociaalleusden.nl/ggz/praktijk-voor-pedagogische-en-psychologische-hulp

Zorgplein De Tolgaarde, Tolplaats 5, 3831JR Leusden  
Tel: 033-4701965  
Mail: [evdijck@xs4all.nl](mailto:evdijck@xs4all.nl)Mail: [psychologischepraktijkleusden@gmail.com](mailto:psychologischepraktijkleusden@gmail.com)Web: [ellenvandijck.praktijkinfo.nl](http://ellenvandijck.praktijkinfo.nl/)o.a. Pedagogie, psychologie, psychotherapie, COGMED

Werkzaam: Ellen van Dijck, Monique de Rooij

---

### Psycho Praktijk Leusden

- Oude categorie: GGZ - psychologie/psychiatrie › Basis, GGZ - psychologie/psychiatrie, GGZ - psychologie/psychiatrie › Specialistisch
- Laatst gewijzigd: 2014-04-09
- Origineel: https://sociaalleusden.nl/ggz/psycho-praktijk-leusden

**Hoofdvestiging:** Groepsekom 22, 3831 RH Leusden

**Nevenvestiging:**Gezondheidscentrum Tabaksteeg (in Mediq Apotheek), Willem Alexanderhof 1, 3832 JN Leusden-Zuid

tel.033-4950974 / [info@psychopraktijkleusden.nl](mailto:info@psychopraktijkleusden.nl)

Doelgroep: Kinderen, jongeren, volwassenen, ouderen  
Therapie: CGT, EMDR, psychotherapie, coaching

---

### Psychologenpraktijk de Eem

- Oude categorie: GGZ - psychologie/psychiatrie › Basis, GGZ - psychologie/psychiatrie
- Laatst gewijzigd: 2014-01-19
- Origineel: https://sociaalleusden.nl/ggz/psychologenpraktijk-de-eem

**Praktijkadres 1: Hoofdvestiging, Psychologenpraktijk De Eem –**Lepelaar 9a, 3831 DD Leusden

**Praktijkadres 2: Huisartsenpraktijk Verhagen & Van Meeteren –**Berkenlaan 29, 3833 AP Leusden

Telefonisch spreekuur: **033-2583198:**Maandag van 09.00-14.00 uur.  
Woensdag van 09.00-11.00 uur.  
Donderdag van 12.00-13.00 uur.

Overige tijden: bericht in spreken op: **033-4943921**.  
Mail: info@eempsycholoog.nl

---

### Psychologenpraktijk Westerduin

- Oude categorie: GGZ - psychologie/psychiatrie › Basis, GGZ - psychologie/psychiatrie, Overig
- Laatst gewijzigd: 2014-07-01
- Origineel: https://sociaalleusden.nl/overig/psychologenpraktijk-westerduin

In: **Gezondheidscentrum ‘De Heelkom’**  
Walter van Amersfoortstraat 36  
3791 AR Achterveld  
Tel: 06-83327328  
Mail: [info@psychologenpraktijkwesterduin.nl](mailto:info@psychologenpraktijkwesterduin.nl "info@psychologenpraktijkwesterduin.nl")  
[www.psychologenpraktijkwesterduin.nl](http://www.psychologenpraktijkwesterduin.nl "www.psychologenpraktijkwesterduin.nl")  
Bel of mail en laat uw telefoonnummer achter. Ik neem zo snel mogelijk contact met u op!

Rein Westerduin, psycholoog: Mijn praktijk is gevestigd in Gezondheidscentrum ‘de Heelkom’ en biedt psychologische hulp aan kinderen, jeugd en volwassenen (Generalistische Basis GGZ). Binnen de praktijk wordt persoonlijk en professioneel gewerkt aan het oplossen van problemen: kortdurend, concreet en doelgericht.

In de afgelopen jaren heb ik veel ervaring opgedaan in het behandelen van complexe problematiek bij kinderen, jongeren en volwassenen en expertise ontwikkeld op het gebied van psychodiagnostiek en effectieve behandelingsmogelijkheden.

Tevens heb ik mij gespecialiseerd in onderzoek en behandeling van kinderen, jeugd en volwassenen met een (licht) verstandelijke beperking en hulpverlening bij multi-probleem gezinnen.

Beroepskwalificaties:  
GZ psycholoog NIP; Psycholoog Kinder & Jeugd; Orthopedagoog NVO; Lid Vereniging EMDR Nederland; BIG geregistreerd

---

## Geestelijke begeleiding

### CENTRUM VOOR LEVENSVRAGEN EEMLAND

- Oude categorie: Geestelijke begeleiding, Maatschappelijk werk, Overig
- Laatst gewijzigd: 2020-01-08
- Origineel: https://sociaalleusden.nl/overig/centrum-voor-levensvragen-eemland

**CENTRUM VOOR LEVENSVRAGEN EEMLAND**  
Als je ernstig ziek wordt of op andere wijze een groot verlies ervaart dan is dat een gebeurtenis die diep in je leven ingrijpt. Je kunt te maken krijgen met vragen en dilemma’s over het bestaan, zin en betekenis. Soms is het dan goed om er met iemand over te praten, die luistert zonder oordeel en die met u zoekt naar houvast en zin van leven.

De medewerkers van het centrum voor levensvragen zijn gespecialiseerd in het omgaan met levensvragen. Zij richten zich op uw vragen en op uw kijk op het leven.   
Wij werken met  professionele geestelijk verzorgers die u doorgaans thuis bezoeken. Daarnaast fungeert het centrum als vraagbaak voor professionele hulpverleners en vrijwilligers. De werkzaamheden zijn kosteloos.

**Hoe werkt het?**  
• Aanmelden kan telefonisch of per mail, door uzelf, uw naasten, een professional (bijvoorbeeld een huisarts) of vrijwilliger.  
• U krijgt een telefonische intake. Daarin bespreekt u uw vragen, verwachtingen, wensen en mogelijkheden  
• Na de intake wordt een geestelijk verzorger benaderd die past bij uw vraag en achtergrond.  
• De geestelijk verzorger neemt z.s.m. contact met u op en maakt een afspraak.  
• Het gesprek vindt plaats bij u thuis of op een nader overeen te komen locatie als u dit wenst.

**Contactgegevens**

Centrum voor Levensvragen Eemland  
T: 06 12 664 381  
E: [info@centrumlevensvrageneemland.nl](mailto:info@centrumlevensvrageneemland.nl)  
W: [www.centrumlevensvrageneemland.nl](http://www.centrumlevensvrageneemland.nl/)

Trefwoorden: Geestelijke begeleiding, trauma, verlies, waarom, overlijden, leven, einde, sedatie, euthanasie, levensbeëindiging, zingeving, lijden

---

### Centrum voor Zelfbezinning

- Oude categorie: Geestelijke begeleiding, Maatschappelijk werk, Overlijden
- Laatst gewijzigd: 2024-09-01
- Origineel: https://sociaalleusden.nl/overlijden/centrum-voor-zelfbezinning

##### Het Centrum voor Zelfbezinning is een plek waar je je welkom mag voelen. Een plek voor gesprekken van mens tot mens.

## Neem vooral ‘jezelf’ mee..

**Contact**

- 06-22792216 (Henny)
- 06-54322088 (Willem Jan)
- 06-53990988 (Lukas)
- 06-53669932 (Ton)
- Email: [info@zelfbezinning.nl](mailto:info@zelfbezinning.nl)
- Locatie: [Dodeweg 8, 3832 RD Leusden](https://g.co/kgs/iFRZM5q)
- Web: <https://zelfbezinning.nl/>

Voor deelnemers aan de activiteiten van het Centrum voor Zelfbezinning is het gesprek essentieel. Ieder van ons heeft zo zijn eigen levensvragen: hoe wil ik omgaan met de keuzes die ik wil maken? hoe ga ik om met verlies en veranderingen in mijn leven? en kan ik me (weer) meer regisseur over mijn eigen leven voelen?

Onze kernactiviteit is zelfbezinnende gespreksgroep. Aan deze zelfbezinnende groep nemen maximaal zeven deelnemers deel, waarvan één de gespreksleider is.

De gespreksgroep is een  klankbord, maar niet bedoeld voor het geven  oplossingen en adviezen.

Luisteren en aanvaarden dat de ander een ander is dan ik, is een essentiële voorwaarde om het zelfbezinnende gesprek tot zijn recht te laten komen.

Een zelfbezinnende gespreksgroep is geen therapiegroep. Van elke deelnemer wordt verwacht dat je jezelf kunt ‘dragen’.

Wil je zelf ervaren wat dit ‘zelfbezinnen’ is? In de zomer en in de winter organiseren we meerdaagse activiteiten. Er zijn ook ‘doorgaande gespreksgroepen. Een gesprek vooraf met de gespreksleider is bedoeld om te kijken of jouw verwachtingen aansluiten bij wat de groep te bieden heeft.

---

## Huisartsen

### Huisartsen Lepelaar

- Oude categorie: Huisartsen
- Laatst gewijzigd: 2014-08-06
- Origineel: https://sociaalleusden.nl/huisartsen/huisartsen-lepelaar

|  |  |
| --- | --- |
| Werk | 033 – 495 1011 |
| Adres | Lepelaar 9, 3831 DD Leusden |
| Opmerkingen | Mirjam van der Waart  Ismene Tchaoussoglou  Carine Westerweel |

---

### Huisartsenpaktijk Tolgaarde

- Oude categorie: Huisartsen
- Laatst gewijzigd: 2020-11-29
- Origineel: https://sociaalleusden.nl/huisartsen/huisartsenpaktijk-tolgaarde

|  |  |
| --- | --- |
| Werk | 033 – 494 1210 |
| Adres | Tolplaats 3, 3831 JR Leusden |
| Profiel | www.huisartsentolgaarde.nl |
| Opmerkingen | D. Schaap A. van Leeuwen M. den Uijl N. Busser |

---

### Huisartsenpraktijk Berkenlaan

- Oude categorie: Huisartsen
- Laatst gewijzigd: 2014-07-11
- Origineel: https://sociaalleusden.nl/huisartsen/huisartsenpraktijk-berkenlaan

|  |  |
| --- | --- |
| Werk | 033 – 494 4223 |
| Adres | Berkenlaan 29, 3833 AP Leusden |
| Opmerkingen | M.C. van Meeteren  R.E. van Dop |

---

### Huisartsenpraktijk Korte Geer

- Oude categorie: Huisartsen
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/huisartsen/huisartsenpraktijk-korte-geer

|  |  |
| --- | --- |
| Werk | 033 – 494 8111 |
| Adres | Korte Geer 8, 3833 VV Leusden |
| Opmerkingen | Wouter van den Berg  Marnix van der Leest  Mariëtte Kunz  Gert van de Wetering  Monique van Berkel  Janneke de Rooy (waarnemer) |

---

### Huisartsenpraktijk Leusden

- Oude categorie: Huisartsen
- Laatst gewijzigd: 2023-03-07
- Origineel: https://sociaalleusden.nl/huisartsen/huisartsenpraktijk-leusden

|  |  |
| --- | --- |
| Werk | 033 – 494 4600 |
| Adres | Asschatterweg 69a, 3831 JK Leusden |
| Opmerkingen | Lisanne Jonker  Mienke van der Wiel |

---

### Huisartsenpraktijk Santé

- Oude categorie: Huisartsen
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/huisartsen/huisartsenpraktijk-sante

|  |  |
| --- | --- |
| Tel | 033 – 494 3300 |
| Adres | Willem Alexanderhof 3, 3832 JN Leusden-zuid |
| Opmerkingen | M.E.M. Bocharewicz  K.M.A.E. van den Ekart |

---

## Kinderfysiotherapie

### Bengels en Kanjers

- Oude categorie: Kinderfysiotherapie
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/kinderfysiotherapie/bengels-en-kanjers

|  |  |
| --- | --- |
| Algemeen | info@bengelsenkanjers.nl |
| Annette | annette@bengelsenkanjers.nl |
| Agnes | agnes@bengelsenkanjers.nl |
| Algemeen | 033-2852991 |
| Annette | 06-51874106 |
| Agnes | 06-48974327 |
| Werk | De Hank 4, 3832 JL Leusden |
| Opmerkingen | Agnes van der Straat  Annette Durieux |

---

## Laboratorium

### Meander Klinische Chemie

- Oude categorie: Laboratorium
- Laatst gewijzigd: 2014-04-01
- Origineel: https://sociaalleusden.nl/laboratorium/meander-klinische-chemie

**Achterveld:** W. Van Amersfoortstraat 36, “De Heelkom” – dinsdag en donderdag 09.30 – 10.00u  
**Leusden:** Zie “[Medisch Centrum de Mulderij](http://sociaalleusden.nl/laboratorium/medisch-centrum-de-mulderij "Medisch Centrum de Mulderij")“

---

### Saltro

- Oude categorie: Laboratorium
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/laboratorium/saltro

|  |  |
| --- | --- |
| Uitslagenlijn | 030-2361125 |
| Prikpost 1 | Hamersveldseweg 2a, 3833GP Leusden |
| Prikpost 2 | Willem Alexanderhof 3, 3832JN Leusden |
| Opmerkingen | Prikpost 1: Ook fundusfotografie, uitleen 24-uurs bloeddrukmeter, uitleen eventrecorder |

---

## Logopedie

### Logopediepraktijk Leusden (Zorgplein Tolgaarde)

- Oude categorie: Logopedie
- Laatst gewijzigd: 2014-07-16
- Origineel: https://sociaalleusden.nl/logopedie/logopediepraktijk-leusden-zorgplein-tolgaarde

Zorgplein De Tolgaarde  
Tolplaats 21  
3831 JR Leusden  
Tel. 033 495 08 47  
[info@logopediepraktijkleusden.nl](mailto:info@logopediepraktijkleusden.nl "info@logopediepraktijkleusden.nl")[www.logopediepraktijkleusden.nl](http://www.logopediepraktijkleusden.nl "www.logopediepraktijkleusden.nl")

**OOK AANWEZIG IN ACHTERVELD – Gezondheidscentrum De Heelkom**

Sinds 1995 is Nanda Bakker werkzaam als logopedist in Leusden. In 2000 is zij gaan samenwerken met Margreet de Jager onder de naam Logopediepraktijk Rozengaarde. In 2002 werd de praktijk uitgebreid met de komst van Aline Lievers. Vanaf 2009 zijn er vier logopedisten werkzaam in de praktijk. Na personele wisselingen is Charlotte Sack sinds 2014 bij ons werkzaam.

Na de verhuizing van de praktijk in 2008 uit de Rozengaarde is de naam veranderd in Logopediepraktijk Leusden. Sinds oktober 2012 zijn wij gevestigd op Zorgplein de Tolgaarde waar ook andere disciplines werkzaam zijn. Wij kunnen met elkaar kwalitatief hoge zorg bieden omdat wij gebruik kunnen maken van elkaars expertise en omdat wij eenvoudig naar elkaar door kunnen verwijzen.

Logopediepraktijk Leusden is geopend op maandag (incl. avond), dinsdag, woensdag, donderdag en vrijdag. Behandeling alleen op afspraak. Aanmelden kan op telefoonnummer 033-4950847 of via ons aanmeldingsformulier ([zie website](http://www.logopediepraktijkleusden.nl/aanmelde/))

Onze locatie in Achterveld ([Gezondheidscentrum De Heelkom](https://www.heelkom.nl/Default.asp?&HTTPSHASH= "Locatie de Heelkom")) is geopend op maandag.

---

## Maatschappelijk werk

### Maatschappelijk werk Welzin

- Oude categorie: Maatschappelijk werk
- Laatst gewijzigd: 2014-06-17
- Origineel: https://sociaalleusden.nl/maatschappelijk-werk/maatschappelijk-werk-welzin

1) Rozengaarde 22A, 3831 CD  Leusden  
2) Walter van Amersfoortstr 36, 3791AR Achterveld

Tel: 033-469 24 00 (elke werkdag tussen 12.00 en 13.00 uur)  
[maatschappelijkwerk@welzin.nl](mailto:maatschappelijkwerk@welzin.nl)

**Cursusaanbod jongeren**:

- Sociale vaardigheidstraining (8-12 en 12-16 jaar)
- KIES-training (echtscheiding) (8-12 en 12-17 jaar)
- Assertiviteitstraining (17-21 jaar)

**Cursusaanbod volwassenen:**

- Wilt u direct aan de slag? Volg dan de cursus  
  [Op eigen kracht aan de slag](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=2020)
- Wilt u zich zekerder voelen?  
  [Stap eens over de drempel](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=2045)
- NIEUW Voor partners die hun relatie goed willen houden  
  [APK voor je relatie](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=2191)
- Wilt u meer voor uzelf opkomen?  
  [Assertiviteitstraining voor volwassenen](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=1755)
- Voor vrouwen die door hun partner mishandeld zijn is er de cursus  
  [Van onmacht naar kracht,](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=1761)
- Bent u mantelzorger? Ook de mantelzorger verdient zorg!  
  [Mantelzorger? Zorg voor jezelf!](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=1766)
- Wilt u meer grip krijgen op de spanning in uw lichaam en/of geest?  
  [Stilstaan in drukte, ontspanning kun je leren!](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=1759)
- Hebt u te kampen met depressie, bent u angstig of piekert u veel?[Training Mindfulness (aandachttraining)](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=1763)
- Bent u pas gescheiden?  
  [Verder op eigen kracht, voor gescheiden mensen](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=1758)
- Wilt u een goede start maken met het nieuw samengestelde gezin?  
  [Nieuw samengesteld gezin (stiefgezin)](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=1764)
- Bent u gescheiden en volgt uw kind de KIES-training?  
  [Ouderavonden voor ouders van kinderen die de KIES-training volgen](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=1774)
- Bent u gescheiden en hebt u pubers (12 – 17 jaar)?  
  [Cursus voor gescheiden ouders met pubers (12 – 17 jaar)](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=2056)
- Is bij u de diagnose Fibromyalgie gesteld en wilt u grip krijgen op uw leven?  
  [Cursus Fibromyalgie, hoe verder…?](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=2137)
- Wilt u een gezond gewicht krijgen en houden? Volg dan de training  
  [Bewust bewegen, eten en leven](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=2157)
- Hebt u financiële problemen en wilt u inzicht in uw situatie?  
  [Grijp je kans; schulden aanpakken = zelf de touwtjes in handen nemen](http://www.beweging3.nl/nl/consult-bij-maatschappelijk-werk-regio-eemland/1534/mercury.asp?page_id=2170)

Zoektermen: gezinscoaching, lifecoaching, (rouw)verwerking, verlies, burnout, (echt)scheiding / vechtscheiding, zelfvertrouwen, assertiviteit, sociale vaardigheid, relatie(s), huiselijk geweld, eenzaamheid, structuur, gezonde leefstijl, casemanagement / regiehouder, financiën, schulden, administratie, groepswerk, kiestraining, sovatraining, chatten, internethulpverlening

---

### Thuisbegeleiding – WELZIN

- Oude categorie: Maatschappelijk werk
- Laatst gewijzigd: 2014-07-18
- Origineel: https://sociaalleusden.nl/maatschappelijk-werk/thuisbegeleiding-welzin

**Wat is Thuisbegeleiding?**Thuisbegeleiding is sinds 2009 de landelijke naam van de “gespecialiseerde verzorging”, zoals die al jaren vanuit de thuiszorg wordt geleverd. In samenwerking met andere hulpverleners ondersteunt de thuisbegeleider op praktische, activerende en ondersteunende wijze mensen met psychosociale,  pedagogische, somatische of psychiatrische problematiek dan wel een combinatie hiervan. Denk hierbij aan vervuiling, verwaarlozing, sociaal isolement, overlast, schulden, dreigende uithuiszetting, overmatig gebruik alcohol/medicijnen, gedrags -en gezondheidsproblemen. Doelgroep bestaat zowel uit gezinnen als alleenstaanden, leeftijd 0 – 100. Op methodische wijze en in samenspraak met cliënt en verwijzer wordt het doel, de werkwijze en de voortgang van de begeleiding bepaald.

Bij opvoedingsproblematiek kan Videohometraining (VHT) als methode worden ingezet. VHT is een effectieve interventie die gebruik maakt van beeldmateriaal dat door een gecertificeerde medewerker is gemaakt.

**Hulpvragen kunnen zijn:**

- Huishouden: leren structureren en organiseren van het huishouden.
- Financiën: inkomen op de juiste wijze leren besteden.
- Administratie leren organiseren
- Leren omgaan met woon- en leefproblemen,o.a. structureren dagritme, afspraken leren nakomen, leren plannen en organiseren, leren omgaan met instanties, hulp leren toelaten.
- Problemen in het dagelijkse leven door overspannenheid, depressies of angsten.
- Leren omgaan met opvoedingsproblemen/aanleren opvoedingsvaardigheden.
- Leven weer op de rit krijgen na ingrijpende veranderingen zoals een echtscheiding of het overlijden van een familielid.
- Leren participeren in het maatschappelijk leven.

**Thuisbegeleiding onderscheidt zich door:**

- Kernbegrippen zijn structureren, ondersteunen en activeren in de thuissituatie.
- Thuisbegeleiding is breed en snel inzetbaar.
- Praktische insteek; werkt goed bij specifieke doelgroepen waarbij reguliere hulpverlening (gesprekken) niet werkt/ontoereikend is.
- Aansluiten bij wensen/behoeftes van cliënt en werken aan een vertrouwensband.
- Stimuleren van de eigen kracht
- Niet overnemen, maar ‘met de handen op de rug’ werken, met als doel zo snel mogelijk mensen weer zelfstandig te laten functioneren of toeleiden naar reguliere hulp/opname.
- Deskundige MBO+/HBO opgeleide medewerkers, getraind in methodiek van TB.
- Thuisbegeleiding werkt in de praktijk altijd samen met de verwijzer en eventuele andere samenwerkingspartners en/of mantelzorgers.

**Hoe kan Thuisbegeleiding worden aangevraagd?****AWBZ-zorg:** In veel gevallen is er een somatische, psychiatrische of psychogeriatrische diagnose of sprake van een verstandelijke of lichamelijke handicap. Dan is een CIZ-indicatie nodig op basis van Begeleiding individueel. De planners van de afdeling Thuisbegeleiding kunnen adviseren en helpen bij de aanvraag van een indicatie.

**Wmo:** Wanneer er sprake is van psychosociale problematiek is begeleiding vanuit de Wmo mogelijk. Neem contact op met de planners om dit aan te vragen.

Coördinatoren van Thuisbegeleiding: Clara van de Pol en Thea van de Beek.

Tel. **033-469 25 61** of [thuisbegeleiding@welzin.nl](mailto:thuisbegeleiding@beweging3.nl)

---

## Ouderschap

### Adelheid Dolmans, Nugezamenlijk, Praktijk voor PRI coaching&therapie

- Oude categorie: Ouderschap, Overig
- Laatst gewijzigd: 2023-03-16
- Origineel: https://sociaalleusden.nl/overig/adelheid-dolmans-nugezamenlijk-praktijk-voor-pri-coachingtherapie

**Doelgroep:** moeders/vaders, verstrikt in emoties, in het ouderschap of partnerschap. Zij hebben last van stress, boosheid/irritatie, angst, onzekerheid, somberheid en willen stappen maken naar vreugdevol ouderschap/partnerschap, in verbinding, met elkaar /met hun kinderen.

**Wat is Past Reality Integration (afgekort PRI)?**Het PRI model laat zien hoe we de wereld vaak waarnemen door de bril van overlevingsmechanismen die we als kind (onbewust) hebben ontwikkeld en hoe daarmee ons verleden ons huidige leven ongewenst beïnvloedt. De PRI methode helpt cliënten om hun emotionele brein te herprogrammeren en te reageren vanuit verbinding. Door middel van effectieve technieken en praktische tools die ze zelfstandig leren toepassen.

**Praktijkadres:**  
Omnis, integraal gezondheidscentrum, Larikslaan 2, 3833 AM, Leusden  
Telefoon: 0612938043  
Web: [www.nugezamenlijk.nl](http://www.nugezamenlijk.nl)  
Email: [contact@nugezamenlijk.nl](mailto:contact@nugezamenlijk.nl)

---

## Overig

### Activiteiten Senioren

- Oude categorie: Overig
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/overig/activiteiten-senioren

Via Welzijn Leusden: [http://welzijnleusden.nl/page/2217/](http://welzijnleusden.nl/page/2217/ "Welzijn Leusden - Senioren")

o.a.:  
-Biljarten, Bridge, Cultuurgeschiedenis, Klaverjassen, Koersbal, Mensendieck, Levensverhaal, Pergamano, 50-PlusBus, Aquafit

Meer info via de website, 033 – 4343220 of info@welzijnleusden.nl

---

### Babyconsulent Marianne Buikema

- Oude categorie: Overig, Zwangerschap
- Laatst gewijzigd: 2016-04-13
- Origineel: https://sociaalleusden.nl/overig/babyconsulent-marianne-buikema

**Voor begeleiding bij al je vragen over het huilgedrag, voeding en slapen****van je baby in het eerste levensjaar**  
Babyconsulent Marianne Buikema  
Haverland 17  
3833CT Leusden  
T: 033 432 3449  
M: 06 50 97 78 57  
E: [mariannebuikema@gmail.com](mailto:mariannebuikema@gmail.com)  
W: [www.mariannebuikema.nl](http://www.mariannebuikema.nl)

Huilt je baby vaak? Is hij/zij onrustig? Heeft hij/zij slaapstoornissen? Heeft je baby last van voedingsproblemen zoals krampjes of reflux en weet je niet wat je daar aan kunt doen? Voor alle vragen kun je bij mij terecht.

Ik ben Marianne Buikema, IC-neonatologie, IC-pediatrie-kinderverpleegkundige. Daarnaast ben ik wijkverpleegkundige, lactatiekundige, docent babymassage en babyconsulent. Samen met jullie ga ik op zoek naar de oorzaken. Dit doe ik bij jullie thuis.

Ik kijk, luister, observeer en stel vragen. Vervolgens maak ik, in overleg met jullie, een plan van aanpak en geef ik concrete tools en tips. Hierbij bied ik jullie nazorg: aan huis, per telefoon of per mail..

Ik ben lid van de landelijke beroepsverenigingvoor Verpleegkundigen en Verzorgenden en de afdeling Kinderverpleegkunde

---

### BilancioBudget

- Oude categorie: Overig
- Laatst gewijzigd: 2014-03-31
- Origineel: https://sociaalleusden.nl/overig/bilanciobudget

[06 200 42 951](tel:06%20200%2042%20951) (telefonisch spreekuur: ma, di, wo, do: 9:00-11:00 uur)  
[amersfoort@bilanciobudget.nl](mailto:amersfoort@bilanciobudget.nl)[www.bilanciobudget.nl](http://www.bilanciobudget.nl/)Postadres: postbus 1466, 3800 BL Amersfoort  
Bezoekadres: Hardwareweg 4 Amersfoort

**Een korte introductie van BilancioBudget:***Bent u achttien jaar of ouder? Dan bent u, volgens de Nederlandse wet, ‘handelingsbekwaam’. Dit betekent dat u zelfstandig over o.a. uw portemonnee mag en kan beslissen. Echter niet iedereen kan die verantwoordelijkheid aan. Naast de verleiding om spullen te kopen, kan ook een fysieke of mentale gesteldheid hier debet aan zijn. In dat geval kunt u ervoor kiezen om iemand in de armen te nemen voor beschermingsbewind of budgetbeheer. Er heerst nog steeds een taboe op schulden en financiën. Zorgen die u hierover heeft (al dan niet voor uzelf of familie) zijn dan ook niet eenvoudig bespreekbaar met uw omgeving. Het is daarom fijn dat BilancioBudget uw problemen serieus neemt en u kan helpen bij het herstel van de (financiële) balans. Geïnteresseerd? Neem dan vrijblijvend contact op via ons telefoonnummer of e-mailadres.*

---

### Centraalzorg

- Oude categorie: Overig, Thuiszorg
- Laatst gewijzigd: 2014-12-31
- Origineel: https://sociaalleusden.nl/overig/centraalzorg

De zorg die wij aanbieden bestaat uit:

- Huishoudelijke zorg
- Persoonlijke zorg
- Verpleegkundige zorg
- Terminale zorg
- Zorg bij dementie
- Ondersteunende begeleiding

**Centraalzorg**Olmenlaan 8  
3833 AV Leusden  
T: (033) 286 22 02  
F: (033) 286 13 39  
E: [info@centraalzorg.nl](mailto: info@centraalzorg.nl)

---

### Huidtherapie Rigter (Zorgplein Tolgaarde)

- Oude categorie: Overig
- Laatst gewijzigd: 2014-02-08
- Origineel: https://sociaalleusden.nl/overig/huidtherapie-rigter-zorgplein-tolgaarde

Tolplaats 17  
3831 JR Leusden  
T: 033 4320215 (vestiging Leusden)  
[info@huidtherapierigter.nl](mailto:info@huidtherapierigter.nl)[www.huidtherapierigter.nl](http://www.huidtherapierigter.nl "www.huidtherapierigter.nl")

Openingstijden Leusden: Maandag, woensdag, donderdag  
Telefonisch spreekuur: Maandag, woensdag, donderdag van 12:30-13:00 uur

Gespecialiseerd in o.a.: Acnetherapie, laser- en elektrische epilatie bij overbeharing, littekentherapie, camouflagetherapie, microdermabrasie en chemische peeling, huidonregelmatigheden, oedeemtherapie, hidradenitis suppurativa

Werkzaam:  
-Marijke Rigter, huid- en lasertherapeut  
-Annemarijn van Dort, huid- en lasertherapeut  
-Ellen Kuijer, huid- en lasertherapeut

---

### Huidtherapie Stenders & van Dort

- Oude categorie: Overig
- Laatst gewijzigd: 2016-11-18
- Origineel: https://sociaalleusden.nl/overig/huidtherapie-stenders-van-dort

Marsha Stenders  
Annemarijn van Dort  
Sanne Luiten

Zorgplein de Tolgaarde  
Tolplaats 17, 3831 JJ Leusden  
☎ 033-4320215

<http://www.huidtherapiestendersvandort.nl/>

o.a.: overbeharing, acne, acnelittekens, couperose, steel-, ouderdomswratjes, pigmentstoornissen, hydradenitis, lymfoedeem, lipoedeem, lasertherapie

---

### Hulpdienst Hoevelaken – Vrijwilligers Terminale Thuiszorg

- Oude categorie: Overig, Palliatieve zorg
- Laatst gewijzigd: 2014-01-21
- Origineel: https://sociaalleusden.nl/overig/hulpdienst-hoevelaken-vrijwilligers-terminale-thuiszorg

Tel: 033-4659539

---

### INDEBUURT033

- Oude categorie: Overig
- Laatst gewijzigd: 2019-11-27
- Origineel: https://sociaalleusden.nl/overig/indebuurt033

Indebuurt033 coördineert het welzijnswerk en vrijwilligerswerk in Amersfoort. Wij bieden ondersteuning aan inwoners die een idee hebben voor hun buurt of een activiteit willen organiseren. Ook zijn we er voor mensen die anderen willen ontmoeten, die vragen of zorgen hebben over opgroeien en opvoeden, mantelzorg, geldzaken, wonen of andere leefgebieden. Indebuurt033 geeft informatie en advies, biedt een luisterend oor en (kortdurende) ondersteuning waar nodig.

Indebuurt033, Drentsestraat 14  
 3812 EH Amersfoort  
T: 033 – 204 86 77 ( op werkdagen van 9.00 – 17.00 uur)  
E: [info@indebuurt033.nl](mailto:info@indebuurt033.nl)

---

### King Arthur Groep

- Oude categorie: Overig, Thuiszorg, Verpleeg- en verzorgingshuizen
- Laatst gewijzigd: 2019-10-03
- Origineel: https://sociaalleusden.nl/overig/king-arthur-group

**Contact:** [ocachterveld@kingarthurgroep.nl](mailto:ocachterveld@kingarthurgroep.nl) ● 06-18412145

**Zorgbemiddeling en administratie:**  
Berg en Bosch gebouw 104, Prof, Bronkhorstlaan 10, 3723 MB Bilthoven 035-2050950 [info@kingarthurgroep.nl](mailto:info@kingarthurgroep.nl) ● [www.kingarthurgroep.nl](http://www.kingarthurgroep.nl)

**Contactgegevens voor zowel Leusden als Achterveld:**  
Individuele begeleiding thuis: 06-18 41 21 45  
Begeleiding groep: 06-15 00 50 19

**Individuele begeleiding King Arthur Groep**  
King Arthur Groep is een WTZi erkende thuiszorgorganisatie die in het midden van het land is gevestigd en van Almere tot Veenendaal individuele begeleiding biedt in de thuissituatie.  
  
**Financiering**  
Voor professionele deelname heeft u een toewijzing begeleiding nodig (Wmo of Wlz) en betaalt u een eigen bijdrage via het CAK. Wij kunnen u behulpzaam zijn bij de aan-vraag. Particulier deelnemen kan ook.  
  
King Arthur Groep is een Wtzi erkende thuiszorgorganisatie die de onder-steuning kleinschalig en dichtbij huis organiseert, speciaal voor mensen met dementie en hun naasten Wij hebben zeven ontmoetingscentra, een kleinschalige woonzorgvoorziening en twee logeerhuizen. Daarnaast bieden wij individuele begeleiding thuis in de gehele regio Eemland, waaronder ook Leusden en Achterveld.  
Gastvrijheid, persoonlijke aandacht en oprechte interesse staan centraal. Een visie waarbij we uitgaan van de mogelijkheden en de kracht van mensen.  
  
**Individuele begeleiding thuis**  
Niet iedereen is een groepsmens, sommige mensen hebben meer baat bij een passend aanbod in de thuissituatie. Zoals wandelen, yoga, tuinie-ren, klaverjassen, schilderen, biljarten of sporten bij een sportschool.  
Naast ontspanning en inspanning ondersteunen wij ook bij de begelei-ding naar een (huis) arts, het aanbrengen van een dag structuur, het bereiden van een maaltijd en het doen van boodschappen.  
Zo lang mogelijk thuis wonen  
De mantelzorger neemt hierbij een belangrijke plaats in. Om het vol te kunnen houden heeft de mantelzorger zo nu en dan tijd voor zichzelf no-dig. Wij bieden maatwerk en een programma dat passend is bij de inte-resses, levensstijl en fysieke gesteldheid van uw naaste.

**Ons aanbod in Leusden & Achterveld**  
 King Arthur Groep biedt individuele ondersteuning en begeleiding aan mensen met dementie die nog in een thuissituatie wonen.  
 Wij bieden maatwerk aan jong en oud, actief en minder actief.  
 • Wandelen  
 • Geheugengym  
 • Spelletje  
 • Bezoek aan de sportschool of andere vereniging  
 • Bezoek aan een museum  
 • Koffie drinken op een terras  
 • Begeleiding naar huisarts  
 • Boodschappen  
 • Bereiden maaltijd  
 • Helpen met opruimen

**Formele en informele ondersteuning worden op elkaar afgestemd**  
Samen met u en uw partner/mantelzorger kijken wij waar professionals nodig zijn en waar mogelijk informele ondersteuning kan.  
**Vriendengesprekken**  
Vrienden, familie en kennissen willen heel vaak helpen, maar weten niet hoe zij met de ziekte om moeten gaan. Wij organiseren vriendengespre-ken waarbij handvatten en tips worden aangedragen en taken worden verdeeld. Vrienden kunnen een helpende hand bieden door samen bood-schappen te doen of iets te ondernemen dat u vroeger samen ook deed, zoals winkelen, een kopje koffie drinken op een terras, kaarten, tennis-sen, hardlopen, etc.  
**Begeleiding in groepsverband**  
Op maandag en woensdag bent u welkom in ons ontmoetingscentrum in Achterveld in De Oude Bieb.

---

### Overgangsconsulente – Praktijk Utrechtse Heuvelrug

- Oude categorie: Overig
- Laatst gewijzigd: 2017-09-13
- Origineel: https://sociaalleusden.nl/overig/overgangsconsulente-praktijk-utrechtse-heuvelrug

Praktijk Utrechtse Heuvelrug  
Margreet Sack-van den Berg  
Haverakker 13  
3941 LD Doorn  
Tel: 0343-421241  
E-mail: [info@praktijkutrechtseheuvelrug.nl](mailto:info@praktijkutrechtseheuvelrug.nl)

- Heeft u overgangsklachten en wilt u leren omgaan met deze klachten?
- Wilt u afvallen maar doet u dat graag op een verantwoorde manier en onder begeleiding?
- Bent u nieuwsgierig naar uw gezondheid en wilt u een health check laten uitvoeren?

Kortom, wilt u weer vitaal en in balans door het leven gaan? Ik ga graag met u in gesprek om samen tot een leefstijladvies op maat te komen om de balans en de vitaliteit in uw leven (terug) te vinden. Sinds 2007 ben ik gespecialiseerd in de begeleiding bij overgangsklachten, verantwoord afvallen, bewegen en gezonde voeding. Een afspraak maken kan zonder doorverwijzing van uw huisarts.

**Over mij**Ik ben Margreet Sack-van den Berg. Getrouwd en moeder van twee zonen,  Ik heb ruime werkervaring in de wijkverpleging, het ziekenhuis en het bedrijfsleven  en ben gespecialiseerd als verpleegkundige in de preventieve  zorg en welzijn. Ik ben als healthconsulente opgeleid door de organisatie Care for Human en ben orthomoleculair afslankconsulente en BIG  geregistreerd verpleegkundig overgangsconsulente. Door mijn afgeronde HBO opleiding in de verpleging en een post- HBO opleiding tot overgangsconsulente aan het ErasmusMC onderscheid ik mij van de reguliere preventieve zorg en kan ik u net dat beetje extra bieden in mijn Praktijk Utrechtse Heuvelrug.

**Steekwoorden:** overgang, opvliegers, menopauze, lifestyle

---

## Overlijden

### Uitvaart Informatie Hulplijn

- Oude categorie: Overlijden, Palliatieve zorg
- Laatst gewijzigd: 2014-01-21
- Origineel: https://sociaalleusden.nl/palliatieve-zorg/uitvaar-informatie-hulplijn

Voor elke denkbare vraag over alles wat te maken heeft met overlijden, uitvaart en nazorg.  
Tel: 0800 – 44 44 000  
Mail [info@uitvaartinformatiehulplijn.nl](mailto:info@uitvaartinformatiehulplijn.nl)Web: [www.uitvaartinformatiehulplijn.nl](http://www.uitvaartinformatiehulplijn.nl)

---

## POH-GGZ

### POH-GGZ Leusden-Achterveld

- Oude categorie: POH-GGZ
- Laatst gewijzigd: 2014-12-14
- Origineel: https://sociaalleusden.nl/poh-ggz/poh-ggz-leusden-achterveld

De huisartsen bieden spreekuren POH-GGZ in Medisch Centrum de Mulderij, voor niet-complexe psychische problemen. De POH-GGZ is een professionele GGZ zorgverlener. **POH-GGZ** staat voor **Praktijkondersteuner Huisarts Geestelijke Gezondheidszorg.**Deze vorm van zorg is, net als de huisarts, kosteloos.

De POH-GGZ is deskundig in de behandeling en begeleiding van lichte psychische klachten zoals rouwverwerking, somberheid en depressie, angst- en paniekklachten, relatieproblemen, werkproblemen en problemen die samenhangen met ouderdom. Ook is er specifieke kennis aanwezig over gezinsproblematiek en problemen op de kinderleeftijd.  
De POH-GGZ zal ook een screening doen om te bepalen of een doorverwijzing naar de psycholoog of psychiater nodig is.

De POH-GGZ zal samen met u de klachten en problemen waarvoor u bent gekomen inventariseren en verhelderen. Meestal wordt de hulp geboden in de vorm van gesprekken gecombineerd met huiswerkopdrachten.  
De POH-GGZ maakt ook gebruikt van internethulpverlening ( E-Health). De hulpverlening verloopt dan telefonisch of via een beveiligde verbinding met email. U kunt zodoende thuis in uw eigen tempo werken aan opdrachten en deze aan de poh-ggz terug sturen.

De POH-GGZ  voor Leusden en Achterveld zijn Gerrit Jan Postema, Sophia Oostenbroek en Tjerk Sijbesma. Zij werken in De Mulderij, De Biezenkamp en in gezondheidscentrum De Heelkom in Achterveld.

U kunt met vragen over de POH-GGZ terecht bij uw huisarts.

**Onze POH-GGZ:**

        

Va nlinksboven naar rechtsonder: Gerrit-Jan Postema, Sophia Oostenbroek, Tjerk Sijbesma, Dineke de Beer, Tosca Schilperoort

***Kan ik ook naar een psycholoog voor mijn psychische klachten?****Met ingang van 2014 is bepaald dat vergoeding vanuit de zorgverzekering van een psycholoog of psychiater alleen plaatsvindt bij zwaardere psychische klachten. Voor lichte psychische klachten mag de huisarts u niet meer doorverwijzen naar de psycholoog (U mag wel op eigen initiatiefnaar een psycholoog gaan, maar u krijgt de gesprekken dan niet vergoed).*

---

## Palliatieve zorg

### Beweging 3.0 – Thuiszorg

- Oude categorie: Palliatieve zorg, Thuiszorg
- Laatst gewijzigd: 2023-02-24
- Origineel: https://sociaalleusden.nl/palliatieve-zorg/beweging-3-0-thuiszorg

**Thuiszorg beweging 3.0**

Beweging 3.0 is actief op het gebied van zorg, wonen en welzijn in de regio Eemland en dus ook in Leusden. In Leusden en Achterveld zijn 4 teams wijkverpleging werkzaam. Als u thuis zorg nodig heeft komt een van onze wijkverpleegkundigen bij u langs om samen met u en eventueel uw familie en mantelzorgers te onderzoeken wat er aan zorg nodig is. De wijkverpleegkundige in uw wijk is uw vaste contactpersoon. Zij luistert en denkt met u mee, kijkt wat u zelf nog kunt en adviseert u over de zorg, ondersteuning en andere mogelijkheden in uw specifieke situatie. Zij stelt op basis van uw hulpvraag de zorgbehoefte vast.

**Wijkverpleging  
Leusden Zuid-West**, teamnummer 085-0707128  
**Wijkverpleging Leusden Centrum-Oost**, teamnummer 085-0707129  
**Wijkverpleging Leusden Centrum-Noord**, teamnummer 085-0707132  
**Wijkverpleging Achterveld**, teamnummer 085-0707133

**Wijkverpleegkundigen****Leusden Zuid-West**: Wilma Wijntjes (0642557304) en Eva Heemskerk (0683483662)  
**Leusden Centrum-Oost:** Corien Hoogland (0622806742) en Charissa Oversteegen (0642494692)  
**Leusden Centrum-Noord:** Annette van der Zee (0641545906)  
**Achterveld:** Roelande Snapper (0643282704)

De wijkverpleegkundige heeft alle aandacht voor u én voor de mensen in uw directe omgeving. Zij werkt nauw samen met huisartsen, ziekenhuizen en andere zorg- en hulpverleners, maar ook met de speciaal opgeleide verpleegkundigen. Beweging 3.0 heeft gespecialiseerd verpleegkundigen en deskundigen met kennis van hart- en  
vaatziekten, incontinentie, stomazorg, oncologie, palliatieve zorg, neurologische aandoeningen, reumatische aandoeningen, wondverzorging en gerontologie.  
Voor vragen over **intramuraal wonen** kunt u terecht op het nummer **033-4692020**.

---

### Care for Cancer

- Oude categorie: Palliatieve zorg
- Laatst gewijzigd: 2014-01-21
- Origineel: https://sociaalleusden.nl/palliatieve-zorg/care-for-cancer

Tel: 033 4480730  
Mail: arrien@careforcancer.nl  
Web: www.careforcancer.nl

Care for cancer biedt individuele ondersteuning aan mensen met kanker en hun naasten. De diensten van Care for cancer sluiten aan op de zorg van het ziekenhuis. Het doel is dat cliënten minder stress en onzekerheid ervaren en sterker staan in het ziekteproces.  
Care for cancer richt zich op patiënten, mantelzorgers en werkgevers. Ervaren oncologieverpleegkundigen bezoeken cliënten thuis, beantwoorden vragen over de diagnose en de behandeling en geven praktische tips voor de thuis- en werksituatie. Daarnaast geven zij voorlichting over aanvullende zorgmogelijkheden en verwijzen door naar bijvoorbeeld inloophuizen of patiëntverenigingen.

---

### Hospice Dome

- Oude categorie: Palliatieve zorg
- Laatst gewijzigd: 2014-01-21
- Origineel: https://sociaalleusden.nl/palliatieve-zorg/hospice-dome

Appelweg 49, 3818 NN, Amersfoort

Tel: 033-4601960  
Fax: 033-4601969  
Mail: [info@hospicedome.nl](mailto:info@hospicedome.nl)  
Web: [www.hospicedome.nl](http://www.hospicedome.nl)

Algemeen christelijke identiteit (oecumenisch);  
De wens tot euthanasie is bespreekbaar, maar euthanasie wordt in Hospice Dôme niet uitgevoerd; hiervoor wordt in overleg met gast en familie een plaats gezocht buiten het hospice.

---

### Hospice Nijkerk

- Oude categorie: Palliatieve zorg
- Laatst gewijzigd: 2014-08-13
- Origineel: https://sociaalleusden.nl/palliatieve-zorg/hospice-nijkerk

Vetkamp 23  
3862 JM Nijkerk (Gld)  
T   033-2473100  
F   033-2473101  
E   [info@hospicenijkerk.nl](mailto:info@hospicenijkerk.nl "info@hospicenijkerk.nl")

Hospice Nijkerk is kleinschalig van opzet en biedt zes ruime gastenkamers met een eigen badkamer. De kamers zijn ingericht voor optimaal comfort. Persoonlijke bezittingen mogen meegenomen worden voor het creëren van een eigen sfeer. In overleg is ook  
een geliefd huisdier welkom. Het hospice kent geen vaste bezoektijden; gasten ontvangen bezoek wanneer zij dit willen.  
Gasten en hun naasten kunnen ook gebruik maken van de algemene ruimten, zoals de sfeervolle familiekamer of het verwarmde tuinhuis. Naasten kunnen desgewenst mee eten of blijven logeren, in de gezellige logeerkamer of op de kamer van de gast zelf. Het hospice is goed bereikbaar met het openbaar vervoer en ligt op loop-afstand van Station Nijkerk.

---

### Kinderhospice De Glind

- Oude categorie: Palliatieve zorg
- Laatst gewijzigd: 2014-01-21
- Origineel: https://sociaalleusden.nl/palliatieve-zorg/kinderhospice-de-glind

Kinderhospice centraal in het land, vanaf eind 2013 in Barneveld (nieuwbouw)  
Web: [www.kinderhospicedeglind.nl](http://www.kinderhospicedeglind.nl/)Tel: 0342-405200 (dinsdag en donderdag)  
Aanmeldingsprocedure: Via dienstdoend kinderverpleegkundige, tel.nr. 0342-405202

Voor ernstig en ongeneeslijk zieke kinderen in de leeftijd van 0-18 jaar met een beperkte levensverwachting en óf een complexe zorgvraag, die tijdelijk zorg nodig hebben (respijtzorg of terminale zorg).

---

### Palliatieteam Midden Nederland (PTMN) – Consultatie

- Oude categorie: Palliatieve zorg
- Laatst gewijzigd: 2014-01-21
- Origineel: https://sociaalleusden.nl/palliatieve-zorg/palliatieteam-midden-nederland-ptmn-consultatie

**Palliatieteam Midden Nederland (PTMN)**  
Tel: 088 755 55 55,  
vraag naar de dienstdoende consulent (24 uur per dag, 7 dagen in de week)

---

### Specialistisch Team Midden-Nederland + NH (STMN)

- Oude categorie: Palliatieve zorg
- Laatst gewijzigd: 2014-01-21
- Origineel: https://sociaalleusden.nl/palliatieve-zorg/specialistisch-team-midden-nederland-nh-stmn

Rechtstreeks tel.nr. – 030 – 2588205  
Fax: 030 – 2632808  
Naam coördinator mw. A. Hoogduin  
Aantal teamleden 20; Bereikbaarheid 24 uur

Specifieke handelingen: Infuus prikken, bloedtransfusies

---

## Seksuologie

### CASA Kliniek Utrecht

- Oude categorie: Seksuologie, Zwangerschap
- Laatst gewijzigd: 2014-07-30
- Origineel: https://sociaalleusden.nl/seksuologie/casa-kliniek-utrecht

Papiermolen 2  
3994 DK Houten  
tel: 088-888 4444 (normaal tarief)  
fax: 030-6340150  
e-mail: [info@casaklinieken.nl](mailto:info@casaklinieken.nl "info@casaklinieken.nl")[www.casaklinieken.nl](http://www.casaklinieken.nl "www.casaklinieken.nl")

Openingstijden  
CASA Kliniek Utrecht is geopend en telefonisch bereikbaar op maandag en woensdag van 8.30 tot 17.00 uur.

Voor informatie en het maken van afspraken kunt u bellen met: 088-888 4444 (normaal tarief), Maandag t/m vrijdag van 8.00 – 20.00 uur of zaterdag van 9.00 – 13.00 uur.

U kunt bij CASA kliniek Utrecht terecht voor:

- Advies over anticonceptie
- Pil advies
- Plaatsen van spiraaltje of Implanon
- Abortus en abortuspil

Bieden ondermeer hulp bij onbedoelde zwangerschap, waaronder begeleiding bij besluitvorming, afbreken van zwangerschap (abortus, medicamenteus of instrumenteel, met plaatselijke verdoving of intraveneuze sedatie) en goede nazorg.

---

## Specialistische zorg

### Specialist Ouderengeneeskunde

- Oude categorie: Specialistische zorg, Verpleeg- en verzorgingshuizen
- Laatst gewijzigd: 2014-07-26
- Origineel: https://sociaalleusden.nl/verpleeg-en-verzorgingshuizen/specialist-ouderengeneeskunde

Conform werkafspraak MCCE:  
De huisarts kan de Specialist Ouderengeneeskunde (SO) consulteren bij kwetsbare ouderen en complexe problematiek zowel in de thuissituatie als in het verzorgingshuis. Per huisartsengroep is een SO uit één verpleeghuis het aanspreekpunt. De verzorgingshuizen hebben een vaste SO, deze is te vinden in deze werkafspraak. De huisarts kan een consultatie (telefonisch of visite) aanvragen.  Bij een groot aantal patiënten die in een verzorgingshuis wonen is de SO al betrokken vanuit de AWBZ-zorg en kan deelnemen aan multidisciplinair overleg (bij CIZ indicatie ≥ ZZP 3). De SO werkt in een geriatrisch team wat kan bestaan uit: ergotherapeut, psycholoog, fysiotherapeut, logopedist,  wondverpleegkundige of een diëtist.

De SO is er met name voor de ouderen die niet (meer) naar het ziekenhuis willen of kunnen. De SO kan bij de patiënt thuiskomen.  
De diagnostische mogelijkheden zijn beperkter dan bij een verwijzing naar de klinisch geriater. De SO adviseert over diagnostiek, behandeling, preventie en prognostiek bij de vragen over:

- Zorg of opname
- Somatische of psychogeriatrische indicatie
- Wel/niet diagnostiek of behandelen
- Probleemanalyse bij multimorbiditeit en verminderde zelfredzaamheid
- Mobiliteitsproblemen, vallen en valpreventie
- Dementie, geheugenproblemen, hallucinaties en verwardheid
- Gedragsproblemen en stemmingsstoornissen
- Late gevolgen van CVA (‘onzichtbare’ gevolgen)
- Chronische progressieve neurologische ziekten ( MS, M. Parkinson, ALS)
- Palliatieve terminale zorg
- Decubitus en wondbehandeling
- Ondervoeding
- Polyfarmacie
- Wils(on)bekwaamheid

De huisarts beslist of een telefonische consultatie volstaat dan wel een huisbezoek (visite) van de SO. Bij een aanvraag voor een huisbezoek wordt een brief gefaxt naar de betreffende SO. Bij urgente problemen moet gebeld worden.

**Hagro Leusden / Leusderveld**Verpleeghuis: Lisidunahof, Lisidunalaan 18, 3833 BS Leusden  
Verzorgingshuis: ’t Hamersveld (Leusden) / Sint Joseph (Achterveld)  
Specialist Ouderengeneeskunde: Irene Heemstra  
Tel: 033 432 61 00  
Fax: 033 432 61 02

---

## Specialistische zorg › Bariatrie

### Bariatrie Slotervaart Ziekenhuis

- Oude categorie: Specialistische zorg › Bariatrie
- Laatst gewijzigd: 2014-07-26
- Origineel: https://sociaalleusden.nl/specialistische-zorg/bariatrie/bariatrie-slotervaart-ziekenhuis

**Slotervaart Ziekenhuis**  
Louwesweg 6  
1066 EC  Amsterdam  
Postbus 90440  
1006 BK  Amsterdam  
Tel: 020 – 512 46 66  
[bariatrie@slz.nl](mailto:bariatrie@slz.nl "bariatrie@slz.nl")

---

### Centrum voor Obesitas Leeuwarden

- Oude categorie: Specialistische zorg › Bariatrie
- Laatst gewijzigd: 2014-07-26
- Origineel: https://sociaalleusden.nl/specialistische-zorg/bariatrie/centrum-voor-obesitas-leeuwarden

Onder andere gastric bypass

[www.centrumvoorobesitasnederland.nl](http://www.centrumvoorobesitasnederland.nl "www.centrumvoorobesitasnederland.nl")058-2866969

---

### Nederlandse Obesitas Klinieken

- Oude categorie: Specialistische zorg › Bariatrie
- Laatst gewijzigd: 2014-07-26
- Origineel: https://sociaalleusden.nl/specialistische-zorg/bariatrie/nederlandse-obesitas-klinieken

NOK Nieuwegein  
i.s.m. St Antonius Ziekenhuis Nieuwegein  
Zoomstede 17  
3431 HK Nieuwegein  
Tel 030 30 35 363  
Fax 030 30 35 373  
ma t/m vr van 8:30 tot 17:00 uur

---

### Nederlandse Obesitaskliniek Hilversum

- Oude categorie: Specialistische zorg › Bariatrie
- Laatst gewijzigd: 2014-07-26
- Origineel: https://sociaalleusden.nl/specialistische-zorg/bariatrie/nederlandse-obesitaskliniek-hilversum

[www.obesitaskliniek.nl](http://www.obesitaskliniek.nl "www.obesitaskliniek.nl")

088-8832444

---

## Specialistische zorg › Orthopedie

### Annatommie

- Oude categorie: Specialistische zorg › Orthopedie
- Laatst gewijzigd: 2014-07-26
- Origineel: https://sociaalleusden.nl/specialistische-zorg/orthopedie/annatommie

Softwareweg 5  
3821 BN Amersfoort  
T 088 022 0610  
[info@annatommie.nl](mailto:info@annatommie.nl)

Openingstijden: 8:00 – 17:30 uur (maandag t/m vrijdag)

Orthopedische spreekuren, in Amersfoort tevens met Neuroloog. Beschikking over o.a. Open MRI, voor kinderen en claustrofobische patiënten.

Voor artsen/specialisten is annatommie bereikbaar op een speciale telefoonlijn voor intercollegiaal (spoed) overleg. U kunt bellen naar 0800-2662866

**Algemeen**  
Afspraak binnen 5 dagen  
Orthopedisch spreekuur bij orthopedisch chirurg, operatie, röntgen, echografie, MRI, fysiotherapie, sport en medische fitness onder één dak

**Soorten spreekuren**

- Algemeen spreekuur met orthopedisch chirurg op alle vestigingen mogelijk (en/of met een neuroloog in Amersfoort)

Spreekuren per gewrichtsklacht. Bij onderstaande spreekuren bieden wij (op verzoek van uw verwijzer) ook een combinatie spreekuur aan, waarbij de medisch specialist gezamenlijk met een fysio-manueel therapeut uw klacht beoordeelt.

- Knieklachten
- Voet/enkelklachten
- Heupklachten
- Schouderklachten
- Rug/nekklachten
- Sportblessures

---

### NedSpine

- Oude categorie: Specialistische zorg › Orthopedie
- Laatst gewijzigd: 2014-07-26
- Origineel: https://sociaalleusden.nl/specialistische-zorg/orthopedie/nedspine

Pascalstraat 21, 6716 AZ Ede  
Postbus 525, 6710 BM Ede  
Tel: 0318-439280  
Fax: 0318-439289  
[info@nedspine.nl](mailto:info@nedspine.nl)

De belangrijkste rugaandoeningen die door NedSpine worden behandeld zijn:

- Hernia
- Nekhernia
- Kanaalstenose
- Spondylolisthesis
- ischias

Bij de behandeling van deze rugaandoeningen maakt NedSpine gebruik van minimaal invasieve technieken oftewel sleutelgatchirurgie.

---

## Thuiszorg

### Verpleeg Collectief particuliere thuiszorg

- Oude categorie: Thuiszorg
- Laatst gewijzigd: 2022-08-24
- Origineel: https://sociaalleusden.nl/thuiszorg/verpleeg-collectief-particuliere-thuiszorg

Verpleeg Collectief particuliere thuiszorg is  opgericht in 1989  door een aantal [BIG geregistreerde](https://www.bigregister.nl/) verpleegkundigen die werkzaam waren in de particuliere thuiszorg.  
Het Verpleeg Collectief faciliteert en organiseert thuiszorg voor chronisch zieken, mensen met dementie als de ziekte van Alzheimer, thuis revaliderenden en mensen die in de terminale fase van hun leven verkeren. Onze organisatie werkt uitsluitend met gediplomeerde verpleegkundigen niveau 4 & 5 en verzorgenden Individuele Gezondheidszorg, niveau 3. Al  meer dan 30 jaar  organiseert het Verpleeg Collectief professionele zorg thuis.

Contactinformatie:

E: [info@verpleegcollectief.nl](mailto:info@verpleegcollectief.nl)

Tel: 030 – 743 77 47

[www.verpleegcollectief.nl](http://www.verpleegcollectief.nl/)

---

### Zuster Jansen Thuiszorg

- Oude categorie: Thuiszorg
- Laatst gewijzigd: 2020-02-25
- Origineel: https://sociaalleusden.nl/thuiszorg/zuster-jansen-thuiszorg

**Zuster
Jansen Thuiszorg**

Zuster
Jansen is een thuiszorgorganisatie die met regionale teams, landelijk actief is
met een breed zorgaanbod, aansluitend op de behoefte van veel ouderen.
Uiteraard zijn wij ook actief in de gemeente Leusden. Meer informatie kunt u [hier](https://www.zusterjansen.nl/werkgebied/particuliere-thuiszorg-leusden/) vinden.

**Zorgaanbod:**

Zuster
Jansen is gespecialiseerd in [24-uurs zorg](https://www.zusterjansen.nl/24-uurs-zorg). Dankzij
24-uurs zorg kunt u (of uw naaste) ondanks een grote zorgbehoefte gewoon thuis
blijven wonen. Een verhuizing naar een zorginstelling is daarom niet
nodig.

Waarvoor u
ook bij Zuster Jansen terecht kunt:

- 5-uurs zorg
- 12-uurs zorg
- Thuiszorg bij Alzheimer
- Passende thuiszorg bij dementie
- Nachtzorg
- Waaknachten
- Overbruggingszorg
- Terminale thuiszorg
- Palliatieve zorg

Ook bij
herstel na een operatie, verzorging in de terminale fase of om de mantelzorger
te ontlasten, helpt Zuster Jansen.

**Contactgegevens Zuster Jansen:**

Wilt u
meer weten over de zorg die wij bieden? Neem dan contact op via:

Telefoonnummer:
020 20 91 426

E-mailadres:
info@zusterjansen.nl

Website: [www.zusterjansen.nl](http://www.zusterjansen.nl)

---

## Verpleeg- en verzorgingshuizen

### Abrona

- Oude categorie: Verpleeg- en verzorgingshuizen
- Laatst gewijzigd: 2014-01-19
- Origineel: https://sociaalleusden.nl/verpleeg-en-verzorgingshuizen/abrona

|  |  |
| --- | --- |
| Woonvoorziening de Waterlinie(lichte tot matige verstandelijke beperking) | Waterlinie 2-4  3831 SR Leusden  T 088 201 79 90  E waterlinie@abrona.nl |
| Woonvoorziening de Stegel(lichte tot matige verstandelijke beperking) | Stijgbeugel 32  3833 XE Leusden  T 088 201 80 10 / (033) 432 19 67  E destegel1@abrona.nl  E destegel2@abrona.nl |
| Asschatterweg(45+ / functioneel oud) | Asschatterweg 32a  3831 JR Leusden  T 088 201 79 70 |

---

### Boerderij Groot Schutterhoef

- Oude categorie: Verpleeg- en verzorgingshuizen
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/verpleeg-en-verzorgingshuizen/boerderij-groot-schutterhoef

|  |  |
| --- | --- |
| Adres | Arnhemseweg 23, 3832 GH Leusden |
| Tel | 030 – 602 33 75 |
| Opmerkingen | Philadelphia Zorg Midden  -Woonvoorziening voor verstandelijk gehandicapten |

---

### Psychogeriatrisch zorgcentrum Lisidunahof

- Oude categorie: Verpleeg- en verzorgingshuizen
- Laatst gewijzigd: 2014-07-24
- Origineel: https://sociaalleusden.nl/verpleeg-en-verzorgingshuizen/psychogeriatrisch-zorgcentrum-lisidunahof

|  |  |
| --- | --- |
| Mobiel | 033 – 432 6100 |
| Privé | Lisidunalaan 18, 3833 BS Leusden |
| Opmerkingen | Beweging 3.0  -Verpleeghuis  -ZZP 5, 7, 8 en 9 met behandeling  -Beginfase dementie ook geschikt  -Ook expertise met jonge mensen |

---

### Verpleeghuis de Lichtenberg

- Oude categorie: Verpleeg- en verzorgingshuizen
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/verpleeg-en-verzorgingshuizen/verpleeghuis-de-lichtenberg

|  |  |
| --- | --- |
| Mobiel | 033 – 469 61 00 |
| Privé | Utrechtseweg 293, 3818 EH Amersfoort |
| Opmerkingen | Beweging 3.0  -ZZP 5 t/m 10 |

---

### Woonzorgcentrum ’t Hamersveld

- Oude categorie: Verpleeg- en verzorgingshuizen
- Laatst gewijzigd: 2014-01-18
- Origineel: https://sociaalleusden.nl/verpleeg-en-verzorgingshuizen/woonzorgcentrum-t-hamersveld

|  |  |
| --- | --- |
| Mobiel | 033 – 469 2800 |
| Privé | Asschatterweg 24a, 3831 JR Leusden |
| Opmerkingen | Beweging 3.0  -Verzorgingshuis waarbinnen ook verpleeghuiszorg  -Aanleunwoningen  -ZZP 3, 4 en 6 zonder behandeling  -ZZP 6 en 8 met behandeling |

---

## Zwangerschap

### Verloskundigenpraktijk LUNA

- Oude categorie: Zwangerschap
- Laatst gewijzigd: 2014-07-30
- Origineel: https://sociaalleusden.nl/zwangerschap/verloskundigenpraktijk-luna

Centrum voor Jeugd en Gezin  
De Mulderij 1  
3831 NV Leusden  
[info@praktijkluna.nl](mailto:info@praktijkluna.nl "info@praktijkluna.nl")  
[www.praktijkluna.nl](http://www.praktijkluna.nl "www.praktijkluna.nl")

Telefoon: 033-82 000 62  
Spoednummer: 06-55 37 36 85

Op de praktijk zijn wij telefonisch bereikbaar op maandag, woensdag en vrijdag tussen 09:00 en 12:30u.

LUNA is een maatschap met drie vaste verloskundigen; Susan Brouwer, Anne van Dijk en Nikki van den Heuvel. Sjoeke Tamminga is waarnemend verloskundige bij LUNA. Mara Koeslag is onze assistente.

Wij houden spreekuur op twee locaties:  
CJG, De Mulderij 1, 3831 NV, Leusden  
GZC De Heelkom, Walter van Amersfoortstraat 36, 3791 AR, Achterveld

---

## Vaste pagina's van de oude site

### Welkomstpagina Sociaal Leusden (laatst gewijzigd 2023-03-07)

Welkom op de site van Sociaal Leusden, de online Sociale Kaart voor Leusden en Achterveld. De site wordt onderhouden door D. Schaap, huisarts in praktijk Tolgaarde te Leusden.

**[>>Inloggen](http://sociaalleusden.nl/wp-login.php)            [>>Registreren](http://sociaalleusden.nl/wp-login.php?action=register)**

**Heb ik een account nodig?**Nee. Het grootste gedeelte is zonder account te bekijken. Mét account krijgt u echter de mogelijkheid om een reactie te plaatsen bij een vermelding in de sociale kaart. Bent u huisarts? Mail na registratie naar [info@sociaalleusden.nl](mailto:info@sociaalleusden.nl "info@sociaalleusden.nl"). Uw account wordt dan aangepast voor toegang tot afgeschermde vermeldingen (o.a. CPA’s, huisartsenposten), en u krijgt de mogelijkheid nieuwe vermeldingen toe te voegen.

---

### Sociaal Leusden (laatst gewijzigd 2023-03-07)

Welkom op de site van Sociaal Leusden, de online Sociale Kaart voor Leusden en Achterveld. De site wordt onderhouden door D. Schaap, huisarts in praktijk Tolgaarde te Leusden.

**[>>Inloggen](http://sociaalleusden.nl/wp-login.php)            [>>Registreren](http://sociaalleusden.nl/wp-login.php?action=register)**

**Heb ik een account nodig?**Nee. Het grootste gedeelte is zonder account te bekijken. Mét account krijgt u echter de mogelijkheid om een reactie te plaatsen bij een vermelding in de sociale kaart. Bent u huisarts? Mail na registratie naar [info@sociaalleusden.nl](mailto:info@sociaalleusden.nl "info@sociaalleusden.nl"). Uw account wordt dan aangepast voor toegang tot afgeschermde vermeldingen (o.a. CPA’s, huisartsenposten), en u krijgt de mogelijkheid nieuwe vermeldingen toe te voegen.

---
