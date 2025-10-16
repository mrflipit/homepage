import { Eclipse as Flip } from 'lucide-react';

interface DemoHeaderProps {
  showDownload: boolean;
}

export function DemoHeader({ showDownload }: DemoHeaderProps) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="inline-block">
        <h2 className="text-7xl font-bold mb-6 relative">
          <span className="absolute -inset-2 bg-gradient-to-r from-brand-orange/20 via-white/5 to-brand-purple/20 blur-xl"></span>
          <span className="relative bg-gradient-to-r from-brand-orange via-white to-brand-purple bg-clip-text text-transparent">
            Try Flip this Page
          </span>
        </h2>
      </div>
      <div className={`transform transition-all duration-700 ${showDownload ? 'scale-105' : ''}`}>
        <p className="text-2xl text-gray-200">
          {showDownload ? (
            <span className="inline-flex items-center animate-fade-in">
              <a 
                href="https://chromewebstore.google.com/detail/flipit/aeclfjapikjpkdajbaolonnceecpghce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full transition-colors mx-2 transform hover:scale-105 duration-200"
              >
                <span>Click</span>
              </a> 
              to add the curl to all webpages!
            </span>
          ) : (
            "Pull on the curl to flip"
          )}
        </p>
      </div>
    </div>
  );
}