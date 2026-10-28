import type { CollectionEntry } from 'astro:content';
export const taxonomySlug = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9/]+/g, '-').replace(/^-|-$/g, '');
export function archives(posts: CollectionEntry<'blog'>[]) {
  const groups = new Map<string, { title: string; posts: CollectionEntry<'blog'>[] }>();
  for (const post of posts) {
    const terms = [...(post.data.category ? [['category', post.data.category]] : []), ...(post.data.tags ?? []).map(tag => ['tag', tag])];
    for (const [kind, title] of terms) {
      const key = `${kind}/${taxonomySlug(title)}`;
      if (!groups.has(key)) groups.set(key, { title, posts: [] });
      groups.get(key)!.posts.push(post);
    }
  }
  return groups;
}
