import React, { useRef, useEffect } from 'react';
import { v4 } from 'uuid';
import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import projects from '../../constants/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import CustomImage from '../CustomImage/CustomImage';

gsap.registerPlugin(ScrollTrigger);

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            height: 400
          )
        }
      }
    }
  }
`;

const ProjectList = () => {
  const imgData = useStaticQuery(query);
  const {
    allFile: { nodes },
  } = imgData;

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
    <div className="project-list" ref={contentRef}>
      {nodes.map((node: { name: string }) => (
        <div ref={addToRef} key={v4()}>
          <CustomImage node={node} name={node.name} active={false} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
