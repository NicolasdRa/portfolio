import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../../assets/svg/logo.svg';
import pageLinks from '../../constants/links';
import { Container } from './NavBar.styled';

interface Props {
  toggleSideBar: () => void;
}

const Navbar: React.FC<Props> = ({ toggleSideBar }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState('');

  useEffect(() => {
    let prevScroll = window.pageYOffset;

    window.onscroll = () => {
      const currentScroll = window.pageYOffset;

      if (prevScroll < currentScroll) {
        setScrolled('scrolledDown');
      } else if (prevScroll > currentScroll) {
        setScrolled('scrolledUp');
      } else {
        setScrolled('');
      }

      prevScroll = currentScroll;
    };
  });

  useEffect(() => {
    if (!navRef.current) throw Error('divRef is not assigned');

    gsap.from(navRef.current, { duration: 0.3, opacity: 0, delay: 0.5 });
  }, []);

  return (
    <Container ref={navRef}>
      <nav className={`navbar ${scrolled}`}>
        <div className="nav-logo">
          <img src={logo} alt="web dev" />
        </div>
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignRight />
        </button>
        <ul className="nav-links">
          {pageLinks.map((link: { id: number; url: string; text: string }) => (
            <li key={link.id}>
              <a href={link.url}>
                <span className="link-number">0{link.id - 1}. </span>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
export default Navbar;
