import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.nav`
  .sidebar {
    background: ${theme.colors.black};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: ${theme.transition};
    transform: translateX(100%);
  }
  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }

  .side-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 80vh;
    width: 65vw;
  }

  .link-number {
    font-size: 2.2rem;
    /* color: ${theme.colors.primary4}; */
  }

  .sidebar-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 15vh;
    height: 30vh;
  }

  .sidebar-links li {
    opacity: 0;
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }
  
  .sidebar-links li a {
    display: block;
    text-align: left;
    color: ${theme.colors.background};
    font-family: ${theme.fonts.secondary};
    font-size: 2rem;
    text-transform: uppercase;
    transition: ${theme.transition};
    border-radius: ${theme.borderRadius};
  }

  .sidebar-icons {
    display: flex;
    align-self: center;
    justify-content: space-between;
    width: 65vw;
  }

  .sidebar-icons li a {
    color: ${theme.colors.background};
  }

  .sidebar-links li a:hover {
    color: ${theme.colors.grey4};
  }
  .close-btn {
    position: absolute;
    right: 2.8rem;
    top: 2.5rem;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: ${theme.colors.background};
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }

  /*
===============
Sidebar Animation
===============
*/
  .sidebar-icons li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }

  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-links li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-links li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-icons li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-icons li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
