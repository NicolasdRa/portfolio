import React, { useContext } from 'react';
import socialLinks from '../../constants/social_links';
import logo from '../../assets/svg/logo.svg';
import { Container } from './Footer.styled';
import { CustomCursorContext } from '../../context/CustomCursorContext';

const Footer: React.FC = () => {
  const { setType } = useContext(CustomCursorContext);

  return (
    <Container>
      <footer className="footer">
        <ul className="social-links">
          {socialLinks.map((link) => (
            <li key={link.id} className="social-link">
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="logo">
          <a
            href="#hero"
            onMouseEnter={() => {
              setType('hover');
            }}
            onMouseLeave={() => {
              setType('default');
            }}
          >
            <img src={logo} alt="web dev" />
          </a>
        </div>
        <h4>
          designed & built by <span> nicolás di rago</span>
        </h4>
        <h4>copyright &copy; {new Date().getFullYear()}</h4>
      </footer>
    </Container>
  );
};

export default Footer;
