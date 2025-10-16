import React, { useState, useEffect, useRef } from 'react';

interface VideoInfo {
  id: string;
  thumbnailUrl?: string;
}

interface BeFirstVideoProps {
  videos: VideoInfo[];
  defaultVideoIndex?: number;
  className?: string;
}

export function BeFirstVideo({ 
  videos, 
  defaultVideoIndex = 0, 
  className = '' 
}: BeFirstVideoProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(defaultVideoIndex);
  const [shouldRenderPlayer, setShouldRenderPlayer] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  useEffect(() => {
    // Defer rendering the iframe until the container is in view
    if (!containerRef.current) return;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShouldRenderPlayer(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const thumbnails = [
    "https://i.vimeocdn.com/video/1654124096-a0f6a20bd09090cfb62c102a240b33ec921f78da30aa7ae108729f8cbfff8d16-d_640",
    "https://i.vimeocdn.com/video/1773010553-7cb34d0bc8b99870b51df1c7bfbb7d5c5ad9294fb3237b5c44318f152b4921a8-d_640",
    "https://i.vimeocdn.com/video/1814140145-a25daf654533147180ff5cf6d417be3633b95e6aa7687bbc9a14d9b0b364e162-d_640"
  ];

  const activeVideo = videos[activeVideoIndex];

  return (
    <div ref={containerRef} className={`vimeo-video-container w-full max-w-full mx-auto ${className}`}>
      <div className={`aspect-video md:aspect-[4/3] lg:aspect-[16/9] w-8/12 mx-auto rounded-2xl overflow-visible mb-6 ${activeVideoIndex === defaultVideoIndex ? '' : 'custom-shadow'}`}>
        {shouldRenderPlayer ? (
          <iframe 
            src={`https://player.vimeo.com/video/${activeVideo.id}?autoplay=${shouldAutoplay ? 1 : 0}&muted=${shouldAutoplay ? 0 : 0}&playsinline=1`} 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allow="fullscreen; picture-in-picture; encrypted-media" 
            allowFullScreen
            title="Flipit Founder Video"
            className="w-full h-full transform transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-black/60 rounded-2xl flex items-center justify-center">
            <span className="text-gray-300">Scroll to load video…</span>
          </div>
        )}
      </div>
      
      {videos.length > 1 && (
        <div className="video-thumbnails flex justify-center space-x-4 md:space-x-6 lg:space-x-8">
          {videos.map((video, index) => (
            <button 
              key={video.id}
              onClick={() => {
                setActiveVideoIndex(index);
                setShouldAutoplay(true);
              }}
              className={`
                w-24 md:w-32 lg:w-40 h-16 md:h-20 lg:h-24 rounded-xl overflow-hidden 
                ${index === activeVideoIndex 
                  ? 'border-4 border-blue-500 scale-110 shadow-lg' 
                  : 'opacity-60 hover:opacity-100 hover:scale-105'}
                transition-all duration-300 ease-in-out
              `}
            >
              <img 
                src={thumbnails[index] || 'placeholder-thumbnail-url'}
                alt={`Video ${index + 1} thumbnail`}
                className="w-full h-full object-cover transform transition-transform"
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.src = 'placeholder-thumbnail-url';
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
