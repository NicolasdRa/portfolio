import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.div`
  .projects {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8rem;
  }

  .projects h3 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .projects h4 {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .projects h5 {
    font-family: ${theme.fonts.primary};
    margin-bottom: 1rem;
  }

  .position {
    text-transform: capitalize;
    margin-left: 1rem;
  }
  .projects p {
    /* line-height: 160%; */
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 60vw;
  }

  /* .project-list {
  } */

  .project-block {
    margin-top: 4rem;
    margin-bottom: 10rem;
    display: flex;
    justify-content: space-between;
  }

  .project-image {
    width: 45%;
    object-fit: cover;
    border-radius: 1rem;
  }

  .project-info {
    width: 50%;
  }

  .title-container {
    display: flex;
    justify-content: flex-start;
    position: relative;
  }

  .btn-container {
    display: flex;
    align-self: center;
    justify-content: center;
    position: relative;
    width: 50%;
  }

  .title {
    color: ${theme.colors.primary3};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    padding-top: 7px;
    position: relative;
    width: 18rem;
    margin-bottom: 1rem;
    text-align: right;
  }

  .title::before {
    content: '';
    width: 90px;
    height: 8px;
    left: 0px;
    border-bottom: 1px solid ${theme.colors.primary3};
    position: absolute;
  }

  /* .project-description {
  } */

  .stack-item {
    margin-right: 3rem;
  }

  .links {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    width: max-content;
    justify-content: space-between;
  }

  .link-item {
    font-size: 1.75rem;
    margin-right: 3rem;
    color: ${theme.colors.grey3};
    transition: ${theme.animations.transition};
  }

  .link-item:hover {
    color: ${theme.colors.primary3};
  }

  .btn {
    color: ${theme.colors.primary3};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    padding-top: 7px;
    position: relative;
    width: 22.8rem;
    margin-bottom: 1rem;
    text-align: right;
  }

  .btn::before {
    content: '';
    width: 100px;
    height: 10px;
    left: 0px;
    border-bottom: 1px solid ${theme.colors.primary3};
    position: absolute;
  }
`;
