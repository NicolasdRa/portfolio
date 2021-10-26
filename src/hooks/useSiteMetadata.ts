import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      defaultTitle: string;
      titleTemplate: string;
      defaultDescription: string;
      keywords: Array<string>;
      siteUrl: string;
      defaultImageUrl: string;
      defaultLanguage: string;
      twitterUsername: string;
    };
  };
}

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            keywords
            siteUrl
            defaultImageUrl: imageUrl
            twitterUsername
            defaultLanguage: language
          }
        }
      }
    `
  );

  return siteMetadata;
};
