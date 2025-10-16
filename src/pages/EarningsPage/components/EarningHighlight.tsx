import { Star } from 'lucide-react';

export function EarningHighlight() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-brand-orange/20 via-brand-purple/20 to-brand-blue/20 rounded-2xl p-1">
            <div className="bg-gray-900/90 rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-brand-purple/5 to-brand-blue/5"></div>
              <Star className="h-16 w-16 text-brand-orange mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Sign up someone who owns a large company?
              </h3>
              <div className="relative inline-block">
                <p className="text-4xl md:text-6xl font-bold text-brand-orange mb-2 relative z-10">
                  $100,000
                </p>
                <div className="absolute -inset-4 bg-brand-orange/20 blur-2xl -z-0"></div>
              </div>
              <p className="text-xl md:text-2xl text-white">in potential earnings!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}