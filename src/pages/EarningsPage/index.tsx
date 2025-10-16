import { PageHeader } from '../../components/layout';
import { 
  EarningsHero, 
  EarningHighlight, 
  RevenueStreams, 
  HowItWorks, 
  EarlyAdopter, 
  EarningsCTA 
} from './components';

function EarningsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <PageHeader />

      <main className="pt-16">
        <EarningsHero />
        <EarningHighlight />
        <RevenueStreams />
        <HowItWorks />
        <EarlyAdopter />
        <EarningsCTA />
      </main>
    </div>
  );
}

export default EarningsPage;