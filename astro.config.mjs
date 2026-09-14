import { defineConfig } from 'astro/config';

// Statische site; Cloudflare Pages serveert `dist/` en pakt `functions/` automatisch op.
export default defineConfig({
  site: 'https://www.leusdocs.nl',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
