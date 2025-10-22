/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { resolve } = require('path');

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  trailingSlash: 'always', // Explicitly set for Gatsby v5 (default changed from 'legacy' to 'always')
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
      'web applications developer',
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
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nicolás di Rago Portfolio',
        short_name: 'NdR Portfolio',
        start_url: '/',
        background_color: '#FAFAFA',
        theme_color: '#EC4D37',
        display: 'standalone',
        icon: 'src/assets/icon-512.png', // This icon path is relative to the root of the site
        icons: [
          {
            src: '/favicon-1.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicon-2.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/favicon-3.png',
            sizes: '48x48',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, './src/assets/images'),
        name: 'images',
      },
    },
  ],
};
