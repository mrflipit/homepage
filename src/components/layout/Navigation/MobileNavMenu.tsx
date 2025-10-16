import { forwardRef } from 'react';
import { NavItem } from './navItems';

interface MobileNavMenuProps {
  isMobileMenuOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleDropdownItemClick: (item: NavItem['dropdown'][0]) => void;
}

export const MobileNavMenu = forwardRef<HTMLDivElement, MobileNavMenuProps>(
  function MobileNavMenu({ 
    isMobileMenuOpen, 
    navItems, 
    activeSection, 
    handleNavClick, 
    handleDropdownItemClick 
  }, ref) {
    return (
      <div 
        ref={ref}
        className={`
          md:hidden absolute top-full right-0 mt-2
          min-w-[200px] max-w-[90vw]
          bg-gray-900/95 backdrop-blur-md
          rounded-lg shadow-xl border border-gray-800/50
          transform transition-all duration-200 ease-out
          ${isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : 'translate-y-4 opacity-0 pointer-events-none'
          }
        `}
        style={{
          zIndex: 101,
        }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="py-2">
          {navItems.map(({ id, label, dropdown }) => (
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
              {dropdown && dropdown.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleDropdownItemClick(item)}
                  className="block w-full text-left px-8 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/30"
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
);