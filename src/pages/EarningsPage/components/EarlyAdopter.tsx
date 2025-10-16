import { Rocket, Star, Zap, Trophy } from 'lucide-react';

export function EarlyAdopter() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-brand-orange/20 via-brand-purple/20 to-brand-blue/20 rounded-3xl p-0.5">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-brand-purple/5 to-brand-blue/5"></div>
              
              <div className="text-center mb-12">
                <Rocket className="h-16 w-16 text-brand-orange mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Early Adopter Advantage
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join now as a founder and receive exclusive benefits that won't be available later.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30 transform transition-transform hover:scale-[1.02]">
                  <div className="bg-brand-orange/10 p-3 rounded-full inline-block mb-4">
                    <Star className="h-6 w-6 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Premium Status</h3>
                  <p className="text-gray-300">Verified founder badge, priority support, and early access to new features</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30 transform transition-transform hover:scale-[1.02]">
                  <div className="bg-brand-purple/10 p-3 rounded-full inline-block mb-4">
                    <Zap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Higher Rates</h3>
                  <p className="text-gray-300">Founders receive enhanced commission rates that will decrease for later adopters</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30 transform transition-transform hover:scale-[1.02]">
                  <div className="bg-brand-blue/10 p-3 rounded-full inline-block mb-4">
                    <Trophy className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Exclusive Rewards</h3>
                  <p className="text-gray-300">Special bonuses, events, and opportunities only available to founding members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}