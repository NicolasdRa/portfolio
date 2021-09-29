/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

import { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: 'Nicolás di Rago dev portfolio',
    description: 'Nicolás di Rago web developer portfolio',
    keywords: ['gatsby', 'starter', 'typescript', 'eslint', 'prettier', 'layout', 'seo'],
    siteUrl: 'https://gatsby-starter-skeleton.netlify.app',
    twitterUsername: `@nicolasdiRago`,
    imageUrl: '/main.jpg',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, './assets/images'),
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts-v2',
      options: {
        fonts: [
          {
            family: 'Source Code Pro',
            weights: ['300', '400', '500', '600', '700', '800'],
          },
          {
            family: 'Space Grotesk',
            weights: ['300', '400', '500', '600', '700'],
          },
          {
            family: 'Oswald',
            weights: ['300', '400', '500', '600', '700'],
          },
        ],
      },
    },
  ],
};

export default gatsbyConfig;
