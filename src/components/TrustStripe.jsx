import React from 'react';

const TrustStripe = () => {
  // Dynamically import all screenshots in the assets directory at build time
  const screenshots = import.meta.glob('../assets/Screenshot*.png', { eager: true, import: 'default' });
  const logoPaths = Object.values(screenshots);

  // We duplicate the logos array once to make a seamless infinite loop
  const doubleLogos = [...logoPaths, ...logoPaths];

  return (
    <section className="py-10 bg-primary-bg overflow-hidden border-b border-black/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-10">
        <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-secondary-accent uppercase block mb-3">
          Trusted By Industry Leaders
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-light text-primary-dark tracking-wide mb-3">
          Purpose-Built Spaces For Every Industry
        </h2>
        <p className="font-sans text-xs md:text-sm text-text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
          Unispace Contracts partners with organizations across industries to create spaces that drive growth, improve efficiency, and enhance brand experience.
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="w-full relative flex items-center overflow-hidden py-4 bg-white border-y border-black/5">
        {/* Left & Right ambient soft shadow overlay to fade the entrance and exit of logos */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-primary-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-primary-bg to-transparent z-10 pointer-events-none" />

        {/* Infinite Marquee Loop */}
        <div className="animate-marquee flex gap-12 md:gap-16 items-center">
          {doubleLogos.map((path, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center min-w-[140px] md:min-w-[180px] h-16 px-6 bg-white border border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-luxury-highlight/30 hover:shadow-lg"
            >
              <img
                src={path}
                alt={`Partner Logo ${idx + 1}`}
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStripe;
