import React, { Dispatch, SetStateAction, useContext } from 'react';
import { v4 } from 'uuid';
import { CustomCursorContext } from '../../context/CustomCursorContext';

import { Text } from './AnimatedText.styled';

interface AnimatedTextProps {
  text: string;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, setActiveIndex, index: _index }) => {
  const { setType } = useContext(CustomCursorContext);

  return (
    <Text>
      <div
        className="animated-item"
        key={v4()}
        onMouseEnter={() => {
          setActiveIndex(1);
          setType('hover-name');
        }}
        onMouseLeave={() => {
          setActiveIndex(-1);
          setType('default');
        }}
      >
        {text}
      </div>
    </Text>
  );
};

export default AnimatedText;
