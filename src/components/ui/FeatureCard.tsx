import { memo } from 'react';
import { FeatureCardProps } from '../../types';

export const FeatureCard = memo(function FeatureCard({ 
  icon, 
  title, 
  description, 
  gradient 
}: FeatureCardProps) {
  return (
    <div 
      className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center text-center h-full"
      style={{
        boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2), 0 2px 8px -1px rgba(0, 0, 0, 0.1)',
      }}
      role="article"
      aria-labelledby={`feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div 
        className={`inline-flex p-4 rounded-2xl text-${gradient.split('-')[1]}-500 mb-6`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 
        id={`feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-xl font-bold mb-4 text-white"
      >
        {title}
      </h3>
      <p className="text-gray-300 max-w-xs mx-auto">{description}</p>
    </div>
  );
});