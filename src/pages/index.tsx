import React from 'react';
import { PageProps, HeadFC } from 'gatsby';
import loadable from '@loadable/component';

import HeroSection from '../components/Sections/HeroSection/HeroSection';
// import ServicesSection from '../components/Sections/ServicesSection/ServicesSection';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import WorkSection from '../components/Sections/WorkSection/WorkSection';
import ProjectsSection from '../components/Sections/ProjectsSection/ProjectsSection';
import ContactSection from '../components/Sections/ContactSection/ContactSection';
import { Head as HeadComponent } from '../components/Head/Head';

const ParticlesBg = loadable(() => import("particles-bg/dist"));

const Index: React.FC<PageProps> = ({ location: _location }) => {
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
      <HeroSection />
      <ParticlesBg num={50} type="custom" bg config={particleConfig} />
      {/* <Services /> */}
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Index;

export const Head: HeadFC = ({ location }) => (
  <HeadComponent title="Home" pathname={location.pathname} />
);
