import React, { useState, ReactNode } from 'react';
import { PageProps } from 'gatsby';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SocialLinks from '../SocialLinks/SocialLinks';
import CustomCursor from '../CustomCursor/CustomCursor';
import Sidebar from '../Sidebar/Sidebar';
import CustomCursorManager from '../../context/manager';
import { ThemeToggle } from '../ThemeToggle';

interface LayoutProps {
  children: ReactNode;
  location: PageProps['location'];
}

export const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CustomCursorManager>
      {location.pathname === '/' && <Navbar toggleSideBar={toggleSideBar} />}
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <ThemeToggle />
      <CustomCursor />
      <SocialLinks />
      {children}
      <Footer />
    </CustomCursorManager>
  );
};
