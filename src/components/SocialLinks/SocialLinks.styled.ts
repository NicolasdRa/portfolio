import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.div`
  .vertical-links {
    position: fixed;
    right: 6rem;
    top: 1.75rem;
    margin: 0 auto;
    z-index: 200;
  }

  .cv {
    font-weight: 500;
  }

  .vertical-line {
    border-left: 1px solid ${theme.colors.grey4};
    height: 100px;
    margin-left: 0.9rem;
    margin-bottom: 2rem;
  }

  .social-links {
    margin-bottom: 3rem;
    width: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .social-link {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.grey2};
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
`;
