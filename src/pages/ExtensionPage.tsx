import { PageHeader } from '../components/layout';
import { Download } from 'lucide-react';

function ExtensionPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <PageHeader backLabel="Back" />

      <main className="flex-1 flex items-center justify-center p-4 pt-16">
        <div className="max-w-2xl w-full">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Install Flipit. Flip any page.
              </h1>
              <p className="text-xl text-gray-300">
                The Flipit extension allows you to flip over any page on the internet, revealing a whole new dimension of web interaction.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://chrome.google.com/webstore/detail/flipit/aeclfjapikjpkdajbaolonnceecpghce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-xl group shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6 mr-3" />
                <span>Add to Chrome</span>
              </a>
              
              <p className="mt-6 text-gray-400 text-sm">
                Works with all Chromium-based browsers including Chrome, Edge, Brave, and Opera
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700/50">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-2">100%</div>
                  <div className="text-gray-300">Free to Use</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-2">Instant</div>
                  <div className="text-gray-300">Installation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-2">Secure</div>
                  <div className="text-gray-300">& Private</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ExtensionPage;