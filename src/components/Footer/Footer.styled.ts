import styled from 'styled-components';

export const Container = styled.footer`
  .footer {
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
  }

  .logo img {
    height: 2.3rem;
    margin-bottom: 2.5rem;
    filter: ${({ theme }) => theme.mode === 'dark' ? 'invert(1) brightness(0.9)' : 'none'};
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  .logo a:hover img {
    transform: scale(1.05);
  }

  .footer h4 {
    margin-bottom: 1.5rem;
    color: currentColor;
    font-weight: normal;
    font-size: 1.3rem;
  }

  .footer h4 span {
    color: ${({ theme }) => theme.colors.primary3};
  }

  .social-links {
    margin: 3rem auto;
    display: flex;
    justify-content: center;
  }

  .social-link {
    margin-right: 3rem;
    will-change: transform;
    backface-visibility: hidden;
    transition: transform 450ms ease-out, color 0.3s ease;

    a {
      height: 2rem;
      color: ${({ theme }) => theme.colors.grey2};
      transition: color 0.3s ease;
    }
  }

  .social-link:hover {
    transform: translateY(-2px);
    transition: transform 125ms;

    a {
      color: ${({ theme }) => theme.colors.primary3};
    }
  }

  .social-link:last-child {
    margin-right: 0;
  }

  .social-link li:last-child {
    margin-right: 0;
  }

  .footer .social-link {
    color: ${({ theme }) => theme.colors.grey3};
  }

  .footer .social-link:hover a {
    color: ${({ theme }) => theme.colors.primary3};
  }

  @media only screen and (min-width: 768px) {
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
