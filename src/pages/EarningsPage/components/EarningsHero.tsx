import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { EarningsHeader } from '../../../components/ui';

export function EarningsHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-orange/10 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <EarningsHeader variant="page" />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/signup"
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              <span>Start Inviting & Earning</span>
            </Link>
            
            <a
              href="#earnings-breakdown"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-lg font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              See Earning Potential
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="text-3xl font-bold text-brand-orange mb-1">$10</div>
              <div className="text-gray-400 text-sm">Per Referral</div>
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
        </div>
      </div>
    </section>
  );
}