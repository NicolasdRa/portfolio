import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  .services {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    margin: 0 auto;
  }

  .service {
    width: 25%;
  }

  .icon {
    font-size: 6rem;
    margin-bottom: 3rem;
    color: ${theme.colors.grey2};
  }

  .service h3 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .service p {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 150%;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .btn {
    color: ${theme.colors.grey4};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    padding-left: 100px;
    position: relative;
    margin-top: 8rem;
    width: 30rem;
    text-align: left;
  }

  .btn::before {
    content: '';
    width: 90px;
    height: 10px;
    left: 0px;
    border-bottom: 1px solid ${theme.colors.primary3};
    position: absolute;
  }

  @media screen and (max-width: 960px) {
    .services {
      flex-direction: column;
      width: 90vw;
      align-items: flex-start;
    }

    .service {
      width: 100%;
      margin-bottom: 6rem;
    }

    .icon {
      font-size: 5rem;
      margin-bottom: 2rem;
    }

    .service h3 {
      font-size: 2.5rem;
    }

    .service p {
      font-size: 1.5rem;
    }

    .btn {
      width: 100%;
      text-align: center;
      padding-left: 0;
    }

    .btn::before {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .services {
      width: 80vw;
    }

    .service {
      margin-bottom: 5rem;
    }

    .icon {
      font-size: 4.5rem;
    }

    .service h3 {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
    }

    .service p {
      font-size: 1.4rem;
      line-height: 160%;
    }

    .btn {
      margin-top: 4rem;
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 400px) {
    .services {
      width: 85vw;
    }

    .icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }

    .service h3 {
      font-size: 2rem;
    }

    .service p {
      font-size: 1.3rem;
    }
  }
`;
