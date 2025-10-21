import React, { useRef, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from './AboutSection.styled';
import about from '../../../constants/about';

const About: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const contentRef = useRef(null);
  const stackWrapperRef = useRef<HTMLDivElement>(null);
  const stackFadeRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const INITIAL_ITEMS = 10;

  useEffect(() => {
    if (!contentRef.current) throw Error('divRef is not assigned');

    const element = contentRef.current;

    ScrollTrigger.matchMedia({
      '(min-width: 800px)': function () {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 120,
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
      },
    });
  }, []);

  useEffect(() => {
    if (!stackWrapperRef.current) return;

    // Get responsive collapsed height based on screen size
    const getCollapsedHeight = () => {
      const width = window.innerWidth;
      if (width <= 600) return 300;
      if (width <= 768) return 200;
      if (width <= 960) return 180;
      return 120;
    };

    if (showAll) {
      // Expand animation
      gsap.to(stackWrapperRef.current, {
        maxHeight: 2000,
        duration: 1,
        ease: 'power3.inOut',
      });

      // Fade out the overlay
      if (stackFadeRef.current) {
        gsap.to(stackFadeRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      }
    } else {
      // Collapse animation
      gsap.to(stackWrapperRef.current, {
        maxHeight: getCollapsedHeight(),
        duration: 1,
        ease: 'power3.inOut',
      });

      // Fade in the overlay
      if (stackFadeRef.current) {
        gsap.to(stackFadeRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      }
    }
  }, [showAll]);

  const { stack } = about;

  return (
    <Container>
      <div id="about" className="about" ref={contentRef}>
        <div className="content">
          <div className="titles">
            <div className="title-container">
              <h2 className="title">
                <div className="title-line" />
                <span>01. </span>about
              </h2>
            </div>
            <h3>profile, skills & stack</h3>
          </div>

          <div className="text">
            <p className="profile">{about.text}</p>
            <div
              ref={stackWrapperRef}
              className={`stack-wrapper ${!showAll ? 'collapsed' : 'expanded'}`}
            >
              <div className="stack-grid">
                {stack.map((item) => (
                  <p key={uuidv4()} className="stack-item">
                    {item}
                  </p>
                ))}
              </div>
              <div
                ref={stackFadeRef}
                className="stack-fade"
                style={{ opacity: showAll ? 0 : 1 }}
              />
            </div>
            {stack.length > INITIAL_ITEMS && (
              <button
                className="view-all-btn"
                onClick={() => setShowAll(!showAll)}
                type="button"
              >
                {showAll ? 'show less' : 'view more'}
              </button>
            )}
            {/* <div className="btn-container">
              <CustomLink url="/about" type="gatsby" text="the other side" />
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
