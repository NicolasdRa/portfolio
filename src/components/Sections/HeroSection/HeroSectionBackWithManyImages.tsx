import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { v4 } from 'uuid';
import { useStaticQuery, graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

import useMouse from '@react-hook/mouse-position';
import AnimatedText from '../../AnimatedText/AnimatedText';
import CustomImage from '../../CustomImage/CustomImage';
import { Container } from './HeroSection.styled';
// import { useMousePosition } from '../../../hooks/useMousePosition';

import { data } from '../../../constants/heroData';

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "hero" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            height: 600
          )
        }
      }
    }
  }
`;

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const textRef = useRef<HTMLDivElement>(null);

  const mousePosition = useMouse(textRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  // const mousePosition = useMousePosition();

  const imgData = useStaticQuery(query);
  const {
    allFile: { nodes },
  } = imgData;

  const name = ['nicolás', 'di', 'rago'];

  return (
    <Container>
      <div id="hero" className="hero">
        <div className="content">
          <div className="media">
            {nodes.map((node: ImageDataLike, index: any) => {
              const isActive = index === activeIndex;
              let { y, x } = mousePosition;

              if (y === null || x === null) {
                y = 0;
                x = 0;
              }

              const xPos = isActive ? x : 0;
              const yPos = isActive ? y : 0;

              return (
                <div key={v4()} className={`image ${isActive ? 'active' : 'inactive'}`}>
                  <CustomImage
                    // data={data[index].url}
                    node={node}
                    name={name[index]}
                    translate={`translate(${xPos / 1.5}px, ${yPos / 3}px)`}
                  />
                </div>
              );
            })}
          </div>
          <div
            className="title"
            ref={textRef}
            // onMouseEnter={() => {
            //   setActiveIndex(Math.floor(Math.random() * (4 - 1) + 1));
            // }}
            // onMouseLeave={() => {
            //   setActiveIndex(-1);
            // }}
          >
            {name.map((item, index) => (
              <div key={v4()} className={`title-${index + 1}`}>
                <AnimatedText
                  key={v4()}
                  text={item}
                  setActiveIndex={setActiveIndex}
                  index={index}
                />
              </div>
            ))}

            <div className="details">
              full-stack <span>web developer</span>, mainly focused on the frontend side and UX/UI
              design. Currently working as a free-lancer. Based in Berlin.
              <a href="#contact" className="cta cta-hero">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
