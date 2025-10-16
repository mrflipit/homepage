import { useState, useEffect, useMemo } from 'react';
import { AppEnvironment } from '../types';

export function useAppEnvironment(): AppEnvironment {
  const [isIframe, setIsIframe] = useState(false);

  // Environment checks
  const isBrowser = typeof window !== 'undefined';
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isProduction = process.env.NODE_ENV === 'production';

  // Check if we're in an iframe
  useEffect(() => {
    try {
      setIsIframe(window.self !== window.top);
    } catch (_) {
      setIsIframe(true);
    }
  }, []);

  // Check if we're in a browser extension
  const isExtension = useMemo(() => {
    if (!isBrowser) return false;
    return !!(
      (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) ||
      (typeof browser !== 'undefined' && browser.runtime && browser.runtime.id)
    );
  }, [isBrowser]);

  // For local development, always show the download button
  const showDownloadButton = useMemo(() => {
    if (isDevelopment) return true;
    return !isIframe && !isExtension;
  }, [isDevelopment, isIframe, isExtension]);

  return {
    isIframe,
    isExtension,
    isBrowser,
    isDevelopment,
    isProduction,
    showDownloadButton,
  };
}