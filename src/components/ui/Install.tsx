import { Download } from 'lucide-react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

export const Install = memo(function Install() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/extension');
  };

  return (
    <a 
      href="/extension"
      onClick={handleClick}
      className="bg-brand-orange hover:bg-brand-orange/90 text-white px-4 md:px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
      aria-label="Install Flipit extension"
      role="button"
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      <span className="text-sm md:text-base">Install Flipit Extension</span>
    </a>
  );
});