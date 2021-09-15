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
    width: 15rem;
    display: flex;
    justify-content: space-between;
  }

  .social-link {
    font-size: 1.75rem;
    color: ${theme.colors.grey3};
    transition: ${theme.animations.transition};
  }

  .social-link:hover {
    color: ${theme.colors.primary3};
  }

  .footer .social-link {
    color: ${theme.colors.grey3};
  }

  .footer .social-link:hover {
    color: ${theme.colors.primary3};
  }
`;
