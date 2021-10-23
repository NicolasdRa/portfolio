import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Container, ProjectLink } from './ProjectsItem.styled';
import { CustomCursorContext } from '../../context/CustomCursorContext';

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    summary: string;
    featured: boolean;
    description: string;
    stack: any[];
    web: string;
    github: string;
    image: { localFile: { childImageSharp: { gatsbyImageData: ImageDataLike } } };
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const {
    title,
    featured,
    summary,
    web,
    github,
    description,
    stack,
    image: {
      localFile: {
        childImageSharp: { gatsbyImageData },
      },
    },
  } = project;

  const stackArray = stack.map((item) => item.name);
  const { setType } = useContext(CustomCursorContext);

  return (
    <Container>
      <div className="project-block">
        <GatsbyImage image={getImage(gatsbyImageData)} alt={title} className="image" />
        <div className="info">
          {featured && <h5 className="featured">featured</h5>}
          <h4>{title}</h4>
          <h5>
            <span className="summary">{summary}</span>
          </h5>
          <p className="description">{description}</p>

          <div className="stack">
            {stackArray.map((item) => (
              <span key={uuidv4()} className="stack-item">
                {item}
              </span>
            ))}
          </div>

          <div className="links">
            <ProjectLink
              href={github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => {
                setType('hover-social');
              }}
              onMouseLeave={() => {
                setType('default');
              }}
            >
              <FaGithub />
            </ProjectLink>
            <ProjectLink
              href={web}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => {
                setType('hover-social');
              }}
              onMouseLeave={() => {
                setType('default');
              }}
            >
              <MdWeb />
            </ProjectLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectItem;
