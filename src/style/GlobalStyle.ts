import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    cursor: none
  }

  body {
    font-family: ${theme.fonts.primary};
    font-size: 1.6rem;
    background-color: ${theme.colors.background};
    cursor: none;
    overflow-x: hidden;
  }

body::-webkit-scrollbar {
  width: .8rem;
}

body::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 6px red; */
}

body::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  height: 15rem;
  background-color: ${theme.colors.grey5};
  /* outline: 1px solid slategrey; */
}

  a {
    color: currentColor;
    display: block;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: ${theme.fonts.secondary};
    font-size: 100%;
    font-weight: normal;
  }

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  input,
  select {
    border: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
    line-height: 160%;
  }

  svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  .title-line {
    margin-right: 1rem;
    width: 90px;
    height: 9px;
    border-bottom: 1px solid ${theme.colors.grey3};
  }


/* PAGES */

  .error-page {
  display: grid;
  place-items: center;
  text-align: center;
  min-height: calc(100vh - 5rem - 10rem);
}

.error-page h1 {
  font-family: ${theme.fonts.secondary};
  font-size: 8rem;
  font-weight: bold;
  color: ${theme.colors.grey2};
  margin-bottom: 2rem;
}

.error-container  {
  display: flex;
  flex-direction: column;
  align-items: center;
}


@media only screen and (max-width: 600px) {
.title-line {
  display: none;
  /* margin-right: 1rem;
  width: 4rem; */
  }

}

`;
