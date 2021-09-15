import React from 'react';
import { Container } from './Contact.styled';

const Contact = () => (
  <Container>
    <section id="contact" className="contact">
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

export default Contact;
