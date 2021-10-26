import React, { useRef, useEffect, useState, useContext } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/svg/logo.svg';
import pageLinks from '../../constants/links';
import { Container } from './NavBar.styled';
import { CustomCursorContext } from '../../context/CustomCursorContext';

interface Props {
  toggleSideBar: () => void;
}

const Navbar: React.FC<Props> = ({ toggleSideBar }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState('');

  const { setType } = useContext(CustomCursorContext);

  const handleScroll = () => {
    let prevScroll = window.pageYOffset;

    window.onscroll = () => {
      const currentScroll = window.pageYOffset;

      if (prevScroll < currentScroll) {
        setScrolled('scrolledDown');
      } else if (prevScroll > currentScroll) {
        setScrolled('');
      } else {
        setScrolled('');
      }

      prevScroll = currentScroll;
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          <Link
            to="/"
            className="nav-links"
            onMouseEnter={() => setType('hover')}
            onMouseLeave={() => setType('default')}
          >
            <img src={logo} alt="web dev" />
          </Link>
        </div>
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <AiOutlineMenu />
        </button>
        <ul className="nav-links">
          {pageLinks.map((link: { id: number; url: string; text: string }) => (
            <li
              key={link.id}
              onMouseEnter={() => setType('hover')}
              onMouseLeave={() => setType('default')}
            >
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
