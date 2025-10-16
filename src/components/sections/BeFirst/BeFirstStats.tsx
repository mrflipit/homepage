import { StatCard } from '../../ui/StatCard';
import { Users, Globe, MessageSquare, Sparkles } from 'lucide-react';

export function BeFirstStats() {
  return (
    <div className="grid md:grid-cols-4 gap-8 mb-10 md:mb-16">
      <div className="transform hover:scale-105 transition-transform duration-300">
        <StatCard 
          number="Under 1K" 
          label="Users" 
          gradient="from-[#4B7CC2] to-[#2E578F]"
          icon={<Users className="w-8 h-8 text-[#4B7CC2]" />}
        />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-300">
        <StatCard 
          number="Under 2K" 
          label="Pages Flipped" 
          gradient="from-[#8341D5] to-[#5B0FB2]"
          icon={<Globe className="w-8 h-8 text-[#8341D5]" />}
        />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-300">
        <StatCard 
          number="Under 1K" 
          label="Daily Comments" 
          gradient="from-[#FFA857] to-[#F8993E]"
          icon={<MessageSquare className="w-8 h-8 text-[#FFA857]" />}
        />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-300">
        <StatCard 
          number="Under 100" 
          label="Sites with Curls Installed" 
          gradient="from-[#4B7CC2] to-[#8341D5]"
          icon={<Sparkles className="w-8 h-8 text-[#4B7CC2]" />}
        />
      </div>
    </div>
  );
}