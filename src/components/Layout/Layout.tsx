import React, { useState } from 'react';
import { PageProps } from 'gatsby';
// import { getImage } from 'gatsby-plugin-image';
// import { BgImage } from 'gbimage-bridge';
import { GlobalStyle } from '../../style/GlobalStyle';
import { SEO } from '../SEO/SEO';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SocialLinks from '../SocialLinks/SocialLinks';
import CustomCursor from '../CustomCursor/CustomCursor';

export const Layout: React.FC<Omit<PageProps, 'children'>> = ({ children, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <SEO location={location} />
      {/* <BgImage image={image3}> */}
      <Navbar toggleSideBar={toggleSideBar} />
      <CustomCursor />
      {children}
      <SocialLinks />
      <Footer />
      {/* </BgImage> */}
    </>
  );
};
