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
    "slug": "automation",
    "meta": {
      "title": "Business Automation & AI Workflow Systems",
      "description": "Workflow automation for Arizona businesses: connect inquiry capture, CRM routing, scheduling, and follow-up with documented ownership."
    },
    "name": "Marketing Automation & AI",
    "tagline": "Automation & AI",
    "headline": "The Automation Layer",
    "intro": "Connect lead capture, CRM routing, scheduling, and follow-up around a defined business process. We review your current workflow, configure the agreed integrations, and document ownership and exception handling.",
    "featuresTitle": "Key Benefits",
    "features": [
      {
        "title": "Inquiry Routing",
        "description": "Connect agreed lead sources to a responsible owner and next action."
      },
      {
        "title": "Workflow Automation",
        "description": "Configure defined handoffs, validation, and exception handling."
      },
      {
        "title": "CRM Integration",
        "description": "Map fields and test record transfers between the agreed systems."
      }
    ],
    "cta": "Discuss your automation & ai project."
  },
  {
    "slug": "cloud",
    "meta": {
      "title": "Cloud Infrastructure & Managed Hosting",
      "description": "Cloud hosting, databases, backups, and deployment configuration for business applications on Azure, AWS, and Supabase."
    },
    "name": "Cloud Solutions & Hosting",
    "tagline": "Cloud Solutions",
    "headline": "Enterprise-Grade Infrastructure",
    "intro": "We configure cloud hosting, databases, and application infrastructure on platforms such as Azure, AWS, and Supabase. Access, backups, deployment, and monitoring requirements are agreed before implementation.",
    "featuresTitle": "Our Expertise",
    "features": [
      {
        "title": "Azure & AWS Architects",
        "description": "Cloud architecture designed around your application requirements."
      },
      {
        "title": "Secure Migration",
        "description": "Move your data and applications safely to the cloud."
      },
      {
        "title": "Compliance & Security",
        "description": "Access controls, backups, and security configuration appropriate to the agreed requirements."
      }
    ],
    "cta": "Discuss your cloud solutions project."
  },
  {
    "slug": "cro",
    "meta": {
      "title": "Conversion Rate Optimization (CRO) Services",
      "description": "Review website forms, navigation, booking paths, and analytics to identify and address conversion friction."
    },
    "name": "Conversion Rate Optimization",
    "tagline": "Conversion Rate Optimization",
    "headline": "Diagnose → Fix → Convert",
    "intro": "We review website behavior, forms, page speed, and booking paths to identify friction. Recommendations and changes are evaluated against the measurement available in your analytics.",
    "featuresTitle": "Maximize Every Click",
    "features": [
      {
        "title": "Behavior Analysis",
        "description": "Understand how users interact with your site using heatmaps and recordings."
      },
      {
        "title": "A/B Testing",
        "description": "Test headlines, offers, and layouts to find what works best."
      },
      {
        "title": "UX Improvements",
        "description": "Remove friction points that stop users from converting."
      }
    ],
    "cta": "Discuss your conversion rate optimization project."
  },
  {
    "slug": "ecommerce",
    "meta": {
      "title": "Ecommerce Solutions | ZiaFlow",
      "description": "Shopify and WooCommerce development with catalog, checkout, inventory, and customer workflow integrations."
    },
    "name": "Ecommerce Solutions",
    "tagline": "Ecommerce Solutions",
    "headline": "24/7 Revenue Infrastructure",
    "intro": "We build and connect Shopify and WooCommerce stores around your catalog, checkout, inventory, and customer workflows. Scope and platform constraints are reviewed before development.",
    "featuresTitle": "What We Deliver",
    "features": [
      {
        "title": "Custom Development",
        "description": "Tailored Shopify and WooCommerce stores that fit your brand."
      },
      {
        "title": "System Integration",
        "description": "Connect inventory, CRM, and marketing tools for seamless operations."
      },
      {
        "title": "Conversion Optimization",
        "description": "Review product discovery and checkout paths for usability."
      }
    ],
    "cta": "Discuss your ecommerce solutions project."
  },
  {
    "slug": "gmb-optimization",
    "meta": {
      "title": "Google Business Profile (GMB) Optimization",
      "description": "Google Business Profile reviews and local SEO planning for Phoenix service businesses. Improve the accuracy and usefulness of your listing."
    },
    "name": "Google Business Profile Optimization",
    "tagline": "GMB Optimization",
    "headline": "Your Local Storefront",
    "intro": "We review your Google Business Profile for accurate business information, service categories, photos, and useful customer details. We connect profile improvements with an appropriate local SEO plan.",
    "featuresTitle": "Profile Review & Local SEO",
    "features": [
      {
        "title": "Business Information",
        "description": "Review service categories, contact details, hours, and service areas."
      },
      {
        "title": "Local Content",
        "description": "Plan useful content around the services and locations you actually serve."
      },
      {
        "title": "Business Photos",
        "description": "Select relevant images that accurately represent your business."
      }
    ],
    "cta": "Discuss your gmb optimization project."
  },
  {
    "slug": "local-service-ads",
    "meta": {
      "title": "Google Local Service Ads (LSA) Management",
      "description": "Google Local Services Ads setup and management for eligible service businesses. Review requirements, campaigns, and inquiry tracking."
    },
    "name": "Google Local Service Ads (LSA)",
    "tagline": "Local Service Ads",
    "headline": "Verified Trust at the Top",
    "intro": "We help eligible service businesses review Google Local Services Ads requirements, configure campaigns, and track inquiries. Google determines eligibility, screening, placement, and lead charges.",
    "featuresTitle": "Why LSAs?",
    "features": [
      {
        "title": "Top of Page Visibility",
        "description": "Appear above traditional paid search ads and organic listings."
      },
      {
        "title": "Eligibility Review",
        "description": "Review current screening and business requirements before applying."
      },
      {
        "title": "Pay Per Lead",
        "description": "Review lead charges and inquiry quality against platform policies."
      }
    ],
    "cta": "Discuss your local service ads project."
  },
  {
    "slug": "performance-tracking",
    "meta": {
      "title": "Performance Tracking & Analytics | ZiaFlow",
      "description": "Analytics setup and reporting for calls, forms, bookings, and campaign performance, with documented measurement coverage."
    },
    "name": "Performance Tracking & Analytics",
    "tagline": "Performance Tracking",
    "headline": "Data-Driven Transparency",
    "intro": "We configure analytics and reporting around agreed events such as calls, inquiries, and bookings. Attribution and outcome coverage depend on the data available from your systems.",
    "featuresTitle": "Metrics That Matter",
    "features": [
      {
        "title": "Real-Time Dashboards",
        "description": "Review campaign performance at the refresh interval supported by each source."
      },
      {
        "title": "Conversion Tracking",
        "description": "Connect lead and outcome records where your systems support it."
      },
      {
        "title": "Revenue Attribution",
        "description": "Document attribution coverage and gaps in available source data."
      }
    ],
    "cta": "Discuss your performance tracking project."
  },
  {
    "slug": "ppc",
    "meta": {
      "title": "PPC Management & Google Ads Campaigns",
      "description": "Google and Microsoft Ads campaign planning, management, landing page review, and conversion measurement for service businesses."
    },
    "name": "PPC Management",
    "tagline": "PPC Management",
    "headline": "Instant Speed & Cash Flow",
    "intro": "We plan and manage Google and Microsoft advertising around your audience, budget, landing pages, and conversion measurement. We review campaign performance and recommend adjustments.",
    "featuresTitle": "ROI Obsessed",
    "features": [
      {
        "title": "High Intent Targeting",
        "description": "Select relevant keywords and review inquiry quality."
      },
      {
        "title": "Data-Driven Optimization",
        "description": "Evaluate targeting, ads, and landing pages against available results."
      },
      {
        "title": "Transparent Reporting",
        "description": "Clear dashboards showing exactly where your budget goes."
      }
    ],
    "cta": "Discuss your ppc management project."
  },
  {
    "slug": "review-management",
    "meta": {
      "title": "Review Management & Reputation | ZiaFlow",
      "description": "Configure review requests and customer feedback notifications around completed services and applicable platform rules."
    },
    "name": "Review Management & Reputation",
    "tagline": "Review Management",
    "headline": "Automated Social Proof",
    "intro": "We configure review requests and notifications around completed services and the applicable platform rules. Your team retains responsibility for responding to customer feedback.",
    "featuresTitle": "Build Trust on Autopilot",
    "features": [
      {
        "title": "Automated Requests",
        "description": "Send review requests via SMS/Email instantly after a job."
      },
      {
        "title": "Review Monitoring",
        "description": "Get notified of new reviews so you can respond quickly."
      },
      {
        "title": "Sentiment Analysis",
        "description": "Understand customer feedback at a glance."
      }
    ],
    "cta": "Discuss your review management project."
  },
  {
    "slug": "seo",
    "meta": {
      "title": "SEO Services - Phoenix & Arizona | ZiaFlow",
      "description": "Technical SEO, indexing reviews, local content planning, and search performance reporting for Phoenix and Arizona businesses."
    },
    "name": "SEO Services",
    "tagline": "SEO Services",
    "headline": "Lasting Market Authority",
    "intro": "We review technical SEO, indexing, page structure, and content against relevant search data and customer needs. The roadmap identifies existing pages to improve and useful content to develop.",
    "featuresTitle": "Our SEO Strategy",
    "features": [
      {
        "title": "Technical Audits",
        "description": "Forensic analysis of your site’s health and indexing."
      },
      {
        "title": "Content Strategy",
        "description": "Creating content that answers your customers' questions."
      },
      {
        "title": "Authority Building",
        "description": "Earning high-quality backlinks to boost your domain trust."
      }
    ],
    "cta": "Discuss your seo services project."
  },
  {
    "slug": "social-media",
    "meta": {
      "title": "Social Media Marketing | ZiaFlow",
      "description": "Social media content planning and campaign management around agreed channels, audiences, and business goals."
    },
    "name": "Social Media Marketing",
    "tagline": "Social Media Marketing",
    "headline": "Strategic Asset Building",
    "intro": "We help plan social content and paid campaigns around your audience, offer, and business goals. The scope includes agreed channels, content responsibilities, and available reporting.",
    "featuresTitle": "Our Approach",
    "features": [
      {
        "title": "Revenue-Focused Strategy",
        "description": "We focus on metrics that matter: leads, sales, and ROI."
      },
      {
        "title": "Organic Authority",
        "description": "Build long-term trust with high-quality, relevant content."
      },
      {
        "title": "Paid Acceleration",
        "description": "Amplify your reach with targeted ad campaigns."
      }
    ],
    "cta": "Discuss your social media marketing project."
  },
  {
    "slug": "software",
    "meta": {
      "title": "Custom Software & Internal Tool Development",
      "description": "Custom internal tools, portals, and API integrations built around documented workflows and agreed acceptance criteria."
    },
    "name": "Custom Software Development",
    "tagline": "Custom Software",
    "headline": "Bespoke Operational Tools",
    "intro": "We build internal tools, portals, and integrations around documented workflows. Discovery defines requirements, access, acceptance checks, and maintenance responsibilities.",
    "featuresTitle": "Tailored Solutions",
    "features": [
      {
        "title": "Workflow Discovery",
        "description": "Document the users, requirements, and acceptance checks before development."
      },
      {
        "title": "Application Development",
        "description": "Build the agreed tools and integrations in a reviewable environment."
      },
      {
        "title": "Ownership & Handoff",
        "description": "Document deployment, licensing, access, and support responsibilities."
      }
    ],
    "cta": "Discuss your custom software project."
  },
  {
    "slug": "web-development",
    "meta": {
      "title": "Web Development & Performance Engineering",
      "description": "Responsive Astro websites with attention to page speed, accessible navigation, search metadata, and clear contact paths."
    },
    "name": "Web Development Services",
    "tagline": "Web Development",
    "headline": "Engineered for Conversion",
    "intro": "We build responsive websites using frameworks such as Astro, with attention to page speed, accessible navigation, search metadata, and clear contact paths. Testing follows the agreed delivery requirements.",
    "featuresTitle": "Why Choose Us?",
    "features": [
      {
        "title": "Performance Testing",
        "description": "Built with frameworks such as Astro, with page speed measured during verification."
      },
      {
        "title": "Conversion Focused",
        "description": "Designed to turn visitors into leads and customers."
      },
      {
        "title": "Responsive Design",
        "description": "Test responsive layouts at agreed mobile and desktop sizes."
      }
    ],
    "cta": "Discuss your web development project."
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
