import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.div`
  .vertical-links {
    position: absolute;
    right: 6rem;
    top: 0;
    margin: 0 auto 1rem auto;
  }

  .vertical-line {
    border-left: 1px solid ${theme.colors.grey4};
    height: 100px;
    /* position: absolute; */
    margin-left: 0.9rem;
    margin-bottom: 2rem;
  }

  .social-links {
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .social-link {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.grey3};
    transition: ${theme.animations.transition};
  }

  .social-link:hover {
    color: ${theme.colors.primary3};
  }
`;
