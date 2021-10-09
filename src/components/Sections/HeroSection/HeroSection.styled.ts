import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .content {
    display: grid;
    margin-left: -25rem;
    place-content: center;
    grid-template-columns: repeat(2, 1fr);
    width: 25vw;
  }

  .title {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'title-2 title-1'
      'title-3 details';
    place-content: center;
    height: 50vh;
    width: 50vw;
    font-family: ${theme.fonts.tertiary};
    font-size: 10rem;
    font-weight: 300;
    color: ${theme.colors.grey1};
    position: relative;
    cursor: pointer;
  }

  .title-1 {
    grid-area: title-1;
    color: ${theme.colors.grey4};
    justify-self: flex-start;
    align-self: flex-end;
    margin: 1rem 1rem 1.45rem -9rem;
    font-weight: lighter;
    z-index: 3;
  }
  .title-2 {
    grid-area: title-2;
    justify-self: flex-end;
    align-self: flex-end;
    font-size: 14rem;
    margin: 1rem 10rem 1rem 1rem;
    z-index: 2;
  }
  .title-3 {
    grid-area: title-3;
    text-transform: capitalize;
    justify-self: flex-end;
    align-self: flex-start;
    font-size: 14rem;
    margin: -7rem 1rem 1rem 1rem;
    z-index: 1;
  }

  .details {
    grid-area: details;
    font-family: ${theme.fonts.primary};
    font-size: 1.5rem;
    font-weight: normal;
    justify-self: flex-start;
    margin: -1rem 1.5rem 0rem 1.5rem;
    /* padding: 2rem 1rem 2rem 1.5rem; */
    width: 70%;
    line-height: 1.5;
  }

  .description {
    background-color: ${theme.colors.background};
    padding: 2rem 1rem 3rem 0;
    /* check whether to use this or not */
    /* mix-blend-mode: difference; */
  }

  .details span {
    font-weight: bold;
    text-transform: none;
    color: ${theme.colors.primary4};
  }

  .media {
    display: flex;
  }

  .image {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(24%, 18%);
    transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    opacity: 0;
  }

  .active {
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  .inactive {
    opacity: 0;
  }

  @media only screen and (max-width: 600px) {
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100vh;
      width: 100vw;
      margin: 0 auto;
    }

    .media {
      display: none;
    }

    .title {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      grid-template-areas:
        'title-2 title-1 . '
        'title-3 . .'
        'details details details';
      /* place-content: center; */
      height: 50vh;
      width: 100%;
      font-family: ${theme.fonts.tertiary};
      font-size: 5rem;
    }

    .title-2,
    .title-3 {
      font-size: 12rem;
    }

    .title-1 {
      margin: 1rem 1rem 1.8rem -8rem;
    }
    .title-2 {
      margin: 1rem 8rem 1rem 0rem;
    }
    .title-3 {
      margin: -7rem 0rem 1rem 4rem;
    }

    .details {
      font-size: 1.5rem;
      justify-self: center;
      align-self: center;
      margin: 0;
      padding: 0;
      width: 80%;
    }

    .description {
      margin: 2rem 0;
      padding: 0;
    }
  }
`;
