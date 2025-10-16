/**
 * EarningsPage Component
 * 
 * This is the main container component for the Earnings page.
 * It composes all the earnings-related sections together.
 * 
 * MODIFICATION GUIDE:
 * - To add new sections: Import the component and add it to the JSX below
 * - To modify existing sections: Edit the respective component files, not this file
 * - To change the order of sections: Reorder the components in the JSX below
 */

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Import all section components from the components directory
import {
  EarningsHero,
  EarningHighlight,
  RevenueStreams,
  EarlyAdopter,
  HowItWorks,
  EarningsCTA
} from './components';

// Header component - could be extracted to its own file if it grows
const EarningsHeader = () => (
  <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800/50">
    <div className="container mx-auto px-4">
      <div className="h-16 flex items-center">
        <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
    </div>
  </header>
);

/**
 * Main EarningsPage component
 * 
 * Composes all earnings-related sections into a complete page
 */
function EarningsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Fixed header with back button */}
      <EarningsHeader />

      {/* Enable text selection for all content */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Enable text selection for all content */
        * {
          user-select: text !important;
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
        }
      `}} />

      <main className="pt-16">
        {/* 
          Page Sections
          Each section is a separate component for better maintainability
          The order here determines the visual order on the page
        */}
        <EarningsHero />
        <RevenueStreams />
        <EarlyAdopter />
        <HowItWorks />
        <EarningsCTA />
      </main>
    </div>
  );
}

export default EarningsPage;
