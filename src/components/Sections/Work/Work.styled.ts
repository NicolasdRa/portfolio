import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.div`
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
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 6rem;
    text-align: right;
  }

  .text {
    width: 40%;
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

  .btn-container {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 50%;
  }

  .title,
  .btn {
    color: ${theme.colors.primary3};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    padding-top: 7px;
    position: relative;
    width: 23rem;
    margin-bottom: 1rem;
    text-align: right;
  }

  .title::before {
    content: '';
    width: 90px;
    height: 8px;
    left: 80px;
    border-bottom: 1px solid ${theme.colors.primary3};
    position: absolute;
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
