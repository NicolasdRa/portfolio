import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.div`
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
`;
