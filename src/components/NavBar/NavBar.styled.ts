import styled from 'styled-components';

export const Container = styled.header`
  opacity: 0;

  @media screen and (min-width: 1280px) {
  }

  @media screen and (min-width: 1280px) {
  }

  .navbar {
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
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
    filter: ${({ theme }) => theme.mode === 'dark' ? 'invert(1) brightness(0.9)' : 'none'};
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  .nav-logo:hover img {
    transform: scale(1.05);
  }

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    color: ${({ theme }) => theme.colors.grey1};
  }

  .nav-links {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .navbar {
      padding: 5rem 4rem;
      justify-content: flex-end;
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
      color: ${({ theme }) => theme.colors.grey2};
      font-size: 1.5rem;
      font-weight: 500;
      padding: 0.5rem 0;
      will-change: transform;
      backface-visibility: hidden;
      transition: transform 450ms ease-out, color 0.3s ease;
      position: relative;
    }

    .nav-links li:last-child {
      margin-right: 2rem;
    }

    .nav-links li a {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -0.3rem;
        left: 0;
        width: 0;
        height: 1px;
        background: ${({ theme }) => theme.colors.primary3};
        transition: width 0.3s ease;
      }
    }

    .nav-links li:hover {
      color: ${({ theme }) => theme.colors.primary3};
      transform: translateY(-2px);
      transition: transform 125ms, color 0.15s ease;
      cursor: none;

      a::after {
        width: 100%;
      }
    }

    .nav-links li:active {
      color: ${({ theme }) => theme.colors.primary2};
      transform: translateY(1px);
      transition: transform 125ms;
    }

    .link-number {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.primary3};
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
`;
