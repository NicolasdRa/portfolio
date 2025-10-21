import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomLink from '../../CustomLink/CustomLink';
import { Container } from './ContactSection.styled';

function Contact() {
  gsap.registerPlugin(ScrollTrigger);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) throw Error('divRef is not assigned');
    const element = contentRef.current;

    ScrollTrigger.matchMedia({
      '(min-width: 800px)': function () {
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
      },
    });
  }, []);

  return (
    <Container>
      <div id="contact" className="contact" ref={contentRef}>
        <div className="content">
          <div className="titles">
            <div className="title-container">
              <h2 className="title">
                <div className="title-line" />
                <span>04. </span>contact
              </h2>
            </div>
            <h3>drop a line</h3>
          </div>

          <form
            className="form"
            name="contact-portfolio"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact-portfolio" />
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
            <CustomLink type="button" url="" text="submit" />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
