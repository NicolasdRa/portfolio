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

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang={seo.language} />
      <link rel="icon" type="image/ico" href={Favicon} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={(pageMetadata?.keywords || keywords).join(', ')} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={pageMetadata?.type || 'website'} />
      <meta property="og:url" content={`${siteUrl}${location.pathname}`} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};
