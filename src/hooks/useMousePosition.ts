import { useEffect, useState } from 'react';

export interface MousePositionState {
  x: number;
  y: number;
}

export const useMousePosition = () => {
  const [MousePosition, setMousePosition] = useState<MousePositionState>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return MousePosition;
};
