import { Sun, Moon } from 'lucide-react';
import { memo } from 'react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = memo(function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  
  return (
    <button
      onClick={onToggle}
      className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label={label}
      role="switch"
      aria-checked={isDark}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-brand-orange" aria-hidden="true" />
      ) : (
        <Moon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
      )}
    </button>
  );
});