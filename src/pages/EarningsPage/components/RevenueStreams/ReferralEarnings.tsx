import { Link } from 'react-router-dom';
import { Users, Coins, TrendingUp, ArrowRight } from 'lucide-react';

export function ReferralEarnings() {
  return (
    <div className="bg-gradient-to-r from-brand-orange/10 to-transparent rounded-3xl p-0.5">
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex flex-col md:flex-row gap-8 relative">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <div className="bg-brand-orange/20 p-4 rounded-2xl mb-6">
              <Users className="h-10 w-10 text-brand-orange" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center md:text-left">Referral Earnings</h3>
            <div className="text-4xl font-bold text-brand-orange mb-4 text-center md:text-left">Up to $10 per user</div>
            <div className="hidden md:block mt-auto">
              <Link to="/signup" className="inline-flex items-center text-brand-orange hover:text-brand-orange/80 font-medium">
                <span>Start referring</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-gray-800/50 rounded-2xl p-6 mb-6 border border-gray-700/30">
              <p className="text-lg text-white">
                Make up to $10 per referral simply by inviting people to Flipit. Earn 50% of the ad revenue they generate and 50% of any purchases they make.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/30 transform transition-transform hover:scale-[1.02]">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Coins className="h-5 w-5 mr-2 text-brand-orange" />
                  Direct Earnings
                </h4>
                <p className="text-gray-300">Your referrals are connected to you for life! Every action they take generates revenue for you.</p>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/30 transform transition-transform hover:scale-[1.02]">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-brand-orange" />
                  Network Effect
                </h4>
                <p className="text-gray-300">When your referrals invite others, you earn 50% of what they make too! Your network keeps growing.</p>
              </div>
            </div>
            
            <div className="md:hidden mt-6 text-center">
              <Link to="/signup" className="inline-flex items-center text-brand-orange hover:text-brand-orange/80 font-medium">
                <span>Start referring</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}