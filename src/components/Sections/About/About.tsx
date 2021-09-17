import React, { useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from './About.styled';
import about from '../../../constants/about';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const contentRef = useRef(null);

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
          trigger: element,
          start: 'top 75%',
          end: 'bottom 90%',
          toggleActions: 'play none none reverse',
          // markers: true,
        },
      }
    );
  }, []);

  const { text, stack } = about;

  return (
    <Container>
      <section id="about" className="about" ref={contentRef}>
        <div className="content">
          <div className="titles">
            <div className="title-container">
              <h2 className="title">about</h2>
            </div>
            <h3>profile, skills & stack</h3>
          </div>

          <div className="text">
            <p className="profile">{text}</p>
            {stack.map((item) => (
              <p key={uuidv4()} className="stack-item">
                {item}
              </p>
            ))}

            <div className="btn-container">
              {/* TODO: link to page with hobbies and reference to tango and other shit */}
              <button type="button" className="btn">
                the other side
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
