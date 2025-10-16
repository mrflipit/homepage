import { Download } from 'lucide-react';
import { memo, useState, useEffect } from 'react';

interface DownloadButtonProps {
  onClick?: (e: React.MouseEvent) => void;
}

export const DownloadButton = memo(function DownloadButton({ onClick }: DownloadButtonProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const handleScroll = () => {
      // Hide elements
      setIsScrolled(true);

      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout to show after 4 seconds of no scrolling
      const timeout = setTimeout(() => {
        setIsScrolled(false);
      }, 4000);

      setScrollTimeout(timeout);
    };

    mainContent.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      mainContent.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <a 
      href="/extension"
      onClick={onClick}
      className={`
        bg-brand-orange hover:bg-brand-orange/90 text-white px-4 md:px-6 py-2 rounded-full 
        transition-all duration-300 ease-in-out flex items-center space-x-2 shadow-lg hover:shadow-xl 
        transform hover:scale-105 whitespace-nowrap
        ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
      aria-label="Install Flipit extension"
      role="button"
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      <span className="text-sm md:text-base">Install Flipit Extension</span>
    </a>
  );
});