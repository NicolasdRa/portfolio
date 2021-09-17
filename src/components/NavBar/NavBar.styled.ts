import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.div`
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    display: flex;
    align-items: center;
    z-index: 200;
    background: transparent;
  }
  .nav-center {
    width: 95vw;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header img {
    margin-bottom: 0.375rem;
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
      font-size: 1.4rem;
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
      color: ${theme.colors.primary3};
      transform: translateY(-2px);
      transition: transform 125ms;

      /* TODO: replace line below with another way to underline, it breaks in big screens */
      /* box-shadow: 0px 2px ${theme.colors.primary3}; */
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }

  /* @media screen and (min-width: 992px) {
    .navbar {
      background: transparent;
    }
  } */
`;
