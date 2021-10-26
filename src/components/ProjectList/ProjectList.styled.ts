import styled from 'styled-components';

export const Container = styled.main`
  max-width: 65vw;
  padding-bottom: 3rem;

  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 100vw;
  }
`;
