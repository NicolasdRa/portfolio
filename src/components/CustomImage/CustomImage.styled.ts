import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Wrapper = styled.div`
  .active {
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  .inactive {
    opacity: 0;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
