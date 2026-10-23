import type { NavLink } from '@/interface';
export const navLinks: NavLink[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Blog', href: 'https://ziaflow.com/blog' },
  { label: 'About', href: 'https://ziaflow.com/about' },
  { label: 'Contact', href: 'https://ziaflow.com/contact' },
];
export const menuLinks: NavLink[] = [{ label: 'Home', href: '/' }, ...navLinks];
export const routeLabels: Record<string, string> = { '/': 'Home' };
