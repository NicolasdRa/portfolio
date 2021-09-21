import React from 'react';
// import { PageProps, graphql, useStaticQuery } from 'gatsby';
// import { getImage } from 'gatsby-plugin-image';
// import { BgImage } from 'gbimage-bridge';
import ParticlesBg from 'particles-bg';

import Hero from '../components/Sections/Hero/Hero';
// import Services from '../components/Sections/Services/Services';
import About from '../components/Sections/About/About';
import Work from '../components/Sections/Work/Work';
import Projects from '../components/Sections/Projects/Projects';
import Contact from '../components/Sections/Contact/Contact';

const Index: React.FC = () => {
  const particleConfig = {
    num: [1, 50],
    rps: 0.7,
    radius: [1, 5],
    life: [1.5, 5],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.1, 0.6],
    scale: [0.1, 0.4],
    position: { x: 800, y: 800, width: 100, height: 100 }, // all or center or {x:1,y:1,width:100,height:100}
    color: ['#262626'],
    cross: 'dead', // cross or bround
    random: 15, // or null,
    g: 1, // gravity
    // f: [2, -1], // force
  };

  return (
    <>
      <Hero />
      <ParticlesBg num={50} type="custom" bg config={particleConfig} />
      {/* <Services /> */}
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
};

export default Index;
