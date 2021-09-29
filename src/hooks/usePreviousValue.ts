import { useRef, useEffect } from 'react';

export const usePreviousValue = <T>(value: T): T => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value

  const ref: any = useRef<T>();
  // Store current value in ref

  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
};
