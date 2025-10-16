import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface SplitButtonProps {
  navigate: NavigateFunction;
}

export function SplitButton({ navigate }: SplitButtonProps) {
  const [hoverPosition, setHoverPosition] = useState<'left' | 'right' | null>(null);
  const buttonRef = useState<HTMLDivElement | null>(null);

  const handleSplitButtonMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef) return;
    
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - buttonRect.left;
    const isRightSide = relativeX > buttonRect.width / 2;
    
    setHoverPosition(isRightSide ? 'right' : 'left');
  };

  const handleSplitButtonMouseLeave = () => {
    setHoverPosition(null);
  };

  const handleSplitButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - buttonRect.left;
    const isRightSide = clickX > buttonRect.width / 2;
    
    navigate(isRightSide ? '/login' : '/signup');
  };

  return (
    <div 
      onClick={handleSplitButtonClick}
      onMouseMove={handleSplitButtonMouseMove}
      onMouseLeave={handleSplitButtonMouseLeave}
      className="relative group overflow-hidden cursor-pointer"
      role="button"
      aria-label="Join or Login"
    >
      <div className="relative z-10 px-4 py-1.5 text-sm font-medium text-white tracking-wide rounded-full border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-800/50 group-hover:border-brand-orange/30">
        <span className={`transition-colors duration-300 ${hoverPosition === 'left' ? 'text-brand-orange' : 'text-gray-400'}`}>JOIN</span>
        <span className="mx-1 text-gray-500">or</span>
        <span className={`transition-colors duration-300 ${hoverPosition === 'right' ? 'text-brand-blue' : 'text-gray-400'}`}>LOGIN</span>
      </div>
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r 
          ${hoverPosition === 'left' ? 'from-brand-orange/40 to-transparent' : 
            hoverPosition === 'right' ? 'from-transparent to-brand-blue/40' : 
            'from-transparent to-transparent'}
          rounded-full blur-lg transition-opacity duration-300
          ${hoverPosition ? 'opacity-100' : 'opacity-0'}
        `}
      ></div>
    </div>
  );
}