import { site } from '@/data/site';
import type { FooterGroup } from '@/interface';

export const footerGroups: FooterGroup[] = [
  {
    title: 'Services',
    links: [
      { label: 'SEO', href: '/services/seo' },
      { label: 'Automation & AI', href: '/services/automation' },
      { label: 'Web development', href: '/services/web-development' },
      { label: 'PPC management', href: '/services/ppc' },
    ],
  },
  {
    title: 'ZiaFlow',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export const footerCopy = {
  newsletter: {
    title: 'Practical ideas for smarter growth systems.',
    label: 'Work email',
    placeholder: 'you@company.com',
    note: 'No spam. Unsubscribe in one click.',
    loading: 'Subscribing...',
    success: 'Thanks — you are on the list.',
    error: 'That email looks incomplete. Try name@company.com.',
  },
  followTitle: 'Follow',
  backToTop: 'Back to top',
  legal: `© ${new Date().getFullYear()} ${site.legalName} · Phoenix, Arizona`,
};
