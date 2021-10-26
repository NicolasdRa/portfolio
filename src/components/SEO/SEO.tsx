import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
// import Favicon from '../../assets/favicon.ico';

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
    defaultDescription,
    keywords,
    siteUrl,
    defaultImageUrl,
    defaultLanguage,
    twitterUsername,
  } = useSiteMetadata();

  const canonical = pathname ? `${siteUrl}${pathname}` : null;

  const seo = {
    title: pageMetadata?.title || defaultTitle,
    description: pageMetadata?.description || defaultDescription,
    image: `${siteUrl}${pageMetadata?.imageUrl || defaultImageUrl}`,
    language: pageMetadata?.language || defaultLanguage,
    url: `${siteUrl}${pathname}`,
    canonical,
  };

  return (
    <Helmet
      htmlAttributes={{ lang: seo.language }}
      title={seo.title}
      titleTemplate={`${seo.title} - %s`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `keywords`,
          content: keywords.join(', '),
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: `og:type`,
          content: pageMetadata?.type || 'website',
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(
        seo.image
          ? [
              {
                property: 'og:image',
                content: seo.image,
              },
              {
                property: 'og:image:alt',
                content: seo.title,
              },
              // {
              //   property: 'og:image:width',
              //   content: seo.image.width,
              // },
              // {
              //   property: 'og:image:height',
              //   content: seo.image.height,
              // },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
            ]
          : [
              {
                name: 'twitter:card',
                content: 'summary',
              },
            ]
      )}
    />
  );
};
