import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import socialLinks from '../../constants/social_links';
import { Container } from './SocialLinks.styled';

const SocialLinks: React.FC = () => {
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!linksRef.current) throw Error('divRef is not assigned');
    gsap.from(linksRef.current, { duration: 0.3, opacity: 0, scale: 0.5, delay: 1, y: -100 });
    gsap.to(linksRef.current, { duration: 1, ease: 'elastic.out(1, 0.3)', y: +14, delay: 1 });
  }, []);

  return (
    <Container>
      <div ref={linksRef} className="vertical-links">
        <div className="social-links">
          <a href="../../assets/cv-nicolasdirago.pdf" download className="cv">
            CV
          </a>
          <div className="vertical-line" />
          {socialLinks.map((link) => (
            <a href={link.url} key={link.id} className="social-link">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SocialLinks;
