import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const handleScroll = () => {
      const currentScrollY = mainContent.scrollTop;
      
      // Show footer when scrolling up and not at the top
      setIsVisible(currentScrollY < lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    mainContent.addEventListener('scroll', handleScroll, { passive: true });
    return () => mainContent.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollToTop = () => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;
    
    mainContent.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className={`
        fixed bottom-0 left-0 right-0 z-50
        transform transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <div className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <a 
                href="https://flipit.com/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                Terms
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">© 2024 Flipit</span>
            </div>
            
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-gray-400 group-hover:text-brand-orange transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}