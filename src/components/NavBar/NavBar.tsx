import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaAlignRight } from 'react-icons/fa';
import pageLinks from '../../constants/links';
import { Container } from './NavBar.styled';

interface Props {
  toggleSideBar: () => void;
}

const Navbar: React.FC<Props> = ({ toggleSideBar }) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) throw Error('divRef is not assigned');

    gsap.from(navRef.current, { duration: 0.3, opacity: 0, delay: 0.5 });
  }, []);

  return (
    <Container ref={navRef}>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* <img src={logo} alt="web dev" /> */}
            <button type="button" className="toggle-btn" onClick={toggleSideBar}>
              <FaAlignRight />
            </button>
          </div>

          <ul className="nav-links">
            {pageLinks.map(
              (link: { id: React.Key | null | undefined; url: string; text: string }) => (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </Container>
  );
};
export default Navbar;
