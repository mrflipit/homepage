import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { Users, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { CommentProps } from '../../types';

let firstCommentTyped = false;

export const Comment = memo(function Comment({ author, delay, children }: CommentProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const charIndexRef = useRef(0);
  const typingPausedRef = useRef(false);
  const isFirstComment = useRef(delay === 1000);
  const isSecondComment = useRef(delay === 2000);
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeText = () => {
      const comment = commentRef.current;
      if (!comment) return;
      
      const container = comment.closest('.comments-container');
      if (!container) return;

      const baseSize = Math.min(18, container.clientHeight * 0.045);
      comment.style.fontSize = `${baseSize}px`;
    };

    resizeText();
    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, []);

  const getRandomDelay = useCallback(() => {
    if (!isFirstComment.current && firstCommentTyped) {
      return 5;
    }
    const baseDelay = Math.random() * 42 + 18;
    if (Math.random() < 0.1) {
      return baseDelay + Math.random() * 420 + 180;
    }
    const char = children[charIndexRef.current];
    if (char === ' ') return baseDelay + Math.random() * 24;
    if ('.!?'.includes(char)) return baseDelay + Math.random() * 240 + 120;
    if (',;:'.includes(char)) return baseDelay + Math.random() * 120 + 60;
    const nextChar = children[charIndexRef.current + 1];
    if (
      (char === 't' && nextChar === 'h') ||
      (char === 'i' && nextChar === 'n') ||
      (char === 'a' && nextChar === 'n')
    ) {
      return baseDelay * 0.3;
    }
    return baseDelay;
  }, [children, isFirstComment]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeChar = () => {
      if (typingPausedRef.current) {
        timeout = setTimeout(typeChar, 100);
        return;
      }
      if (charIndexRef.current < children.length) {
        setDisplayText(children.slice(0, charIndexRef.current + 1));
        charIndexRef.current++;
        timeout = setTimeout(typeChar, getRandomDelay());
      } else {
        setIsTyping(false);
        if (isFirstComment.current) {
          firstCommentTyped = true;
        }
      }
    };

    const flipCard = document.querySelector('.flip-card-inner');
    if (!flipCard) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'style') {
          const style = (mutation.target as HTMLElement).style;
          if (style.animation && style.animation.includes('flip')) {
            setTimeout(() => {
              setIsVisible(true);
              
              if (isFirstComment.current) {
                // First comment appears instantly
                setDisplayText(children);
                setIsTyping(false);
                firstCommentTyped = true;
              } else if (isSecondComment.current) {
                // Second comment starts halfway typed
                const halfwayPoint = Math.floor(children.length / 2);
                setDisplayText(children.slice(0, halfwayPoint));
                charIndexRef.current = halfwayPoint;
                setIsTyping(true);
                setTimeout(typeChar, 500);
              } else {
                // Other comments type normally
                setIsTyping(true);
                typeChar();
              }
            }, delay);
          }
        }
      });
    });

    observer.observe(flipCard, { attributes: true });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [children, delay, getRandomDelay, isFirstComment, isSecondComment]);

  if (!isVisible) return null;

  return (
    <div 
      ref={commentRef}
      className="flex items-start space-x-2 animate-fade-in comment-container"
      role="article"
      aria-label={`Comment by ${author}`}
    >
      <div 
        className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/30 flex items-center justify-center ring-1 ring-brand-blue/20"
        style={{
          background: 'linear-gradient(135deg, rgba(75,124,194,0.3) 0%, rgba(75,124,194,0.1) 100%)',
          boxShadow: '0 2px 6px rgba(75,124,194,0.2)'
        }}
        aria-hidden="true"
      >
        <Users className="w-4 h-4 text-brand-blue drop-shadow-lg" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <h4 className="font-semibold text-gray-300 text-[0.9em]">{author}</h4>
          <span className="text-[0.8em] text-gray-400" aria-live="polite">
            {isTyping ? 'typing...' : 'just now'}
          </span>
        </div>
        <p className="text-white comment-text leading-snug" aria-live="polite">
          {displayText}
          {isTyping && <span className="animate-pulse">|</span>}
        </p>
        <div className="flex items-center space-x-4 mt-2" role="group" aria-label="Comment actions">
          <button className="flex items-center space-x-1 text-gray-400 hover:text-brand-orange transition-colors duration-200">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span className="text-[0.8em]">0</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-400 hover:text-brand-orange transition-colors duration-200">
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="text-[0.8em]">Reply</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-400 hover:text-brand-orange transition-colors duration-200">
            <Share2 className="w-3.5 h-3.5" />
            <span className="text-[0.8em]">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
});