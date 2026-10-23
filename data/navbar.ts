import type { NavLink } from '@/interface';
export const navLinks: NavLink[] = [
  { label: 'The Sprint', href: '/#sprint' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Insights', href: 'https://ziaflow.com/blog' },
];
export const menuLinks: NavLink[] = [{ label: 'Home', href: '/' }, ...navLinks];
export const routeLabels: Record<string, string> = { '/': 'Home' };
