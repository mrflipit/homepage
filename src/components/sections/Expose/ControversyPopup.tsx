import { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ControversyPopupProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

export function ControversyPopup({ showPopup, setShowPopup }: ControversyPopupProps) {
  // Close popup when clicking outside
  useEffect(() => {
    if (!showPopup) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const popup = document.getElementById('controversy-popup');
      if (popup && !popup.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showPopup, setShowPopup]);

  // Animation classes
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        id="controversy-popup"
        className="bg-gray-900/90 backdrop-blur-xl border border-gray-800/80 rounded-xl max-w-md w-full shadow-[0_0_30px_rgba(249,115,22,0.15)] overflow-hidden transform transition-all duration-500 animate-scaleIn"
      >
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-purple/10 pointer-events-none"></div>
        
        {/* Header with cleaner design */}
        <div className="relative">
          <div className="flex justify-between items-center p-4 border-b border-gray-800/50">
            <h2 className="text-xl font-bold text-white">Why Controversy?</h2>
            <button 
              onClick={() => setShowPopup(false)}
              className="text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-gray-800/50 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="p-5 relative space-y-4 text-center">
          {/* Main content with improved spacing */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Truth exposes lies.
            </h3>
            <p className="text-gray-300 text-base">
              Flipit empowers you to expose scams, call out deception, and speak freely.
            </p>
          </div>
          
          {/* Highlighted box with better contrast */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-lg p-4 border border-gray-700/20">
            <p className="text-white text-base font-medium mb-1">
              Some will fear the truth on their Back.
            </p>
            <p className="text-brand-orange text-lg font-semibold">
              But you'll embrace it.
            </p>
          </div>
          
          {/* Founder note more compact */}
          <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-700/20">
            <p className="text-gray-300 text-sm leading-relaxed">
              Our founder created Flipit after being scammed online. Flipit is the solution he wished existed.
            </p>
          </div>
          
          {/* CTA button with improved styling */}
          <div className="pt-2 flex justify-center">
            <Link 
              to="/extension"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-orange to-brand-orange/90 text-white rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg font-medium text-base group"
              onClick={() => setShowPopup(false)}
            >
              <span>Ready to Flipit?</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}