import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Container, ProjectLink } from './ProjectItem.styled';
import { CustomCursorContext } from '../../context/CustomCursorContext';

interface ProjectStack {
  id?: number | string;
  name: string;
}

interface ProjectImage {
  localFile?: {
    childImageSharp?: {
      gatsbyImageData?: IGatsbyImageData;
    };
  };
}

interface ProjectItemProps {
  project: {
    id: number | string;
    title: string;
    summary?: string;
    featured?: boolean;
    description: string;
    stack: ProjectStack[];
    web?: string;
    url?: string; // Some projects use 'url' instead of 'web'
    github?: string;
    image: ProjectImage | string; // Can be either a string (import) or Gatsby image data
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { title, featured, summary, web, url, github, description, stack, image } = project;

  const { setType } = useContext(CustomCursorContext);

  // Use 'url' if 'web' is not defined
  const websiteUrl = web || url;

  // Type guard for Gatsby image
  const isGatsbyImage = (img: ProjectImage | string): img is ProjectImage =>
    typeof img === 'object' && 'localFile' in img;

  const gatsbyImageData = isGatsbyImage(image)
    ? image?.localFile?.childImageSharp?.gatsbyImageData
    : null;
  const imageData = gatsbyImageData ? getImage(gatsbyImageData) : null;

  return (
    <Container>
      <div className="project-block">
        {imageData ? (
          <GatsbyImage image={imageData} alt={title} className="image" />
        ) : (
          <img src={image as string} alt={title} className="image" />
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
            {stack.map((item, index) => (
              <span key={`${project.id}-stack-${item.id || index}`} className="stack-item">
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
