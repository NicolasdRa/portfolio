import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
    padding: 8vh 0;
  }

  .about h3 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    flex-direction: row;
    width: 60vw;
  }

  .titles {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 3rem;
    text-align: right;
  }

  .text {
    display: flex;
    flex-direction: column;
    width: 65%;
  }

  .text span {
    font-weight: bold;
    text-transform: none;
    color: ${theme.colors.primary4};
  }

  .profile {
    margin-bottom: 2rem;
  }

  .stack-wrapper {
    position: relative;
    margin-bottom: 2rem;
    max-height: 120px;
    overflow: hidden;
  }

  .stack-wrapper.expanded {
    max-height: 2000px;
  }

  .stack-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem 2rem;
  }

  .stack-item {
    margin: 0;
  }

  .stack-fade {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, transparent, ${theme.colors.background});
    pointer-events: none;
  }

  .view-all-btn {
    background: none;
    border: none;
    color: ${theme.colors.primary4};
    font-family: inherit;
    font-size: 1.4rem;
    text-transform: lowercase;
    cursor: pointer;
    padding: 0.5rem 0;
    margin-bottom: 2.5rem;
    margin-left: 0;
    margin-right: auto;
    display: block;
    text-align: left;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  .title-container {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .btn-container {
    margin-top: 3rem;
  }

  .title {
    display: flex;
    justify-content: flex-end;
    color: ${theme.colors.primary4};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    padding-top: 7px;
    position: relative;
    margin-bottom: 1rem;
    text-align: right;
  }

  .title span {
    margin-right: 0.5rem;
  }
  .cta-about {
    margin-top: 4rem;
  }

  @media screen and (max-width: 960px) {
    .stack-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem 1.5rem;
    }

    .stack-wrapper {
      max-height: 180px;
    }

    .stack-wrapper.expanded {
      max-height: 2000px;
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      width: 70vw;
    }

    .stack-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.7rem 1rem;
    }

    .stack-wrapper {
      max-height: 200px;
    }

    .stack-wrapper.expanded {
      max-height: 2000px;
    }
  }

  @media screen and (max-width: 600px) {
    .about {
      justify-content: flex-start;
      align-items: flex-start;
      width: 80vw;
    }

    .about h3 {
      font-size: 2.5rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .titles {
      width: 100%;
      align-items: flex-start;
      margin: 0rem;
      text-align: left;
    }

    .text {
      width: 100%;
    }

    .stack-grid {
      grid-template-columns: 1fr;
      gap: 0.6rem;
    }

    .stack-wrapper {
      max-height: 300px;
    }

    .stack-wrapper.expanded {
      max-height: 2000px;
    }

    .stack-item {
      font-size: 1.2rem;
    }

    .btn-container {
      align-self: center;
    }
  }
`;
