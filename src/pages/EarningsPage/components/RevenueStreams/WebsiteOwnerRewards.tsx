import { Link } from 'react-router-dom';
import { Globe, Target, ArrowRight } from 'lucide-react';

export function WebsiteOwnerRewards() {
  return (
    <div className="bg-gradient-to-r from-green-500/10 to-transparent rounded-3xl p-0.5">
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800/50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="flex flex-col md:flex-row gap-8 relative">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <div className="bg-green-500/20 p-4 rounded-2xl mb-6">
              <Globe className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center md:text-left">Website Owner Rewards</h3>
            <div className="text-4xl font-bold text-green-500 mb-4 text-center md:text-left">20% for 2 Years</div>
            <div className="hidden md:block mt-auto">
              <Link to="/signup" className="inline-flex items-center text-green-500 hover:text-green-500/80 font-medium">
                <span>Start earning</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-gray-800/50 rounded-2xl p-6 mb-6 border border-gray-700/30">
              <p className="text-lg text-white">
                Refer website owners and get 20% of FlipIt's earnings from their site for TWO FULL YEARS! This can add up to substantial passive income.
              </p>
            </div>
            
            <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/30">
              <div className="flex items-center space-x-3 mb-3">
                <Target className="h-6 w-6 text-green-500" />
                <h4 className="text-lg font-semibold text-white">Second-Level Earnings</h4>
              </div>
              <p className="text-gray-300">
                When your referrals bring in website owners, you still earn 10% of the revenue from those sites! Your network creates multiple layers of income.
              </p>
            </div>
            
            <div className="md:hidden mt-6 text-center">
              <Link to="/signup" className="inline-flex items-center text-green-500 hover:text-green-500/80 font-medium">
                <span>Start earning</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}