import React, { useState } from 'react';
import { PageProps } from 'gatsby';
import { GlobalStyle } from '../../style/GlobalStyle';
import { SEO } from '../SEO/SEO';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export const Layout: React.FC<Omit<PageProps, 'children'>> = ({ children, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <SEO location={location} />
      <Navbar toggleSideBar={toggleSideBar} />
      {children}
      <Footer />
    </>
  );
};