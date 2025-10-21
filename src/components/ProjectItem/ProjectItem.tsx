import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Container, ProjectLink } from './ProjectItem.styled';
import { CustomCursorContext } from '../../context/CustomCursorContext';

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    summary: string;
    featured: boolean;
    description: string;
    stack: Array<{ name: string }>;
    web: string;
    github: string;
    image: {
      localFile?: {
        childImageSharp?: {
          gatsbyImageData: ImageDataLike;
        };
      };
    } | string;
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { title, featured, summary, web, github, description, stack, image } = project;

  const stackArray = stack.map((item) => item.name);
  const { setType } = useContext(CustomCursorContext);

  // Check if image is a Gatsby image object or a direct import (string)
  const isGatsbyImage = typeof image !== 'string' && image?.localFile?.childImageSharp?.gatsbyImageData;
  const imageData = isGatsbyImage && typeof image !== 'string' && image.localFile?.childImageSharp?.gatsbyImageData
    ? getImage(image.localFile.childImageSharp.gatsbyImageData)
    : null;

  return (
    <Container>
      <div className="project-block">
        {isGatsbyImage && imageData ? (
          <GatsbyImage image={imageData} alt={title} className="image" />
        ) : (
          <img src={typeof image === 'string' ? image : ''} alt={title} className="image" />
        )}
        <div className="info">
          {featured && <span className="featured">featured</span>}
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
            {github && (
              <ProjectLink
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                onMouseEnter={() => {
                  setType('hover-social');
                }}
                onMouseLeave={() => {
                  setType('default');
                }}
              >
                <FaGithub />
              </ProjectLink>
            )}
            {web && (
              <ProjectLink
                href={web}
                target="_blank"
                rel="noreferrer"
                aria-label="Website"
                onMouseEnter={() => {
                  setType('hover-social');
                }}
                onMouseLeave={() => {
                  setType('default');
                }}
              >
                <MdWeb />
              </ProjectLink>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectItem;
