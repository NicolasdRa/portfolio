import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;

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
    margin-bottom: 1rem;
    text-align: right;
  }

  .title span {
    margin-right: 0.5rem;
  }

  .subtitle {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .btn-container {
    display: flex;
    align-self: center;
    justify-content: center;
    position: relative;
    width: min-content;
  }

  @media screen and (max-width: 768px) {
    .content {
      width: 80vw;
      align-items: flex-start;
    }

    .title-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 100vw;
    height: 100%;

    .content {
      width: 80vw;
      align-items: flex-start;
    }

    .title-container {
      align-items: flex-start;
      width: 100%;
    }

    .btn-container {
      margin: 4rem 0 0 0;
      align-self: center;
    }
  }
`;
