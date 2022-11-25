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
    title: `Nicolás di Rago - Full-stack Web developer`,
    titleTemplate: `%s | Nicolás di Rago - Full-stack Web developer`,
    description: 'Nicolás di Rago Full-stack Web Developer',
    keywords: [
      'react developer',
      'react typescript developer',
      'javascript developer',
      'gatsby developer',
      'wordpress developer',
      'frontend developer berlin',
      'react SPA developer',
      'wen applications developer',
      'frontend developer germany',
      'frontend developer berlin',
      'full-stack developer berlin',
    ],
    siteUrl: 'https://www.nicolasdirago.com',
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
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://portfolio-server-strapi-mongo.herokuapp.com`,
        // apiURL: `http://localhost:1338`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`project`],
        // singleTypes: [`home-page`, `contact`],
      },
    },
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
