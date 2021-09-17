import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.div`
  .footer {
    height: 10rem;
    text-align: center;
    display: grid;
    place-items: center;
  }

  .footer h4 {
    margin-top: 0.5rem;
    margin-bottom: 8rem;
    color: currentColor;
    font-weight: normal;
    /* text-transform: uppercase; */
  }

  .footer h4 span {
    color: ${theme.colors.primary3};
  }

  .footer-links {
    margin: 0 auto 1rem auto;
  }

  .social-links {
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 25rem;
    display: flex;
    justify-content: space-between;
  }

  .social-link {
    font-size: 2rem;
    color: ${theme.colors.grey3};
    margin-right: 1.5rem;
    will-change: transform;
    backface-visibility: hidden;
    transition: transform 450ms ease-out;
  }

  .social-link:hover {
    color: ${theme.colors.primary3};
    transform: translateY(-2px);
    transition: transform 125ms;
  }

  .social-link li:last-child {
    margin-right: 0;
  }

  .footer .social-link {
    color: ${theme.colors.grey3};
  }

  .footer .social-link:hover {
    color: ${theme.colors.primary3};
  }
`;
