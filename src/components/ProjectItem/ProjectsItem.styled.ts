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
    border-radius: 1rem;
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
    margin-top: 2rem;
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
  }

  .stack-item {
    font-size: 1.4rem;
    margin-right: 2.5rem;
  }

  .links {
    margin-top: 2rem;
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