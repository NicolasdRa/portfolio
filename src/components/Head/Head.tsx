import React from 'react';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

export interface HeadProps {
  title?: string;
  description?: string;
  keywords?: Array<string>;
  imageUrl?: string;
  language?: string;
  type?: string;
  pathname?: string;
}

export const Head: React.FC<HeadProps> = ({
  title,
  description,
  keywords: pageKeywords,
  imageUrl,
  language,
  type,
  pathname = '',
}) => {
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    keywords: defaultKeywords,
    siteUrl,
    defaultImageUrl,
    defaultLanguage,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${imageUrl || defaultImageUrl}`,
    language: language || defaultLanguage,
    url: `${siteUrl}${pathname}`,
    keywords: pageKeywords || defaultKeywords,
  };

  const pageTitle = titleTemplate.replace('%s', seo.title);

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.image} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  );
};