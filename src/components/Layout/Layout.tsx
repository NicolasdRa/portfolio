import React, { useState } from 'react';
import { PageProps } from 'gatsby';
import { SEO } from '../SEO/SEO';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SocialLinks from '../SocialLinks/SocialLinks';
import CustomCursor from '../CustomCursor/CustomCursor';
import Sidebar from '../Sidebar/Sidebar';
import CustomCursorManager from '../../context/manager';

export const Layout: React.FC<Omit<PageProps, 'children'>> = ({ children, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CustomCursorManager>
      <SEO location={location} />
      <Navbar toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <CustomCursor />
      <SocialLinks />
      {children}
      <Footer />
    </CustomCursorManager>
  );
};
