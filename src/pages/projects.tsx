import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Link, PageProps } from 'gatsby';
import { theme } from '../style/theme';

const Wrapper = styled.main`
  h1 {
    font-family: ${theme.fonts.secondary};
    font-size: 4rem;
    font-weight: lighter;
    margin-bottom: 5rem;
  }
`;

const Projects: React.FC<PageProps> = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) throw Error('divRef is not assigned');
    const element = contentRef.current;
    gsap.fromTo(element, { opacity: 0 }, { duration: 0.8, ease: 'expo.out', opacity: 1 });
  }, []);

  return (
    <Wrapper className="error-page">
      <div ref={contentRef} className="error-container">
        <h1>Other projects Page</h1>
        <Link to="/" className="cta">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Projects;
