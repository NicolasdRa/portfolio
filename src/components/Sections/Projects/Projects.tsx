import React, { useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from './Projects.styled';
import projects from '../../../constants/projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const contentRef = useRef(null);
  const elementsRef = useRef<any[]>([]);
  elementsRef.current = [];

  useEffect(() => {
    if (!contentRef.current) throw Error('divRef is not assigned');
    const element = contentRef.current;
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 100,
      },
      {
        duration: 0.8,
        ease: 'expo.out',
        opacity: 1,
        y: 0,
        scrollTrigger: {
          id: `Projects`,
          trigger: element,
          start: 'top 75%',
          end: 'bottom 90%',
          toggleActions: 'play none none reverse',
          // markers: true,
        },
      }
    );

    elementsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          duration: 0.8,
          ease: 'expo.out',
          opacity: 1,
          y: 0,
          scrollTrigger: {
            id: `project-${index + 1}`,
            trigger: el,
            start: 'top 75%',
            // start: 'top 75%',
            // end: 'bottom 90%',
            toggleActions: 'play none none none',
            // markers: true,
          },
        }
      );
    });
  }, []);

  const addToRef = (el: React.ReactNode) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

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

          <div className="project-list">
            {projects.map((project) => {
              const { id, title, summary, featured, description, stack, links, image } = project;

              return (
                <div key={id} className="project-block" ref={addToRef}>
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
            <a href="/projects" className="cta">
              more projects
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
