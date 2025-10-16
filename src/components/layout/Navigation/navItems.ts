import { useNavigate } from 'react-router-dom';

export interface NavItem {
  id: string;
  label: string;
  dropdown?: {
    label: string;
    to: string;
    isPopup?: boolean;
    action?: () => void;
  }[];
}

export const navItems: NavItem[] = [
  { id: 'expose', label: 'Expose' },
  { 
    id: 'demo', 
    label: 'Demo',
    dropdown: [
      { label: 'Install', to: '/extension' }
    ]
  },
  { 
    id: 'befirst', 
    label: 'Be First',
    dropdown: [
      { 
        label: 'Founder Benefits', 
        to: '#', 
        isPopup: true,
        action: () => {
          // Store the section to scroll to in sessionStorage
          sessionStorage.setItem('scrollToSection', 'befirst');
          // Navigate to home if not already there
          const location = window.location;
          if (location.pathname !== '/') {
            window.location.href = '/';
          } else {
            // If already on home page, scroll to the section
            const section = document.getElementById('befirst');
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
        }
      }
    ]
  },
  { 
    id: 'earn', 
    label: 'EARN',
    dropdown: [
      { label: 'The Plan', to: '/earn' }
    ]
  }
];