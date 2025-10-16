// Component Props
export interface CommentProps {
  author: string;
  delay: number;
  children: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export interface StatCardProps {
  number: string;
  label: string;
  gradient: string;
  icon: React.ReactNode;
}

// Navigation Props
export interface NavigationProps {
  onLogoClick?: () => void;
}

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

// Form Props
export interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  className?: string;
}

export interface FormCheckboxProps {
  id: string;
  name: string;
  label: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

// Page Header Props
export interface PageHeaderProps {
  title?: string;
  backTo?: string;
  backLabel?: string;
}

// Environment Types
export interface AppEnvironment {
  isIframe: boolean;
  isExtension: boolean;
  isBrowser: boolean;
  isDevelopment: boolean;
  isProduction: boolean;
  showDownloadButton: boolean;
}

// Auth Types
export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface AuthResponse {
  id_token: string;
}

// EarningsHeader Props
export interface EarningsHeaderProps {
  variant?: 'section' | 'page';
  className?: string;
}