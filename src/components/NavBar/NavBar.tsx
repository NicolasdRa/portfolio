import React from 'react';
import { Link } from 'gatsby';
// import logo from '../assets/images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import pageLinks from '../../constants/links';
import { Container } from './NavBar.styled';

interface Props {
  toggleSideBar: () => void;
}

const Navbar: React.FC<Props> = ({ toggleSideBar }) => (
  <Container>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="web dev" /> */}
          <button type="button" className="toggle-btn" onClick={toggleSideBar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(
            (link: { id: React.Key | null | undefined; url: string; text: string }) => (
              <a key={link.id} href={link.url}>
                {link.text}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  </Container>
);

export default Navbar;
