import { useState, useRef, useEffect } from 'react';
import { Info, X } from 'lucide-react';

export function EarnHeader() {
  const [showReferralInfo, setShowReferralInfo] = useState(false);
  const [showAdSpendInfo, setShowAdSpendInfo] = useState(false);
  const referralButtonRef = useRef<HTMLDivElement>(null);
  const adSpendButtonRef = useRef<HTMLDivElement>(null);
  
  // Prevent body scrolling when popup is open
  useEffect(() => {
    if (showReferralInfo || showAdSpendInfo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [showReferralInfo, showAdSpendInfo]);
  
  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="py-4 mb-6">
        <span className="inline-block py-2 px-4 bg-brand-orange/20 text-brand-orange text-lg font-semibold rounded-full">
          Limited-Time Founder Opportunity
        </span>
      </div>
      
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Let's fill the Back with Users
      </h3>
      
      <div className="inline-block">
        <h2 className="text-7xl font-bold mb-6 relative">
          <span className="absolute -inset-2 bg-gradient-to-r from-brand-orange/20 via-white/5 to-brand-purple/20 blur-xl"></span>
          <span className="relative bg-gradient-to-r from-brand-orange via-white to-brand-purple bg-clip-text text-transparent">
            Founders Earn 5X
          </span>
        </h2>
      </div>
      
      <div className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        <p>You do not need to explain Flipit!<br />Simply share comments... It is just that easy!</p>
      </div>
      
      <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Referral Earnings Card */}
          <div className="bg-gray-900/50 rounded-xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-gray-400 text-5xl line-through opacity-70 mr-3">$2</span>
                  <span className="text-white text-5xl font-bold">$10</span>
                </div>
                <div className="text-gray-300 mt-2">
                  <p>per activated</p>
                  <p>user recruited</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center relative">
              <span className="text-xl font-bold text-white">Referral Earnings</span>
              <div 
                ref={referralButtonRef}
                className="ml-2 relative cursor-pointer"
                onClick={() => setShowReferralInfo(!showReferralInfo)}
              >
                <div className="absolute -inset-1 bg-brand-orange/30 rounded-full blur-sm opacity-75 animate-pulse-glow"></div>
                <Info className="w-6 h-6 text-brand-orange relative z-10" />
              </div>
            </div>
          </div>
          
          {/* Ad Spend Earnings Card */}
          <div className="bg-gray-900/50 rounded-xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-gray-400 text-5xl line-through opacity-70 mr-3">$20K</span>
                  <span className="text-white text-5xl font-bold">$100K</span>
                </div>
                <p className="text-gray-300 mt-2">max earnings</p>
                <p className="text-gray-400 text-sm">From Ad Spend</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center relative">
              <span className="text-xl font-bold text-white">Earnings from Ad Spend</span>
              <div 
                ref={adSpendButtonRef}
                className="ml-2 relative cursor-pointer"
                onClick={() => setShowAdSpendInfo(!showAdSpendInfo)}
              >
                <div className="absolute -inset-1 bg-brand-orange/30 rounded-full blur-sm opacity-75 animate-pulse-glow"></div>
                <Info className="w-6 h-6 text-brand-orange relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Info Popup - Fixed position with high z-index */}
      {showReferralInfo && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center animate-fadeIn"
          onClick={() => setShowReferralInfo(false)}
          style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}}
        >
          <div 
            className="w-full max-w-xl bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800/50"
              onClick={() => setShowReferralInfo(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-6">Referral Earnings</h3>
            
            <div className="space-y-6 text-left">
              <p className="text-gray-300 text-xl">
                Earn up to $10 per referral.
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <h4 className="font-semibold text-white text-xl mb-4">How It Works:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                  <li><span className="font-medium text-white">Share & Invite</span> – When someone joins Flipit through your link, they become your referral.</li>
                  <li><span className="font-medium text-white">Earn 50%</span> – Receive 50% of what they spend and from the ads they engage with.</li>
                  <li><span className="font-medium text-white">Cash Out Anytime</span> – Withdraw at $1 or wait until their activity earns you the full $10.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Ad Spend Info Popup - Fixed position with high z-index */}
      {showAdSpendInfo && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center animate-fadeIn"
          onClick={() => setShowAdSpendInfo(false)}
          style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}}
        >
          <div 
            className="w-full max-w-xl bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800/50"
              onClick={() => setShowAdSpendInfo(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-6">Earnings from Ad Spend</h3>
            
            <div className="space-y-6 text-left">
              <p className="text-gray-300 text-xl">
                When your referrals or their businesses buy ad space.
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <h4 className="font-semibold text-white text-xl mb-4">How It Works:</h4>
                <p className="text-gray-300 text-lg mb-3">
                  Earn 20% of their ad spend for 2 years after their first ad purchase.
                </p>
                <p className="text-gray-300 text-lg">
                  Earnings are capped at $100K per referral, but there's no limit to how many you can invite.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}