import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from './Contact.styled';

const Contact = () => {
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
      <section id="contact" className="contact" ref={contentRef}>
        <div className="content">
          <div className="titles">
            <div className="title-container">
              <h2 className="title">contact</h2>
            </div>
            <h3>drop a line</h3>
          </div>

          <form action="" className="form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                autoComplete="name"
                className="form-control"
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                autoComplete="email"
                className="form-control"
              />

              <textarea
                rows={5}
                id="message"
                name="message"
                placeholder="message"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn">
              submit
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
