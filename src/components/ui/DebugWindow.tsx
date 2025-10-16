import { useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

interface DebugMessage {
  timestamp: number;
  type: string;
  interaction: string;
  firstInteraction: boolean;
}

interface DebugWindowProps {
  messages: DebugMessage[];
}

export function DebugWindow({ messages }: DebugWindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 border-t border-gray-800 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-mono text-gray-400">Debug Console</span>
          </div>
          <div className="text-xs text-gray-500">
            {messages.length} events captured
          </div>
        </div>
        <div 
          ref={containerRef}
          className="h-32 overflow-y-auto font-mono text-sm py-2 space-y-1"
        >
          {messages.map((msg, index) => (
            <div 
              key={index}
              className="flex items-start space-x-2 hover:bg-gray-800/50 p-1 rounded"
            >
              <span className="text-gray-500 min-w-[100px]">
                {new Date(msg.timestamp).toISOString().split('T')[1].split('.')[0]}
              </span>
              <span className={`min-w-[80px] ${
                msg.firstInteraction ? 'text-brand-orange' : 'text-brand-blue'
              }`}>
                {msg.interaction}
              </span>
              <span className="text-gray-400">
                {msg.firstInteraction ? '(First Interaction)' : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}