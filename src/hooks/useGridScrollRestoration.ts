import { useRef, useCallback } from 'react';

interface ScrollPosition {
  [key: string]: number;
}

export const useGridScrollRestoration = () => {
  const scrollPositions = useRef<ScrollPosition>({});

  const saveScrollPosition = useCallback((key: string, scrollY: number) => {
    scrollPositions.current[key] = scrollY;
  }, []);

  const getScrollPosition = useCallback((key: string): number => {
    return scrollPositions.current[key] || 0;
  }, []);

  const restoreScrollPosition = useCallback((key: string, element: HTMLElement | null) => {
    if (element) {
      const savedPosition = scrollPositions.current[key] || 0;
      element.scrollTop = savedPosition;
    }
  }, []);

  return {
    saveScrollPosition,
    getScrollPosition,
    restoreScrollPosition,
  };
};

