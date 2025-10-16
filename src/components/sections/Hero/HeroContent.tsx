import { Info } from 'lucide-react';

interface HeroContentProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

export function HeroContent({ showPopup, setShowPopup }: HeroContentProps) {
  return (
    <div className="w-full lg:w-[40%] flex justify-center lg:justify-end order-2 lg:order-1 mt-8 lg:mt-0 mb-8 lg:mb-0">
      <div className="max-w-[462px] w-full lg:pr-4">
        <h1 className="font-bold tracking-tight text-center lg:text-right">
          <div className="text-balance" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
            <span className="block text-white pb-2">
              Comments
            </span>
            <span className="block text-brand-blue pb-2" style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)' }}>
              and chat are
            </span>
            <span className="block relative" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <span className="absolute -inset-2 bg-gradient-to-r from-brand-orange/20 via-white/5 to-brand-purple/20 blur-xl"></span>
              <span className="relative bg-gradient-to-r from-brand-orange via-white to-brand-purple bg-clip-text text-transparent whitespace-nowrap">
                now on the Back!
              </span>
            </span>
          </div>
          <div className="text-gray-400 text-base sm:text-lg mt-6 font-light tracking-wide space-y-1">
            <p className="text-white/90 text-xl italic">
              Every webpage has a back
            </p>
            <p className="text-brand-orange text-xl italic">
              with real conversations
            </p>
            <p className="text-transparent text-[0.5em] italic">
              &nbsp;
            </p>
            <div className="mt-12 flex justify-center lg:justify-end">
              <button 
                onClick={() => setShowPopup(true)}
                className="flex items-center px-5 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-brand-blue hover:text-brand-orange rounded-full text-sm transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 group shadow-md hover:shadow-lg transform hover:scale-105 animate-pulse-subtle"
              >
                <Info className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Learn More</span>
              </button>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}