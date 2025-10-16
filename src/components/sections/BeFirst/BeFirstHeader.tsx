export function BeFirstHeader() {
  return (
    <div className="text-center mb-10 md:mb-16">
      <div className="inline-block">
        <h2 className="text-7xl font-bold mb-6 relative">
          <span className="absolute -inset-2 bg-gradient-to-r from-brand-orange/20 via-white/5 to-brand-purple/20 blur-xl"></span>
          <span className="relative bg-gradient-to-r from-brand-orange via-white to-brand-purple bg-clip-text text-transparent">
            Be a Founder
          </span>
        </h2>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-gray-300 max-w-3xl">
          And it's not too late!
        </p>
        <div className="flex items-center justify-center gap-3 text-lg text-brand-orange">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent"></span>
          <p className="font-medium animate-pulse">We are just getting started</p>
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent"></span>
        </div>
      </div>
    </div>
  );
}