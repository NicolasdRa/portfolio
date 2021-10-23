import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.header`
  .navbar {
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    height: 8rem;
    z-index: 200;
    width: 100%;
    padding: 0 11rem 0 5rem;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    backdrop-filter: blur(5px);
    cursor: none;
  }

  .scrolledDown {
    top: -100px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    backdrop-filter: blur(5px);
  }

  .nav-logo img {
    height: 1.6rem;
  }

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    color: ${theme.colors.grey1};
    cursor: pointer;
    transition: ${theme.animations.transition};
  }

  .nav-links {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .navbar {
      padding: 5rem 4rem;
    }

    .toggle-btn {
      height: 3rem;
    }
  }

  @media screen and (max-width: 600px) {
    .toggle-btn {
      height: 2.5rem;
    }

    .navbar {
      padding: 0 3rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .toggle-btn {
      display: none;
    }

    .nav-links {
      display: flex;
      justify-content: flex-end;
      cursor: none;
    }

    .nav-links li {
      margin-right: 5rem;
      text-transform: capitalize;
      color: ${theme.colors.grey2};
      font-size: 1.5rem;
      font-weight: 500;
      padding: 0.5rem 0;
      will-change: transform;
      backface-visibility: hidden;
      transition: transform 450ms ease-out;
    }

    .nav-links li:last-child {
      margin-right: 2rem;
    }

    .nav-links li:hover {
      color: ${theme.colors.primary4};
      transform: translateY(-2px);
      transition: transform 125ms;
      cursor: none;
    }

    .nav-links li:active {
      color: ${theme.colors.primary3};
      transform: translateY(1px);
      transition: transform 125ms;
    }

    .link-number {
      font-size: 1.8rem;
      color: ${theme.colors.primary4};
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
`;
