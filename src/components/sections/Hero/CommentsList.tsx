import { Comment } from '../../ui/Comment';

export function CommentsList() {
  return (
    <div className="comments-container">
      <div className="comments-scroll">
        <div className="space-y-2 p-3">
          <Comment author="Sarah Chen" delay={1000}>
            This changes everything. The truth is out, and some people won't like it.
          </Comment>
          <Comment author="Alex Rivera" delay={2000}>
            No more fake reviews, no more censored conversations. Just raw, unfiltered talk.
          </Comment>
          <Comment author="Maria Kowalski" delay={3000}>
            This flips the internet! The shady ones are about to have a really bad day.
          </Comment>
          <Comment author="Jake Thompson" delay={4000}>
            Imagine running a scam and suddenly people can talk about it right on your page. Yikes.
          </Comment>
          <Comment author="Emma Li" delay={5000}>
            Some companies are gonna hate this... but that's exactly why I love it.
          </Comment>
          <div className="mt-16 pt-8 text-center border-t border-gray-700/30">
            <p className="text-xl font-semibold text-brand-orange animate-pulse">
              What will you Flip first?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}