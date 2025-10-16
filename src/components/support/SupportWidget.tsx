import { useEffect } from 'react';

declare global {
  interface Window {
    FreshworksWidget?: (action: string, ...args: any[]) => void;
    fwSettings?: {
      widget_id: number;
    };
  }
}

export function SupportWidget() {
  useEffect(() => {
    // Initialize Freshworks settings
    window.fwSettings = {
      widget_id: 154000000056
    };

    // Initialize Freshworks Widget
    (function() {
      if (typeof window.FreshworksWidget !== 'function') {
        const n = function() {
          (n as any).q.push(arguments);
        };
        (n as any).q = [];
        window.FreshworksWidget = n;
      }
    })();

    // Load Freshworks script
    const script = document.createElement('script');
    script.src = 'https://widget.freshworks.com/widgets/154000000056.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Add custom styles for fade transition and opacity
    const style = document.createElement('style');
    style.textContent = `
      .widget-holder {
        transition: opacity 300ms ease-in-out !important;
        opacity: 0.5 !important; /* Default 50% opacity when inactive */
      }
      .widget-holder:hover {
        opacity: 1 !important; /* Full opacity on hover */
      }
      .widget-holder.fade-out {
        opacity: 0 !important;
        pointer-events: none !important;
      }
      .widget-holder.active {
        opacity: 1 !important; /* Full opacity when active/open */
      }
    `;
    document.head.appendChild(style);

    // Add event listeners to detect widget interaction
    const setupWidgetInteraction = () => {
      setTimeout(() => {
        const widgetHolder = document.querySelector('.widget-holder');
        const widgetIcon = document.querySelector('.launcher');
        const widgetContent = document.querySelector('.wrapper');
        
        if (widgetHolder && widgetIcon) {
          // Add hover listener to widget icon
          widgetIcon.addEventListener('mouseenter', () => {
            widgetHolder.classList.add('active');
          });
          
          // When widget is opened, keep it at full opacity
          widgetIcon.addEventListener('click', () => {
            widgetHolder.classList.add('active');
          });
          
          // Check for widget content changes (open/close)
          if (widgetContent) {
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.attributeName === 'style') {
                  const style = (mutation.target as HTMLElement).style;
                  // If widget content is hidden, remove active class
                  if (style.display === 'none') {
                    widgetHolder.classList.remove('active');
                  }
                }
              });
            });
            
            observer.observe(widgetContent, { attributes: true });
          }
        } else {
          // If elements aren't available yet, try again
          setTimeout(setupWidgetInteraction, 1000);
        }
      }, 2000); // Initial delay to ensure widget is loaded
    };

    // Setup interaction detection once script is loaded
    script.onload = setupWidgetInteraction;

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

export const supportWidget = {
  open: () => {
    window.FreshworksWidget?.('open');
    const widgetHolder = document.querySelector('.widget-holder');
    if (widgetHolder) {
      widgetHolder.classList.add('active');
    }
  },
  close: () => {
    window.FreshworksWidget?.('close');
    const widgetHolder = document.querySelector('.widget-holder');
    if (widgetHolder) {
      widgetHolder.classList.remove('active');
    }
  },
  hide: () => {
    const widget = document.querySelector('.widget-holder');
    if (widget) {
      widget.classList.add('fade-out');
    }
  },
  show: () => {
    const widget = document.querySelector('.widget-holder');
    if (widget) {
      widget.classList.remove('fade-out');
    }
  }
};