import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './Work.styled';
import jobs from '../../../constants/jobs';

const Work = () => (
  <Container>
    <section id="work" className="work">
      <div className="content">
        <div className="titles">
          <div className="title-container">
            <h2 className="title">work</h2>
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
            <button type="button" className="btn">
              download cv
            </button>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default Work;
