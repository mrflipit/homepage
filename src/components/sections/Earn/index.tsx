import { useRef, useEffect } from 'react';
import { EarnHeader } from './EarnHeader';
import { EarnCTA } from './EarnCTA';
import { useViewportContext } from '../../../hooks';

export function Earn() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isTallViewport, isUltraTallViewport } = useViewportContext();
  
  // Use IntersectionObserver to detect when section enters viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current?.classList.add('section-visible');
          } else {
            sectionRef.current?.classList.remove('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="earn" 
      ref={sectionRef}
      className={`relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 w-full ${isTallViewport ? 'tall-viewport-padding' : 'py-20'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-orange/10 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="w-full h-full flex items-center justify-center">
        <div 
          className={`viewport-aware-container content-grid w-full px-4 ${isUltraTallViewport ? 'py-8' : ''}`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <EarnHeader />
          </div>
          
          {/* CTA positioned at the bottom of the content */}
          <div className="max-w-4xl mx-auto">
            <EarnCTA />
          </div>
          
          {/* Extra space at the bottom to clear the footer when scrolling */}
          <div className={`${isTallViewport ? 'h-60 md:h-80 lg:h-96' : 'h-40 md:h-60 lg:h-80'}`}></div>
        </div>
      </div>
    </section>
  );
}