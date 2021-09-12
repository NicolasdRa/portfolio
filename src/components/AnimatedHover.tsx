import React from 'react';
import styled from 'styled-components';

// styling
const Wrapper = styled.div`
  p {
    color: 'green';

    &:hover {
      color: 'red';
      transform: scale(1.05);
    }
  }
`;

interface Props {
  element: string | React.ReactNode;
}

const AnimatedHover: React.FC<Props> = ({ element }) => (
  <Wrapper>
    <p className="hover-target">{element}</p>
  </Wrapper>
);

export default AnimatedHover;
