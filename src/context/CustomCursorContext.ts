import { createContext } from 'react';

export type CursorLookType = 'default' | 'hover' | 'hover-social';

export type CustomCursorType = {
  type: CursorLookType;
  setType: (type: CursorLookType) => void;
};

export const CustomCursorContext = createContext<CustomCursorType>({
  type: 'default',
  setType: () => {},
});
