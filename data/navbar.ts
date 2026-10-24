import type { NavLink } from '@/interface';

export const navLinks: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const menuLinks: NavLink[] = [{ label: 'Home', href: '/' }, ...navLinks];

export const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/services': 'Services',
  '/pricing': 'Pricing',
  '/blog': 'Blog',
  '/about': 'About',
  '/contact': 'Contact',
};
