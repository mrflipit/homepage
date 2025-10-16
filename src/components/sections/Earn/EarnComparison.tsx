export function EarnComparison() {
  return (
    <div className="max-w-3xl mx-auto text-center pb-10 md:pb-16">
      <div className="bg-gradient-to-r from-brand-orange/20 to-brand-purple/20 p-0.5 rounded-xl mb-8">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl py-6 px-4">
          {/* Referral rates comparison */}
          <div className="grid grid-cols-2 divide-x divide-gray-700 mb-6">
            <div className="pr-4 text-center">
              <div className="text-sm text-gray-400">Regular Users</div>
              <div className="text-xl font-bold text-white">$2 per referral</div>
              <div className="mt-2 text-sm text-gray-400">Limited earning potential</div>
            </div>
            <div className="pl-4 text-center relative">
              {/* Highlight effect for the founder earnings */}
              <div className="absolute inset-0 bg-brand-orange/10 rounded-r-xl"></div>
              <div className="relative z-10">
                <div className="text-sm text-brand-orange">Founders</div>
                <div className="text-2xl font-bold text-brand-orange">$10 per referral</div>
                <div className="mt-2 text-sm text-brand-orange/90">Unlimited earning potential</div>
              </div>
            </div>
          </div>
          
          {/* Earning potential comparison */}
          <div className="grid grid-cols-2 divide-x divide-gray-700">
            <div className="pr-4 py-4 text-center bg-gray-800/30 rounded-l-lg">
              <div className="text-sm text-gray-400">Regular Users Can Earn</div>
              <div className="text-xl font-bold text-gray-300 my-2">Up to $10,000</div>
              <div className="text-xs text-gray-500">from regular referrals</div>
            </div>
            <div className="pl-4 py-4 text-center bg-gradient-to-br from-gray-800/50 to-gray-800/80 rounded-r-lg relative overflow-hidden">
              {/* Enhanced animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 via-brand-purple/10 to-brand-blue/10 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/30 to-transparent blur-md opacity-50"></div>
              
              <div className="relative">
                <div className="text-sm text-brand-orange">Founders Can Earn</div>
                <div className="text-2xl font-bold text-brand-orange my-2 animate-pulse">
                  Up to $100,000
                </div>
                <div className="text-xs text-brand-orange/80">from company ad spend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}