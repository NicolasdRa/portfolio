import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// import { graphql, useStaticQuery } from 'gatsby';
// import { getImage } from 'gatsby-plugin-image';

// import { BgImage } from 'gbimage-bridge';

import { Container } from './Hero.styled';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) throw Error('divRef is not assigned');
    gsap.from(textRef.current, { duration: 0.3, opacity: 0, scale: 0.5 });
    gsap.to(textRef.current, { duration: 1, ease: 'elastic.out(1, 0.3)', x: +55 });
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
      <header className="hero">
        <div ref={textRef}>
          <h1 className="title">nicolás di rago</h1>
          <div className="name-container">
            <div className="line" />
            <h2 className="name">web developer</h2>
          </div>
          <p className="details">
            full-stack, mainly focused on the frontend side and UX/UI design. Based in Berlin.
            Currently working as a free-lancer.
          </p>
        </div>
      </header>
      {/* </BgImage> */}
    </Container>
  );
};

export default Hero;
