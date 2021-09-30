import React, { useRef, useEffect } from 'react';
import { v4 } from 'uuid';
import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageDataLike } from 'gatsby-plugin-image';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Container } from './ProjectList.styled';

gsap.registerPlugin(ScrollTrigger);

const query = graphql`
  {
    allStrapiProject {
      nodes {
        title
        summary
        web
        slug
        stack {
          name
        }
        github
        featured
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: { grayscale: true, fit: FILL }
                formats: AUTO
              )
            }
          }
        }
      }
    }
  }
`;

interface ProjectListProps {
  featured: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ featured }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = useStaticQuery(query);

  const contentRef = useRef(null);
  const elementsRef = useRef<any[]>([]);
  elementsRef.current = [];

  const data = featured ? projects.filter((project) => project.featured === true) : projects;

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
      <div ref={contentRef} className="list">
        {data.map(
          (project: {
            id: number;
            title: string;
            summary: string;
            featured: boolean;
            description: string;
            stack: any[];
            web: string;
            github: string;
            image: { localFile: { childImageSharp: { gatsbyImageData: ImageDataLike } } };
          }) => (
            <div ref={addToRef} key={v4()}>
              <ProjectItem project={project} />
            </div>
          )
        )}
      </div>
    </Container>
  );
};

export default ProjectList;
