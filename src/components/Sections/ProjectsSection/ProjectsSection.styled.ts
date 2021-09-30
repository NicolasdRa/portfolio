import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    width: 65vw;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    width: 45%;
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

  .subtitle {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .btn-container {
    display: flex;
    align-self: center;
    justify-content: center;
    position: relative;
    width: 50%;
  }
`;
