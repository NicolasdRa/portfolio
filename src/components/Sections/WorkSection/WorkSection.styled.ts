import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  .work {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
    padding-top: 8vw;
    padding-bottom: 8vw;
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

  .date {
    font-size: 1.4rem;
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
    display: flex;
    flex-direction: column;
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
    width: min-content;
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

  .cta-work {
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    .work {
      width: 80vw;
    }

    .content {
      width: 100%;
    }

    .titles {
      width: 25%;
      margin: 0 4rem;
    }

    .text {
      width: 75%;
    }
  }

  @media screen and (max-width: 600px) {
    .content {
      flex-direction: column;
      width: 100%;
    }

    .title-container {
      justify-content: flex-start;

      width: 50%;
    }

    .title {
      margin-bottom: 0.5rem;
    }

    .titles {
      width: 100%;
      align-items: flex-start;
      margin: 0 0 2rem 0;
      text-align: left;
    }

    .text {
      width: 100%;
    }

    .btn-container {
      margin: 0 0 2rem 0;
      align-self: center;
    }
  }
`;
