import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 200;
  opacity: 0;

  @media only screen and (max-width: 1280px) {
    bottom: 2.5rem;
    right: 2.5rem;
  }

  @media only screen and (max-width: 1024px) {
    /* Hide on tablet/mobile - will be in sidebar instead */
    display: none;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.grey2};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
  will-change: transform;
  backface-visibility: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary3};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary3};
    transform: translateX(-2px);
    cursor: none;

    &::after {
      width: 100%;
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary2};
    transform: translateX(1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary2};
    outline-offset: 4px;
    border-radius: 2px;
  }

  @media only screen and (max-width: 960px) {
    font-size: 1.4rem;
    padding: 0.5rem 0.8rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
    padding: 0.4rem 0.6rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 1.2rem;
    padding: 0.4rem 0.6rem;
  }
`;