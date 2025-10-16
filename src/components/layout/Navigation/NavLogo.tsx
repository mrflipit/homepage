interface NavLogoProps {
  onLogoClick?: () => void;
  isVisible: boolean;
  logoOpacity: number;
  activeSection: string;
}

export function NavLogo({ onLogoClick, isVisible, logoOpacity, activeSection }: NavLogoProps) {
  return (
    <button 
      onClick={onLogoClick}
      className={`
        flex items-center relative cursor-pointer
        ${activeSection === 'home' ? 'scale-105' : ''}
        transition-all duration-300
        group
      `}
      style={{
        opacity: logoOpacity,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div className="relative">
        <div 
          className={`
            absolute -right-4 top-1/2 -translate-y-1/2
            w-16 h-16 rounded-full
            bg-gradient-to-r from-brand-orange to-brand-purple
            opacity-0 group-hover:opacity-25
            blur-xl transition-opacity duration-500
          `}
          style={{
            transform: 'translateY(-50%) translateX(25%)',
          }}
        ></div>

        <div className={`
          relative h-10 flex items-center
          transition-all duration-[2000ms] ease-in-out
          group-hover:opacity-100 group-hover:brightness-125
          ${isVisible ? 'opacity-90' : 'opacity-0'}
        `}>
          <img
            src="/logo-dark.svg"
            alt="Flipit Logo - Back to top"
            className="h-20 w-20 relative z-10"
            style={{
              transform: 'translateY(-1px)',
            }}
          />
        </div>
      </div>
    </button>
  );
}