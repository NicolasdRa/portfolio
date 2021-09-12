import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.div`
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .title {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .name-container {
    display: flex;
    position: relative;
  }

  .name {
    color: ${theme.colors.primary3};
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    padding-left: 100px;
  }

  .name::before {
    content: '';
    width: 90px;
    height: 8px;
    left: 0px;
    border-bottom: 1px solid ${theme.colors.primary3};
    position: absolute;
  }

  .details {
    margin-top: 1rem;
    width: 60%;
    font-weight: 600;
    line-height: 140%;
  }
`;
