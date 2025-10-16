import { useState, useEffect } from 'react';
import { Navigation, Footer } from '../components/layout';
import { Hero, Expose, BeFirst, Earn } from '../components/sections';
import { FloatingCTA } from '../components/ui';
import { useScrollNavigation } from '../hooks';
import { useAppEnvironment } from '../hooks';

function LandingPage() {
  const { freeTextOpacity } = useScrollNavigation();
  const { showDownloadButton } = useAppEnvironment();
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [autoScrollTimer, setAutoScrollTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (showAnnouncement) {
      const timer = setTimeout(() => {
        const mainContent = document.querySelector('main');
        const heroSection = document.querySelector('#home');
        
        if (mainContent && heroSection) {
          mainContent.scrollTo({
            top: heroSection.getBoundingClientRect().top,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            setShowAnnouncement(false);
          }, 1000);
        }
      }, 3000);

      setAutoScrollTimer(timer);
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [showAnnouncement]);

  // Check for scrollToSection in sessionStorage
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    if (scrollToSection) {
      // Clear the storage item immediately to prevent unwanted scrolling on future renders
      sessionStorage.removeItem('scrollToSection');
      
      // Wait for the component to fully render
      setTimeout(() => {
        const sectionElement = document.getElementById(scrollToSection);
        const mainContent = document.querySelector('main');
        
        if (sectionElement && mainContent) {
          // First make sure announcement is hidden
          setShowAnnouncement(false);
          
          // Then scroll to the section
          const navHeight = 48;
          const scrollOffset = sectionElement.offsetTop - navHeight;
          
          mainContent.scrollTo({
            top: scrollOffset,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  }, []);

  const handleAnnouncementClick = () => {
    if (autoScrollTimer) {
      clearTimeout(autoScrollTimer);
      setAutoScrollTimer(null);
    }

    const mainContent = document.querySelector('main');
    const heroSection = document.querySelector('#home');
    
    if (mainContent && heroSection) {
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setShowAnnouncement(false);
    }
  };

  const handleLogoClick = () => {
    setShowAnnouncement(true);
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {showDownloadButton && (
        <FloatingCTA freeTextOpacity={freeTextOpacity} />
      )}

      <Navigation onLogoClick={handleLogoClick} />
      
      <main className="h-screen overflow-y-auto no-scrollbar">
        {showAnnouncement && (
          <div 
            className="relative bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange overflow-hidden pt-[56px] cursor-pointer"
            onClick={handleAnnouncementClick}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 relative z-10">
              <div className="text-center">
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
                  Announcing
                </h2>
                <p className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80 pb-1">
                  The Back of the Internet
                </p>
                <div className="mt-8 flex justify-center space-x-2">
                  <div className="animate-ping h-2 w-2 rounded-full bg-white"></div>
                  <div className="animate-ping h-2 w-2 rounded-full bg-white" style={{ animationDelay: '0.2s' }}></div>
                  <div className="animate-ping h-2 w-2 rounded-full bg-white" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        )}

        <Hero showAnnouncement={showAnnouncement} />
        <Expose />
        <BeFirst />
        <Earn />
      </main>
      
      <Footer />
    </div>
  );
}

export default LandingPage;