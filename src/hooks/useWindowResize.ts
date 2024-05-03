import { useState, useEffect } from 'react';

// Custom Hook to detect PC screen size
export const useOnPC = (initialValue: boolean): boolean => {
  const [isPC, setIsPC] = useState(initialValue);

  useEffect(() => {
    function handleResize() {
      setIsPC(window.innerWidth >= 896);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isPC;
};

// Custom Hook to detect Tablet screen size
export const useOnTablet = (initialValue: boolean): boolean => {
  const [isTablet, setIsTablet] = useState(initialValue);

  useEffect(() => {
    function handleResize() {
      setIsTablet(window.innerWidth >= 700);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isTablet;
};