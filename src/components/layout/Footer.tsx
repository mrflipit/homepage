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
      const scrollHeight = mainContent.scrollHeight;
      const clientHeight = mainContent.clientHeight;
      
      // Show footer when scrolling up and not at the top OR when at bottom of page
      const isAtBottom = currentScrollY + clientHeight >= scrollHeight - 20; // 20px threshold
      setIsVisible((currentScrollY < lastScrollY && currentScrollY > 100) || isAtBottom);
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
              <span className="text-gray-400">© 2025 Flipit Global Limited</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:affiliates@flipit.com" 
                className="text-gray-400 hover:text-brand-orange transition-colors relative group"
              >
                Affiliates
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-800 text-gray-200 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  Pro Affiliates or Influencers
                </span>
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="mailto:investors@flipit.com" 
                className="text-gray-400 hover:text-brand-orange transition-colors relative group"
              >
                Investors
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-800 text-gray-200 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  Interested Investors
                </span>
              </a>
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