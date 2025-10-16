import { useState, useEffect } from 'react';

export function useIframe() {
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    try {
      setIsIframe(window.self !== window.top);
    } catch (_) {
      setIsIframe(true);
    }
  }, []);

  return isIframe;
}