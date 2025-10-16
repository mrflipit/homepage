import { Link } from 'react-router-dom';
import { Gift, CheckCircle, ArrowRight } from 'lucide-react';

export function PremiumServices() {
  return (
    <div className="bg-gradient-to-r from-brand-blue/10 to-transparent rounded-3xl p-0.5">
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800/50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        
        <div className="absolute top-0 right-0 bg-brand-orange text-white px-6 py-2 rounded-bl-2xl rounded-tr-xl font-bold text-lg tracking-wider shadow-lg z-10">
          REFER 3 GET FREE
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 relative">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <div className="bg-brand-blue/20 p-4 rounded-2xl mb-6">
              <Gift className="h-10 w-10 text-brand-blue" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center md:text-left">Free Premium Services</h3>
            <div className="text-4xl font-bold text-brand-blue mb-4 text-center md:text-left">Forever</div>
            <div className="hidden md:block mt-auto">
              <Link to="/signup" className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 font-medium">
                <span>Get started</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-gray-800/50 rounded-2xl p-6 mb-6 border border-gray-700/30">
              <p className="text-lg text-white">
                Invite just 3 paying friends and get all premium services completely FREE! If they stop, your built-up credits from additional referrals keep your services going.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/30">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  Premium Services Include:
                </h4>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Back of All Social Media Pages</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Paid Wall Content Access</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Advanced Advertising Tools</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>And More...</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/30 flex flex-col items-center justify-center text-center">
                <div className="text-5xl font-bold text-brand-orange mb-2">3</div>
                <div className="text-xl text-gray-300 mb-4">Friends</div>
                <div className="text-3xl font-bold text-brand-blue mb-2">=</div>
                <div className="text-2xl font-bold text-white">FREE FOREVER</div>
              </div>
            </div>
            
            <div className="md:hidden mt-6 text-center">
              <Link to="/signup" className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 font-medium">
                <span>Get started</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}