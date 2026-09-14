// Openbare JSON-export van elke collectie: /data/sociale-kaart.json, /data/mededelingen.json, /data/paginas.json
// Gebruikt door /beheer (overzichtslijst) en handig voor de Telegram-bot om te lezen wat er staat.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { COLLECTIES } from '../../../shared/velden.mjs';

export function getStaticPaths() {
  return Object.keys(COLLECTIES).map((collectie) => ({ params: { collectie } }));
}

export const GET: APIRoute = async ({ params }) => {
  const collectie = params.collectie as keyof typeof COLLECTIES;
  const items = await getCollection(collectie as any);
  const map = COLLECTIES[collectie].map;
  const data = items
    .map((i: any) => ({ id: i.id, pad: `${map}/${i.id}.md`, ...i.data, body: i.body ?? '' }))
    .sort((a: any, b: any) => String(a.naam ?? a.datum ?? a.titel).localeCompare(String(b.naam ?? b.datum ?? b.titel), 'nl'));
  return new Response(JSON.stringify({ collectie, aantal: data.length, items: data }, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
