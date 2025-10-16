import { ButtonProps } from '../../types';

export function Button({
  type = 'button',
  children,
  onClick,
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}: ButtonProps) {
  const baseClasses = 'font-medium transition-colors rounded-lg';
  
  const variantClasses = {
    primary: 'bg-brand-orange hover:bg-brand-orange/90 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    outline: 'bg-transparent border border-gray-700 hover:border-gray-600 text-white hover:bg-gray-800/30',
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6',
    lg: 'py-4 px-8 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-75 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${disabledClass}
        ${className}
      `}
    >
      {children}
    </button>
  );
}