import { FeatureCard } from '../../ui/FeatureCard';
import { Eye, MessageCircle, Users, Banknote } from 'lucide-react';

export function ExposeFeatures() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/5 via-brand-purple/5 to-brand-orange/5 blur-xl"></div>
      
      <div className="fade-in-up delay-100 relative">
        <FeatureCard 
          icon={<Eye className="w-10 sm:w-12 h-10 sm:h-12 stroke-1" />}
          title="Uncover"
          description="Real knowledge, from real people."
          gradient="text-blue"
        />
      </div>
      <div className="fade-in-up delay-200 relative">
        <FeatureCard 
          icon={<MessageCircle className="w-10 sm:w-12 h-10 sm:h-12 stroke-1" />}
          title="Share"
          description="Your voice shapes the conversation."
          gradient="text-purple"
        />
      </div>
      <div className="fade-in-up delay-300 relative">
        <FeatureCard 
          icon={<Users className="w-10 sm:w-12 h-10 sm:h-12 stroke-1" />}
          title="Now"
          description="Build your Credibility early."
          gradient="text-pink"
        />
      </div>
      <div className="fade-in-up delay-400 relative">
        <FeatureCard 
          icon={<Banknote className="w-10 sm:w-12 h-10 sm:h-12 stroke-1" />}
          title="Earn"
          description="Your voice is valuable - get paid for it."
          gradient="text-red"
        />
      </div>
    </div>
  );
}