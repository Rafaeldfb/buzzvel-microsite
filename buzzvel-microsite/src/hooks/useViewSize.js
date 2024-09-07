'use client';

import React, {useState, useEffect, useCallback} from 'react';
import {debounce} from '@/helpers/utilities';

export default function useViewSize() {
  const [viewSize, setViewSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = useCallback(() => {
    setViewSize({
      width: window.innerWidth,
      height: window.innerHeight,  
    });
  }, []);

  // Rapid events always should be debounced
  const debouncedHandleResize = useCallback(
    debounce(handleResize, 300), 
    [handleResize]
  );

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);

    debouncedHandleResize();

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return viewSize;
};