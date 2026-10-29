export interface ServicePage {
  slug: string;
  meta: { title: string; description: string };
  name: string;
  tagline: string;
  headline: string;
  intro: string;
  featuresTitle: string;
  features: { title: string; description: string; href?: string; linkLabel?: string }[];
  cta: string;
  ctaLabel: string;
  fit?: string;
  faqs?: { question: string; answer: string }[];
}

export const bookingUrl = 'https://outlook.office.com/book/ZiaFlowIntake@ziaflow.com/?ismsaljsauthenabled';

export const services: ServicePage[] = [
  {
    slug: 'automation',
    meta: {
      title: 'CRM & Lead Follow-Up Automation in Arizona',
      description:
        'Connect website inquiries, CRM records, and follow-up for your Arizona service business. Plan a defined automation project with ZiaFlow.',
    },
    name: 'Marketing Automation & AI',
    tagline: 'Automation & AI',
    headline: 'Lead follow-up automation',
    intro:
      'Connect your inquiries to the next action. ZiaFlow helps Arizona service businesses route website and phone inquiries, update CRM records, and coordinate follow-up around the way their team works.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Map the inquiry journey',
        description:
          'Identify inquiry sources, responsible people, response steps, and the points where follow-up stops.',
      },
      {
        title: 'Connect forms and CRM records',
        description:
          'Map and test the agreed fields and handoffs. Include duplicate prevention and a visible way to handle failed transfers.',
      },
      {
        title: 'Set follow-up and stop rules',
        description:
          'Configure acknowledgments, reminders, and scheduling steps. Stop automated nurture when someone replies, books, or opts out.',
      },
    ],
    cta: 'Discuss your lead workflow',
    fit: 'Businesses receiving inquiries across forms, phone calls, and disconnected tools, with no consistent owner or next step.',
    faqs: [
      {
        question: 'Can you help with AI phone reception?',
        answer:
          'We can assess phone intake, routine questions, booking, and human handoff. The scope depends on your phone system, available integrations, and the situations a person must handle.',
      },
    ],
    ctaLabel: 'Discuss your lead workflow',
  },
  {
    slug: 'cloud',
    meta: {
      title: 'Cloud Hosting & Application Infrastructure',
      description:
        'Plan cloud hosting, database access, backups, and deployment responsibilities for business applications with ZiaFlow in Phoenix.',
    },
    name: 'Cloud Solutions & Hosting',
    tagline: 'Cloud Solutions',
    headline: 'Cloud setup for business applications',
    intro:
      'Keep application hosting, data, and deployment responsibilities clear. We review your application requirements and scope configuration work for platforms such as AWS, Azure, and Supabase.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Review the application',
        description:
          'Document hosting needs, data flows, access requirements, and dependencies before selecting changes.',
      },
      {
        title: 'Configure and verify',
        description:
          'Implement the agreed deployment, database access, backup, and recovery configuration, with documented checks.',
      },
      {
        title: 'Define ongoing ownership',
        description:
          'Specify who manages accounts, costs, updates, monitoring, and incident response. Ongoing support is scoped separately.',
      },
    ],
    cta: 'Discuss your infrastructure',
    fit: 'Businesses that need a defined hosting setup, database integration, or migration plan for an existing application.',
    faqs: [
      {
        question: 'Does this include round-the-clock support?',
        answer:
          'Support hours, monitoring coverage, and response expectations must be agreed in the scope. A setup project does not automatically include ongoing operational support.',
      },
    ],
    ctaLabel: 'Discuss your infrastructure',
  },
  {
    slug: 'cro',
    meta: {
      title: 'Website Conversion Optimization in Phoenix',
      description:
        'Review website copy, forms, booking paths, and analytics with ZiaFlow. Identify friction and prioritize measurable conversion improvements.',
    },
    name: 'Conversion Rate Optimization',
    tagline: 'Conversion Rate Optimization',
    headline: 'Website conversion optimization',
    intro:
      'Find what gets between a useful visit and a genuine inquiry. We review service copy, navigation, forms, and booking paths alongside the analytics available for your website.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Verify the baseline',
        description: 'Check what conversion events actually count and identify test traffic or gaps in measurement.',
      },
      {
        title: 'Review the customer journey',
        description:
          'Look for unclear offers, missing information, mobile usability problems, and broken inquiry handoffs.',
      },
      {
        title: 'Prioritize and evaluate changes',
        description:
          'Make focused improvements and compare outcomes. Use controlled experiments when traffic and measurement can support them.',
      },
    ],
    cta: 'Discuss your conversion path',
    fit: 'Businesses with website traffic but unclear next steps, confusing forms, or conversion reports they cannot trust.',
    faqs: [
      {
        question: 'Do we need enough traffic for A/B testing?',
        answer:
          'Controlled tests need sufficient traffic and reliable measurement. At lower volumes, start with usability checks, customer feedback, and verified form behavior.',
      },
    ],
    ctaLabel: 'Discuss your conversion path',
  },
  {
    slug: 'ecommerce',
    meta: {
      title: 'Shopify & WooCommerce Development',
      description:
        'Shopify and WooCommerce development with catalog, checkout, inventory, and customer workflow integrations.',
    },
    name: 'Ecommerce Solutions',
    tagline: 'Ecommerce Solutions',
    headline: 'Ecommerce websites and integrations',
    intro:
      'We build and connect Shopify and WooCommerce stores around your catalog, checkout, inventory, and customer workflows. Scope and platform constraints are reviewed before development.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Custom Development',
        description: 'Tailored Shopify and WooCommerce stores that fit your brand.',
      },
      {
        title: 'System Integration',
        description: 'Map and test the agreed handoffs between your inventory, CRM, and marketing tools.',
      },
      {
        title: 'Conversion Optimization',
        description: 'Review product discovery and checkout paths for usability.',
      },
    ],
    cta: 'Plan your ecommerce project',
    ctaLabel: 'Plan your ecommerce project',
  },
  {
    slug: 'gmb-optimization',
    meta: {
      title: 'Google Business Profile Optimization in Phoenix',
      description:
        'Google Business Profile reviews and local SEO planning for Phoenix service businesses. Improve the accuracy and usefulness of your listing.',
    },
    name: 'Google Business Profile Optimization',
    tagline: 'GMB Optimization',
    headline: 'Google Business Profile support',
    intro:
      'We review your Google Business Profile for accurate business information, service categories, photos, and useful customer details. We connect profile improvements with an appropriate local SEO plan.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Business Information',
        description: 'Review service categories, contact details, hours, and service areas.',
      },
      {
        title: 'Local Content',
        description: 'Plan useful content around the services and locations you actually serve.',
      },
      {
        title: 'Business Photos',
        description: 'Select relevant images that accurately represent your business.',
      },
    ],
    cta: 'Review your local profile',
    ctaLabel: 'Review your local profile',
  },
  {
    slug: 'local-service-ads',
    meta: {
      title: 'Google Local Services Ads Setup & Management',
      description:
        'Google Local Services Ads setup and management for eligible service businesses. Review requirements, campaigns, and inquiry tracking.',
    },
    name: 'Google Local Service Ads (LSA)',
    tagline: 'Local Service Ads',
    headline: 'Local Services Ads support',
    intro:
      'We help eligible service businesses review Google Local Services Ads requirements, configure campaigns, and track inquiries. Google determines eligibility, screening, placement, and lead charges.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Campaign setup',
        description:
          'Configure the agreed service areas, services, and budget for an eligible business. Google determines placement.',
      },
      {
        title: 'Eligibility Review',
        description: 'Review current screening and business requirements before applying.',
      },
      {
        title: 'Pay Per Lead',
        description: 'Review lead charges and inquiry quality against platform policies.',
      },
    ],
    cta: 'Review your advertising fit',
    ctaLabel: 'Review your advertising fit',
  },
  {
    slug: 'performance-tracking',
    meta: {
      title: 'Conversion Tracking & Analytics Setup',
      description:
        'Analytics setup and reporting for calls, forms, bookings, and campaign performance, with documented measurement coverage.',
    },
    name: 'Performance Tracking & Analytics',
    tagline: 'Performance Tracking',
    headline: 'Measure inquiries and outcomes',
    intro:
      'We configure analytics and reporting around agreed events such as calls, inquiries, and bookings. Attribution and outcome coverage depend on the data available from your systems.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Reporting with source context',
        description: 'Review campaign performance at the refresh interval supported by each source.',
      },
      {
        title: 'Conversion Tracking',
        description: 'Connect lead and outcome records where your systems support it.',
      },
      {
        title: 'Revenue Attribution',
        description: 'Document attribution coverage and gaps in available source data.',
      },
    ],
    cta: 'Review your measurement',
    ctaLabel: 'Review your measurement',
  },
  {
    slug: 'ppc',
    meta: {
      title: 'PPC & Google Ads Management in Phoenix',
      description:
        'Google and Microsoft Ads planning for Arizona service businesses. Review budgets, landing pages, and conversion tracking with ZiaFlow.',
    },
    name: 'PPC Management',
    tagline: 'PPC Management',
    headline: 'Paid search for service businesses',
    intro:
      'Plan paid search around a clear offer and a working inquiry path. We help service businesses review Google and Microsoft Ads targeting, landing pages, budgets, and conversion tracking.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Audience and keyword planning',
        description: 'Choose relevant services, locations, keywords, and exclusions within the agreed budget.',
      },
      {
        title: 'Landing pages and tracking',
        description:
          'Check that the ad promise matches the landing page and that conversion events represent the intended customer action.',
      },
      {
        title: 'Campaign and lead-quality review',
        description:
          'Review spend, search terms, and available inquiry outcomes. Record what can be attributed and what remains unknown.',
      },
    ],
    cta: 'Discuss your advertising plan',
    fit: 'Businesses ready to fund advertising and respond to inquiries, with an offer and service area that can be clearly defined.',
    faqs: [
      {
        question: 'Is advertising spend included in your fee?',
        answer:
          'The proposal separates management work from platform advertising spend. Budget, account ownership, and reporting responsibilities are agreed before launch.',
      },
    ],
    ctaLabel: 'Discuss your advertising plan',
  },
  {
    slug: 'review-management',
    meta: {
      title: 'Customer Review & Feedback Workflows',
      description:
        'Configure review requests and customer feedback notifications around completed services and applicable platform rules.',
    },
    name: 'Review Management & Reputation',
    tagline: 'Review Management',
    headline: 'Customer review workflows',
    intro:
      'Make it easier to request and respond to customer feedback. We review your current process and configure agreed notifications and review requests where the platform permits them.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'A consistent request process',
        description:
          'Use neutral requests for eligible customers where permitted. Do not route requests based on whether feedback is positive.',
      },
      {
        title: 'Review notifications',
        description: 'Identify who should receive feedback and who is responsible for responding.',
      },
      {
        title: 'Response guidance',
        description: 'Prepare a practical process for helpful responses and escalation to the right person.',
      },
    ],
    cta: 'Discuss your review process',
    ctaLabel: 'Discuss your review process',
  },
  {
    slug: 'seo',
    meta: {
      title: 'Phoenix SEO Services for Arizona Businesses',
      description:
        'Technical SEO, service-page improvements, and local content planning for Phoenix and Arizona businesses. Prioritize search improvements with ZiaFlow.',
    },
    name: 'SEO Services',
    tagline: 'SEO Services',
    headline: 'SEO for Arizona businesses',
    intro:
      'Help people find the services you actually offer. ZiaFlow reviews technical SEO, existing pages, and Google Search Console data to prioritize useful changes for Phoenix and Arizona businesses.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Technical SEO and indexing',
        description:
          'Review crawl access, indexing, canonical URLs, internal links, and metadata before expanding content.',
      },
      {
        title: 'Service and local content',
        description:
          'Improve pages around customer questions, actual services, and the locations you serve. Give each page a clear purpose.',
      },
      {
        title: 'Search and inquiry reporting',
        description:
          'Track relevant queries, pages, clicks, and recorded inquiries. Keep search visibility separate from verified sales.',
      },
    ],
    cta: 'Discuss your search visibility',
    fit: 'Businesses that need to understand why relevant service pages are not attracting qualified search visits.',
    faqs: [
      {
        question: 'Do you guarantee rankings or AI search citations?',
        answer:
          'No. Search platforms determine rankings and citations. We define the work, document the baseline, and report the results available in your data.',
      },
    ],
    ctaLabel: 'Discuss your search visibility',
  },
  {
    slug: 'social-media',
    meta: {
      title: 'Social Media Planning & Campaign Management',
      description:
        'Social media content planning and campaign management around agreed channels, audiences, and business goals.',
    },
    name: 'Social Media Marketing',
    tagline: 'Social Media Marketing',
    headline: 'Social media planning',
    intro:
      'We help plan social content and paid campaigns around your audience, offer, and business goals. The scope includes agreed channels, content responsibilities, and available reporting.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Revenue-Focused Strategy',
        description: 'We focus on metrics that matter: leads, sales, and ROI.',
      },
      {
        title: 'Organic Authority',
        description: 'Build long-term trust with high-quality, relevant content.',
      },
      {
        title: 'Paid Acceleration',
        description: 'Amplify your reach with targeted ad campaigns.',
      },
    ],
    cta: 'Discuss your social channels',
    ctaLabel: 'Discuss your social channels',
  },
  {
    slug: 'software',
    meta: {
      title: 'Custom Software & API Integration Services',
      description:
        'Custom internal tools, portals, and API integrations built around documented workflows and agreed acceptance criteria.',
    },
    name: 'Custom Software Development',
    tagline: 'Custom Software',
    headline: 'Software for your workflow',
    intro:
      'We build internal tools, portals, and integrations around documented workflows. Discovery defines requirements, access, acceptance checks, and maintenance responsibilities.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Workflow Discovery',
        description: 'Document the users, requirements, and acceptance checks before development.',
      },
      {
        title: 'Application Development',
        description: 'Build the agreed tools and integrations in a reviewable environment.',
      },
      {
        title: 'Ownership & Handoff',
        description: 'Document deployment, licensing, access, and support responsibilities.',
      },
    ],
    cta: 'Discuss your software project',
    ctaLabel: 'Discuss your software project',
  },
  {
    slug: 'web-development',
    meta: {
      title: 'Phoenix Web Development for Service Businesses',
      description:
        'Custom Astro websites for Arizona service businesses. Plan clear service pages, mobile layouts, SEO continuity, and tested inquiry forms with ZiaFlow.',
    },
    name: 'Web Development Services',
    tagline: 'Web Development',
    headline: 'Websites for service businesses',
    intro:
      'Give visitors a clear picture of what you do and an easy way to contact you. We build and improve Astro websites for Arizona businesses, with service copy, mobile layouts, search metadata, and inquiry forms considered together.',
    featuresTitle: 'What the work can include',
    features: [
      {
        title: 'Explain your services',
        description: 'Organize services, locations, and next steps so visitors can decide whether you are a fit.',
      },
      {
        title: 'Check mobile usability and speed',
        description:
          'Build responsive layouts and check navigation, loading behavior, and form usability on agreed devices.',
      },
      {
        title: 'Test the inquiry path',
        description:
          'Verify form validation, saved submissions, and notifications. Plan redirects and preserve useful URLs when replacing a site.',
      },
    ],
    cta: 'Discuss your website',
    fit: 'Businesses with an outdated website, unclear service pages, or forms that do not reliably reach the right person.',
    faqs: [
      {
        question: 'Will a redesign change my existing URLs?',
        answer:
          'We review your current pages and search data before changing routes. Keep useful URLs where possible and document redirects for approved changes.',
      },
    ],
    ctaLabel: 'Discuss your website',
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
