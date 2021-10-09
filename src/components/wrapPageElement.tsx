import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from '../style/GlobalStyle';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => (
  <>
    <GlobalStyle />
    <Layout {...props}>{element}</Layout>
  </>
);
