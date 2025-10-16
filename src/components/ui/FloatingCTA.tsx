import { memo, useState } from 'react';
import { Eclipse } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FloatingCTAProps {
  freeTextOpacity: number;
}

export const FloatingCTA = memo(function FloatingCTA({ freeTextOpacity }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(false);
    
    // Navigate to extension page after a short delay for the fade effect
    setTimeout(() => {
      navigate('/extension');
    }, 300);
  };

  return (
    <div 
      className={`
        fixed bottom-8 left-8 z-50
        transition-opacity duration-300 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      role="complementary"
      aria-label="Install prompt"
    >
      <a 
        href="/extension"
        onClick={handleInstallClick}
        className={`
          bg-brand-orange hover:bg-brand-orange/90 text-white px-4 md:px-6 py-2 rounded-full 
          transition-all duration-300 ease-in-out flex items-center space-x-2 shadow-lg hover:shadow-xl 
          transform hover:scale-105 whitespace-nowrap
        `}
        aria-label="Install Flipit extension"
        role="button"
        style={{ opacity: freeTextOpacity }}
      >
        <Eclipse className="h-4 w-4 mr-2" aria-hidden="true" />
        <span className="text-sm md:text-base">Click to access the back of every Webpage</span>
      </a>
    </div>
  );
});