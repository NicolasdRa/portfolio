import energeniousWebsite from '../assets/images/projects/energeniousWebsite.jpg';
import energeniousGUI from '../assets/images/projects/energeniousGui.jpg';
import energeniousAdmin from '../assets/images/projects/energeniousAdmin2.jpg';
import energeniousSpreadsheet from '../assets/images/projects/energeniousSpreadsheet.jpg';
import placeholderImage from '../assets/images/projects/Untitled-1.jpg';

const data = [
  // Personal Projects - Complex & In Development
  {
    id: 101,
    title: 'BakeWind',
    summary: 'Complete bakery management SaaS platform (In Development)',
    featured: true,
    description:
      'Full-stack bakery management SaaS platform with three distinct applications: NestJS backend API, SolidStart SSR marketing website, and Solid.js admin dashboard SPA. Backend built with NestJS 11, Fastify adapter, PostgreSQL with Drizzle ORM, JWT authentication with Passport, Swagger API documentation, WebSocket support with Socket.io, Stripe payment integration, and comprehensive Jest testing with contract tests. Marketing website developed with SolidStart SSR for SEO optimization and Tailwind CSS v4. Admin dashboard built as client-side SPA with Solid.js, @solidjs/router, real-time updates via WebSockets, cookie-based authentication, and Vite build system. Features include orders management, inventory tracking, production planning, recipe management, customer management, and business analytics. Demonstrates expertise in modern SaaS architecture, microservices pattern, SSR optimization, and real-time features.',
    stack: [
      { name: 'NestJS 11' },
      { name: 'Solid.js' },
      { name: 'SolidStart' },
      { name: 'TypeScript' },
      { name: 'PostgreSQL' },
      { name: 'Drizzle ORM' },
      { name: 'Fastify' },
      { name: 'JWT' },
      { name: 'Passport' },
      { name: 'WebSocket' },
      { name: 'Socket.io' },
      { name: 'Stripe' },
      { name: 'Swagger' },
      { name: 'Tailwind CSS v4' },
      { name: 'Vite' },
      { name: 'Jest' },
    ],
    web: '',
    github: 'https://github.com/NicolasdRa/bakewind',
    slug: 'bakewind',
    image: placeholderImage,
    tag: 'In Development',
  },

  {
    id: 107,
    title: 'Swellnomads',
    summary: 'Travel and digital nomad lifestyle platform (In Development)',
    featured: true,
    description:
      'Modern full-stack platform for travel enthusiasts and digital nomads to connect, share experiences, and discover destinations. Backend API built with NestJS 11 using Drizzle ORM and PostgreSQL database, featuring comprehensive Swagger API documentation. Frontend developed with Next.js 15, React 19, TypeScript, Tailwind CSS, and strict ESLint code quality tools. Currently in active development showcasing cutting-edge full-stack architecture with latest React and Next.js features, modern state management, and comprehensive testing with Jest.',
    stack: [
      { name: 'Next.js 15' },
      { name: 'React 19' },
      { name: 'NestJS' },
      { name: 'PostgreSQL' },
      { name: 'Drizzle ORM' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Swagger' },
      { name: 'Jest' },
    ],
    web: '',
    github: 'https://github.com/NicolasdRa/swellnomads_front',
    slug: 'swellnomads',
    image: placeholderImage,
    tag: 'In Development',
  },

  {
    id: 102,
    title: 'School Management System Backend',
    summary: 'Production NestJS API for educational institutions (In Development)',
    featured: true,
    description:
      'Production-ready backend API for school management system deployed on Hetzner Cloud with automated CI/CD via GitHub Actions. Built with NestJS and PostgreSQL using Drizzle ORM for type-safe database operations. Features comprehensive JWT authentication with refresh token rotation, extensive audit logging system across multiple database tables, rate limiting with throttler guards, bcrypt password hashing, and enterprise-grade security measures. Includes Swagger API documentation, Zod validation, systemd service management, Nginx reverse proxy configuration, and database security with SSH tunnels. Demonstrates expertise in scalable backend architecture, security best practices, and production deployment strategies.',
    stack: [
      { name: 'NestJS' },
      { name: 'TypeScript' },
      { name: 'PostgreSQL' },
      { name: 'Drizzle ORM' },
      { name: 'JWT' },
      { name: 'Swagger' },
      { name: 'Zod' },
      { name: 'bcrypt' },
      { name: 'GitHub Actions' },
      { name: 'Hetzner Cloud' },
      { name: 'Nginx' },
    ],
    web: '',
    github: 'https://github.com/NicolasdRa/school-admin-back',
    slug: 'school-management-backend',
    image: placeholderImage,
    tag: 'In Development',
  },

  // Nuuk GmbH Projects
  {
    id: 108,
    title: 'Editorial Content Platform - Nuuk GmbH',
    summary: 'Content management and publishing platform',
    featured: false,
    description:
      'Maintained and enhanced a content management and publishing platform for editorial operations. Built with Next.js 14, React 18, TypeScript, and Contentful CMS integration featuring GraphQL API with code generation, live preview functionality, rich text rendering, Firebase integration, Google Maps integration, SWR for data fetching, Radix UI components, Tailwind CSS, DaisyUI, SEO optimization with next-seo, automated sitemap generation, and comprehensive TypeScript types. Implemented responsive design, performance optimizations, and content workflow improvements.',
    stack: [
      { name: 'Next.js 14' },
      { name: 'React 18' },
      { name: 'TypeScript' },
      { name: 'Contentful CMS' },
      { name: 'GraphQL' },
      { name: 'Firebase' },
      { name: 'SWR' },
      { name: 'Radix UI' },
      { name: 'Tailwind CSS' },
      { name: 'DaisyUI' },
      { name: 'Google Maps' },
    ],
    web: '',
    github: '',
    slug: 'editorial-content-platform',
    image: placeholderImage,
    tag: 'Nuuk GmbH',
  },

  {
    id: 106,
    title: 'Contentful AI Integration Suite - Nuuk GmbH',
    summary: 'Custom Contentful apps with AI-powered automation',
    featured: false,
    description:
      'Suite of custom Contentful app integrations providing AI-powered content generation and automation workflows for enterprise media operations. Built as native Contentful apps using Contentful App SDK and F36 design system. Features include OpenAI integration for automated content generation, intelligent teaser creation, multi-platform social media content generation (Facebook, WhatsApp), and automated notification systems. Developed with React 18, TypeScript, Vite build system, Emotion styling, and Contentful Management API. Demonstrates expertise in building custom Contentful app extensions, AI/LLM integration, and scalable content automation workflows.',
    stack: [
      { name: 'React 18' },
      { name: 'TypeScript' },
      { name: 'Contentful Apps' },
      { name: 'Contentful SDK' },
      { name: 'OpenAI API' },
      { name: 'Vite' },
      { name: 'Emotion' },
    ],
    web: '',
    github: '',
    slug: 'contentful-ai-integration-suite',
    image: placeholderImage,
    tag: 'Nuuk GmbH',
  },

  {
    id: 103,
    title: 'Event Discovery Platform - Nuuk GmbH',
    summary: 'Public events platform with mapping features',
    featured: false,
    description:
      'Developed from scratch an event discovery frontend application. Worked with Next.js, React, TypeScript, headless CMS integration, interactive mapping features, and comprehensive testing strategies. Gained experience with modern frontend frameworks, CMS workflows, and cloud deployment practices.',
    stack: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Headless CMS' },
      { name: 'Tailwind CSS' },
    ],
    web: '',
    github: '',
    slug: 'event-discovery-platform',
    image: placeholderImage,
    tag: 'Nuuk GmbH',
  },

  {
    id: 104,
    title: 'Connected TV Applications - Nuuk GmbH',
    summary: 'Multi-platform streaming media applications',
    featured: false,
    description:
      'Developed cross-platform streaming applications for multiple Smart TV platforms including FireTV, WebOS, Android TV, and Tizen. Worked with React, TypeScript, and cross-platform deployment tools. Gained expertise in TV-specific UI/UX patterns, remote control navigation, media playback optimization, and platform-specific requirements for connected TV ecosystems.',
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Capacitor' },
      { name: 'Smart TV Platforms' },
    ],
    web: '',
    github: '',
    slug: 'connected-tv-apps',
    image: placeholderImage,
    tag: 'Nuuk GmbH',
  },

  {
    id: 105,
    title: 'Public Information Platform - Nuuk GmbH',
    summary: 'Government services directory application',
    featured: false,
    description:
      'Developed from scratch a full-stack public information and services directory platform with separate frontend and backend applications. Frontend built with Astro and React 19, featuring SSR optimization, React Leaflet for interactive mapping, Zustand state management, Tailwind CSS v4, and comprehensive Playwright E2E testing. Backend API developed with NestJS and MySQL using Drizzle ORM, featuring geospatial data handling with Turf.js, CSV data processing, Swagger API documentation, and robust Jest testing. Gained experience with modern SSR frameworks, mapping visualization, API development, and full-stack architecture.',
    stack: [
      { name: 'Astro' },
      { name: 'React 19' },
      { name: 'NestJS' },
      { name: 'MySQL' },
      { name: 'Drizzle ORM' },
      { name: 'React Leaflet' },
      { name: 'Zustand' },
      { name: 'Tailwind CSS v4' },
      { name: 'Playwright' },
      { name: 'Jest' },
    ],
    web: '',
    github: '',
    slug: 'public-information-platform',
    image: placeholderImage,
    tag: 'Nuuk GmbH',
  },

  // Energenious Projects
  {
    id: 3,
    title: 'energenious website',
    summary: 'website revamp',
    featured: true,
    description: 'Company website responsive re-design and implementation in wordpress.',
    stack: [{ name: 'Wordpress' }, { name: 'HTML5' }, { name: 'CSS3' }],
    web: 'https://energenious.eu/',
    github: '',
    slug: 'energenious-website',
    image: energeniousWebsite,
    tag: 'Energenious',
  },

  {
    id: 5,
    title: 'Micogrid Creator - Energenious',
    summary: 'UX-UI re-design, energenious flagship product',
    featured: true,
    description: "Re-designed of the company's flagship product's UI and UX",
    stack: [{ name: 'Figma' }],
    web: '',
    github: '',
    slug: 'microgrid-creator-energenious',
    image: energeniousGUI,
    tag: 'Energenious',
  },

  {
    id: 6,
    title: 'Account management app - Energenious',
    summary: 'User portal, login and account management app',
    featured: true,
    description:
      'Design and implementation of user portal with login/signup functionality, SSO for all products, account management functionalities. Developed in React.js, Redux and Material UI. ',
    stack: [{ name: 'React.js' }, { name: 'Redux.js' }, { name: 'Material-UI' }, { name: 'Figma' }],
    web: '',
    github: '',
    slug: 'account-management-energenious',
    image: energeniousAdmin,
    tag: 'Energenious',
  },

  {
    id: 7,
    title: 'spreadsheet widget - energenious',
    summary: 'spreadsheet widget, design and development',
    featured: true,
    description:
      'Design and partial implementation of Spreadsheet widget developed in Typescript and React with Material UI. ',
    stack: [
      { name: 'React.js' },
      { name: 'Typescript' },
      { name: 'Redux.js' },
      { name: 'Material-UI' },
      { name: 'Figma' },
    ],
    web: '',
    github: '',
    slug: 'spreadsheet-widget-energenious',
    image: energeniousSpreadsheet,
    tag: 'Energenious',
  },
];

export default data;
