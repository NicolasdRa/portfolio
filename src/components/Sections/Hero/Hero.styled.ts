import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .title {
    font-size: 10rem;
    font-weight: bold;
    margin-top: 5rem;
    margin-left: -0.5rem;
    text-transform: none;
  }
  .title span {
    color: ${theme.colors.grey4};
  }

  .name-container {
    display: flex;
  }

  .name {
    color: ${theme.colors.primary4};
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    padding-left: 100px;
    position: relative;
  }

  .name::before {
    content: '';
    width: 90px;
    height: 9px;
    left: 2px;
    border-bottom: 1px solid ${theme.colors.grey4};
    position: absolute;
  }

  .details {
    /* margin-top: 1rem; */
    width: 45%;
    font-weight: 500;
    line-height: 160%;
  }

  .details span {
    font-weight: bold;
    text-transform: uppercase;
    color: ${theme.colors.primary4};
  }
  .cta-hero {
    margin-top: 4rem;
    width: max-content;
  }
`;
