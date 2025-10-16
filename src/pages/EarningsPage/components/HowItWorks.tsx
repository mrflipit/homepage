import { MessageCircle, Users, DollarSign } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">
                Effortless Earning
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your affiliate code is automatically embedded in everything you share — no manual work required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 text-center border border-gray-800/50 transform transition-transform hover:scale-[1.03]">
              <div className="bg-gradient-to-br from-brand-orange/20 to-transparent p-5 rounded-full inline-block mb-6">
                <MessageCircle className="h-12 w-12 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Share & Engage</h3>
              <p className="text-gray-300">Post comments, start discussions, and share interesting content with your network</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-2xl p-8 text-center border border-gray-800/50 transform transition-transform hover:scale-[1.03]">
              <div className="bg-gradient-to-br from-brand-purple/20 to-transparent p-5 rounded-full inline-block mb-6">
                <Users className="h-12 w-12 text-brand-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Grow Your Network</h3>
              <p className="text-gray-300">Your referrals are connected to you forever, creating a lasting income stream</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-2xl p-8 text-center border border-gray-800/50 transform transition-transform hover:scale-[1.03]">
              <div className="bg-gradient-to-br from-brand-blue/20 to-transparent p-5 rounded-full inline-block mb-6">
                <DollarSign className="h-12 w-12 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collect Rewards</h3>
              <p className="text-gray-300">Cash out your earnings anytime - no minimum threshold required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}