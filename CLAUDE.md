# CLAUDE.md - Portfolio Website (Gatsby → Astro Migration Guide)

This file provides comprehensive guidance for migrating this Gatsby portfolio to Astro, documenting all features, implementations, and architectural decisions.

## Project Overview

Personal portfolio website currently built with **Gatsby v5**, **TypeScript**, and **styled-components**. The site showcases projects, work experience, and contact information with sophisticated animations, custom cursor interactions, and theme switching capabilities.

**Current Stack:**
- Gatsby v5 (SSG/React)
- React 18
- TypeScript
- styled-components
- GSAP animations
- Gatsby Image Plugin (Sharp)

**Migration Target:**
- Astro (SSG with React islands)
- React 19
- TypeScript
- CSS solution (Tailwind/styled-components/CSS Modules - TBD)
- GSAP animations (maintained)
- Astro Image optimization

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

## Feature Documentation (for Migration)

### 1. Core Pages & Routing

**Pages Structure:**
- `src/pages/index.tsx` - Homepage with all main sections
- `src/pages/about.tsx` - Detailed about page
- `src/pages/projects.tsx` - Projects listing page
- `src/pages/success.tsx` - Form submission success page
- `src/pages/404.tsx` - Not found page

**Gatsby-Specific Features:**
- File-based routing
- Gatsby's `Link` component for client-side navigation
- `PageProps` and `HeadFC` types from Gatsby
- GraphQL data layer for images and metadata

**Migration Considerations:**
- Astro uses similar file-based routing
- Replace `gatsby.Link` with Astro's or HTML anchor tags
- Replace GraphQL queries with Astro's content collections or imports
- Convert `Head` export to Astro's frontmatter/layout SEO

### 2. Layout System

**Current Implementation:**
- `Layout.tsx` provides application shell
- Two-level wrapper system via Gatsby APIs:
  - `wrapRootElement`: ThemeProvider wrapper
  - `wrapPageElement`: GlobalStyle + Layout wrapper
- Conditional Navbar rendering (homepage only)
- Always-present components: Sidebar, CustomCursor, SocialLinks, Footer, ThemeToggle

**Key Components:**
- **Layout** (`src/components/Layout/Layout.tsx`): Main shell with sidebar state
- **Navbar** (`src/components/NavBar/NavBar.tsx`): Header with scroll behavior, hide on scroll down
- **Sidebar** (`src/components/Sidebar/Sidebar.tsx`): Mobile menu with theme toggle
- **Footer** (`src/components/Footer/Footer.tsx`): Footer with social links and logo
- **SocialLinks** (`src/components/SocialLinks/SocialLinks.tsx`): Fixed social icons

**Migration Approach:**
- Create Astro layout components in `src/layouts/`
- Convert wrappers to Astro layout composition
- Maintain conditional rendering logic in layouts
- Keep sidebar state management (may need client directive)

### 3. Theming System (Light/Dark Mode)

**Current Implementation:**

**Theme Context** (`src/context/ThemeContext.tsx`):
- `ThemeModeProvider`: Context provider managing theme state
- `useThemeMode()`: Hook exposing `themeMode` and `toggleTheme`
- Persists theme to localStorage with key `'portfolio-theme-mode'`
- Detects system preference on first load: `window.matchMedia('(prefers-color-scheme: dark)')`
- Supports 'light' | 'dark' modes

**Theme Definitions** (`src/style/themes.ts`):
- `lightTheme` and `darkTheme` objects
- Common theme structure:
  ```typescript
  {
    mode: 'light' | 'dark',
    fonts: { primary, secondary, tertiary },
    colors: { primary0-5, white, background, black, grey1-5 },
    breakpoints: { xs, sm, tablet, md, mdLg, lg, xl },
    typography: { letterSpacing },
    animations: { transition },
    shadows: { shadow1-3 },
    borderRadius: string,
    transition: string
  }
  ```

