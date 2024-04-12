"use client"
import { useEffect, useState } from 'react';

// Function takes true ot false
const useWindowResize = (initialValue: boolean): boolean => {
  const [windowSize, setWindowSize] = useState(initialValue);

  useEffect(() => {
    function handleResize() {
        // anything above width of 940 is truthy and below or equal to that is falsy
      setWindowSize(window.innerWidth >= 941);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowResize;
