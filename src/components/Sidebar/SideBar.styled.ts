import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme } from '../../style/theme';

export const Wrapper = styled.nav`
  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }

  .link-number {
    font-size: 2.2rem;
    /* color: ${theme.colors.primary4}; */
  }
`;

export const SideBar = styled.aside`
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

  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  background: transparent;
  border-color: transparent;
  color: ${theme.colors.background};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 3rem;
    right: 4rem;
    top: 3rem;
  }

  @media screen and (max-width: 600px) {
    height: 2.5rem;
    right: 2.8rem;
    top: 2.5rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 80vh;
  width: 65vw;
`;

export const SideBarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15vh;
  height: 30vh;

  li {
    opacity: 0;
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }

  li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  li:nth-of-type(4) {
    animation-delay: 1s;
  }
  li:nth-of-type(5) {
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
`;

export const SideBarLink = styled(Link)`
  display: block;
  text-align: left;
  color: ${theme.colors.background};
  font-family: ${theme.fonts.secondary};
  font-size: 2rem;
  text-transform: uppercase;
  transition: ${theme.transition};
  border-radius: ${theme.borderRadius};

  @media screen and (max-width: 768px) {
    height: 3rem;
  }

  @media screen and (max-width: 600px) {
    height: 2rem;
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  align-self: center;
  justify-content: space-between;

  li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  li:nth-of-type(4) {
    animation-delay: 1s;
  }
  li:nth-of-type(5) {
    animation-delay: 1.25s;
  }

  @media screen and (max-width: 768px) {
    width: 40vw;
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    width: 65vw;
    font-size: 2rem;
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

export const SocialLink = styled.a`
  color: ${theme.colors.background};

  &:hover {
    color: ${theme.colors.grey4};
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

//   /*
// ===============
// Sidebar Animation
// ===============
// */
//   .sidebar-icons li {
//     opacity: 0;
//     animation: slideUp 0.5s ease-in-out 0.3s forwards;
//   }

//
