# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Gatsby v3, TypeScript, and styled-components. The site showcases projects, work experience, services, and contact information. It fetches project data from a Strapi CMS hosted on Heroku.

## Commands

### Development
```bash
yarn dev              # Start development server at localhost:8000
yarn build            # Build production site
yarn serve            # Serve production build locally
yarn clean            # Clean Gatsby cache and public directory
```

### Code Quality
```bash
yarn type-check       # Run TypeScript compiler checks
yarn lint             # Run all linters (ESLint, stylelint, Prettier)
yarn lint:js          # Lint JavaScript/TypeScript files
yarn lint:css         # Lint styled-components CSS
yarn lint:prettier    # Check Prettier formatting
yarn fix              # Auto-fix all linting issues
yarn fix:js           # Auto-fix ESLint issues
yarn fix:prettier     # Auto-fix Prettier formatting
```

### Other
```bash
yarn plop             # Run Plop code generator
```

### GraphQL
The Gatsby GraphQL explorer is available at `http://localhost:8000/___graphql` during development.

## Architecture

### Gatsby Configuration
- **gatsby-config.ts**: Site metadata, SEO configuration, and plugin setup. Connects to Strapi CMS for project data.
- **gatsby-browser.ts** & **gatsby-ssr.ts**: Export wrappers for consistent page and root element structure across both browser and SSR.
- **gatsby-node.ts**: Currently minimal, can be used for programmatic page creation if needed.

### Component Structure
Components follow a co-location pattern where each component has its own directory containing:
- `ComponentName.tsx` - Component logic
- `ComponentName.styled.ts` - Styled-components definitions

Key component types:
- **Sections**: Large page sections (Hero, About, Work, Projects, Services, Contact) located in `src/components/Sections/`
- **Layout**: Shell components (Layout, Navbar, Footer, Sidebar, SocialLinks)
- **Utilities**: Reusable components (CustomCursor, CustomImage, CustomLink, AnimatedText, BackgroundImage, SEO)

### Application Wrappers
The application uses two wrapper levels (defined in `src/components/`):

1. **wrapRootElement**: Wraps the entire application with ThemeProvider for styled-components theme access
2. **wrapPageElement**: Wraps each page with GlobalStyle and Layout component

Both are exported from `gatsby-browser.ts` and `gatsby-ssr.ts` to ensure consistency.

### Layout System
`Layout.tsx` provides the shell for all pages:
- Conditionally renders Navbar only on homepage (`location.pathname === '/'`)
- Wraps children with CustomCursorManager context provider
- Always renders: Sidebar, CustomCursor, SocialLinks, Footer

### Theming
Global theme defined in `src/style/theme.ts` includes:
- Fonts: Source Code Pro (primary), Space Grotesk (secondary), Oswald (tertiary)
- Color system with primary colors (red/pink palette) and grayscale
- Breakpoints (xs, sm, md, lg, xl)
- Typography settings, transitions, shadows, border radius

All styled-components have access to theme via props.

### State Management
- **CustomCursorContext**: Global context for managing cursor appearance states (`default`, `link`, `project`, etc.)
- Local component state using React hooks
- No Redux or complex state management

### Pages
Pages are located in `src/pages/`:
- `index.tsx` - Homepage with all main sections
- `about.tsx` - Detailed about page
- `projects.tsx` - Projects listing page
- `success.tsx` - Form submission success page
- `404.tsx` - Not found page

Homepage uses `@loadable/component` for code-splitting the ParticlesBg library.

### Data Layer
- Static data stored in `src/constants/` (jobs, projects, services, about, links, social links, hero data)
- Dynamic project data fetched from Strapi CMS via `gatsby-source-strapi` plugin
- Site metadata accessed via `useSiteMetadata` custom hook

### Custom Hooks
Located in `src/hooks/`:
- `useSiteMetadata.ts` - GraphQL query for site metadata
- `useMousePosition.ts` - Track mouse position for cursor effects
- `usePreviousValue.ts` - Store previous value of a state
- `useGetImageSize.ts` - Get dimensions of an image

### TypeScript Configuration
- Strict mode enabled
- All Gatsby files (gatsby-config, gatsby-node, etc.) use TypeScript
- Type declarations in `src/@types/`
- Target: ES2017, Module: CommonJS

### Pre-commit Hooks
Configured via simple-git-hooks:
1. Runs `tsc` (type checking)
2. Runs lint-staged which executes ESLint and stylelint on staged files

### SEO
- Custom SEO component (`src/components/SEO/SEO.tsx`)
- Uses react-helmet for meta tags
- Site metadata includes title, description, keywords, Twitter card, image URL
- Sitemap generated via gatsby-plugin-sitemap

### Styling
- All styles use styled-components (no CSS/SCSS files)
- Global styles in `src/style/GlobalStyle.ts`
- stylelint configured for styled-components syntax
- Display names enabled in development for easier debugging
