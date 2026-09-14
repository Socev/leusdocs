import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIEEN, VERWIJSWIJZEN, AFZENDERS } from '../shared/velden.mjs';

// Schema's: bij `npm run build` wordt elk bestand in content/ hiertegen gecontroleerd.
// Klopt een veld niet, dan faalt de build met een duidelijke melding (bestand + veld).
// De live site blijft dan gewoon op de vorige versie staan.

const legeStringNaarUndefined = (v: unknown) => (typeof v === 'string' && v.trim() === '' ? undefined : v);

const socialeKaart = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/sociale-kaart' }),
  schema: z.object({
    naam: z.string().min(1),
    categorie: z.enum(CATEGORIEEN as [string, ...string[]]),
    omschrijving: z.string().min(1),
    website: z.preprocess(legeStringNaarUndefined, z.string().url().optional()),
    telefoon: z.preprocess(legeStringNaarUndefined, z.string().optional()),
    email: z.preprocess(legeStringNaarUndefined, z.string().email().optional()),
    adres: z.preprocess(legeStringNaarUndefined, z.string().optional()),
    doelgroep: z.preprocess(legeStringNaarUndefined, z.string().optional()),
    verwijzen: z.preprocess(legeStringNaarUndefined, z.enum(VERWIJSWIJZEN as [string, ...string[]]).optional()),
    wachttijd: z.preprocess(legeStringNaarUndefined, z.string().optional()),
    tags: z.array(z.string()).default([]),
    concept: z.boolean().default(false),
    bijgewerkt: z.coerce.date().optional(),
    bron: z.preprocess(legeStringNaarUndefined, z.string().url().optional()),
  }),
});

const mededelingen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/mededelingen' }),
  schema: z.object({
    titel: z.string().min(1),
    datum: z.coerce.date(),
    afzender: z.enum(AFZENDERS as [string, ...string[]]),
    samenvatting: z.preprocess(legeStringNaarUndefined, z.string().optional()),
    links: z.array(z.object({ titel: z.string(), url: z.string().url() })).default([]),
    bestand: z.preprocess(legeStringNaarUndefined, z.string().optional()), // pad onder /bestanden/, bv. "2026-09-nieuwsbrief.pdf"
    verloopt: z.coerce.date().optional(),
  }),
});

const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/paginas' }),
  schema: z.object({
    titel: z.string().min(1),
    bijgewerkt: z.coerce.date().optional(),
  }),
});

export const collections = { 'sociale-kaart': socialeKaart, mededelingen, paginas };
