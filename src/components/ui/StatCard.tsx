import { memo } from 'react';
import { StatCardProps } from '../../types';

export const StatCard = memo(function StatCard({ number, label, gradient, icon }: StatCardProps) {
  return (
    <div 
      className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl"
      style={{
        boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2), 0 2px 8px -1px rgba(0, 0, 0, 0.1)',
      }}
      role="article"
      aria-label={`${label}: ${number}`}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-20" style={{ background: `linear-gradient(to bottom right, ${gradient})` }}></div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-6 p-3 rounded-xl bg-gray-800/50">
          {icon}
        </div>
        
        <div 
          className="text-[2rem] font-bold mb-3 text-white leading-tight"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
        >
          {number}
        </div>
        
        <div className="text-gray-300 text-sm font-medium">{label}</div>

        {/* Decorative circle */}
        <div 
          className="absolute top-0 right-0 h-8 w-8 rounded-full bg-gradient-to-br opacity-20" 
          style={{ background: `linear-gradient(to bottom right, ${gradient})` }}
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
});