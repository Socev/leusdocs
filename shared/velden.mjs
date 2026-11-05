// Gedeelde definities: gebruikt door de site (build) én door /beheer (formulieren + Pages Function).
// Wijzig je hier een categorie, dan verandert die overal.

// Vijf groepen = vijf tabbladen op /sociale-kaart (GGZ staat voorop en is het standaardtabblad).
// Een categorie hoort bij precies één groep. `kort` is het tabbladlabel op een smal scherm.
// Oude links met ?groep=zorg komen via OUDE_GROEPEN op het tabblad Medisch & diagnostiek uit.
export const GROEPEN = [
  {
    id: 'ggz',
    label: 'GGZ',
    kort: 'GGZ',
    omschrijving: 'Psychische hulp voor volwassenen en jeugd, verslavingszorg en hulplijnen — de kaart voor de POH-GGZ en verwijzende huisarts.',
    categorieen: [
      'GGZ volwassenen',
      'GGZ jeugd',
      'Verslaving',
    ],
  },
  {
    id: 'sociaal',
    label: 'Sociaal domein & welzijn',
    kort: 'Sociaal',
    omschrijving: 'Welzijn en maatschappelijk werk, jeugd en gezin, gemeente en WMO, werk, inkomen en schulden, zingeving.',
    categorieen: [
      'Welzijn & maatschappelijk werk',
      'Jeugd & gezin',
      'Gemeente & WMO',
      'Werk, inkomen & schulden',
      'Zingeving & levensvragen',
    ],
  },
  {
    id: 'paramedisch',
    label: 'Paramedisch',
    kort: 'Paramedisch',
    omschrijving: 'Fysio- en oefentherapie, diëtetiek, logopedie, ergotherapie en andere paramedici in en om Leusden.',
    categorieen: [
      'Fysiotherapie & oefentherapie',
      'Diëtetiek, logopedie & ergotherapie',
      'Paramedisch',
    ],
  },
  {
    id: 'thuiszorg',
    label: 'Thuiszorg, ouderen & palliatief',
    kort: 'Thuiszorg',
    omschrijving: 'Thuiszorg en mantelzorg, ouderenzorg, verpleeg- en verzorgingshuizen, palliatieve zorg en overlijden.',
    categorieen: [
      'Thuiszorg & mantelzorg',
      'Ouderen',
      'Verpleeg- en verzorgingshuizen',
      'Palliatieve zorg & overlijden',
    ],
  },
  {
    id: 'medisch',
    label: 'Medisch & diagnostiek',
    kort: 'Medisch',
    omschrijving: 'Huisartsen, apotheken, tandartsen, verloskunde, ziekenhuizen, laboratorium en diagnostiek, en overige aanbieders.',
    categorieen: [
      'Huisartsen',
      'Apotheken',
      'Tandartsen',
      'Zwangerschap & geboorte',
      'Ziekenhuis & specialistische zorg',
      'Laboratorium & diagnostiek',
      'Overig',
    ],
  },
];

// Groep-id's van vóór november 2026 (twee tabbladen) → huidige groep, zodat oude links blijven werken.
export const OUDE_GROEPEN = { zorg: 'medisch' };

export const CATEGORIEEN = GROEPEN.flatMap((g) => g.categorieen);

// Verfijning binnen de groep GGZ; een organisatie kan meerdere niveaus hebben.
export const GGZ_NIVEAUS = ['B-GGZ', 'S-GGZ', 'Overig'];

export function groepVanCategorie(categorie) {
  return GROEPEN.find((g) => g.categorieen.includes(categorie)) ?? GROEPEN[GROEPEN.length - 1];
}

export const VERWIJSWIJZEN = [
  'Rechtstreeks (patiënt meldt zichzelf aan)',
  'Via ZorgDomein',
  'Verwijsbrief huisarts',
  'Via gemeente / WMO-loket',
  'Onbekend',
];

export const AFZENDERS = [
  'HAGRO Leusden',
  'Apotheek',
  'POH-GGZ',
  'Huisartsenpraktijk',
  'Overig',
];

