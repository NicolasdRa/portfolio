import React, { useRef, useEffect } from 'react';
import { v4 } from 'uuid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Container } from './ProjectList.styled';
import projectsData from '../../constants/projects';

gsap.registerPlugin(ScrollTrigger);

interface ProjectListProps {
  featured: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ featured }) => {
  const projects = projectsData;

  const contentRef = useRef(null);
  const elementsRef = useRef<any[]>([]);
  elementsRef.current = [];

  const data = featured ? projects.filter((project) => project.featured === true) : projects;

  useEffect(() => {
    if (!contentRef.current) throw Error('divRef is not assigned');
    const element = contentRef.current;

    ScrollTrigger.matchMedia({
      '(min-width: 800px)': function () {
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
      },
    });
  }, []);

  const addToRef = (el: React.ReactNode) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <Container>
      <div ref={contentRef} className="list">
        {data.map((project: any) => (
          <div ref={addToRef} key={v4()}>
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProjectList;
