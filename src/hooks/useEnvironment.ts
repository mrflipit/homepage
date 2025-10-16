import { useState, useEffect } from 'react';

export function useEnvironment() {
  const [isExtension, setIsExtension] = useState(false);

  useEffect(() => {
    // Check if we're running in a Chrome/Firefox extension
    const isExtensionEnv = !!(
      (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) ||
      (typeof browser !== 'undefined' && browser.runtime && browser.runtime.id)
    );
    
    setIsExtension(isExtensionEnv);
  }, []);

  return { isExtension };
}