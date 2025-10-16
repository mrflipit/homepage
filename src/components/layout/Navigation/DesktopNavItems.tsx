import { ChevronDown } from 'lucide-react';
import { NavItem } from './navItems';

interface DesktopNavItemsProps {
  navItems: NavItem[];
  activeSection: string;
  isVisible: boolean;
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleDropdownItemClick: (item: NavItem['dropdown'][0]) => void;
}

export function DesktopNavItems({ 
  navItems, 
  activeSection, 
  isVisible, 
  activeDropdown, 
  setActiveDropdown,
  handleNavClick,
  handleDropdownItemClick
}: DesktopNavItemsProps) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setActiveDropdown(item.id)}
          onMouseLeave={() => setActiveDropdown(null)}
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
            {item.dropdown && (
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                activeDropdown === item.id ? 'rotate-180' : ''
              }`} />
            )}
            {activeSection === item.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-brand-purple/10 blur-md -z-10"></div>
            )}
            <div 
              className={`
                absolute bottom-0 left-0 w-full h-0.5
                transform origin-left transition-all duration-300
                ${activeSection === item.id 
                  ? `scale-x-100 bg-brand-orange opacity-50`
                  : 'scale-x-0 bg-brand-orange/50'
                }
              `}
            />
          </a>

          {item.dropdown && activeDropdown === item.id && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-800/50 overflow-hidden min-w-[160px]">
                {item.dropdown.map((dropdownItem) => (
                  <button
                    key={dropdownItem.label}
                    onClick={() => handleDropdownItemClick(dropdownItem)}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                  >
                    {dropdownItem.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}