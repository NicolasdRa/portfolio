import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from './ProjectsSection.styled';
import ProjectList from '../../ProjectList/ProjectList';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const contentRef = useRef(null);
  const elementsRef = useRef<any[]>([]);
  elementsRef.current = [];

  return (
    <Container>
      <div id="projects" className="projects" ref={contentRef}>
        <div className="content">
          <div className="title-container">
            <h2 className="title">
              <div className="title-line" />
              <span>03.</span>projects
            </h2>
            <h3 className="subtitle">things i’ve built, things I’m working on</h3>
          </div>
          <ProjectList />
          <div className="btn-container">
            <Link to="/projects" className="cta">
              more projects
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;