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
    background: ${theme.colors.white};
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

    .nav-links a {
      margin-right: 3rem;
      text-transform: capitalize;
      color: ${theme.colors.grey2};
      font-weight: 500;
      transition: ${theme.animations.transition};
      padding: 0.5rem 0;

    }

    .nav-links a:last-child {
      margin-right: 2rem;
    }

    .nav-links a:hover {
      color: ${theme.colors.primary3};

      /* TODO: replace line below with another way to underline, it breaks in big screens */
    /* box-shadow: 0px 2px ${theme.colors.primary3};
    }  */
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }

  @media screen and (min-width: 992px) {
    .navbar {
      background: transparent;
    }
  }
`;
