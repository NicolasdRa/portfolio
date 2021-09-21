import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
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
    width: 65vw;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    width: 45%;
  }

  .title {
    display: flex;
    justify-content: flex-end;
    color: ${theme.colors.primary4};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    padding-top: 7px;
    position: relative;
    width: 18rem;
    margin-bottom: 1rem;
    text-align: right;
  }

  .title span {
    margin-right: 0.5rem;
  }

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

  .btn-container {
    display: flex;
    align-self: center;
    justify-content: center;
    position: relative;
    width: 50%;
  }

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
    transition: ${theme.transition};
  }

  .link-item:hover {
    color: ${theme.colors.primary4};
    transform: translateY(-2px);
    transition: ${theme.transition};
  }

  .link-item:active {
    ${theme.colors.primary3};
    transform: translateY(1px);
    transition: transform 125ms;
  }
`;
