import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { PageProps } from 'gatsby';
import CustomLink from '../components/CustomLink/CustomLink';
import { theme } from '../style/theme';
import { SEO } from '../components/SEO/SEO';

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  text-align: center;
  min-height: 100vh;
  margin: 0 5vw;

  h1 {
    font-family: ${theme.fonts.secondary};
    font-size: 4rem;
    font-weight: lighter;
    margin-bottom: 5rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NotFound: React.FC<PageProps> = ({ location }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) throw Error('divRef is not assigned');
    const element = contentRef.current;
    gsap.fromTo(element, { opacity: 0 }, { duration: 0.8, ease: 'expo.out', opacity: 1 });
  }, []);

  return (
    <Wrapper>
      <SEO pageMetadata={{ title: 'Not found' }} location={location} />
      <div ref={contentRef} className="container">
        <h1>dead end...</h1>
        <CustomLink url="/" text="back home" type="gatsby" />
      </div>
    </Wrapper>
  );
};

export default NotFound;
