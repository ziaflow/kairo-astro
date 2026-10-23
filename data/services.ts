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
}

export const bookingUrl =
  'https://outlook.office.com/book/ZiaFlowIntake@ziaflow.com/?ismsaljsauthenabled';

export const services: ServicePage[] = [
  {
    slug: 'automation',
    meta: {
      title: 'Business Automation & AI Workflow Systems',
      description:
        'Scale client intake, CRM workflows, and 24/7 lead qualification for Arizona service businesses. Eliminate bottlenecks with custom automation.',
    },
    name: 'Marketing Automation & AI',
    tagline: 'Automation & AI',
    headline: 'The Automation Layer',
    intro:
      "Stop losing revenue to slow response times. We deploy intelligent AI agents and workflow automation to nurture leads 24/7, ensuring no opportunity slips through the cracks. From instant SMS booking confirmations to backend CRM routing, we replace manual chaos with engineered efficiency. This isn't just about saving time; it's about building an intake system that scales without adding headcount.",
    featuresTitle: 'Key Benefits',
    features: [
      { title: '24/7 Lead Nurturing', description: 'Never miss a lead with always-on AI agents that respond instantly.' },
      { title: 'Workflow Automation', description: 'Streamline your operations by automating repetitive tasks and data entry.' },
      { title: 'CRM Integration', description: 'Seamlessly sync data between your marketing channels and CRM.' },
      {
        title: 'Executive Productivity & Email Systems',
        description:
          'As a Superhuman Go Partner, we deploy ultra-fast AI email workflows and executive intake automation for high-growth teams.',
        href: 'https://superhuman.com/find-a-partner/partner/ziaflow',
        linkLabel: 'Superhuman Partner Directory',
      },
    ],
    cta: 'Ready to automate your growth?',
  },
  {
    slug: 'cloud',
    meta: {
      title: 'Cloud Infrastructure & Managed Hosting',
      description:
        'Secure, resilient cloud architecture on AWS and Azure. Engineered for speed, strict compliance, and maximum uptime for growing applications.',
    },
    name: 'Cloud Solutions & Hosting',
    tagline: 'Cloud Solutions',
    headline: 'Enterprise-Grade Infrastructure',
    intro:
      "As a Microsoft Partner, we don't just host websites; we architect secure, scalable cloud environments on Azure and AWS. Whether you need database migration, secure application hosting, or compliance-focused storage (HIPAA), we build the digital foundation that ensures your business stays online, secure, and ready to scale.",
    featuresTitle: 'Our Expertise',
    features: [
      { title: 'Azure & AWS Architects', description: 'Certified experts designing robust cloud infrastructure.' },
      { title: 'Secure Migration', description: 'Move your data and applications safely to the cloud.' },
      { title: 'Compliance & Security', description: 'HIPAA and SOC2 compliant configurations for sensitive data.' },
    ],
    cta: 'Ready to migrate?',
  },
  {
    slug: 'cro',
    meta: {
      title: 'Conversion Rate Optimization (CRO) Services',
      description:
        'Turn website visitors into paying clients with data-driven CRO, UX forensics, and rigorous A/B testing. Maximize revenue from current traffic.',
    },
    name: 'Conversion Rate Optimization',
    tagline: 'Conversion Rate Optimization',
    headline: 'Diagnose → Fix → Convert',
    intro:
      "Traffic is wasted if it doesn't convert. We use a scientific approach to analyze user behavior, identifying exactly where prospects drop off. By engineering fixes—whether it's form placement, page speed, or trust signals—we squeeze more revenue out of your existing traffic, lowering your customer acquisition cost.",
    featuresTitle: 'Maximize Every Click',
    features: [
      { title: 'Behavior Analysis', description: 'Understand how users interact with your site using heatmaps and recordings.' },
      { title: 'A/B Testing', description: 'Test headlines, offers, and layouts to find what works best.' },
      { title: 'UX Improvements', description: 'Remove friction points that stop users from converting.' },
    ],
    cta: 'Stop wasting traffic.',
  },
  {
    slug: 'ecommerce',
    meta: {
      title: 'Ecommerce Solutions | ZiaFlow',
      description: 'Custom Shopify and WooCommerce solutions that turn your website into a revenue engine.',
    },
    name: 'Ecommerce Solutions',
    tagline: 'Ecommerce Solutions',
    headline: '24/7 Revenue Infrastructure',
    intro:
      "Your online store shouldn’t just list products; it should be a high-conversion sales engine. We build custom Shopify and WooCommerce solutions tailored to your operational needs. By integrating your inventory, CRM, and marketing data, we create a seamless path from 'browse' to 'buy,' turning your website into a measurable cash flow asset.",
    featuresTitle: 'What We Deliver',
    features: [
      { title: 'Custom Development', description: 'Tailored Shopify and WooCommerce stores that fit your brand.' },
      { title: 'System Integration', description: 'Connect inventory, CRM, and marketing tools for seamless operations.' },
      { title: 'Conversion Optimization', description: 'Designed to maximize sales with intuitive user journeys.' },
    ],
    cta: 'Ready to sell more?',
  },
  {
    slug: 'gmb-optimization',
    meta: {
      title: 'Google Business Profile (GMB) Optimization',
      description:
        'Dominate Google Maps and local 3-pack search in Phoenix. Capture high-intent customers with optimized Google Business Profiles. Call (602) 834-4239.',
    },
    name: 'Google Business Profile Optimization',
    tagline: 'GMB Optimization',
    headline: 'Your Local Storefront',
    intro:
      'For local service businesses, the Map Pack is the new homepage. We fully optimize your Google Business Profile—from accurate categorizations to geo-tagged visual assets—to ensure you appear prominently when neighbors are searching for your services. We turn your profile into a conversion point, not just a directory listing.',
    featuresTitle: 'Map Pack Dominance',
    features: [
      { title: 'Complete Profile Optimization', description: 'Ensure every field is filled accurately for maximum visibility.' },
      { title: 'Local SEO Strategy', description: 'Target local keywords to appear in relevant searches.' },
      { title: 'Visual Assets', description: 'Geo-tagged photos and videos to showcase your work.' },
    ],
    cta: 'Claim your local presence.',
  },
  {
    slug: 'local-service-ads',
    meta: {
      title: 'Google Local Service Ads (LSA) Management',
      description:
        'Get Google Guaranteed at the top of Phoenix search results. Pay-per-lead calls, dispute protection, and verification management for contractors.',
    },
    name: 'Google Local Service Ads (LSA)',
    tagline: 'Local Service Ads',
    headline: 'Verified Trust at the Top',
    intro:
      'Dominate the absolute top of Google Search with Google Guaranteed badges. We handle the complex verification and screening process to get you qualified. LSA connects you directly with local customers via pay-per-lead phone calls, ensuring you only pay for genuine opportunities, not just clicks.',
    featuresTitle: 'Why LSAs?',
    features: [
      { title: 'Top of Page Visibility', description: 'Appear above traditional paid search ads and organic listings.' },
      { title: 'Google Guaranteed', description: 'Build instant trust with the green checkmark badge.' },
      { title: 'Pay Per Lead', description: 'Only pay for valid calls from potential customers.' },
    ],
    cta: 'Get Google Guaranteed.',
  },
  {
    slug: 'performance-tracking',
    meta: {
      title: 'Performance Tracking & Analytics | ZiaFlow',
      description: 'Forensic data tracking and custom dashboards for real-time ROI measurement.',
    },
    name: 'Performance Tracking & Analytics',
    tagline: 'Performance Tracking',
    headline: 'Data-Driven Transparency',
    intro:
      'We believe in forensic data, not guesses. We implement custom dashboards that track the metrics that actually matter to your bottom line: calls booked, forms filled, and revenue generated. We provide total transparency so you can see exactly how your digital infrastructure is performing in real-time.',
    featuresTitle: 'Metrics That Matter',
    features: [
      { title: 'Real-Time Dashboards', description: 'See your campaign performance as it happens.' },
      { title: 'Conversion Tracking', description: 'Know exactly which leads turned into paying customers.' },
      { title: 'Revenue Attribution', description: 'Connect marketing spend directly to revenue generated.' },
    ],
    cta: 'See your true ROI.',
  },
  {
    slug: 'ppc',
    meta: {
      title: 'PPC Management & Google Ads Campaigns',
      description:
        'Drive qualified leads with high-ROI pay-per-click management for Google and Microsoft Ads. Target high-intent buyers ready to convert today.',
    },
    name: 'PPC Management',
    tagline: 'PPC Management',
    headline: 'Instant Speed & Cash Flow',
    intro:
      "When you need immediate leads, our PPC campaigns turn on the faucet. We manage Google and Microsoft Ads with a strict focus on ROI, targeting high-intent keywords to capture customers exactly when they are ready to buy. We balance this 'Speed' with the 'Stability' of SEO to ensure you aren't solely reliant on ad spend forever.",
    featuresTitle: 'ROI Obsessed',
    features: [
      { title: 'High Intent Targeting', description: 'We bid on keywords that convert, not just bring traffic.' },
      { title: 'Data-Driven Optimization', description: 'Continuous A/B testing to lower customer acquisition costs.' },
      { title: 'Transparent Reporting', description: 'Clear dashboards showing exactly where your budget goes.' },
    ],
    cta: 'Start getting leads today.',
  },
  {
    slug: 'review-management',
    meta: {
      title: 'Review Management & Reputation | ZiaFlow',
      description: 'Automated review requests and reputation management for service businesses.',
    },
    name: 'Review Management & Reputation',
    tagline: 'Review Management',
    headline: 'Automated Social Proof',
    intro:
      'Reputation is a currency. We implement automated workflows that request reviews via SMS and email immediately after service completion, drastically increasing your review volume. We help you build a strong foundation of client feedback that improves your local SEO and provides the social proof necessary to close new leads.',
    featuresTitle: 'Build Trust on Autopilot',
    features: [
      { title: 'Automated Requests', description: 'Send review requests via SMS/Email instantly after a job.' },
      { title: 'Review Monitoring', description: 'Get notified of new reviews so you can respond quickly.' },
      { title: 'Sentiment Analysis', description: 'Understand customer feedback at a glance.' },
    ],
    cta: 'Get more 5-star reviews.',
  },
  {
    slug: 'seo',
    meta: {
      title: 'SEO Services - Phoenix & Arizona | ZiaFlow',
      description: 'Technical SEO and content strategies that build lasting market authority.',
    },
    name: 'SEO Services',
    tagline: 'SEO Services',
    headline: 'Lasting Market Authority',
    intro:
      'SEO is your long-term stability play. We treat your search rankings as digital real estate that appreciates over time. Through technical forensic audits, local content strategies, and authority building, we position your business to dominate search results for high-intent queries. We focus on the keywords that drive revenue, not just traffic.',
    featuresTitle: 'Our SEO Strategy',
    features: [
      { title: 'Technical Audits', description: 'Forensic analysis of your site’s health and indexing.' },
      { title: 'Content Strategy', description: "Creating content that answers your customers' questions." },
      { title: 'Authority Building', description: 'Earning high-quality backlinks to boost your domain trust.' },
    ],
    cta: 'Ready to rank higher?',
  },
  {
    slug: 'social-media',
    meta: {
      title: 'Social Media Marketing | ZiaFlow',
      description: 'Strategic social media management that builds trust and drives revenue.',
    },
    name: 'Social Media Marketing',
    tagline: 'Social Media Marketing',
    headline: 'Strategic Asset Building',
    intro:
      "We move beyond vanity metrics like 'likes' to focus on engagement that drives revenue. Our approach combines organic content strategies that establish your brand’s authority with targeted paid social campaigns to accelerate reach. We build a consistent digital presence that builds trust (Stability) while utilizing social platforms as a direct channel for customer acquisition.",
    featuresTitle: 'Our Approach',
    features: [
      { title: 'Revenue-Focused Strategy', description: 'We focus on metrics that matter: leads, sales, and ROI.' },
      { title: 'Organic Authority', description: 'Build long-term trust with high-quality, relevant content.' },
      { title: 'Paid Acceleration', description: 'Amplify your reach with targeted ad campaigns.' },
    ],
    cta: 'Ready to build your brand?',
  },
  {
    slug: 'software',
    meta: {
      title: 'Custom Software & Internal Tool Development',
      description:
        'Bespoke operational tools, portals, and custom software for scaling businesses. Streamline workflow bottlenecks and build proprietary software assets.',
    },
    name: 'Custom Software Development',
    tagline: 'Custom Software',
    headline: 'Bespoke Operational Tools',
    intro:
      'When off-the-shelf software limits your growth, we build the solution. From custom CRMs for home service businesses to secure patient portals, our in-house engineering team develops software that fits your specific workflows. We build proprietary assets that streamline operations and increase the valuation of your company.',
    featuresTitle: 'Tailored Solutions',
    features: [
      { title: 'Efficiency First', description: 'Software built around your workflows, not the other way around.' },
      { title: 'Scalable Architecture', description: 'Built to grow with your business, supporting thousands of users.' },
      { title: 'Proprietary IP', description: 'Own your technology and increase your business valuation.' },
    ],
    cta: 'Build what you need.',
  },
  {
    slug: 'web-development',
    meta: {
      title: 'Web Development & Performance Engineering',
      description:
        'High-converting, lightning-fast websites built for speed and engagement. Forensic audits, responsive architecture, and SEO-engineered frameworks.',
    },
    name: 'Web Development Services',
    tagline: 'Web Development',
    headline: 'Engineered for Conversion',
    intro:
      "We reject the idea of 'brochure' websites. Our development team builds conversion-first digital assets using modern frameworks like Astro for lightning-fast load speeds. We conduct forensic audits of user behavior to design interfaces that guide visitors effortlessly toward booking an appointment or making a purchase. This is the core of your digital real estate.",
    featuresTitle: 'Why Choose Us?',
    features: [
      { title: 'Lightning Fast', description: 'Built with modern frameworks like Astro for instant load times.' },
      { title: 'Conversion Focused', description: 'Designed to turn visitors into leads and customers.' },
      { title: 'Responsive Design', description: 'Looks and works perfectly on every device.' },
    ],
    cta: 'Ready for a better website?',
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
