import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    summary: string;
    featured: boolean;
    description: string;
    stack: string[];
    links: { icon: JSX.Element; url: string }[];
    image: string;
  };
}

const ProjectItem: React.FC<ProjectProps> = ({ project }) => {
  const { id, title, summary, featured, description, stack, links, image } = project;

  return (
    <div key={id} className="project-block">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        {featured && <h5 className="featured">featured</h5>}
        <h4>{title}</h4>
        <h5>
          <span className="date">{summary}</span>
        </h5>
        <p className="project-description">{description}</p>

        {stack.map((item) => (
          <span key={uuidv4()} className="stack-item">
            {item}
          </span>
        ))}

        <div className="links">
          {links.map((item: { icon: React.ReactNode; url: string }) => {
            const { icon, url } = item;

            return (
              <span key={uuidv4()} className="link-item">
                <a href={url}>{icon}</a>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
