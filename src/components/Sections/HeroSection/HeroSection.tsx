import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { v4 } from 'uuid';
import { useStaticQuery, graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

import AnimatedText from '../../AnimatedText/AnimatedText';
import CustomImage from '../../CustomImage/CustomImage';
import CustomLink from '../../CustomLink/CustomLink';
import { Container } from './HeroSection.styled';

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "hero" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            transformOptions: { grayscale: true }
            placeholder: BLURRED
            height: 450
            width: 450
          )
        }
      }
    }
  }
`;

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const headingRef = useRef<HTMLDivElement>(null);
  const imgData = useStaticQuery(query);
  const {
    allFile: { nodes },
  } = imgData;

  useEffect(() => {
    if (!headingRef.current) throw Error('divRef is not assigned');
    const element = headingRef.current;

    gsap.to(element, { duration: 0.3, opacity: 1 });
  }, []);

  const name = ['nicolás', 'di', 'rago'];

  return (
    <Container id="hero">
      <div className="content">
        <div className="media">
          {nodes.map((node: ImageDataLike, index: number) => {
            const isActive = index === activeIndex;

            return (
              <div key={v4()} className={`image ${isActive ? 'active' : 'inactive'}`}>
                <CustomImage
                  isActive={isActive}
                  // data={data[index].url}
                  node={node}
                  name={name[index]}
                  // translate={`translate(${xPos / 1.5}px, ${yPos / 3}px)`}
                />
              </div>
            );
          })}
        </div>
        <div className="title" ref={headingRef}>
          {name.map((item, index) => (
            <div key={v4()} className={`title-${index + 1}`}>
              <AnimatedText key={v4()} text={item} index={index} setActiveIndex={setActiveIndex} />
            </div>
          ))}

          <div className="details">
            <div className="description">
              full-stack <span>web developer</span> mainly focused on the frontend side. currently
              working for{' '}
              <a href="https://nuuk.de" target="_blank" rel="noopener noreferrer">
                <span>nuuk gmbh</span>
              </a>
              . based in berlin.
            </div>
            <CustomLink url="#contact" type="link" text="get in touch" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
