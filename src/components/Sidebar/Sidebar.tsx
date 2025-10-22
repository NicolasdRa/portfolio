import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import links from '../../constants/links';
import socialLinks from '../../constants/social_links';
import { useThemeMode } from '../../context/ThemeContext';

import {
  Wrapper,
  SideBar,
  SocialLink,
  Inner,
  CloseBtn,
  SideBarLinks,
  SocialLinks,
  SideBarLink,
  ThemeToggleButton,
} from './SideBar.styled';

interface SideBarProps {
  isOpen: boolean;
  toggleSideBar: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, toggleSideBar }) => {
  const { themeMode, toggleTheme } = useThemeMode();

  return (
  <Wrapper>
    <SideBar className={isOpen ? 'show-sidebar' : undefined}>
      <CloseBtn onClick={toggleSideBar} aria-label="Close menu">
        <AiOutlineClose />
      </CloseBtn>
      <Inner>
        <SideBarLinks>
          {links.map((link) => (
            <li key={link.id}>
              <SideBarLink to={link.url} onClick={toggleSideBar}>
                <span className="link-number">0{link.id - 1}. </span>
                {link.text}
              </SideBarLink>
            </li>
          ))}
        </SideBarLinks>
        <ThemeToggleButton onClick={toggleTheme}>
          {themeMode === 'light' ? 'dark' : 'light'} mode
        </ThemeToggleButton>
        <SocialLinks>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <SocialLink href={link.url} aria-label={link.name}>
                {link.icon}
              </SocialLink>
            </li>
          ))}
        </SocialLinks>
      </Inner>
    </SideBar>
  </Wrapper>
  );
};

export default Sidebar;
