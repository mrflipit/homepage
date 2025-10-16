import { useState, useEffect, useRef } from 'react';

export function useScrollEffect(isHovered: boolean) {
  const [opacity, setOpacity] = useState(1);
  const [logoOpacity, setLogoOpacity] = useState(1);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const handleScroll = () => {
      const currentScrollY = mainContent.scrollTop;
      const scrollingDown = currentScrollY > lastScrollY.current;
      
      if (scrollingDown && !isHovered) {
        setOpacity(0.5);
      } else {
        setOpacity(1);
      }

      if (currentScrollY < 100) {
        setLogoOpacity(1);
      }

      lastScrollY.current = currentScrollY;
    };

    mainContent.addEventListener('scroll', handleScroll, { passive: true });
    return () => mainContent.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  return { opacity, logoOpacity, setLogoOpacity, setOpacity };
}