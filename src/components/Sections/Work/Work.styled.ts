import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  .work {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 60vw;
    margin: 0 auto;
  }

  .work h3 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .work h4 {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .work h5 {
    font-family: ${theme.fonts.primary};
    margin-bottom: 1rem;
  }

  .position {
    text-transform: capitalize;
    margin-left: 1rem;
  }
  .work p {
    /* line-height: 160%; */
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
    margin: 0 6rem;
    text-align: right;
  }

  .text {
    width: 45%;
  }

  .experience-block {
    margin-bottom: 4rem;
  }

  .title-container {
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 50%;
  }

  .title span {
    margin-right: 0.5rem;
  }

  .btn-container {
    display: flex;
    justify-content: flex-start;
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
    width: 23rem;
    margin-bottom: 1rem;
    text-align: right;
  }

  .cta-work {
    margin-top: 2rem;
  }
`;
