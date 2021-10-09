import React, { Dispatch, SetStateAction, useContext } from 'react';
import { v4 } from 'uuid';
import { CustomCursorContext } from '../../context/CustomCursorContext';

import { Text } from './AnimatedText.styled';

interface Text {
  text: string;
  // color: string;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
}

const AnimatedText: React.FC<Text> = ({ text, setActiveIndex, index }) => {
  const { setType } = useContext(CustomCursorContext);

  return (
    <Text>
      {/* {[...text].map((item) => ( */}
      <div
        className="animated-item"
        key={v4()}
        onMouseEnter={() => {
          setActiveIndex(1);
          setType('hover');
        }}
        onMouseLeave={() => {
          setActiveIndex(-1);
          setType('default');
        }}
      >
        {text}
      </div>
      {/* ))} */}
    </Text>
  );
};

export default AnimatedText;
