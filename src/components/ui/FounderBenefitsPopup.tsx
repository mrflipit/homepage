import { useState, useEffect } from 'react';
import { X, Crown, DollarSign, Users, Star, BarChart3, Target, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface FounderBenefitsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FounderBenefitsPopup({ isOpen, onClose }: FounderBenefitsPopupProps) {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  
  // Close popup when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const popup = document.getElementById('founder-benefits-popup');
      if (popup && !popup.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handleEarnMoreClick = () => {
    onClose();
    
    // Navigate to home page if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    
    // Scroll to earn section after a short delay to ensure navigation completes
    setTimeout(() => {
      const earnSection = document.getElementById('earn');
      const mainContent = document.querySelector('main');
      if (earnSection && mainContent) {
        const navHeight = 48;
        const scrollOffset = earnSection.offsetTop - navHeight;
        mainContent.scrollTo({
          top: scrollOffset,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-8 animate-fadeIn overflow-y-auto">
      <div 
        id="founder-benefits-popup"
        className="bg-gray-900 border border-gray-800/80 rounded-2xl max-w-4xl w-full shadow-2xl relative overflow-hidden transform transition-all duration-500 animate-scaleIn my-8"
      >
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-brand-purple/5 to-brand-blue/5"></div>
        
        {/* Header with gradient border */}
        <div className="relative">
          <div className="flex justify-between items-center p-6 border-b border-gray-800/50">
            <h2 className="text-2xl font-bold text-white">Founder Benefits</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800/50 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="p-6 md:p-8 relative">
          {!showDetails ? (
            <>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-brand-orange via-gray-200 to-brand-purple bg-clip-text text-transparent">
                  You're Early - It Matters!
                </h3>
                <p className="text-gray-300 text-lg">Join a select group shaping the future of web interaction.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
                {/* Earn 5X More */}
                <div 
                  onClick={handleEarnMoreClick}
                  className="bg-gradient-to-br from-brand-orange/30 to-brand-orange/5 backdrop-blur-sm rounded-xl p-0.5 transform transition-all duration-300 hover:scale-[1.05] relative shadow-lg hover:shadow-xl group cursor-pointer"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange/60 to-brand-orange/20 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-brand-orange/30 relative h-full flex flex-col justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-brand-orange to-yellow-300 bg-clip-text text-transparent">Earn 5X More</span>
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Premium Status & Network Boost */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transform transition-transform hover:scale-[1.02]">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Premium Status & Network Boost</h3>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <button 
                  onClick={() => setShowDetails(true)}
                  className="inline-flex items-center px-6 py-2 text-brand-orange hover:text-white border border-brand-orange/50 hover:bg-brand-orange/10 rounded-full transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-brand-orange/20 via-brand-purple/20 to-brand-blue/20 rounded-xl p-0.5 mb-8">
                <div className="bg-gray-900/80 rounded-lg p-6 text-center">
                  <h4 className="text-xl font-bold text-white mb-4">Limited Founder Spots Available</h4>
                  <p className="text-gray-300 mb-4">Lock in your founder benefits now before they're gone forever!</p>
                  <div className="flex items-center justify-center space-x-2 text-brand-orange animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                    <p className="text-sm font-medium">Spots filling quickly</p>
                    <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  to="/signup"
                  className="inline-flex items-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-xl group shadow-lg hover:shadow-xl"
                  onClick={onClose}
                >
                  <span>Join as a Founder</span>
                  <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-brand-orange via-gray-200 to-brand-purple bg-clip-text text-transparent">
                  Detailed Founder Benefits
                </h3>
                <p className="text-gray-300 text-lg">Exclusive advantages for our earliest supporters</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">Premium Status</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>- Verified badge</li>
                    <li>- Priority support</li>
                    <li>- Early features</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">Enhanced Earnings</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>- 5X Earnings</li>
                    <li>- Exclusive bonuses</li>
                    <li>- Special events</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">Network Boost</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>- Increased visibility</li>
                    <li>- Priority content ranking</li>
                    <li>- Extended reach</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">Growth Tools</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>- Advanced analytics</li>
                    <li>- Audience insights</li>
                    <li>- Performance tracking</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">Exclusive Features</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>- Themes</li>
                    <li>- Advanced filters</li>
                    <li>- Premium integrations</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">Community Voice</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>- Direct team access</li>
                    <li>- Early input</li>
                    <li>- Beta opportunities</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={() => setShowDetails(false)}
                  className="inline-flex items-center px-6 py-2 text-gray-300 hover:text-white border border-gray-700 hover:bg-gray-800 rounded-full transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  <span>Back</span>
                </button>
                
                <Link
                  to="/signup"
                  className="inline-flex items-center px-6 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium group shadow-lg hover:shadow-xl"
                  onClick={onClose}
                >
                  <span>Join as a Founder</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}