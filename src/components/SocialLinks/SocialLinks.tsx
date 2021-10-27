import React, { useRef, useEffect, useContext } from 'react';
import { gsap } from 'gsap';

import socialLinks from '../../constants/social_links';
import { Container } from './SocialLinks.styled';
import { CustomCursorContext } from '../../context/CustomCursorContext';

const SocialLinks: React.FC = () => {
  const linksRef = useRef<HTMLDivElement>(null);
  const { setType } = useContext(CustomCursorContext);

  useEffect(() => {
    if (!linksRef.current) throw Error('divRef is not assigned');
    gsap.from(linksRef.current, { duration: 0.3, scale: 0.5, delay: 0.5, y: -100 });
    gsap.to(linksRef.current, { duration: 0.3, opacity: 1, delay: 0.5, y: -100 });
    gsap.to(linksRef.current, { duration: 1, ease: 'elastic.out(1, 0.3)', y: +14, delay: 0.5 });
  }, []);

  return (
    <Container>
      <div ref={linksRef} className="vertical-links">
        <div className="social-links">
          <a
            href="../../assets/cv-nicolasdirago.pdf"
            download
            className="cv"
            onMouseEnter={() => setType('hover-social')}
            onMouseLeave={() => setType('default')}
          >
            CV
          </a>
          <div className="vertical-line" />
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              key={link.id}
              aria-label={link.name}
              className="social-link"
              onMouseEnter={() => setType('hover-social')}
              onMouseLeave={() => setType('default')}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SocialLinks;
