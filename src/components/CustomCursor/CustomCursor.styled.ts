import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Wrapper = styled.div`
  .main-cursor,
  .secondary-cursor {
    z-index: 10000;

    pointer-events: none;
    /* overflow: hidden; */
    transform: translate3d(0, 0, 0);
    position: fixed;
  }

  .main-cursor {
    transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
    animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    /* mix-blend-mode: difference; */

    .main-cursor-background {
      width: 10px;
      height: 10px;
      background: black;
      border-radius: 50%;
    }
  }

  .secondary-cursor {
    width: 50px;
    height: 50px;

    .cursor-background {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid ${theme.colors.grey5};
      position: relative;
      animation: scaleDown 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0s forwards;
      transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }
  }

  .hover {
    .cursor-background {
      opacity: 0.2;
      background-color: ${theme.colors.grey5};
      border: none;
      animation: scaleUp 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0s forwards;
    }
  }

  .hover-social {
    .cursor-background {
      opacity: 0.2;
      background-color: ${theme.colors.grey5};
      border: none;
    }
  }

  .38 {
    .cursor-background {
      opacity: 0.2;
      background-color: ${theme.colors.primary1};
      border: none;
      animation: scaleUp 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0s forwards;
    }
  }

  @media screen and (max-width: 1024px) {
    .main-cursor,
    .secondary-cursor {
      display: none;
    }
  }

  @keyframes scaleUp {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.5);
    }
  }

  @keyframes scaleDown {
    from {
      transform: scale(1.5);
    }

    to {
      transform: scale(1);
    }
  }
`;
