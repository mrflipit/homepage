import { Link } from 'react-router-dom';
import { BarChart3, DollarSign, ArrowRight } from 'lucide-react';

export function AdRevenue() {
  return (
    <div className="bg-gradient-to-r from-brand-purple/10 to-transparent rounded-3xl p-0.5">
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="absolute -top-4 right-8 bg-brand-orange text-white px-4 py-1 rounded-full font-bold text-sm tracking-wider shadow-lg z-10">
          MASSIVE POTENTIAL
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 relative">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <div className="bg-brand-purple/20 p-4 rounded-2xl mb-6">
              <BarChart3 className="h-10 w-10 text-brand-purple" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center md:text-left">Ad Revenue Share</h3>
            <div className="text-4xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent mb-4 text-center md:text-left">Up to $100,000</div>
            <div className="hidden md:block mt-auto">
              <Link to="/signup" className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-gray-800/50 rounded-2xl p-6 mb-6 border border-gray-700/30">
              <div className="flex items-start space-x-4">
                <DollarSign className="h-8 w-8 text-brand-purple flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">20% of All Ad Revenue</h3>
                  <p className="text-lg text-gray-300">
                    When your referrals see ads or spend on advertising, you earn <span className="text-brand-orange font-semibold">20% of the revenue</span> up to $100,000.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 mb-6">
              <h4 className="text-lg font-semibold text-white mb-3 text-center">Example: Your Earning Potential</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <p className="text-gray-400 text-sm mb-1">Referral spends</p>
                  <p className="text-xl font-bold text-white">$1,000</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-lg font-bold text-brand-orange">You earn</div>
                </div>
                <div className="bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-lg p-3">
                  <p className="text-gray-300 text-sm mb-1">20% commission</p>
                  <p className="text-2xl font-bold text-brand-orange">$200</p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-gray-300 text-sm italic">
              <p>The more they advertise, the more you earn! There's a $100K cap per company, so the key to maximizing your earnings is signing up as many as possible!</p>
            </div>
            
            <div className="md:hidden mt-6 text-center">
              <Link to="/signup" className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}