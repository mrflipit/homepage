import { useEffect } from 'react';
import { X, Shield, MessageCircle, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LearnMorePopupProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

export function LearnMorePopup({ showPopup, setShowPopup }: LearnMorePopupProps) {
  // Close popup when clicking outside
  useEffect(() => {
    if (!showPopup) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const popup = document.getElementById('learn-more-popup');
      if (popup && !popup.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showPopup, setShowPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-8 animate-fadeIn">
      <div 
        id="learn-more-popup"
        className="bg-gray-900 border border-gray-800/80 rounded-2xl max-w-2xl w-full shadow-2xl relative overflow-hidden transform transition-all duration-500 animate-scaleIn"
      >
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-brand-purple/5 to-brand-blue/5"></div>
        
        {/* Header - REMOVED the gradient border */}
        <div className="relative">
          <div className="flex justify-between items-center p-4 border-b border-gray-800/50">
            <h2 className="text-2xl font-bold text-white"></h2>
            <button 
              onClick={() => setShowPopup(false)}
              className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800/50 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="p-6 pt-4 relative">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-brand-orange via-white to-brand-purple bg-clip-text text-transparent">
              The Back of the Internet
            </h3>
            <p className="text-gray-300 text-lg">Decentralized, democratized, and free.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/30 transform transition-transform hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-brand-orange/10 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-brand-orange" />
                </div>
                <h4 className="font-semibold text-white mb-2 text-lg">Reviews & Warnings</h4>
                <p className="text-gray-300">See what others really think about any site</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/30 transform transition-transform hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-brand-purple/10 rounded-full mb-4">
                  <MessageCircle className="h-8 w-8 text-brand-purple" />
                </div>
                <h4 className="font-semibold text-white mb-2 text-lg">Comments & Chat</h4>
                <p className="text-gray-300">Join real-time discussions on any page</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/30 transform transition-transform hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-brand-blue/10 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-brand-blue" />
                </div>
                <h4 className="font-semibold text-white mb-2 text-lg">Global Community</h4>
                <p className="text-gray-300">Connect with people across the web</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 mb-8">
            <p className="text-gray-300 text-base leading-relaxed text-center">
              Content is ranked by accuracy and relevance - powered by your credibility and votes. 
              No corporate filters, no government censorship, just authentic conversations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/extension"
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium group flex items-center justify-center"
                onClick={() => setShowPopup(false)}
              >
                <span>Install Extension</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 border border-gray-700 hover:border-gray-600 flex items-center justify-center"
                onClick={() => setShowPopup(false)}
              >
                <span>Create Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}