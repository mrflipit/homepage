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
  const [thumbnails, setThumbnails] = useState<string[]>([]);

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

  useEffect(() => {
    let cancelled = false;
    async function loadThumbs() {
      const urls = await Promise.all(
        videos.map(async (v) => {
          try {
            const res = await fetch(`https://vimeo.com/api/v2/video/${v.id}.json`, { cache: 'no-store' });
            const data = await res.json();
            const item = Array.isArray(data) ? data[0] : data;
            return (
              item?.thumbnail_large ||
              item?.thumbnail_640 ||
              item?.thumbnail ||
              item?.thumbnail_small ||
              '/logo-light.svg'
            );
          } catch {
            return '/logo-light.svg';
          }
        })
      );
      if (!cancelled) setThumbnails(urls);
    }
    loadThumbs();
    return () => {
      cancelled = true;
    };
  }, [videos]);

  const activeVideo = videos[activeVideoIndex];

  return (
    <div ref={containerRef} className={`vimeo-video-container w-full max-w-full mx-auto ${className}`}>
      <div className="aspect-video md:aspect-[4/3] lg:aspect-[16/9] w-8/12 mx-auto rounded-2xl overflow-visible mb-6">
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
                src={thumbnails[index] || '/logo-light.svg'}
                alt={`Video ${index + 1} thumbnail`}
                className="w-full h-full object-cover transform transition-transform"
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.src = '/logo-light.svg';
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
