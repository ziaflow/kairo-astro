import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { services } from '@/data/services';

const staticPaths = ['/', '/about', '/booking', '/contact', '/pricing', '/privacy', '/services', '/terms', '/blog'];

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');
  const paths = [
    ...staticPaths,
    ...services.map(({ slug }) => `/services/${slug}`),
    ...posts.map(({ id }) => `/${id}`),
  ];
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site)}</loc><changefreq>weekly</changefreq></url>`)
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
