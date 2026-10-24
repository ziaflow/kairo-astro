import type { Step } from '@/interface';
import { site } from '@/data/site';

export const steps: Step[] = [
  {
    verb: 'Discover',
    tag: 'Step 01',
    visual: 'connect',
    title: 'Find the real constraint.',
    body: `${site.name} reviews the customer journey, technology, data, and operating workflow to identify what is actually slowing growth.`,
    points: [
      'Business and customer goals',
      'Technical and marketing audit',
      'Clear success measures',
    ],
    image: '/images/step-connect.jpg',
  },
  {
    verb: 'Build',
    tag: 'Step 02',
    visual: 'watch',
    title: 'Create the shortest useful system.',
    body: 'We build the website, automation, campaign, or custom software around the agreed outcome and the tools you already rely on.',
    points: [
      'Conversion-first implementation',
      'Secure integrations',
      'Fast, accessible experiences',
    ],
    image: '/images/step-watch.jpg',
  },
  {
    verb: 'Optimize',
    tag: 'Step 03',
    visual: 'brief',
    title: 'Measure, learn, and improve.',
    body: 'After launch, we track the outcomes that matter and improve the system with evidence instead of guesswork.',
    points: [
      'Transparent reporting',
      'Conversion and revenue attribution',
      'Ongoing support',
    ],
    image: '/images/step-brief.jpg',
  },
];

export const briefPreview = {
  title: `${site.name} roadmap`,
  meta: 'Next useful action',
  priority: 'Priority',
  text: 'Connect the website inquiry flow to the CRM, confirm receipt immediately, and route qualified leads to the right owner.',
  actions: { secondary: 'See evidence', primary: 'Start build' },
};
