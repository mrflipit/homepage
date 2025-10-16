import { UserPlus, CheckCircle } from 'lucide-react';

export function AutomaticAffiliate() {
  return (
    <section className="py-12 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-brand-blue/20 via-brand-purple/20 to-brand-orange/20 rounded-2xl p-1">
            <div className="bg-gray-900/90 rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-brand-purple/5 to-brand-orange/5"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 text-center md:text-left">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 mb-6">
                    <UserPlus className="h-16 w-16 text-brand-blue" />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 rounded-xl p-0.5">
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                      <p className="text-xl text-white mb-4">
                        You are already an affiliate.
                      </p>
                      
                      <div className="flex items-center space-x-3">
                        <div className="bg-brand-orange/20 p-2 rounded-full">
                          <CheckCircle className="w-5 h-5 text-brand-orange" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Automatic!</h4>
                          <p className="text-gray-300 text-sm">Affiliate links auto-embed in everything you share</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}