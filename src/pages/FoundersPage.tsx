import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Crown, Target, Users, DollarSign, ArrowRight, BarChart3 } from 'lucide-react';

function FoundersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
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

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-orange/10 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="block bg-gradient-to-r from-brand-orange via-white to-brand-purple bg-clip-text text-transparent">
                    Founder Benefits
                  </span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                You're Early – It Matters
              </p>
            </div>
          </div>
        </section>
        
        {/* Benefits Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Premium Status */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-purple/10 rounded-xl inline-block">
                      <Crown className="h-8 w-8 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Premium Status</h3>
                      <p className="text-gray-300">Verified Badge · Priority Support · Early Features</p>
                    </div>
                  </div>
                </div>

                {/* Earn More */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-orange/10 rounded-xl inline-block">
                      <DollarSign className="h-8 w-8 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Earn More</h3>
                      <p className="text-gray-300">5x Earnings · Bonuses · Special Events</p>
                    </div>
                  </div>
                </div>

                {/* Network Boost */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-blue/10 rounded-xl inline-block">
                      <Users className="h-8 w-8 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Network Boost</h3>
                      <p className="text-gray-300">Increased Visibility · Priority Ranking · Extended Reach</p>
                    </div>
                  </div>
                </div>

                {/* Exclusive Features */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-pink-500/10 rounded-xl inline-block">
                      <Star className="h-8 w-8 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Exclusive Features</h3>
                      <p className="text-gray-300">Custom Themes · Advanced Filters · Premium Integrations</p>
                    </div>
                  </div>
                </div>

                {/* Growth Tools */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-500/10 rounded-xl inline-block">
                      <BarChart3 className="h-8 w-8 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Growth Tools</h3>
                      <p className="text-gray-300">Analytics · Audience Insights · Performance Tracking</p>
                    </div>
                  </div>
                </div>

                {/* Community Voice */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl inline-block">
                      <Target className="h-8 w-8 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Community Voice</h3>
                      <p className="text-gray-300">Direct Team Access · Early Input · Beta Testing Opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-xl group"
              >
                <span>Join Now</span>
                <ArrowRight className="inline-block w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FoundersPage;