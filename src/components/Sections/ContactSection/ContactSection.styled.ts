import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  .contact {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
    height: 100vh;
  }

  .contact h3 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .contact p {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 150%;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  .titles {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 3rem;
    text-align: right;
  }

  .form {
    width: 55%;
  }

  .form-group {
    margin-top: 10rem;
    margin-bottom: 5rem;
  }

  .form-control {
    display: block;
    width: 30rem;
    padding: 1rem 0;
    border: none;
    border-bottom: 1px solid ${theme.colors.grey4};
    margin-bottom: 3rem;
    outline: none;
    text-transform: lowercase;
    background: transparent;
  }
  .form-control::placeholder {
    font-family: ${theme.fonts.primary};
    text-transform: lowercase;
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

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    .contact {
      padding: 10rem 0 8rem 0;
      height: 100%;
    }

    .content {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100vw;
      margin: 0 auto;
    }

    .titles {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 3rem 0 0 0;
      text-align: left;
    }

    .title {
      margin-bottom: 0.5rem;
    }

    .form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .form-group {
      margin: 2rem 0;
    }

    .cta-contact {
      margin-bottom: 0;
      align-self: flex-end;
    }
  }
`;
