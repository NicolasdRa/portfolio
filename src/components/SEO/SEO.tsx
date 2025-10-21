import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import Favicon from '../../assets/favicon.ico';

export interface SEOProps {
  location: Location;
  pageMetadata?: {
    title?: string;
    description?: string;
    keywords?: Array<string>;
    siteUrl?: string;
    twitterUsername?: string;
    imageUrl?: string;
    language?: string;
    type?: string;
  };
}

export const SEO: React.FC<SEOProps> = ({ location, pageMetadata }) => {
  const { pathname } = location;
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    keywords,
    siteUrl,
    defaultImageUrl,
    defaultLanguage,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: pageMetadata?.title || defaultTitle,
    description: pageMetadata?.description || defaultDescription,
    image: `${siteUrl}${pageMetadata?.imageUrl || defaultImageUrl}`,
    language: pageMetadata?.language || defaultLanguage,
    url: `${siteUrl}${pathname}`,
  };

  // Structured Data (JSON-LD) for better SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nicolás di Rago',
    url: siteUrl,
    image: seo.image,
    sameAs: [
      'https://twitter.com/nicolasdiRago',
      'https://github.com/NicolasdRa', // Add if you have GitHub
      'https://www.linkedin.com/in/nicol%C3%A1s-di-rago-tango-code', // Add if you have LinkedIn
    ],
    jobTitle: 'Full-stack Web Developer',
    description: seo.description,
    knowsAbout: [
      'Web Development',
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Full-stack Development',
    ],
  };

  // Additional structured data for portfolio/creative work
  const portfolioData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seo.title,
    description: seo.description,
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: 'Nicolás di Rago',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang={seo.language} />
      <link rel="icon" type="image/ico" href={Favicon} />
      <link rel="canonical" href={seo.url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={(pageMetadata?.keywords || keywords).join(', ')} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={pageMetadata?.type || 'website'} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.image} />
      {/* Structured Data for SEO */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(portfolioData)}</script>
    </Helmet>
  );
};
