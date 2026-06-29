import React, { useState, useEffect } from 'react';

const TopMarquee = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const screenshots = import.meta.glob('../assets/Screenshot*.png', { eager: true, import: 'default' });
  const logoPaths = Object.values(screenshots);

  // Duplicate the list of logos to make the marquee scroll seamlessly
  const marqueeList = [...logoPaths, ...logoPaths, ...logoPaths];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-8 sm:h-11 bg-primary-dark border-b border-white/5 flex items-center overflow-hidden transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between">
        {/* Left static label */}
        <div className="shrink-0 flex items-center gap-2 pr-4 bg-primary-dark z-10 shadow-[4px_0_8px_rgba(11,31,58,0.95)]">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#C8A96A] font-sans uppercase">
            Trusted By:
          </span>
        </div>

        {/* Scrolling logo marquee */}
        <div className="w-full overflow-hidden relative flex items-center">
          {/* Ambient overlays to smooth-fade the logos in and out of the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-primary-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-primary-dark to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-4 sm:gap-6 items-center whitespace-nowrap">
            {marqueeList.map((logoPath, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-6 sm:h-8 px-2 sm:px-3 bg-white rounded border border-black/5 shadow-[0_2px_6px_rgba(0,0,0,0.03)] min-w-[50px] sm:min-w-[80px] hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logoPath}
                  alt={`Partner Logo ${idx + 1}`}
                  className="h-4 sm:h-5.5 w-auto object-contain pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMarquee;
