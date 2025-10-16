import { X } from 'lucide-react';
import { EarningsHeaderProps } from '../../../types';
import { useState, useEffect } from 'react';

export function EarningsHeader({ variant = 'section', className = '' }: EarningsHeaderProps) {
  const [showReferralInfo, setShowReferralInfo] = useState(false);
  const [showAdSpendInfo, setShowAdSpendInfo] = useState(false);
  
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

  if (variant === 'page') {
    return (
      <div className={`inline-block mb-6 ${className}`}>
        <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-4">
          EVERYONE IS AN AFFILIATE
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">
            GET PAID TO
          </span>
          <span className="block bg-gradient-to-r from-brand-orange via-white to-brand-purple bg-clip-text text-transparent">
            Invite Others
          </span>
          <span className="block text-white">
            to Flipit
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Every Flipit user is automatically an affiliate. <span className="text-brand-orange font-semibold">No approval process</span> — start earning immediately with your first invitation!
        </p>
      </div>
    );
  }
  
  return (
    <div className={`text-center mb-8 md:mb-12 ${className}`}>
      <div className="inline-block mb-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 leading-tight">
          <span className="block text-white">
            Invite. Earn. Simple.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mt-2 max-w-3xl mx-auto">
          You're already sharing—now get rewarded for it!
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-8 mt-16">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
          <div className="text-3xl font-bold text-brand-orange mb-1">$2</div>
          <div className="text-gray-400 text-sm">Per User</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
          <div className="text-3xl font-bold text-brand-purple mb-1">20%</div>
          <div className="text-gray-400 text-sm">Ad Revenue Share</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
          <div className="text-3xl font-bold text-brand-blue mb-1">FREE</div>
          <div className="text-gray-400 text-sm">Premium Services</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
          <div className="text-3xl font-bold text-green-500 mb-1">2 YRS</div>
          <div className="text-gray-400 text-sm">Revenue Duration</div>
        </div>
      </div>
      
      {/* Revenue Streams Section - Updated to match EarningsPage style */}
      <div className="bg-gradient-to-r from-brand-orange/10 to-brand-purple/10 rounded-3xl p-0.5 max-w-4xl mx-auto mb-8">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 relative overflow-hidden">
          <div className="flex justify-between mb-6 px-4">
            <div className="text-center flex-1 mr-4">
              <span className="text-xl font-bold text-brand-orange">When Friends Join</span>
            </div>
            <div className="text-center flex-1 ml-4">
              <span className="text-xl font-bold text-brand-purple">When They Advertise</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* When Friends Join */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/30 relative">
              <div className="mb-4">
                <div className="flex items-center justify-center">
                  <div className="text-gray-400 text-xl line-through opacity-70 mr-2">
                    <span className="text-white text-sm no-underline inline-block mr-1">up to:</span>
                    <span>$1</span>
                  </div>
                  <div className="text-brand-orange text-2xl font-bold">
                    $2<span className="text-lg">/user</span>
                  </div>
                </div>
                <p className="text-gray-300 mt-2 text-center">As they engage with Flipit.</p>
              </div>
              <button 
                className="absolute bottom-3 right-3 text-gray-400 hover:text-brand-orange text-sm font-medium transition-colors duration-200"
                onClick={() => setShowReferralInfo(true)}
              >
                Learn More
              </button>
            </div>
            
            {/* When They Advertise */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/30 relative">
              <div className="mb-4">
                <div className="flex items-center justify-center">
                  <div className="text-gray-400 text-xl line-through opacity-70 mr-2">
                    <span className="text-white text-sm no-underline inline-block mr-1">up to:</span>
                    <span>$2K</span>
                  </div>
                  <div className="text-brand-purple text-2xl font-bold">$10K</div>
                </div>
                <p className="text-gray-300 mt-2 text-center">20% of ads they purchase.</p>
              </div>
              <button 
                className="absolute bottom-3 right-3 text-gray-400 hover:text-brand-purple text-sm font-medium transition-colors duration-200"
                onClick={() => setShowAdSpendInfo(true)}
              >
                Learn More
              </button>
            </div>
          </div>
          
          {/* Get Free Services Box */}
          <div className="mt-8 bg-gray-800/50 rounded-2xl p-6 border border-gray-700/30">
            <h3 className="text-xl font-bold text-brand-blue mb-3">Get Free Premium Services</h3>
            <p className="text-gray-300 mb-4">
              Invite 3 friends who purchase a premium service,<br />
              and yours is free for as long as they remain subscribed.
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
              <h4 className="font-semibold text-white text-lg mb-3">How It Works:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>If your 3 referrals are paying, you get premium service free.</li>
                <li>If they qualify for free service by referring 3 of their own, you still qualify.</li>
                <li>Refer more than 3? Earn reserve credits that can be used for future service or other perks.</li>
              </ul>
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
                Earn up to $2 per user.
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <h4 className="font-semibold text-white text-xl mb-4">How It Works:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                  <li><span className="font-medium text-white">Share & Invite</span> – When someone joins Flipit through your link, they become your referral.</li>
                  <li><span className="font-medium text-white">Earn 50%</span> – Receive 50% of what they spend and from the ads they engage with.</li>
                  <li><span className="font-medium text-white">Cash Out Anytime</span> – Withdraw at $1 or wait until their activity earns you the full $2.</li>
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
            
            <h3 className="text-3xl font-bold text-white mb-6">Ad Revenue Share</h3>
            
            <div className="space-y-6 text-left">
              <p className="text-gray-300 text-xl">
                Earn up to $10K from your referrals' advertising.
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <h4 className="font-semibold text-white text-xl mb-4">How It Works:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                  <li><span className="font-medium text-white">20% Revenue Share</span> – Earn 20% of what your referrals spend on Flipit ads.</li>
                  <li><span className="font-medium text-white">Passive Income</span> – The more your referrals advertise, the more you earn.</li>
                  <li><span className="font-medium text-white">No Limit</span> – The sky's the limit on how much you can earn from each referral's ad spend.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
