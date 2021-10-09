import React, { useState } from 'react';
import { CursorLookType, CustomCursorContext } from './CustomCursorContext';

const CustomCursorManager: React.FC = ({ children }) => {
  const [type, setType] = useState<CursorLookType>('default');

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
