import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('lastActiveSection', activeSection);
    } else {
      const lastSection = sessionStorage.getItem('lastActiveSection');
      if (lastSection) {
        const mainContent = document.querySelector('main');
        const targetElement = document.getElementById(lastSection);
        
        if (mainContent && targetElement) {
          const navHeight = 48;
          const scrollOffset = targetElement.offsetTop - (lastSection !== 'home' ? navHeight : 0);
          
          requestAnimationFrame(() => {
            mainContent.scrollTo({
              top: scrollOffset,
              behavior: 'smooth'
            });
          });
        }
        setActiveSection(lastSection);
        sessionStorage.removeItem('lastActiveSection');
      }
    }
  }, [location.pathname, activeSection]);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const sections = ['home', 'expose', 'demo', 'befirst', 'earn'];
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = mainContent.scrollTop + 100;
      let currentSection = sections[0];
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop } = element;
        const distance = Math.abs(scrollPosition - offsetTop);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section;
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    mainContent.addEventListener('scroll', handleScroll, { passive: true });
    return () => mainContent.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return activeSection;
}