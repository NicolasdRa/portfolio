import styled from 'styled-components';

export const Container = styled.div`
  .vertical-links {
    position: fixed;
    right: 6rem;
    top: 1.9rem;
    margin: 0 auto;
    z-index: 200;
    opacity: 0;
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
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey2};
    border-radius: 50%;
    padding: 0.6rem;
    line-height: 1;
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};
    font-size: 1rem;
    width: max-content;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .cv:hover {
    background-color: ${({ theme }) => theme.colors.primary3};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: ${({ theme }) => theme.transition};
  }

  .cv:active {
    background-color: ${({ theme }) => theme.colors.primary2};
    transform: translateY(1px);
    transition: transform 125ms;
  }

  .vertical-line {
    border-left: 1px solid ${({ theme }) => theme.colors.grey4};
    height: 100px;
    margin: 1.5rem 0;
    opacity: 0.5;
    transition: border-color 0.3s ease;
  }

  .social-link {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.grey2};
    will-change: transform;
    backface-visibility: hidden;
    transition: transform 450ms ease-out, color 0.3s ease;
    position: relative;
  }

  .social-link:hover {
    color: ${({ theme }) => theme.colors.primary3};
    transform: translateY(-2px);
    transition: transform 125ms, color 0.15s ease;
  }

  .social-link:active {
    color: ${({ theme }) => theme.colors.primary2};
    transform: translateY(1px);
    transition: transform 125ms;
  }

  @media screen and (max-width: 1024px) {
    .vertical-links {
      display: none;
    }
  }
`;
