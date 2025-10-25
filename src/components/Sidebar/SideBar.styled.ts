import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.nav`
  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }

  .link-number {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.primary3};
  }
`;

export const SideBar = styled.aside`
  background: ${({ theme }) => theme.colors.black};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: ${({ theme }) => theme.transition};
  transform: translateX(100%);

  @media screen and (min-width: 1024px) {
    transform: translateX(-100%);
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  background: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary3};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary3};

    &::after {
      width: 100%;
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary2};
    transform: translateX(2px);
  }

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
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.primary3};
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.grey4};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  text-transform: lowercase;
  letter-spacing: 0.05em;
  padding: 1rem 0 1rem 3.5rem; /* Left padding to align with nav text */
  margin: 3rem 0;
  cursor: pointer;
  position: relative;
  align-self: flex-start;
  text-align: left;
  width: 100%;
  transition: ${({ theme }) => theme.transition};
  opacity: 0;
  animation: slideUp 0.5s ease-in-out 0.3s forwards;

  &:hover {
    color: ${({ theme }) => theme.colors.primary3};
  }

  &:active {
    transform: translateX(2px);
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

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding-left: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    padding-left: 2.5rem;
  }
`;
