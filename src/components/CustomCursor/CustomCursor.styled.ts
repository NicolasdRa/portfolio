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
      border: 1px solid ${theme.colors.grey4};
      position: relative;
      /* &:before, */
      &:after {
        content: '';
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: white;
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
        right: 22px;
      }
      /* &:before {
        left: 10px;
      } */

      /* &:after {
        right: 12px;
      } */
    }
  }

  @media screen and (max-width: 600px) {
    .main-cursor,
    .secondary-cursor {
      display: none;
    }
  }
`;
