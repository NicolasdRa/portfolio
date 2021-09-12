import React from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { BgImage } from 'gbimage-bridge';

import Hero from '../components/Sections/Hero/Hero';
import Services from '../components/Sections/Services/Services';
import About from '../components/Sections/About/About';
import Work from '../components/Sections/Work/Work';
import Projects from '../components/Sections/Projects/Projects';
import Contact from '../components/Sections/Contact/Contact';

const Index: React.FC<PageProps> = () => {
  const { bgImage } = useStaticQuery(
    graphql`
      query {
        bgImage: file(relativePath: { eq: "drop-hero1.png" }) {
          id
          childImageSharp {
            gatsbyImageData(width: 1000, webpOptions: { quality: 70 }, quality: 50)
          }
        }
      }
    `
  );

  const image = getImage(bgImage);

  return (
    <>
      <BgImage image={image}>
        <Hero />
        <Services />
        <About />
        <Work />
        <Projects />
        <Contact />
      </BgImage>
    </>
  );
};

export default Index;
