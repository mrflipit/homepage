import { useState, useEffect } from 'react';

export function useScrollNavigation() {
  const [freeTextOpacity, setFreeTextOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fadeStartPoint = viewportHeight * 0.25;
      const fadeEndPoint = viewportHeight * 0.5;
      
      const opacity = currentScrollY <= fadeStartPoint 
        ? 1 
        : Math.max(0, 1 - (currentScrollY - fadeStartPoint) / (fadeEndPoint - fadeStartPoint) * 2);
      
      setFreeTextOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { navTransform: 0, freeTextOpacity };
}