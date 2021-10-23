import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'gatsby';
import links from '../../constants/links';
import socialLinks from '../../constants/social_links';

import { Container, SocialLink } from './SideBar.styled';

interface SideBarProps {
  isOpen: boolean;
  toggleSideBar: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, toggleSideBar }) => (
  <Container>
    <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button type="button" className="close-btn" onClick={toggleSideBar}>
        <AiOutlineClose />
      </button>
      <div className="side-container">
        <ul className={isOpen ? 'sidebar-links' : undefined}>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.url} onClick={toggleSideBar}>
                <span className="link-number">0{link.id - 1}. </span>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={isOpen ? 'social-links sidebar-icons' : undefined}>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <SocialLink href={link.url}>{link.icon}</SocialLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  </Container>
);

export default Sidebar;
