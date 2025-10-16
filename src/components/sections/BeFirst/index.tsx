import { useState, useRef, useEffect } from 'react';
import { BeFirstHeader } from './BeFirstHeader';
import { BeFirstStats } from './BeFirstStats';
import { BeFirstCTA } from './BeFirstCTA';
import { FounderBenefitsPopup } from '../../ui';
import { useViewportContext } from '../../../hooks';
import { BeFirstVideo } from './BeFirstVideo';

export function BeFirst() {
  const [showPopup, setShowPopup] = useState(false);
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
      id="befirst" 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center bg-[#151B26] overflow-hidden ${isTallViewport ? 'tall-viewport-padding' : ''}`}
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(131,65,213,0.08), transparent 70%), linear-gradient(45deg, rgba(75,124,194,0.05), rgba(131,65,213,0.05))'
          }}
        ></div>
      </div>
      
      <div className="w-full h-full flex items-center justify-center">
        <div 
          className={`viewport-aware-container content-grid w-full px-4 ${isUltraTallViewport ? 'py-8' : ''}`}
        >
          <BeFirstHeader />
          <BeFirstVideo 
            videos={[
              { 
                id: "897277226", 
                thumbnailUrl: "https://vimeo.com/api/v2/video/897277226.json" 
              },
              { 
                id: "813460223", 
                thumbnailUrl: "https://vimeo.com/api/v2/video/813460223.json" 
              },
              { 
                id: "1114668699", 
                thumbnailUrl: "https://vimeo.com/api/v2/video/1114668699.json" 
              },
              { 
                id: "1127861851", 
                thumbnailUrl: "https://vimeo.com/api/v2/video/1127861851.json" 
              }
            ]}
            defaultVideoIndex={0}
            className="mb-8"
          />
          <BeFirstStats />
          <BeFirstCTA onShowPopup={() => setShowPopup(true)} />
        </div>
      </div>

      {/* Founder Benefits Popup */}
      <FounderBenefitsPopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </section>
  );
}
