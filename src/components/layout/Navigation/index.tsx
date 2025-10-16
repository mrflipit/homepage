import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { NavLogo } from './NavLogo';
import { MobileMenuButton } from './MobileMenuButton';
import { DesktopNavItems } from './DesktopNavItems';
import { MobileNavMenu } from './MobileNavMenu';
import { SplitButton } from './SplitButton';
import { navItems } from './navItems';
import { useScrollEffect } from './useScrollEffect';
import { NavigationProps } from '../../../types';

export function Navigation({ onLogoClick }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const activeSection = useActiveSection();
  const navigate = useNavigate();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { opacity, logoOpacity, setLogoOpacity } = useScrollEffect(isHovered);

  // Show navigation after a delay
  useState(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        if (!isHovered) {
          setLogoOpacity(0.5);
        }
      }, 10000);
    }, 3000);

    return () => clearTimeout(timer);
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.replace('#', '');
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    const mainContent = document.querySelector('main');
    if (!targetElement || !mainContent) return;

    const navHeight = 48;
    let scrollOffset = targetElement.offsetTop;

    if (targetId !== 'home') {
      scrollOffset -= navHeight;
    }

    mainContent.scrollTo({
      top: scrollOffset,
      behavior: 'smooth'
    });
    
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownItemClick = (item: typeof navItems[0]['dropdown'][0]) => {
    if (item.isPopup && item.action) {
      item.action();
    } else if (!item.isPopup) {
      navigate(item.to);
    }
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`
        fixed w-full z-[100] transition-all duration-500
        ${isVisible ? 'bg-gray-900/95 hover:bg-gray-900/98' : 'bg-transparent'}
        backdrop-blur-sm shadow-lg shadow-gray-900/10
      `}
      style={{
        opacity: isVisible ? opacity : 0,
        transition: 'opacity 0.5s ease-in-out, background-color 0.3s ease-in-out',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        setOpacity(1);
        setLogoOpacity(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveDropdown(null);
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-12 relative">
          <div className="flex items-center space-x-6">
            <NavLogo 
              onLogoClick={onLogoClick} 
              isVisible={isVisible} 
              logoOpacity={logoOpacity} 
              activeSection={activeSection} 
            />

            <SplitButton navigate={navigate} />
          </div>

          <MobileMenuButton 
            isMobileMenuOpen={isMobileMenuOpen} 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
          />

          <DesktopNavItems 
            navItems={navItems}
            activeSection={activeSection}
            isVisible={isVisible}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            handleNavClick={handleNavClick}
            handleDropdownItemClick={handleDropdownItemClick}
          />

          <MobileNavMenu 
            ref={mobileMenuRef}
            isMobileMenuOpen={isMobileMenuOpen}
            navItems={navItems}
            activeSection={activeSection}
            handleNavClick={handleNavClick}
            handleDropdownItemClick={handleDropdownItemClick}
          />
        </div>
      </div>
    </nav>
  );
}