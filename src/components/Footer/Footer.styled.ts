import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.footer`
  .footer {
    /* min-height: 12rem; */
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
  }

  .logo img {
    height: 2.3rem;
    margin-bottom: 2.5rem;
  }

  .footer h4 {
    margin-bottom: 1.5rem;
    color: currentColor;
    font-weight: normal;
    font-size: 1.3rem;
    /* text-transform: uppercase; */
  }

  .footer h4 span {
    color: ${theme.colors.primary4};
  }

  .social-links {
    margin: 4rem 0 3rem 0;
    display: flex;
    justify-content: center;
  }

  .social-link {
    font-size: 2rem;
    margin-right: 3rem;
    color: ${theme.colors.grey3};
    will-change: transform;
    backface-visibility: hidden;
    transition: transform 450ms ease-out;
  }

  .social-link:hover {
    color: ${theme.colors.primary3};
    transform: translateY(-2px);
    transition: transform 125ms;
  }

  .social-link:last-child {
    margin-right: 0;
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

  @media only screen and (min-width: 800px) {
    .social-links {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .logo {
      display: none;
    }

    .footer {
      padding-bottom: 2rem;
    }
  }
`;
