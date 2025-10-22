import { createGlobalStyle } from 'styled-components';
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

  /* Only hide cursor when custom cursor is supported and not in reduced motion mode */
  @media (hover: hover) and (pointer: fine) {
    *,
    *::before,
    *::after {
      cursor: none;
    }
  }

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
      cursor: auto !important;
    }
  }

  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
    /* cursor: none; */
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
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
  background-color: ${({ theme }) => theme.colors.grey5};
  /* outline: 1px solid slategrey; */
}

  /* Focus styles for keyboard navigation */
  /* Visible focus indicator for keyboard navigation */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary1};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  /* Default focus styles for all elements */
  *:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary1};
    outline-offset: 2px;
  }

  /* Only remove focus outline for mouse users */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  a {
    color: currentColor;
    display: block;
    text-decoration: none;
    position: relative;

    @media (hover: hover) and (pointer: fine) {
      &:hover {cursor: none}
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    @media (hover: hover) and (pointer: fine) {
      &:hover {cursor: none}
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.secondary};
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
  }


@media only screen and (max-width: 600px) {
.title-line {
  display: none;
  /* margin-right: 1rem;
  width: 4rem; */
  }

}

`;
