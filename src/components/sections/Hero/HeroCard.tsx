import { useRef, useEffect } from 'react';
import { CommentsList } from './CommentsList';

interface HeroCardProps {
  showAnnouncement: boolean;
}

export function HeroCard({ showAnnouncement }: HeroCardProps) {
  const flipCardRef = useRef<HTMLDivElement>(null);
  const animationStartedRef = useRef(false);

  useEffect(() => {
    if (!flipCardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (flipCardRef.current) {
            if (!entry.isIntersecting) {
              // Reset and pause animation when section is out of view
              flipCardRef.current.style.animation = 'none';
              // Force a reflow
              void flipCardRef.current.offsetHeight;
            } else if (!showAnnouncement && !animationStartedRef.current) {
              // Start animation 1 second after announcement is gone and section is visible
              setTimeout(() => {
                if (flipCardRef.current) {
                  flipCardRef.current.style.animation = 'flip 18s linear infinite';
                  animationStartedRef.current = true;
                }
              }, 1000);
            }
          }
        });
      },
      {
        threshold: 0,
      }
    );

    observer.observe(flipCardRef.current);
    return () => observer.disconnect();
  }, [showAnnouncement]);

  // Reset animation state when announcement shows again
  useEffect(() => {
    if (showAnnouncement) {
      animationStartedRef.current = false;
      if (flipCardRef.current) {
        flipCardRef.current.style.animation = 'none';
      }
    }
  }, [showAnnouncement]);

  return (
    <div className="w-full lg:w-[60%] order-1 lg:order-2 flex justify-center">
      <div className="w-full max-w-[616px] px-4 lg:px-0">
        <div className="relative w-full aspect-[3/4] perspective-1000">
          <div ref={flipCardRef} className="flip-card-inner">
            <div className="flip-card-front">
              <img 
                src="/images/hands_on_laptop.avif"
                alt="Hands typing on laptop"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
            <div className="flip-card-back">
              <div className="w-full h-full bg-transparent rounded-lg overflow-hidden">
                <CommentsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}