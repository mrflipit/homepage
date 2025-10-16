/**
 * Utility functions for viewport calculations and dynamic scaling
 */

/**
 * Updates CSS custom properties related to viewport dimensions
 * This ensures our scaling system works even if CSS media queries aren't fully supported
 */
export function updateViewportProperties(): void {
  const root = document.documentElement;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspectRatio = width / height;
  
  // Update viewport metrics
  root.style.setProperty('--vw', '1vw');
  root.style.setProperty('--vh', '1vh');
  root.style.setProperty('--vmin', '1vmin');
  root.style.setProperty('--vmax', '1vmax');
  root.style.setProperty('--aspect-ratio', String(aspectRatio));
  
  // Set the current scale based on aspect ratio
  const scale = aspectRatio < 0.5 ? 'var(--ultra-tall-scale)' :
                aspectRatio < 0.667 ? 'var(--tall-scale)' :
                'var(--standard-scale)';
  root.style.setProperty('--current-scale', scale);
}

/**
 * Initialize viewport properties and set up resize listener
 */
export function initViewportHandler(): void {
  // Initial update
  updateViewportProperties();
  
  // Throttled resize handler
  let resizeTimeout: number | null = null;
  
  window.addEventListener('resize', () => {
    if (resizeTimeout) {
      window.cancelAnimationFrame(resizeTimeout);
    }
    
    resizeTimeout = window.requestAnimationFrame(() => {
      updateViewportProperties();
    });
  });
}
