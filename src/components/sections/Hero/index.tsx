import { useRef, useState, useEffect } from 'react';
import { HeroContent } from './HeroContent';
import { HeroCard } from './HeroCard';
import { LearnMorePopup } from './LearnMorePopup';
import { useViewportContext } from '../../../hooks';

interface HeroProps {
  showAnnouncement: boolean;
}

export function Hero({ showAnnouncement }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const { isTallViewport, isUltraTallViewport } = useViewportContext();
  
  // Use IntersectionObserver to detect when section enters viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a class to indicate the section is visible
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
      id="home" 
      ref={sectionRef} 
      className={`relative min-h-[100dvh] flex items-center justify-center bg-[#1B2331] ${isTallViewport ? 'tall-viewport-padding' : ''}`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div 
          className={`viewport-aware-container content-grid w-full px-4 ${isUltraTallViewport ? 'py-8' : ''}`}
        >
          <div className="flex flex-col lg:flex-row items-center w-full">
            {/* Hero Content - Left Side */}
            <HeroContent 
              showPopup={showPopup}
              setShowPopup={setShowPopup}
            />

            {/* Hero Card - Right Side */}
            <HeroCard 
              showAnnouncement={showAnnouncement}
            />
          </div>
        </div>
      </div>

      {/* Learn More Popup */}
      <LearnMorePopup 
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </section>
  );
}