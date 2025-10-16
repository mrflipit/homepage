import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Menu, X } from 'lucide-react';
import { NavLogo } from './Navigation/NavLogo';

interface NavigationProps {
  onLogoClick?: () => void;
}

interface NavItem {
  id: string;
  label: string;
}

export function Navigation({ onLogoClick }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(1);
  const buttonRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection();
  const navigate = useNavigate();
  const lastScrollY = useRef(0);

  const navItems: NavItem[] = [
    { id: 'expose', label: 'Expose' },
    { id: 'demo', label: 'Demo' },
    { id: 'befirst', label: 'Be First' },
    { id: 'earn', label: 'EARN' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we should show or hide the navigation
      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < lastScrollY.current);
        setOpacity(isHovered ? 0.9 : 0.7);
      } else {
        setIsVisible(true);
        setOpacity(currentScrollY / 200);
      }
      
      // Adjust logo opacity
      if (currentScrollY > 50) {
        setLogoOpacity(Math.max(0, 1 - (currentScrollY - 50) / 100));
      } else {
        setLogoOpacity(1);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  useEffect(() => {
    // Check if there's a section to scroll to from sessionStorage
    const sectionToScrollTo = sessionStorage.getItem('scrollToSection');
    if (sectionToScrollTo) {
      // Clear the sessionStorage item
      sessionStorage.removeItem('scrollToSection');
      
      // Find the section and scroll to it
      const section = document.getElementById(sectionToScrollTo);
      const mainContent = document.querySelector('main');
      if (section && mainContent) {
        const navHeight = 48;
        const scrollOffset = section.offsetTop - navHeight;
        mainContent.scrollTo({
          top: scrollOffset,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    // Extract the section ID from the href
    const sectionId = href.replace('#', '');
    
    // Find the section and scroll to it
    const section = document.getElementById(sectionId);
    const mainContent = document.querySelector('main');
    if (section && mainContent) {
      const navHeight = 48;
      const scrollOffset = section.offsetTop - navHeight;
      mainContent.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const handleSplitButtonMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const relativeX = e.clientX - buttonRect.left;
    const isRightSide = relativeX > buttonRect.width / 2;
    
    // Get the gradient element
    const gradientElement = buttonRef.current.querySelector('.button-gradient') as HTMLElement;
    if (gradientElement) {
      // Set gradient direction and colors based on hover position
      if (isRightSide) {
        gradientElement.style.background = 'linear-gradient(90deg, rgba(255,149,0,0.1) 0%, rgba(156,39,176,0.3) 100%)';
        gradientElement.style.opacity = '0.8';
        // Position the gradient to appear behind the LOGIN text
        gradientElement.style.transform = 'translateX(25%)';
      } else {
        gradientElement.style.background = 'linear-gradient(270deg, rgba(156,39,176,0.1) 0%, rgba(255,149,0,0.3) 100%)';
        gradientElement.style.opacity = '0.8';
        // Position the gradient to appear behind the JOIN text
        gradientElement.style.transform = 'translateX(-25%)';
      }
    }
    
    // Get the text elements
    const joinText = buttonRef.current.querySelector('.join-text') as HTMLElement;
    const loginText = buttonRef.current.querySelector('.login-text') as HTMLElement;
    
    if (joinText && loginText) {
      if (isRightSide) {
        joinText.style.color = 'rgba(255, 255, 255, 0.7)';
        loginText.style.color = 'rgba(255, 149, 0, 1)'; // Orange color
      } else {
        joinText.style.color = 'rgba(255, 149, 0, 1)'; // Orange color
        loginText.style.color = 'rgba(255, 255, 255, 0.7)';
      }
    }
  };

  const handleSplitButtonMouseLeave = () => {
    if (!buttonRef.current) return;
    
    // Reset gradient
    const gradientElement = buttonRef.current.querySelector('.button-gradient') as HTMLElement;
    if (gradientElement) {
      gradientElement.style.opacity = '0';
      gradientElement.style.transform = '';
    }
    
    // Reset text colors
    const joinText = buttonRef.current.querySelector('.join-text') as HTMLElement;
    const loginText = buttonRef.current.querySelector('.login-text') as HTMLElement;
    
    if (joinText && loginText) {
      joinText.style.color = '';
      loginText.style.color = '';
    }
  };

  const handleSplitButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const relativeX = e.clientX - buttonRect.left;
    const isRightSide = relativeX > buttonRect.width / 2;
    
    navigate(isRightSide ? '/login' : '/signup');
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLogoClick) {
      onLogoClick();
    } else {
      // Scroll to top
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
      style={{ 
        backgroundColor: `rgba(10, 10, 15, ${opacity})`,
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        setOpacity(lastScrollY.current > 100 ? 0.9 : Math.max(0.2, lastScrollY.current / 200));
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setOpacity(lastScrollY.current > 100 ? 0.7 : Math.max(0, lastScrollY.current / 200));
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <NavLogo 
              onLogoClick={handleLogoClick}
              isVisible={isVisible}
              logoOpacity={logoOpacity}
              activeSection={activeSection}
            />
            
            {/* Join or Login Button - Moved beside logo */}
            <div 
              ref={buttonRef}
              className="group relative cursor-pointer"
              onMouseMove={handleSplitButtonMouseMove}
              onMouseLeave={handleSplitButtonMouseLeave}
              onClick={handleSplitButtonClick}
              aria-label="Join or Login"
            >
              <div className="relative z-10 px-4 py-1.5 text-sm font-medium text-white tracking-wide rounded-full border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-800/50 group-hover:border-brand-orange/30">
                <span className="join-text transition-colors duration-300">JOIN</span>
                <span className="mx-1 text-gray-500">or</span>
                <span className="login-text transition-colors duration-300">LOGIN</span>
              </div>
              <div 
                className="button-gradient absolute inset-0 bg-gradient-to-r from-transparent to-transparent rounded-full blur-lg transition-all duration-300 opacity-0 -z-10"
              ></div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          
          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-1 pr-40 relative">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
              >
                <a
                  onClick={handleNavClick}
                  href={`#${item.id}`}
                  className={`
                    relative py-1 px-2 flex items-center space-x-1
                    transition-all duration-300
                    ${isVisible ? 'text-gray-100 hover:text-brand-orange' : 'text-transparent'}
                    ${activeSection === item.id ? 'text-white font-medium' : ''}
                  `}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-brand-purple/10 blur-md -z-10"></div>
                  )}
                  <div 
                    className={`
                      absolute bottom-0 left-0 w-full h-0.5
                      transform origin-left transition-all duration-300
                      ${activeSection === item.id 
                        ? `scale-x-100 bg-brand-orange ${isHovered ? 'opacity-100' : 'opacity-50'}`
                        : 'scale-x-0 bg-brand-orange/50'
                      }
                    `}
                  />
                </a>
              </div>
            ))}
            
            {/* Try it arrow pointing to the curl */}
            <div className="absolute right-12 top-0 flex items-center z-50">
              <span className="mr-1 font-bold text-lg text-brand-orange">Try it</span>
              <div className="text-xl font-bold text-brand-orange">---&gt;</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`
          md:hidden bg-gray-900/95 backdrop-blur-sm
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="py-2">
          {navItems.map(({ id, label }) => (
            <div key={id}>
              <a
                onClick={handleNavClick}
                href={`#${id}`}
                className={`
                  block px-6 py-3 relative
                  text-lg font-medium
                  ${activeSection === id ? 'text-white bg-gradient-to-r from-brand-orange/10 to-brand-purple/10' : 'text-gray-300'}
                  transition-all duration-200
                  hover:bg-gray-800/50 active:bg-gray-800/80
                  active:scale-[0.98] transform
                `}
              >
                <div className="flex items-center justify-between">
                  <span>{label}</span>
                  <div className={`
                    w-1.5 h-1.5 rounded-full
                    transition-all duration-300
                    ${activeSection === id ? 'bg-brand-orange scale-100' : 'bg-gray-600 scale-75'}
                  `}></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}