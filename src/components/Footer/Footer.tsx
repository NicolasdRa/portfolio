import React from 'react';
import socialLinks from '../../constants/social_links';
import { Container } from './Footer.styled';

const Footer = () => (
  <Container>
    <footer className="footer">
      <div>
        <ul className="footer-links social-links">
          {socialLinks.map((link) => (
            <li key={link.id} className="social-link">
              <a href={link.url}>{link.icon}</a>
            </li>
          ))}
        </ul>
        <h4>
          copyright &copy; {new Date().getFullYear()} | <span> nicolas di rago</span> design &
          development | all rights reserved
        </h4>
      </div>
    </footer>
  </Container>
);

export default Footer;
