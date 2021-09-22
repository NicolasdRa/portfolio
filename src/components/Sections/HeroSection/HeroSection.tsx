import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// import { graphql, useStaticQuery } from 'gatsby';
// import { getImage } from 'gatsby-plugin-image';

// import { BgImage } from 'gbimage-bridge';

import { Container } from './HeroSection.styled';

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) throw Error('divRef is not assigned');
    const element = contentRef.current;
    gsap.fromTo(element, { opacity: 0 }, { duration: 0.8, ease: 'expo.out', opacity: 1 });
  }, []);
  // const { bgImage } = useStaticQuery(
  //   graphql`
  //     query {
  //       bgImage: file(relativePath: { eq: "drop-hero1.png" }) {
  //         id
  //         childImageSharp {
  //           gatsbyImageData(width: 1000, webpOptions: { quality: 70 }, quality: 50)
  //         }
  //       }
  //     }
  //   `
  // );

  // const image = getImage(bgImage);

  return (
    <Container>
      {/* <BgImage image={image}> */}
      <div id="hero" className="hero" ref={contentRef}>
        <div>
          <h1 className="title">
            nicolás<span>di rago</span>
          </h1>
          <div className="name-container">{/* <h2 className="name">web developer</h2> */}</div>
          <p className="details">
            full-stack <span>web developer</span>, mainly focused on the frontend side and UX/UI
            design. Currently working as a free-lancer. Based in Berlin.
          </p>
          <a href="#contact" className="cta cta-hero">
            Get in touch
          </a>
        </div>
      </div>
      {/* </BgImage> */}
    </Container>
  );
};

export default Hero;
