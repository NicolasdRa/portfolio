import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './Projects.styled';
import projects from '../../../constants/projects';

const Projects = () => (
  <Container>
    <section id="projects" className="projects">
      <div className="content">
        <div className="title-container">
          <h2 className="title">projects</h2>
        </div>
        <h3>things i’ve built, things I’m working on</h3>

        <div className="project-list">
          {projects.map((project) => {
            const { id, title, summary, featured, description, stack, links, image } = project;

            return (
              <div key={id} className="project-block">
                <img src={image} alt={title} className="project-image" />
                <div className="project-info">
                  {featured && <h5 className="featured">featured</h5>}
                  <h4>{title}</h4>
                  <h5>
                    <span className="date">{summary}</span>
                  </h5>
                  <p className="project-description">{description}</p>

                  {stack.map((item) => (
                    <span key={uuidv4()} className="stack-item">
                      {item}
                    </span>
                  ))}

                  <div className="links">
                    {links.map((item: { icon: React.ReactNode; url: string }) => {
                      const { icon, url } = item;

                      return (
                        <span key={uuidv4()} className="link-item">
                          <a href={url}>{icon}</a>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-container">
          {/* TODO: link to download full CV */}
          <button type="button" className="btn">
            all projects
          </button>
        </div>
      </div>
    </section>
  </Container>
);

export default Projects;
