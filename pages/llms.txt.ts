import type { APIRoute } from 'astro';
import { services } from '@/data/services';

export const GET: APIRoute = ({ site }) => {
  const serviceLinks = services.map(({ name, slug }) => `- [${name}](${new URL(`/services/${slug}`, site)})`).join('\n');
  const body = `# ZiaFlow\n\nZiaFlow is a Phoenix-based digital transformation partner providing custom development, automation, SEO, PPC, cloud, analytics, and conversion optimization.\n\n## Core pages\n\n- [Home](${site})\n- [Services](${new URL('/services', site)})\n- [About](${new URL('/about', site)})\n- [Contact](${new URL('/contact', site)})\n- [Blog](${new URL('/blog', site)})\n\n## Services\n\n${serviceLinks}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
