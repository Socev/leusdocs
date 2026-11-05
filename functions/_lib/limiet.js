// Eenvoudige limiet per IP per uur via de Cache API (best effort; per datacenter). Gedeeld door de openbare meldroutes.
export async function binnenLimiet(soort, ip, maxPerUur) {
  try {
    const cache = caches.default;
    const uur = Math.floor(Date.now() / 3600e3);
    const key = new Request(`https://leusdocs.nl/__limiet/${soort}/${encodeURIComponent(ip)}/${uur}`);
    const hit = await cache.match(key);
    const n = hit ? Number(await hit.text()) : 0;
    if (n >= maxPerUur) return false;
    await cache.put(key, new Response(String(n + 1), { headers: { 'cache-control': 'max-age=3600' } }));
    return true;
  } catch {
    return true;
  }
}

export function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}
