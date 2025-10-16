import { Link } from 'react-router-dom';
import { UserPlus, Share2 } from 'lucide-react';

export function EarningsCTA() {
  return (
    <section className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-brand-orange/30 via-brand-purple/30 to-brand-blue/30 rounded-3xl p-1">
            <div className="bg-gray-900/90 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Start Building Your Empire Today
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <Link
                  to="/signup"
                  className="w-full sm:w-auto px-8 py-5 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <UserPlus className="w-6 h-6 mr-3" />
                  <span>Start Inviting & Earning</span>
                </Link>
                
                <Link
                  to="/extension"
                  className="w-full sm:w-auto px-8 py-5 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-xl font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600 flex items-center justify-center"
                >
                  <Share2 className="w-6 h-6 mr-3" />
                  <span>Install Extension</span>
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-brand-orange animate-pulse">
                <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                <p className="text-lg font-medium">Limited spots available</p>
                <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}