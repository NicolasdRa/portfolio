import { Link } from 'gatsby';
import React from 'react';
import services from '../../../constants/services';
import { Container } from './ServicesSection.styled';

const Services: React.FC = () => (
  <Container>
    <div id="services" className="services">
      {services.map((service) => {
        const { id, title, icon, text } = service;
        return (
          <article key={id} className="service">
            <button type="button" className="icon">
              {icon}
            </button>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        );
      })}
    </div>
    <div className="btn-container">
      <Link to="/services" className="btn">
        More info and quotations
      </Link>
    </div>
  </Container>
);

export default Services;
