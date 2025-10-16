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
  const [lastClickedGroupPos, setLastClickedGroupPos] = useState<number | null>(null);

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

  // Build the indices for the right-side group of thumbnails.
  // Goal: when a user clicks a group thumb, that video becomes active and
  // the original MUST WATCH (index 0) takes that exact slot so users can go back.
  const groupIndices: number[] = (() => {
    if (videos.length <= 1) return [];
    const baseGroup = videos.map((_, i) => i).slice(1); // [1..n-1]
    // If the active is the first (MUST WATCH), just show the default group order.
    if (activeVideoIndex === 0) return baseGroup;
    // Otherwise, remove the active index from the group and insert 0 at the last clicked position.
    const rest = baseGroup.filter(i => i !== activeVideoIndex && i !== 0);
    const insertPos = lastClickedGroupPos ?? 0;
    const clampedPos = Math.max(0, Math.min(insertPos, rest.length));
    rest.splice(clampedPos, 0, 0); // insert MUST WATCH index where the user clicked
    return rest;
  })();

  return (
    <div ref={containerRef} className={`vimeo-video-container w-full max-w-6xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Main video */}
        <div className="lg:col-span-8">
          <div className="aspect-video md:aspect-[4/3] lg:aspect-[16/9] w-full rounded-2xl overflow-hidden">
            {shouldRenderPlayer ? (
              <iframe 
                src={`https://player.vimeo.com/video/${activeVideo.id}?autoplay=${shouldAutoplay ? 1 : 0}&muted=${shouldAutoplay ? 0 : 0}&playsinline=1`} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="fullscreen; picture-in-picture; encrypted-media" 
                allowFullScreen
                title="Flipit Founder Video"
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-black/60 rounded-2xl flex items-center justify-center">
                <span className="text-gray-300">Scroll to load video…</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Fun videos group (thumbnails for videos 2..n) */}
        {videos.length > 1 && (
          <div className="lg:col-span-4 w-full">
            <div className="border border-gray-700/60 rounded-2xl p-3 md:p-4">
              <div className="flex flex-row lg:flex-col gap-3 md:gap-4 justify-center">
                {groupIndices.map((vidIndex, i) => {
                  return (
                    <button
                      key={`${videos[vidIndex].id}-${i}`}
                      onClick={() => {
                        // Remember which slot was clicked so we can place MUST WATCH there
                        setLastClickedGroupPos(i);
                        setActiveVideoIndex(vidIndex);
                        setShouldAutoplay(true);
                      }}
                      className={`
                        w-24 md:w-36 lg:w-full h-16 md:h-20 lg:h-24 rounded-xl overflow-hidden
                        ${vidIndex === activeVideoIndex ? 'border-4 border-blue-500 scale-105' : 'opacity-80 hover:opacity-100 hover:scale-105'}
                        transition-all duration-300 ease-in-out
                      `}
                    >
                      <img
                        src={thumbnails[vidIndex] || '/logo-light.svg'}
                        alt={`Video ${vidIndex + 1} thumbnail`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const imgElement = e.target as HTMLImageElement;
                          imgElement.src = '/logo-light.svg';
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-2 text-center text-xs md:text-sm tracking-wide text-gray-300">FUN VIDEOS</div>
          </div>
        )}
      </div>
    </div>
  );
}
