import { site } from '@/data/site';

export const hero = {
  lines: [{ text: 'Engineer growth.' }, { text: 'Remove the', accent: 'friction.' }],
  intro: `${site.name} builds high-converting websites, automation, search strategy, and custom software for businesses ready to move faster.`,
};

export const logosSection = {
  label: 'Trusted by teams who would rather hear it first',
};

export const manifesto = {
  eyebrow: `Why ${site.name}`,
  parts: [
    { text: 'Growth stalls when your website, marketing, and operations work as separate systems.' },
    { image: '/images/manifesto-face.jpg' },
    { text: 'We connect the pieces, remove manual bottlenecks,' },
    { image: '/images/manifesto-city.jpg' },
    { text: 'and build a clear path from attention to action.' },
    { image: '/images/manifesto-hand.jpg' },
    { text: 'No disconnected tactics. One measurable growth system.' },
  ] as ({ text: string } | { image: string })[],
  hint: 'Drag across the line, or tap it',
};

export const productStory = {
  title: ['Signal,', 'not noise.'],
  heroImage: '/images/journal-face.jpg',
  tiles: [
    'gallery-corridor',
    'journal-noise',
    'gallery-street',
    'manifesto-city',
    'gallery-desk',
    'journal-light',
    'gallery-tower',
    'product-reveal',
    'journal-blur',
    'gallery-road',
    'capability-lights',
    'journal-swirl',
    'about-city',
    'gallery-window',
  ].map((name) => `/images/${name}.jpg`),
  acts: [
    {
      tab: 'Collect',
      title: 'Every signal, in one place.',
      body: 'Metrics, tickets, calls and docs stream in from the tools your team already uses.',
      count: 12480,
      unit: 'signals today',
    },
    {
      tab: 'Filter',
      title: 'The noise, filtered out.',
      body: `${site.name} knows what normal looks like for each number, so routine movement stays quiet.`,
      count: 37,
      unit: 'real changes',
    },
    {
      tab: 'Flag',
      title: 'The moment, flagged.',
      body: 'One change worth acting on, sent to the person who owns it, with the cause attached.',
      count: 1,
      unit: 'brief sent',
    },
  ],
};

export const capabilities = {
  title: 'Everything your growth system needs.',
  detect: {
    title: 'Measures what converts',
    body: 'Track booked calls, qualified forms, sales, and revenue—not vanity metrics or disconnected traffic reports.',
    label: 'Qualified leads rising',
  },
  connect: {
    title: 'Connects your stack',
    body: 'Bring websites, CRM, advertising, analytics, email, and cloud systems into one reliable operating flow.',
    image: '/images/capability-lights.jpg',
  },
  rank: {
    title: 'Prioritizes impact',
    body: 'Focus the roadmap on the work most likely to improve revenue, efficiency, or customer experience.',
    items: [
      { title: 'High-intent search visibility', value: 'SEO' },
      { title: 'Lead response and follow-up', value: 'Automation' },
      { title: 'Booking and checkout friction', value: 'CRO' },
    ],
  },
  brief: {
    title: 'Makes the next move clear',
    body: 'You get a practical roadmap with the scope, priorities, measurement plan, and owner for each next step.',
    text: 'Priority: shorten lead response time. Connect the website form to the CRM, send an instant confirmation, and route qualified inquiries to the right owner.',
  },
  privacy: {
    title: 'Built for serious operations',
    body: 'Secure cloud architecture, resilient integrations, accessible interfaces, and data practices designed for long-term ownership.',
  },
};

export const howItWorks = {
  title: 'A direct path from problem to progress.',
  watchHint: 'Drag the line',
};

export const storiesSection = {
  title: 'Teams that saw it coming.',
  body: `Freight networks, labs and payment companies use ${site.name} to hear about problems while they are still small.`,
  cta: { label: 'All customer stories', href: '/customers' },
};

export const proofSection = {
  title: 'In their own words.',
};

export const closingCta = {
  title: 'Ready to engineer your growth?',
  body: 'Book a transparent technical consultation. No sales pressure—just a practical roadmap for the next useful improvement.',
};