// Veldbeschrijvingen voor het beheerformulier (type: text | textarea | url | email | select | tags | date | checkbox | links | bestand)
export const VELDEN = {
  'sociale-kaart': [
    { naam: 'naam', label: 'Naam organisatie', type: 'text', verplicht: true },
    { naam: 'categorie', label: 'Categorie', type: 'select', opties: CATEGORIEEN, verplicht: true },
    { naam: 'ggz_niveau', label: 'GGZ-niveau (alleen voor het tabblad GGZ; meerdere mogelijk)', type: 'multi', opties: GGZ_NIVEAUS },
    { naam: 'omschrijving', label: 'Korte omschrijving (1–2 zinnen)', type: 'textarea', verplicht: true },
    { naam: 'website', label: 'Website', type: 'url' },
    { naam: 'telefoon', label: 'Telefoon', type: 'text' },
    { naam: 'email', label: 'E-mail', type: 'email' },
    { naam: 'adres', label: 'Adres', type: 'text' },
    { naam: 'doelgroep', label: 'Doelgroep', type: 'text' },
    { naam: 'verwijzen', label: 'Hoe verwijzen', type: 'select', opties: VERWIJSWIJZEN },
    { naam: 'wachttijd', label: 'Wachttijd (indicatie)', type: 'text' },
    { naam: 'tags', label: 'Trefwoorden (komma-gescheiden)', type: 'tags' },
    { naam: 'concept', label: 'Niet geverifieerd (toont een label op de site)', type: 'checkbox' },
    { naam: 'bijgewerkt', label: 'Laatst gecontroleerd op', type: 'date' },
    { naam: 'bron', label: 'Bron (bv. oude vermelding op sociaalleusden.nl)', type: 'url' },
    // Aanmeldstop: ook openbaar te melden via de knop op /sociale-kaart (functions/api/aanmeldstop.js)
    { naam: 'aanmeldstop', label: 'Heeft aanmeldstop (neemt geen nieuwe patiënten aan; alleen GGZ)', type: 'checkbox' },
    { naam: 'aanmeldstop_vanaf', label: 'Aanmeldstop vanaf', type: 'date' },
    { naam: 'aanmeldstop_toelichting', label: 'Toelichting aanmeldstop (bv. "alleen voor VGZ/Zilveren Kruis", "tot 1 januari")', type: 'text' },
    { naam: 'aanmeldstop_gemeld', label: 'Aanmeldstop-status gemeld op', type: 'date' },
  ],
  mededelingen: [
    { naam: 'titel', label: 'Titel', type: 'text', verplicht: true },
    { naam: 'datum', label: 'Datum', type: 'date', verplicht: true },
    { naam: 'afzender', label: 'Afzender', type: 'select', opties: AFZENDERS, verplicht: true },
    { naam: 'samenvatting', label: 'Samenvatting (1 zin, voor de homepage)', type: 'text' },
    { naam: 'links', label: 'Links', type: 'links' },
    { naam: 'bestand', label: 'Bijlage (PDF, max 5 MB)', type: 'bestand' },
    { naam: 'verloopt', label: 'Verloopt op (daarna niet meer op de homepage)', type: 'date' },
  ],
  paginas: [
    { naam: 'titel', label: 'Titel', type: 'text', verplicht: true },
    { naam: 'bijgewerkt', label: 'Laatste revisie', type: 'date' },
  ],
};

// Waar de bestanden van elke collectie staan (relatief t.o.v. de repo-root)
export const COLLECTIES = {
  'sociale-kaart': { map: 'content/sociale-kaart', label: 'Sociale kaart', body: 'Toelichting (optioneel)' },
  mededelingen: { map: 'content/mededelingen', label: 'Mededelingen', body: 'Bericht' },
  paginas: { map: 'content/paginas', label: "Pagina's", body: 'Inhoud', vast: true },
};

// Soorten van 'Meld een wijziging' (openbare knop op elke kaart, POST /api/wijziging). De melding wordt NIET
// gepubliceerd: hij komt in de lijst Meldingen in /beheer (Cloudflare KV, binding MELDINGEN) en een beheerder past de
// vermelding zelf aan. Sleutel = wat de functie opslaat, label = wat de melder ziet.
export const WIJZIGING_SOORTEN = [
  { id: 'adres', label: 'Adres gewijzigd' },
  { id: 'opgeheven', label: 'Bestaat niet meer' },
  { id: 'contact', label: 'Contactgegevens (telefoon, e-mail, website)' },
  { id: 'info', label: 'Andere informatie' },
];

// Aanmeldstops gelden alleen voor het tabblad GGZ (knop, label en filter staan alleen daar; /api/aanmeldstop weigert de rest).
export const AANMELDSTOP_GROEP = 'ggz';

// Velden die iedereen (zonder inloggen) mag aanpassen via /api/aanmeldstop
export const AANMELDSTOP_VELDEN = ['aanmeldstop', 'aanmeldstop_vanaf', 'aanmeldstop_toelichting', 'aanmeldstop_gemeld'];

export function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' en ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'item';
}
