import { Info } from 'lucide-react';

interface ExposeHeaderProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

export function ExposeHeader({ showPopup, setShowPopup }: ExposeHeaderProps) {
  return (
    <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 px-4">
      <div className="mb-10">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-10 relative">
          <span className="absolute -inset-2 bg-gradient-to-r from-brand-orange/20 via-white/5 to-brand-purple/20 blur-xl opacity-75"></span>
          <span className="relative bg-gradient-to-r from-brand-orange via-white to-brand-purple bg-clip-text text-transparent">
            If Truth is on the Back...
          </span>
        </h2>
        
        <div className="mt-10 mb-12 space-y-6">
          <p className="text-2xl sm:text-3xl text-gray-300">
            Will there be controversy?
          </p>
          <p className="text-4xl sm:text-5xl font-bold text-brand-orange animate-pulse">
            Oh... F★☆K Ya!
          </p>
          <p className="text-xl sm:text-2xl text-gray-400 italic mt-6">
            "but... from the noise and ashes will come truth" -MH
          </p>
          
          <div className="mt-6 flex justify-center">
            <button 
              onClick={() => setShowPopup(true)}
              className="flex items-center px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 text-brand-orange hover:text-white rounded-full text-base transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 group shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Info className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Why controversy?</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}