import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 60vw;
    margin: 0 auto;
  }

  .about h3 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    flex-direction: row;
    width: 60vw;
  }

  .titles {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 3rem;
    text-align: right;
  }

  .text {
    width: 65%;
  }

  .profile {
    margin-bottom: 2rem;
  }

  .stack-item {
    margin-bottom: 1rem;
  }

  .title-container {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .btn-container {
    display: flex;
    position: relative;
    width: 50%;
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
    margin-bottom: 1rem;
    text-align: right;
  }

  .title span {
    margin-right: 0.5rem;
  }
  .cta-about {
    margin-top: 4rem;
  }
`;
