import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.div`
  .vertical-links {
    position: fixed;
    right: 6rem;
    top: 1.9rem;
    margin: 0 auto;
    z-index: 200;
  }

  .social-links {
    margin-bottom: 3rem;
    width: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .cv {
    color: ${theme.colors.background};
    background-color: ${theme.colors.grey1};
    /* background-color: transparent;
    color: ${theme.colors.grey2};
    border: 1px solid ${theme.colors.grey1}; */
    border-radius: 50%;
    padding: 0.6rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    font-size: 1rem;
    width: max-content;
  }

  .cv:hover {
    background-color: ${theme.colors.primary4};
    transform: translateY(-2px);
    transition: ${theme.transition};
  }

  .cv:active {
    background-color: ${theme.colors.primary3};
    transform: translateY(1px);
    transition: transform 125ms;
  }

  .vertical-line {
    border-left: 1px solid ${theme.colors.grey4};
    height: 100px;
    margin: 1.5rem 0;
  }

  .social-link {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.grey1};
    will-change: transform;
    backface-visibility: hidden;
    transition: transform 450ms ease-out;
  }

  .social-link:hover {
    color: ${theme.colors.primary4};
    transform: translateY(-2px);
    transition: transform 125ms;
  }

  .social-link:active {
    color: ${theme.colors.primary3};
    transform: translateY(1px);
    transition: transform 125ms;
  }

  @media screen and (max-width: 600px) {
    .vertical-links {
      display: none;
    }
  }
`;
