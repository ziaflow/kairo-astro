import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\n${import.meta.env.PUBLIC_SITE_INDEXABLE === 'true' ? 'Allow: /\nDisallow: /customers\nDisallow: /journal' : 'Disallow: /'}\n\nSitemap: ${new URL('/sitemap.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
