import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ViewportContextType {
  width: number;
  height: number;
  aspectRatio: number;
  isTallViewport: boolean;
  isUltraTallViewport: boolean;
  scaleFactor: number;
}

const defaultContext: ViewportContextType = {
  width: typeof window !== 'undefined' ? window.innerWidth : 1920,
  height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  aspectRatio: 16/9,
  isTallViewport: false,
  isUltraTallViewport: false,
  scaleFactor: 1
};

const ViewportContext = createContext<ViewportContextType>(defaultContext);

export const useViewportContext = () => useContext(ViewportContext);

interface ViewportProviderProps {
  children: ReactNode;
}

export const ViewportProvider = ({ children }: ViewportProviderProps) => {
  const [dimensions, setDimensions] = useState<ViewportContextType>({
    ...defaultContext,
    aspectRatio: defaultContext.width / defaultContext.height
  });

  useEffect(() => {
    // Remove any existing debug elements
    const debugElements = document.querySelectorAll('[id*="debug"], [class*="debug"]');
    debugElements.forEach(el => el.remove());

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      const isTallViewport = aspectRatio < 2/3;
      const isUltraTallViewport = aspectRatio < 1/2;
      const scaleFactor = isUltraTallViewport ? Math.min(1.5, height / 700) : 
                         isTallViewport ? Math.min(1.3, height / 900) : 1;

      setDimensions({
        width,
        height,
        aspectRatio,
        isTallViewport,
        isUltraTallViewport,
        scaleFactor
      });
    };

    // Initial update
    updateDimensions();

    // Set up resize observer
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(document.documentElement);

    return () => {
      resizeObserver.disconnect();
      const debugElements = document.querySelectorAll('[id*="debug"], [class*="debug"]');
      debugElements.forEach(el => el.remove());
    };
  }, []);
  
  return (
    <ViewportContext.Provider value={dimensions}>
      {children}
    </ViewportContext.Provider>
  );
};
