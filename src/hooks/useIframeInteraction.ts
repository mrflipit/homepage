import { useState, useEffect } from 'react';

interface IframeInteraction {
  type: string;
  interaction: string;
  firstInteraction: boolean;
}

export function useIframeInteraction() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type !== 'flipit-interaction') return;
      
      const interaction = event.data as IframeInteraction;
      if (interaction.firstInteraction) {
        setHasInteracted(true);
      }
      setInteractionCount(prev => prev + 1);
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return {
    hasInteracted,
    interactionCount
  };
}