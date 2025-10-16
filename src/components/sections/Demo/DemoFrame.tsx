interface DemoFrameProps {
  hasInteracted: boolean;
  interactionCount: number;
}

export function DemoFrame({ hasInteracted, interactionCount }: DemoFrameProps) {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className={`relative transform transition-transform duration-700 ${
        hasInteracted ? 'scale-[1.02]' : 'hover:scale-[1.02]'
      }`}>
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-brand-blue/40 via-brand-purple/40 to-brand-orange/40 rounded-lg blur-lg transition-opacity duration-500 ${
          hasInteracted ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'
        } ${interactionCount > 0 ? 'animate-pulse' : ''}`}></div>
        
        <div className="relative aspect-w-16 aspect-h-9 bg-gray-900/50 rounded-lg overflow-hidden ring-1 ring-gray-800"
             style={{
               boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3), 0 10px 20px -5px rgba(0,0,0,0.2)'
             }}>
          <iframe
            src="/local-demo.html"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>
      </div>
    </div>
  );
}