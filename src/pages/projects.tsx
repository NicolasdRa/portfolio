import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { PageProps } from 'gatsby';
import { theme } from '../style/theme';
import ProjectList from '../components/ProjectList/ProjectList';
import CustomLink from '../components/CustomLink/CustomLink';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8vw;
  margin: 0 auto;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80vw;
    margin-bottom: 8rem;
  }

  h1 {
    font-family: ${theme.fonts.secondary};
    font-size: 3.5rem;
    font-weight: normal;
    margin-bottom: 3rem;
    max-width: 65vw;
  }

  .cta-project-page {
    margin: 4rem 0;
    align-self: center;
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
    <Wrapper>
      <div ref={contentRef} className="content">
        <h1>more projects</h1>
        <ProjectList featured={false} />
        <CustomLink url="/" text="back home" type="gatsby" />
      </div>
    </Wrapper>
  );
};

export default Projects;
