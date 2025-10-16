import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  title?: string;
  backTo?: string;
  backLabel?: string;
}

export function PageHeader({ 
  title, 
  backTo = '/', 
  backLabel = 'Back to Home' 
}: PageHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to={backTo} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">{backLabel}</span>
          </Link>
          {title && (
            <h1 className="text-xl font-bold text-white">{title}</h1>
          )}
        </div>
      </div>
    </header>
  );
}