**Color Palettes:**
- Light mode: Red/pink primary (#d94048 base), light background (#FAFAFA)
- Dark mode: Muted red primary (#b84550), dark background (#0a0a0a)
- Both include 6-tone primary scale and 5-tone grey scale

**Theme Integration:**
- `wrapRootElement` wraps app with `ThemeModeProvider` → `ThemeProvider` (styled-components)
- All styled-components access theme via `${({ theme }) => theme.colors.primary}`
- Global styles (`GlobalStyle.ts`) respond to theme changes with transitions

**ThemeToggle Component** (`src/components/ThemeToggle/ThemeToggle.tsx`):
- Fixed position toggle button
- Shows current mode text ("dark" or "light")
- GSAP entrance animation (elastic bounce from right on desktop, fade on mobile)
- Cursor interaction states

**Migration Strategy:**
- Replace Context API with Astro's persistent client-side state or nano-stores
- Use CSS variables for theme colors in `:root` and `[data-theme="dark"]`
- Implement theme toggle as Astro island with `client:load`
- Use `localStorage` and `<script is:inline>` to prevent flash on load
- Alternative: Keep styled-components with ThemeProvider in client islands

### 4. Custom Cursor System

**Advanced feature with multiple interaction states**

**Architecture:**
- **Context**: `CustomCursorContext.ts` defines cursor types
- **Manager**: `manager.tsx` provides state management
- **Component**: `CustomCursor.tsx` renders dual-cursor system

**Cursor Types:**
```typescript
type CursorLookType = 'default' | 'hover' | 'hover-social' | 'hover-name'
```

**Implementation Details:**
- **Dual cursor design**: Main dot (10px) + Secondary ring (50px)
- Main cursor follows mouse instantly
- Secondary cursor follows with smooth delay (0.15 easing factor)
- Uses `requestAnimationFrame` for 60fps animation
- `useRef` + `positionRef` pattern for smooth interpolation

**Responsive Behavior:**
- Only shows on hover-capable devices: `@media (hover: hover) and (pointer: fine)`
- Respects `prefers-reduced-motion: reduce` - completely disabled
- Hidden on screens ≤1024px
- Pauses animation when tab not visible (document.hidden check)

**Visual States:**
- **default**: Small dot + thin ring border
- **hover**: Larger semi-transparent filled circle (buttons, links)
- **hover-social**: Similar to hover with different color
- **hover-name**: Animated text interactions (hero section)

**Theme Adaptation:**
- Dark mode: mix-blend-mode difference, glowing effects with box-shadows
- Light mode: normal blend, no glow
- Colors respond to theme.colors

**Global Cursor Removal:**
```css
*:not(focused-elements) { cursor: none; }
```
Applied via GlobalStyle when custom cursor is supported.

**Migration Approach:**
- Keep as React island with `client:load` directive
- Context can remain React Context within island
- Alternatively use nano-stores for global state
- Ensure cursor state persists across page navigations (may need view transitions)

### 5. Animation System (GSAP)

**Library:** GSAP v3.12.5 with ScrollTrigger plugin

**Animation Patterns:**

**1. Page Entry Animations:**
- Fade + slide up: `opacity: 0, y: 100` → `opacity: 1, y: 0`
- Duration: 0.3-0.8s
- Easing: `expo.out`, `cubic-bezier(0.77, 0, 0.175, 1)`

**2. Scroll-Triggered Animations:**
```javascript
ScrollTrigger.matchMedia({
  '(min-width: 800px)': function() {
    gsap.fromTo(element, {
      opacity: 0, y: 100
    }, {
      opacity: 1, y: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
        end: 'bottom 90%',
        toggleActions: 'play none none reverse'
      }
    })
  }
})
```
- Desktop only (min-width: 800px)
- Staggered list item animations (projects)
- Sections: About, Work, Projects, Contact

**3. Specialized Animations:**

**Hero Section:**
- Title fade-in on mount: `duration: 0.3, opacity: 1`

**ThemeToggle:**
- Desktop: elastic bounce from right
  ```javascript
  gsap.from(el, { duration: 0.3, scale: 0.5, delay: 0.5, x: 100 })
  gsap.to(el, { duration: 1, ease: 'elastic.out(1, 0.3)', x: 0, delay: 0.5 })
  ```
- Mobile: simple fade-in

**Navbar:**
- Hide on scroll down animation
- Show on scroll up
- Uses `requestAnimationFrame` throttling

**About Section - Stack Grid:**
- Expand/collapse animation: `maxHeight` transition
- Responsive collapsed heights (300px mobile → 120px desktop)
- Fade overlay: `opacity: 0 ↔ 1`
- Duration: 1s, `ease: 'power3.inOut'`

**4. Particles Background:**
- Code-split with `@loadable/component`
- particles-bg library with custom config
- Theme-responsive colors
- Covers full viewport behind content

**Migration Considerations:**
- GSAP works well with Astro - no changes needed
- Wrap GSAP code in `client:load` or `client:visible` islands
- ScrollTrigger needs client-side execution
- Consider view transitions API for page-to-page animations
- May need to re-initialize ScrollTrigger on navigation in Astro

### 6. Image Handling

**Current System:**
- `gatsby-plugin-image` with Sharp transformations
- `gatsby-source-filesystem` for local images
- Images in `src/assets/images/`

**Hero Section Images:**
```graphql
query {
  allFile(filter: { relativeDirectory: { eq: "hero" } }) {
    nodes {
      childImageSharp {
        gatsbyImageData(
          transformOptions: { grayscale: true }
          placeholder: BLURRED
          height: 450
          width: 450
        )
      }
    }
  }
}
```
- Grayscale transformation
- Blurred placeholder (LQIP)
- Fixed dimensions

**CustomImage Component:**
- Wraps GatsbyImage
- Handles active state animations
- Image fade-in on hover (hero section)

**Project Images:**
- Mix of Sharp-optimized images and static imports
- Type checking for both: `ImageDataLike | string`

**Migration to Astro:**
- Replace with Astro's `<Image />` component
- Use `astro:assets` for local images
- Implement similar transformations:
  ```astro
  <Image src={heroImage} alt="" width={450} height={450} class="grayscale" />
  ```
- Use CSS filters for grayscale
- Astro provides similar placeholder/loading strategies

### 7. Data Management

**Static Data Files** (`src/constants/`):

**1. About** (`about.ts`):
```typescript
{
  text: string, // Profile description
  stack: string[] // 45+ technologies
}
```

**2. Jobs** (`jobs.ts`):
```typescript
Array<{
  id: number,
  company: string,
  position: string,
  startDate: string,
  endDate: string,
  tasks: string[]
}>
```
5 job entries with detailed task descriptions

**3. Projects** (`projects.tsx`):
```typescript
Array<{
  id: number | string,
  title: string,
  summary?: string,
  featured?: boolean,
  description: string,
  stack: Array<{ name: string }>,
  web?: string,
  url?: string,
  github?: string,
  image: ImageDataLike | string,
  slug: string,
  tag: string
}>
```
13+ projects with rich metadata, categorized by tags

**4. Links** (`links.ts`):
Navigation links for navbar/sidebar

**5. Social Links** (`social_links.tsx`):
Social media with react-icons icons

**Migration Strategy:**
- Move to Astro content collections or keep as TypeScript modules
- If using content collections:
  ```
  src/content/
    projects/
    jobs/
    config.ts
  ```
- Import directly in `.astro` files
- No GraphQL needed - direct imports or `getCollection()`

### 8. SEO Implementation

**Current System** (`src/components/Head/Head.tsx`):
- Custom Head component using Gatsby's HeadFC API
- Props: title, description, keywords, imageUrl, language, type, pathname
- Pulls defaults from `useSiteMetadata()` hook

**Meta Tags Generated:**
- Standard: title, description, keywords
- Open Graph: og:title, og:description, og:type, og:url, og:image
- Twitter Card: twitter:creator, twitter:title, twitter:description, twitter:image
- Favicon link

**Site Metadata** (gatsby-config.js):
```javascript
{
  title: 'Nicolás di Rago - Full-stack Web developer',
  titleTemplate: '%s | Nicolás di Rago - Full-stack Web developer',
  description: 'Nicolás di Rago Full-stack Web Developer',
  keywords: ['react developer', 'typescript', ...],
  siteUrl: 'https://www.nicolasdirago.com',
  twitterUsername: '@nicolasdiRago',
  imageUrl: '/main.jpg',
  language: 'en'
}
```

**Sitemap:**
- Generated via `gatsby-plugin-sitemap`

**Migration to Astro:**
- Use Astro's built-in `<head>` in layouts
- Create SEO component or use `@astrojs/seo`
- Define site config in `astro.config.mjs`
- Use frontmatter for per-page overrides
- Astro sitemap: `@astrojs/sitemap` integration

### 9. Forms & Netlify Integration

**Contact Form** (`src/components/Sections/ContactSection/ContactSection.tsx`):

**Implementation:**
```html
<form
  name="contact-portfolio"
  method="post"
  netlify-honeypot="bot-field"
  data-netlify="true"
  action="/success"
>
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact-portfolio" />
  <input type="text" name="name" placeholder="name" />
  <input type="email" name="email" placeholder="email" />
  <textarea name="message" placeholder="message" rows={5} />
  <CustomLink type="button" url="" text="submit" />
</form>
```

**Features:**
- Netlify Forms integration with `data-netlify="true"`
- Honeypot spam protection
- Redirects to `/success` page on submission
- No client-side JavaScript validation (relies on HTML5)

**Migration:**
- Netlify Forms work identically in Astro
- May need to add form to `public/` for SSG detection
- Consider adding client-side validation with React island
- Alternatively migrate to Netlify Functions or API routes

### 10. Accessibility Features

**Keyboard Navigation:**
- Focus styles: `:focus-visible` with primary color outline (2px, 2px offset)
- `:focus` fallback for all browsers
- Removes outline for mouse users: `:focus:not(:focus-visible)`

**ARIA Labels:**
- Social links: `aria-label={link.name}`
- Icon buttons: `aria-label="Close menu"`, etc.
- Theme toggle: `aria-label="Switch to {mode} mode"`

**Motion Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    cursor: auto !important;
  }
}
```
Disables all animations, transitions, smooth scroll, and custom cursor.

**Responsive Design:**
- Mobile-first breakpoints
- Touch-friendly tap targets
- Readable font sizes (base: 1.6rem = 16px)
- High contrast in both themes

**Migration:**
- Maintain all a11y features
- Test with screen readers
- Ensure Astro islands are keyboard accessible
- Keep reduced-motion preferences

### 11. Typography System

**Fonts:**
- **Primary**: Source Code Pro (300, 400, 500, 600, 700, 800 weights)
- **Secondary**: Space Grotesk (300-700)
- **Tertiary**: Oswald (300-700)

**Loading Strategy:**
- Self-hosted via @fontsource packages
- Imported in `gatsby-browser.ts`
- Multiple weights preloaded for performance

**Usage:**
- Body/paragraphs: Source Code Pro
- Headings (h1-h6): Space Grotesk
- Special emphasis: Oswald

**Typography Settings:**
- Base font size: 62.5% (10px root, 1.6rem body = 16px)
- Letter spacing: 0.2rem
- Line height: 160% for paragraphs
- Text rendering: `optimizeLegibility`, `-webkit-font-smoothing: antialiased`

**Migration:**
- Continue using Fontsource or switch to `@fontsource-variable`
- Import in Astro layout head
- Consider font-display strategies
- Preload critical font files

### 12. Performance Optimizations

**Code Splitting:**
- ParticlesBg lazy-loaded: `loadable(() => import('particles-bg/dist'))`
- Reduces initial bundle

**Image Optimization:**
- Sharp transformations (WebP, multiple sizes)
- Lazy loading (native or Gatsby)
- Blur-up placeholders (LQIP)

**Bundle Configuration:**
```javascript
NODE_OPTIONS='--openssl-legacy-provider --max-old-space-size=4096 --max-http-header-size=16384'
```
- Increased memory limit (4GB)
- Required for webpack 4/5 compatibility

**Gatsby Specific:**
- Static generation for all pages
- Prefetching of linked pages
- Service worker for offline (via gatsby-plugin-offline if enabled)

**Migration Goals:**
- Astro's partial hydration > Gatsby's full React hydration
- Use `client:load`, `client:visible`, `client:idle` strategically
- Islands architecture for interactive components only
- Target smaller bundle sizes (Astro typically 30-50% smaller)

### 13. Styled-Components Architecture

**Global Styles** (`src/style/GlobalStyle.ts`):
- CSS reset via normalize.css
- Custom resets (margin, padding, list-style)
- Font-size: 62.5% (rem calculation base)
- Cursor removal for custom cursor
- Reduced-motion media query
- Scrollbar customization
- Focus styles
- Base element styles (body, a, button, h1-6, img, p, svg)

**Component Patterns:**
- Co-located: `Component.tsx` + `Component.styled.ts`
- Styled-components use theme props
- CSS-in-JS with full TypeScript support

**Naming Convention:**
```typescript
export const Container = styled.div`...`
export const Wrapper = styled.div`...`
export const Inner = styled.div`...`
```

**Theme Access:**
```typescript
color: ${({ theme }) => theme.colors.primary3};
font-family: ${({ theme }) => theme.fonts.primary};
```

**Configuration:**
```javascript
// gatsby-config.js
{
  resolve: 'gatsby-plugin-styled-components',
  options: {
    displayName: process.env.NODE_ENV !== 'production'
  }
}
```
Display names enabled in dev for debugging.

**Migration Options:**

**Option A: Keep styled-components**
- Install `@astrojs/react` + styled-components
- Use within React islands
- May increase bundle size

**Option B: Migrate to CSS Modules**
- Astro's built-in support
- Keep scoping, lose theme prop pattern
- Convert theme to CSS variables

**Option C: Tailwind CSS**
- Modern, utility-first
- Excellent dark mode support via `class="dark"`
- Would require significant refactoring
- Best performance, smallest runtime

**Option D: UnoCSS**
- Similar to Tailwind
- Better Astro integration
- Instant HMR

**Recommendation:** Tailwind v4 or UnoCSS for fresh start, or keep styled-components for faster migration.

### 14. Build & Deployment

**Current Setup:**
- Gatsby v5 build
- Node 20+, npm 10+
- Output: static HTML + JS bundles
- Deployment target: Netlify (implied by form integration)

**Build Scripts:**
- Clean: `gatsby clean` - removes .cache and public
- Build: `gatsby build` - production build
- Serve: `gatsby serve` - preview production build

**Environment:**
- `.env.production`, `.env.development` support (dotenv)
- Environment variables for CMS connection (if used)

**Migration Build:**
- Astro build is typically faster than Gatsby
- Output: `dist/` folder
- Native SSR support if needed (future consideration)
- Compatible with Netlify, Vercel, Cloudflare Pages
- Adapter system for different platforms

### 15. Custom Components Deep-Dive

**CustomLink Component:**
- Multi-type link component
- Types: 'button', 'link', 'gatsby' (internal navigation)
- Cursor interaction integration
- Download attribute support
- Styled with before/after pseudo-elements for effects

**AnimatedText Component:**
- Used in hero section for name animation
- Manages hover states
- Sets active index for image swapping
- Cursor type changes on hover

**ProjectList Component:**
- Filters projects by `featured` prop
- GSAP scroll animations for each item
- Ref array pattern for multiple elements
- Staggered animation timing

**ProjectItem Component:**
- Displays project cards
- Handles both GatsbyImage and static images
- Stack badges
- GitHub + live demo links
- Cursor interaction on links
- Featured badge

**SocialLinks Component:**
- Fixed position on page
- Vertical list of social icons
- Cursor interactions
- Hidden on mobile

**Migration Notes:**
- Most components can become React islands
- Server-render ProjectList, hydrate for animations
- Consider making non-interactive components static Astro components

## Migration Roadmap

### Phase 1: Setup & Configuration
1. Initialize Astro project
2. Configure TypeScript (strict mode maintained)
3. Setup ESLint, Prettier, stylelint
4. Install React integration: `@astrojs/react`
5. Configure image optimization: `@astrojs/image` or built-in
6. Setup CSS solution (Tailwind recommended)
7. Configure sitemap + SEO integrations

### Phase 2: Static Infrastructure
1. Create layout components (`src/layouts/BaseLayout.astro`)
2. Implement theme system (CSS variables + localStorage)
3. Convert global styles
4. Setup static pages (404, success)
5. Migrate SEO component
6. Import fonts

### Phase 3: Data & Content
1. Migrate constants to `src/content/` or keep as modules
2. Setup content collections (if using)
3. Convert image imports to Astro assets
4. Create type definitions
5. Test data access patterns

### Phase 4: Components (Static First)
1. Convert Footer to Astro component
2. Convert non-interactive parts of sections
3. Create project cards (server-rendered)
4. Migrate forms
5. Convert Navbar (non-interactive parts)

### Phase 5: Interactive Components (Islands)
1. Theme toggle as React island (`client:load`)
2. Custom cursor as React island (`client:load`)
3. Sidebar with state (`client:load`)
4. GSAP animations (`client:visible` or `client:load`)
5. AnimatedText interactions
6. Particles background (`client:idle`)

### Phase 6: Pages
1. Homepage - combine sections
2. About page
3. Projects page with filtering
4. Test all routes

### Phase 7: Optimization
1. Bundle analysis
2. Image optimization audit
3. Lighthouse testing
4. Accessibility audit
5. Performance tuning

### Phase 8: Testing & Deployment
1. Cross-browser testing
2. Mobile responsive testing
3. Theme switching testing
4. Form submission testing
5. Deploy to staging
6. Production deployment

## Key Migration Decisions

### Decision 1: CSS Strategy
**Options:**
- Tailwind CSS v4 (recommended)
- UnoCSS
- CSS Modules
- Keep styled-components

**Recommendation:** Tailwind v4 for modern DX, best performance, smallest bundle.

### Decision 2: Island Strategy
**Interactive components requiring client:load:**
- CustomCursor + Context
- ThemeToggle + ThemeContext
- Sidebar (toggle state)
- All GSAP animations

**Components that can be static:**
- Footer
- Most of Navbar
- Section layouts (server-render, hydrate for ScrollTrigger)

### Decision 3: Data Management
**Options:**
- Keep as TypeScript modules (simplest)
- Migrate to Astro content collections (more features)
- Headless CMS integration (future)

**Recommendation:** Start with TS modules, migrate to collections if needed.

### Decision 4: Image Strategy
Use Astro's built-in `<Image />` component from `astro:assets` with:
- Local imports for static images
- Remote URLs for CMS images (future)
- CSS filters for grayscale effects
- Similar placeholder strategies

## Testing Checklist

- [ ] All pages render correctly
- [ ] Theme switching works (light/dark)
- [ ] Custom cursor on desktop
- [ ] No cursor on mobile/tablet
- [ ] GSAP scroll animations trigger
- [ ] Images load with placeholders
- [ ] Forms submit to Netlify
- [ ] Social links open correctly
- [ ] Navbar hide/show on scroll
- [ ] Sidebar opens/closes
- [ ] Project filtering works
- [ ] SEO meta tags present
- [ ] Sitemap generates
- [ ] 404 page works
- [ ] Success page accessible
- [ ] Keyboard navigation
- [ ] Focus states visible
- [ ] Reduced motion respected
- [ ] All fonts load
- [ ] No console errors
- [ ] Lighthouse scores (target: 90+)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive (320px - 1920px)

## Performance Targets (Post-Migration)

**Lighthouse Scores (Mobile):**
- Performance: 90+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

**Bundle Size Goals:**
- Initial JS: <100KB (gzipped)
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Cumulative Layout Shift: <0.1

**Astro Advantages:**
- Smaller JS bundles (islands vs full React hydration)
- Faster build times
- Better Core Web Vitals
- Modern output (ESM, optimal chunks)

## Post-Migration Enhancements

**Consider after successful migration:**
1. View Transitions API for page transitions
2. Image lazy loading with native `loading="lazy"`
3. Service worker for offline support
4. Progressive Web App features
5. Content collections for better content management
6. MDX support for blog/articles
7. Internationalization (i18n) if needed
8. Analytics integration
9. Search functionality
10. RSS feed for blog/projects

## Technical Debt to Address

**Current Issues:**
1. Node OpenSSL legacy provider required (webpack 4/5 issue)
2. Large memory allocation needed (4GB)
3. All fonts loaded upfront (could be optimized)
4. Particles library adds ~40KB (consider removing or alternatives)
5. No component testing setup
6. Stylelint for styled-components may have false positives

**Migration Improvements:**
- Remove webpack/node legacy issues (Astro uses Vite)
- Reduce memory requirements
- Font subsetting and preloading
- Lighter particle effects or CSS alternatives
- Add Vitest for component testing
- Cleaner linting setup

## Resources for Migration

**Official Docs:**
- Astro: https://docs.astro.build
- Astro React Integration: https://docs.astro.build/en/guides/integrations-guide/react/
- Astro Images: https://docs.astro.build/en/guides/images/
- GSAP with Astro: https://greensock.com/

**Migration Guides:**
- Gatsby to Astro: https://docs.astro.build/en/guides/migrate-to-astro/from-gatsby/

**Community:**
- Astro Discord: discord.gg/astro
- GitHub: github.com/withastro/astro

---

**Migration Estimated Timeline:** 2-3 weeks for complete migration with testing
**Risk Level:** Medium (complex animations and custom cursor need careful porting)
**Confidence Level:** High (Astro's islands architecture is perfect for this use case)
