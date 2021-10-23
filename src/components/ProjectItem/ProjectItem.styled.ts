import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.div`
  h4 {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-family: ${theme.fonts.primary};
    margin-bottom: 1rem;
  }

  .project-block {
    margin-top: 4rem;
    margin-bottom: 10rem;
    display: flex;
    justify-content: space-between;
  }

  .image {
    width: 45%;
    height: 300px;
    object-fit: cover;
  }

  .info {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .featured {
    color: ${theme.colors.grey3};
    font-weight: 700;
  }
  .summary {
    font-size: 1.4rem;
  }

  .description {
    margin-top: 1rem;
    text-align: left;
  }

  .stack {
    margin: 2rem;
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
  }

  .stack-item {
    font-size: 1.3rem;
    font-style: italic;
    margin-right: 2rem;
  }

  .links {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
  }

  @media screen and (max-width: 768px) {
    .image {
      height: 200px;
    }

    p {
      font-size: 1.3rem;
      line-height: 1.8;
    }

    .stack {
      flex-wrap: wrap;
      margin: 2rem 2rem 2rem 0;
    }

    .stack-item {
      margin: 1rem 2rem 1rem 0;
    }

    .project-block {
      margin: 4rem 0 6rem 0;
    }

    .links {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .project-block {
      margin: 3rem 0;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }

    .image {
      width: 80vw;
      height: 20rem;
      margin-bottom: 2rem;
    }

    .info {
      margin-left: 1rem;
      width: 95%;
    }

    .stack {
      flex-wrap: wrap;
    }

    .stack-item {
      margin: 0 2.5rem 1rem 0;
    }
  }
`;

export const ProjectLink = styled.a`
  height: 2.5rem;
  margin-right: 3rem;
  color: ${theme.colors.grey1};
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.primary4};
    transform: translateY(-2px);
    transition: ${theme.transition};
  }

  &:active {
    ${theme.colors.primary3};
    transform: translateY(1px);
    transition: transform 125ms;
  }
`;
