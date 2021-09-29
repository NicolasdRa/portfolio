import React, { Dispatch, SetStateAction } from 'react';
import { v4 } from 'uuid';

import { Text } from './AnimatedText.styled';

interface Text {
  text: string;
  // color: string;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
}

const AnimatedText: React.FC<Text> = ({ text, setActiveIndex, index }) => (
  <Text>
    {/* {[...text].map((item) => ( */}
    <div
      className="animated-item"
      key={v4()}
      onMouseEnter={() => {
        setActiveIndex(1);
      }}
      onMouseLeave={() => {
        setActiveIndex(-1);
      }}
    >
      {text}
    </div>
    {/* ))} */}
  </Text>
);

export default AnimatedText;
