import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.grey4 : theme.colors.background};
  background-color: ${({ theme }) => theme.colors.grey1};
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ theme }) => theme.borderRadius};
  line-height: 1;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};
  font-size: 1.4rem;
  width: max-content;
  will-change: transform;

  a {
    display: block;
    padding: 1.4rem 2rem;
  }

  button {
    color: ${({ theme }) =>
      theme.mode === 'dark' ? theme.colors.grey4 : theme.colors.background};
    padding: 1.4rem 2rem;
  }

  :hover {
    color: ${({ theme }) => theme.colors.grey1};
    background-color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    transition: ${({ theme }) => theme.transition};

    button {
      color: ${({ theme }) => theme.colors.grey1};
    }
  }

  :active {
    color: ${({ theme }) => theme.colors.primary3};
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary3};
    transform: translateY(1px);
    transition: transform 125ms;

    button {
      color: ${({ theme }) => theme.colors.primary3};
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;

    a,
    button {
      padding: 1.6rem 2.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2rem;

    a,
    button {
      padding: 1.5rem 2.2rem;
    }
  }
`;
