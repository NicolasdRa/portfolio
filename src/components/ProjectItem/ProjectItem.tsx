import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Container, ProjectLink } from './ProjectItem.styled';
import { CustomCursorContext } from '../../context/CustomCursorContext';

interface ProjectItemProps {
  project: {
    id: number | string;
    title: string;
    summary?: string;
    featured?: boolean;
    description: string;
    stack: Array<{ name: string }>;
    web?: string;
    url?: string; // Some projects use 'url' instead of 'web'
    github?: string;
    image:
      | {
          localFile?: {
            childImageSharp?: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        }
      | string;
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { title, featured, summary, web, url, github, description, stack, image } = project;

  const { setType } = useContext(CustomCursorContext);

  // Use 'url' if 'web' is not defined
  const websiteUrl = web || url;

  // Check if image is a Gatsby image object or a direct import (string)
  const isGatsbyImage =
    typeof image !== 'string' && image?.localFile?.childImageSharp?.gatsbyImageData;
  const imageData =
    isGatsbyImage && typeof image !== 'string' && image.localFile?.childImageSharp?.gatsbyImageData
      ? getImage(image.localFile.childImageSharp.gatsbyImageData)
      : null;

  return (
    <Container>
      <div className="project-block">
        {imageData ? (
          <GatsbyImage image={imageData} alt={title} className="image" />
        ) : (
          <img src={typeof image === 'string' ? image : ''} alt={title} className="image" />
        )}
        <div className="info">
          {featured && <span className="featured">featured</span>}
          <h4>{title}</h4>
          {summary && (
            <h5>
              <span className="summary">{summary}</span>
            </h5>
          )}
          <p className="description">{description}</p>

          <div className="stack">
            {stack.map((item) => (
              <span key={`${project.id}-stack-${item.name}`} className="stack-item">
                {item.name}
              </span>
            ))}
          </div>

          <div className="links">
            {github && (
              <ProjectLink
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${title} on Github`}
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
            {websiteUrl && (
              <ProjectLink
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${title} website`}
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
