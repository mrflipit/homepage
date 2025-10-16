import { ReferralEarnings } from './ReferralEarnings';
import { AdRevenue } from './AdRevenue';
import { PremiumServices } from './PremiumServices';
import { WebsiteOwnerRewards } from './WebsiteOwnerRewards';

export function RevenueStreams() {
  return (
    <section id="earnings-breakdown" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">
                Multiple Revenue Streams
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've designed a comprehensive rewards system that ensures you earn from every angle.
            </p>
          </div>
          
          <div className="space-y-16">
            <ReferralEarnings />
            <AdRevenue />
            <PremiumServices />
            <WebsiteOwnerRewards />
          </div>
        </div>
      </div>
    </section>
  );
}