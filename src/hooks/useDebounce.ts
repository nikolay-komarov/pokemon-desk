import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDeauncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeauncedValue(value);
    }, delay);

    return () => {
      clearInterval(handler);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
