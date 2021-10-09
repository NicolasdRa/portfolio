import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectList from '../../ProjectList/ProjectList';
import CustomLink from '../../CustomLink/CustomLink';
import { Container } from './ProjectsSection.styled';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => (
  <Container>
    <div id="projects" className="content">
      <div className="content">
        <div className="title-container">
          <h2 className="title">
            <div className="title-line" />
            <span>03.</span>projects
          </h2>
          <h3 className="subtitle">things i’ve built, things I’m working on</h3>
        </div>
        <ProjectList featured />
        <div className="btn-container">
          <CustomLink url="/projects" type="gatsby" text="more projects" />
        </div>
      </div>
    </div>
  </Container>
);

export default Projects;
