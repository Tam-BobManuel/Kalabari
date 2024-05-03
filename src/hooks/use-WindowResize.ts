"use client"
import { useEffect, useState } from 'react';

// Function takes true ot false
export const useOnPC = (initialValue: boolean): boolean => {
  const [windowSize, setWindowSize] = useState(initialValue);

  useEffect(() => {
    function handleResize() {
        // anything above width of 940 is truthy and below or equal to that is falsy
      setWindowSize(window.innerWidth >= 896);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const useOnTablet = (initialValue: boolean): boolean => {
  const [windowSize, setWindowSize] = useState(initialValue);

  useEffect(() => {
    function handleResize() {
        // anything above width of 940 is truthy and below or equal to that is falsy
      setWindowSize(window.innerWidth >= 700);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
