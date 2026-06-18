import React from 'react';

const services = [
  {
    num: "01",
    tag: "Interior",
    title: "Interior Fit-Out Work",
    desc: "Premium corporate office interiors for leading IT firms — including exclusive fit-out execution for CXO floors with the highest standards of finish, security and craftsmanship.",
    image: "/interior-design.jpg"
  },
  {
    num: "02",
    tag: "Construction",
    title: "Commercial & Institutional Projects",
    desc: "Urban commercial buildings, institutions and large-scale infrastructure projects delivered with precision, efficiency and a strong record of zero non-performance.",
    image: "/commercial-urban.jpg"
  },
  {
    num: "03",
    tag: "Technology",
    title: "Data Center & Server Rooms",
    desc: "Precision data center and server room creation with high-security protocols, redundancy planning and compliance built into every stage of execution.",
    image: "/data-center-server.jpg"
  },
  {
    num: "04",
    tag: "Workspace",
    title: "Plug & Play Offices",
    desc: "Complete ready-to-use office setups with furniture, electrical, networking and finishing already in place — move in and start operations on day one.",
    image: "/plug-play-office.jpg"
  },
  {
    num: "05",
    tag: "Engineering",
    title: "MEP Works",
    desc: "Comprehensive mechanical, electrical and plumbing solutions designed and executed for safety, efficiency and long-term reliability across all project types.",
    image: "/major-demolition.jpg"
  },
  {
    num: "06",
    tag: "Infrastructure",
    title: "Oil, Gas & Pipeline Works",
    desc: "Petrochemical pipeline and civil works executed with regional record-breaking efficiency — including 400 meters of pipe lowered in a single day.",
    image: "/oil-pipeline.jpg"
  },

  {
    num: "08",
    tag: "Utilities",
    title: "Water & Sanitation Works",
    desc: "Complete water distribution, piping and sanitation systems designed for reliability and scale — from corporate campuses to large infrastructure sites.",
    image: "/pipeline-civil-works.jpg"
  },
  {
    num: "09",
    tag: "Sustainability",
    title: "Boring & Rain Water Harvesting",
    desc: "Bore wells and rainwater harvesting systems engineered for sustainable water management and long-term resource conservation.",
    image: "/pipeline-civil-works.jpg"
  },

  {
    num: "11",
    tag: "Civil",
    title: "Major Demolition Work",
    desc: "Safe, efficient and controlled demolition of large commercial and industrial structures, executed with strict safety compliance.",
    image: "/major-demo.jpg"
  },
  {
    num: "12",
    tag: "Infrastructure",
    title: "Pre-Fab & Industrial Sheds",
    desc: "Modern pre-fabricated buildings and industrial sheds delivered with fast turnaround without compromising on structural quality.",
    image: "/rcc-road.jpg"
  },

  {
    num: "14",
    tag: "Environment",
    title: "Treatment Plants",
    desc: "Water treatment plants and environmental protection infrastructure built to meet compliance standards and reduce environmental impact.",
    image: "/misc-civil-works.jpg"
  },
  {
    num: "15",
    tag: "Industrial",
    title: "Major Fabrication",
    desc: "Structural steel and metal fabrication for industrial and commercial use, executed with precision engineering and quality control at every step.",
    image: "/major-fabrication.jpg"
  },


  {
    num: "18",
    tag: "General",
    title: "Miscellaneous Civil Works",
    desc: "All types of miscellaneous civil and construction works handled with the same standard of quality, safety and reliability as our core projects.",
    image: "/prefab-buildings.jpg"
  }
];

const WhatWeDo = () => {
  // Odd services (index 0, 2, 4, ...) go to column 1
  const col1 = services.filter((_, idx) => idx % 2 === 0);
  // Even services (index 1, 3, 5, ...) go to column 2
  const col2 = services.filter((_, idx) => idx % 2 !== 0);

  // Duplicate arrays for seamless vertical infinite loops
  const doubleCol1 = [...col1, ...col1];
  const doubleCol2 = [...col2, ...col2];

  return (
    <section id="services" className="py-14 md:py-20 bg-primary-bg overflow-hidden relative border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Description Text Content */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left pr-0 lg:pr-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-accent uppercase block mb-3 font-sans">
              WHAT WE DO
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-primary-dark tracking-wide leading-tight mb-6">
              Bespoke <br />
              Workspaces &amp; <br />
              <span className="font-semibold text-secondary-accent">Infrastructure</span>
            </h2>
            <p className="font-sans text-sm text-text-charcoal/70 leading-relaxed mb-8 max-w-md">
              Unispace Contracts executes end-to-end design, construction, and engineering works. From high-finish corporate offices to critical tech infrastructures and pipelines, we deliver with zero non-performance.
            </p>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 font-sans text-xs md:text-sm font-semibold tracking-wider text-primary-dark hover:text-brand-accent transition-colors border-b border-primary-dark/20 pb-1"
            >
              Explore Services
              <span className="transform group-hover:translate-x-1 transition-transform duration-300 font-sans">↗</span>
            </a>
          </div>

          {/* Right Side: Dual-Column Vertical Marquee */}
          <div className="lg:col-span-7 h-[600px] overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-4 relative">

            {/* Top & Bottom ambient luxury shadow fade overlays */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-primary-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-bg to-transparent z-10 pointer-events-none" />

            {/* Column 1: Vertical marquee moving down (top to bottom) */}
            <div className="h-full overflow-hidden flex flex-col">
              <div className="animate-marquee-vertical-down gap-4 flex flex-col">
                {doubleCol1.map((service, idx) => (
                  <div
                    key={`col1-${idx}`}
                    className="bg-white/90 backdrop-blur-md border border-black/5 rounded-2xl p-5 shadow-sm flex flex-col gap-4 group hover:shadow-xl hover:border-luxury-highlight/45 transition-all duration-300"
                  >
                    <div className="h-48 w-full overflow-hidden rounded-xl bg-primary-dark relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] tracking-widest text-luxury-highlight uppercase font-bold mb-1.5">
                        <span>{service.tag}</span>
                        <span>#{service.num}</span>
                      </div>
                      <h4 className="font-display text-sm font-semibold text-primary-dark group-hover:text-brand-accent transition-colors mb-2">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-text-charcoal/60 leading-relaxed font-sans line-clamp-3">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Vertical marquee moving up (bottom to top) */}
            <div className="h-full overflow-hidden flex flex-col hidden sm:flex">
              <div className="animate-marquee-vertical-up gap-4 flex flex-col">
                {doubleCol2.map((service, idx) => (
                  <div
                    key={`col2-${idx}`}
                    className="bg-white/90 backdrop-blur-md border border-black/5 rounded-2xl p-5 shadow-sm flex flex-col gap-4 group hover:shadow-xl hover:border-luxury-highlight/45 transition-all duration-300"
                  >
                    <div className="h-48 w-full overflow-hidden rounded-xl bg-primary-dark relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] tracking-widest text-luxury-highlight uppercase font-bold mb-1.5">
                        <span>{service.tag}</span>
                        <span>#{service.num}</span>
                      </div>
                      <h4 className="font-display text-sm font-semibold text-primary-dark group-hover:text-brand-accent transition-colors mb-2">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-text-charcoal/60 leading-relaxed font-sans line-clamp-3">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
