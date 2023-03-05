import { MutableRefObject, useLayoutEffect, useRef } from 'react';

export function useLatest<T>(value: T): MutableRefObject<T> {
  const valueRef = useRef<T>(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
