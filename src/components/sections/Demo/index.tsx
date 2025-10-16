import { useState, useEffect, useRef } from 'react';
import { DemoHeader } from './DemoHeader';
import { DemoFrame } from './DemoFrame';
import { useViewportContext } from '../../../hooks';

export function Demo() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
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

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type !== 'flipit-interaction') return;
      if (event.data.firstInteraction) {
        setTimeout(() => {
          setShowDownload(true);
        }, 3000);
        setHasInteracted(true);
      }
      setInteractionCount(prev => prev + 1);
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section 
      id="demo" 
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
          <DemoHeader 
            showDownload={showDownload}
          />

          <DemoFrame 
            hasInteracted={hasInteracted}
            interactionCount={interactionCount}
          />
        </div>
      </div>
    </section>
  );
}