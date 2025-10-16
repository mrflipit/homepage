import { ArrowRight } from 'lucide-react';

interface BeFirstCTAProps {
  onShowPopup: () => void;
}

export function BeFirstCTA({ onShowPopup }: BeFirstCTAProps) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-xl text-gray-300 mb-6">Be among the first - shape the Back of the Internet.</p>
      <button 
        onClick={onShowPopup}
        className="inline-flex items-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-lg group cursor-pointer"
      >
        <span>Founder Benefits</span>
        <ArrowRight className="h-5 w-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}