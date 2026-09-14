// Gedeelde definities: gebruikt door de site (build) én door /beheer (formulieren + Pages Function).
// Wijzig je hier een categorie, dan verandert die overal.

// Twee groepen: GGZ & welzijn staat voorop (standaardtabblad op /sociale-kaart), de overige zorgverleners
// staan op een eigen tabblad. Een categorie hoort bij precies één groep.
export const GROEPEN = [
  {
    id: 'ggz',
    label: 'GGZ & welzijn',
    omschrijving: 'Psychische hulp, jeugd, verslaving, welzijn en het sociaal domein — de kaart voor de POH-GGZ en verwijzende huisarts.',
    categorieen: [
      'GGZ volwassenen',
      'GGZ jeugd',
      'Jeugd & gezin',
      'Verslaving',
      'Ouderen',
      'Welzijn & maatschappelijk werk',
      'Gemeente & WMO',
      'Werk, inkomen & schulden',
    ],
  },
  {
    id: 'zorg',
    label: 'Overige zorgverleners',
    omschrijving: 'Huisartsen, apotheken, paramedici, thuiszorg, palliatieve zorg, ziekenhuizen en diagnostiek in en om Leusden.',
    categorieen: [
      'Huisartsen',
      'Apotheken',
      'Tandartsen',
      'Fysiotherapie & oefentherapie',
      'Diëtetiek, logopedie & ergotherapie',
      'Paramedisch',
      'Zwangerschap & geboorte',
      'Thuiszorg & mantelzorg',
      'Verpleeg- en verzorgingshuizen',
      'Palliatieve zorg & overlijden',
      'Ziekenhuis & specialistische zorg',
      'Laboratorium & diagnostiek',
      'Overig',
    ],
  },
];

export const CATEGORIEEN = GROEPEN.flatMap((g) => g.categorieen);

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
    { naam: 'omschrijving', label: 'Korte omschrijving (1–2 zinnen)', type: 'textarea', verplicht: true },
    { naam: 'website', label: 'Website', type: 'url' },
    { naam: 'telefoon', label: 'Telefoon', type: 'text' },
    { naam: 'email', label: 'E-mail', type: 'email' },
    { naam: 'adres', label: 'Adres', type: 'text' },
    { naam: 'doelgroep', label: 'Doelgroep', type: 'text' },
    { naam: 'verwijzen', label: 'Hoe verwijzen', type: 'select', opties: VERWIJSWIJZEN },
    { naam: 'wachttijd', label: 'Wachttijd (indicatie)', type: 'text' },
    { naam: 'tags', label: 'Trefwoorden (komma-gescheiden)', type: 'tags' },
    { naam: 'concept', label: 'Nog te controleren (toont een label op de site)', type: 'checkbox' },
    { naam: 'bijgewerkt', label: 'Laatst gecontroleerd op', type: 'date' },
    { naam: 'bron', label: 'Bron (bv. oude vermelding op sociaalleusden.nl)', type: 'url' },
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

export function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' en ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'item';
}
