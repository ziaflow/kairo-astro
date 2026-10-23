import type { SiteConfig } from '@/interface';

export const site: SiteConfig = {
  name: 'ZiaFlow',
  legalName: 'ZiaFlow, LLC',
  url: 'https://ziaflow.com',
  title: 'ZiaFlow — Your Partner in Digital Transformation',
  description:
    'AI-driven SEO, custom software and conversion optimization for Arizona businesses. Call (602) 834-4239 to build a faster path to growth.',
  email: 'info@ziaflow.com',
  careersEmail: 'info@ziaflow.com',
  accent: '#a22a36',
  cta: {
    primary: { label: 'Book consultation', href: '/booking' },
    secondary: { label: 'Call (602) 834-4239', href: 'tel:+16028344239' },
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ziaflow/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/ziaflow', icon: 'github' },
  ],
};
