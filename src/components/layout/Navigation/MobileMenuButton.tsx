import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export function MobileMenuButton({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuButtonProps) {
  return (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden relative z-50 p-2 -mr-2 text-gray-300 hover:text-brand-orange transition-colors"
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMobileMenuOpen}
    >
      <div className="relative w-6 h-6">
        <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 rotate-0 scale-110' : 'opacity-0 rotate-90 scale-90'
        }`} />
        <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-0 -rotate-90 scale-90' : 'opacity-100 rotate-0 scale-110'
        }`} />
      </div>
    </button>
  );
}