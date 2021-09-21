import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from './Work.styled';
import jobs from '../../../constants/jobs';

const Work = () => {
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

  return (
    <Container>
      <div id="work" className="work" ref={contentRef}>
        <div className="content">
          <div className="titles">
            <div className="title-container">
              <h2 className="title">
                <div className="title-line" />
                <span>02. </span>work
              </h2>
            </div>
            <h3>where I’ve worked</h3>
          </div>
          <div className="text">
            {jobs.map((job) => {
              const { id, company, position, startDate, endDate, tasks } = job;

              return (
                <div key={id} className="experience-block">
                  <h4>{company}</h4>
                  <h5>
                    <span className="date">
                      {startDate} - {endDate}
                      {/* <span className="position">- {position}</span> */}
                    </span>
                  </h5>

                  {tasks.map((task) => (
                    <p key={uuidv4()}>{task}</p>
                  ))}
                </div>
              );
            })}

            <div className="btn-container">
              {/* TODO: link to download full CV */}
              <button type="button" className="cta cta-work">
                download cv
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Work;
