import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.header`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    background: transparent;
    height: 8rem;
    z-index: 200;
    width: 100%;
    padding: 0 11rem 0 5rem;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    backdrop-filter: blur(5px);
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
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: ${theme.colors.white};
    cursor: pointer;
    transition: ${theme.animations.transition};
  }
  .toggle-btn:hover {
    color: ${theme.colors.primary3};
  }

  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
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

  @media screen and (max-width: 600px) {
    .navbar {
      display: none;
    }
  }
`;
