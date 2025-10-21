// Type definitions for Project data

import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ProjectStack {
  id?: number | string;
  name: string;
}

export interface ProjectImage {
  localFile?: {
    childImageSharp?: {
      gatsbyImageData?: IGatsbyImageData;
    };
  };
}

export interface Project {
  id: number | string;
  title: string;
  description: string;
  github?: string;
  url?: string;
  image?: ProjectImage;
  stack: ProjectStack[];
  featured?: boolean;
  strapiId?: string;
}

export interface ProjectItemProps {
  project: Project;
  index: number;
}

export interface ProjectListProps {
  projects: Project[];
  title: string;
  showLink?: boolean;
}
