import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './About.styled';
import about from '../../../constants/about';

const About = () => {
  const { text, stack } = about;

  return (
    <Container>
      <section id="about" className="about">
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
