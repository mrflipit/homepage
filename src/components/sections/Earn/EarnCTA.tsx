import { Link } from 'react-router-dom';

export function EarnCTA() {
  return (
    <div className="mt-16 mb-8">
      <div className="bg-gradient-to-r from-brand-orange/20 via-brand-purple/20 to-brand-blue/20 rounded-3xl p-0.5">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800/50 relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">Start Your Empire Now</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link 
              to="/signup"
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/20 w-full sm:w-auto text-center"
            >
              Start Earning
            </Link>
            
            <Link 
              to="/extension"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-xl font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600 w-full sm:w-auto text-center"
            >
              Install Extension
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}