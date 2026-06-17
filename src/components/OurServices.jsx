import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Building2, Paintbrush, Laptop, Server, Layers, HardDrive,
  Droplets, CloudRain, Milestone, Hammer, Warehouse, Cpu,
  Wrench, HardHat, Trees, Shield, Leaf, Home
} from 'lucide-react';
import CallToAction from './CallToAction';

const servicesList = [
  {
    num: "01",
    tag: "Commercial Development",
    title: "Commercial / Institution & others urban project",
    desc: "Turnkey urban developments, educational institutes, and retail complexes designed and executed to meet global institutional safety and performance standards.",
    image: "/commercial-urban.jpg",
    icon: Building2
  },
  {
    num: "02",
    tag: "Corporate Workspace",
    title: "Interior Work",
    desc: "Premium corporate fit-out works executing high-end partitions, false ceilings, custom joinery, and corporate boardroom designs with executive finishes.",
    image: "/interior-design.jpg",
    icon: Paintbrush
  },
  {
    num: "03",
    tag: "Modular Turnkey",
    title: "Creation of plug and play offices",
    desc: "Fully integrated, move-in ready workspace fit-outs pre-configured with structural furniture, power backup, IT networking, and secure utility connections.",
    image: "/plug-play-office.jpg",
    icon: Laptop
  },
  {
    num: "04",
    tag: "IT Infrastructure",
    title: "Data Center/ Server Room Creations",
    desc: "High-precision network server rooms and data centers designed with reliable hot/cold aisle cooling systems, backup power, and advanced safety protocols.",
    image: "/data-center-server.jpg",
    icon: Server
  },
  {
    num: "05",
    tag: "Heavy Utilities",
    title: "Oil, Gas and Petrochemical pipe line and Civil works",
    desc: "Expert heavy utility civil execution for industrial pipelines, handling excavation, deep trenching, structural concrete pads, and robust protective encasements.",
    image: "",
    icon: Layers
  },
  {
    num: "06",
    tag: "Trenchless Engineering",
    title: "HDD method services laying",
    desc: "Horizontal Directional Drilling for installing telecom, power, and water utilities underground with minimal surface disruption and precise directional guidance.",
    image: "/hdd-services-laying.jpg",
    icon: HardDrive
  },
  {
    num: "07",
    tag: "Piping Networks",
    title: "Water / Piping Distribution and Sanitation Work",
    desc: "Engineering reliable main water lines, distribution manifolds, and complete sanitation networks for corporate towers, campuses, and industrial sites.",
    image: "/pipeline-civil-works.jpg",
    icon: Droplets
  },
  {
    num: "08",
    tag: "Sustainable Water",
    title: "Boring, Bore well and Rain Water Harvesting",
    desc: "Sustainable water resource development, including deep borewell drilling, structural well rings, and rainwater harvesting groundwater recharge systems.",
    image: "/",
    icon: CloudRain
  },
  {
    num: "09",
    tag: "Transportation Link",
    title: "RCC Road",
    desc: "Heavy-duty reinforced cement concrete roadways constructed for industrial estates, commercial complex driveways, and long-term structural durability.",
    image: "/water-piping-distribution.jpg",
    icon: Milestone
  },
  {
    num: "10",
    tag: "Demolition & Site Prep",
    title: "Major Demolition Work",
    desc: "Controlled and safe demolition of commercial building blocks, structural concrete walls, and old facilities using advanced machinery and strict safety regulations.",
    image: "/borewell-rainwater-harvesting.jpg",
    icon: Hammer
  },
  {
    num: "11",
    tag: "Prefabricated Structures",
    title: "Modern Pre-Fab buildings and Industrial Shed",
    desc: "High-speed assembly of steel pre-fabricated structures, modular storage sheds, and industrial warehouses built with high structural wind resistance.",
    image: "/rcc-road.jpg",
    icon: Warehouse
  },
  {
    num: "12",
    tag: "MEP Engineering",
    title: "MEP",
    desc: "Integrated Mechanical, Electrical, and Plumbing engineering services, executing complex air conditioning ducting, corporate electrical grids, and automated fire controls.",
    image: "/major-demolition.jpg",
    icon: Cpu
  },
  {
    num: "13",
    tag: "Metal Fabrication",
    title: "Major Fabrication",
    desc: "Heavy structural steel fabrication, manufacturing secure steel structural trusses, structural columns, perimeter railings, and customized access stairs.",
    image: "/major-fabrication.jpg",
    icon: Wrench
  },
  {
    num: "14",
    tag: "Civil Infrastructure",
    title: "Miscellaneous Civil Work",
    desc: "Essential corporate civil solutions including custom building plastering, masonry partitions, wall tiling, concrete foundation pads, and structural repair works.",
    image: "/prefab-buildings.jpg",
    icon: HardHat
  },
  {
    num: "15",
    tag: "Beautification Layouts",
    title: "External Developments and beautifications",
    desc: "Hard and soft landscaping design execution, custom pathways, exterior lighting layouts, parking spaces, and boundary wall enhancements.",
    image: "/external-beautification.jpg",
    icon: Trees
  },
  {
    num: "16",
    tag: "Sound & Thermal Shield",
    title: "Sun Controls, Heat and Sound Proofing",
    desc: "High-performance thermal and acoustic insulation fit-outs, installing heat-reflective window films, soundproofing boards, and custom wall padding.",
    image: "/major-fabrication.jpg",
    icon: Shield
  },
  {
    num: "17",
    tag: "Environmental Systems",
    title: "Treatment Plants and Environments Protections",
    desc: "Turnkey waste and water treatment facilities, engineering water recycling plants, environmental filter systems, and sustainable discharge systems.",
    image: "/misc-civil-works.jpg",
    icon: Leaf
  },
  {
    num: "18",
    tag: "Project Mobilization",
    title: "Portable Houses, Site offices, and Mega Projects start up activities",
    desc: "Fast startup mobilization including premium mobile site offices, bunkhouses, secure storage containers, perimeter fencing, and initial project utility setups.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    icon: Home
  }
];

const OurServices = ({ onOpenConsultation }) => {
  const timelineRef = useRef(null);

  // Monitor scroll progress of the entire timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Calculate dot top position down the timeline (80px to calc(100% - 80px))
  const dotY = useTransform(smoothProgress, [0, 1], ["80px", "calc(100% - 80px)"]);

  return (
    <div className="relative min-h-screen bg-primary-bg">
      {/* Hero Header */}
      <section className="relative h-[50vh] flex flex-col justify-center items-center text-center px-6 bg-primary-dark overflow-hidden">
        {/* Abstract Architectural Background Video / Overlay */}
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary-dark/85 to-primary-bg z-0" />

        <div className="relative z-10 max-w-4xl">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-brand-accent uppercase block mb-3 font-sans">
            Technical Expertise
          </span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-wide mb-4">
            Our Services
          </h1>
          <p className="font-sans text-xs sm:text-sm text-white/80 max-w-2xl mx-auto uppercase tracking-widest font-light leading-relaxed">
            18 Core capabilities delivering turnkey civil, interior fit-out, and heavy utility engineering.
          </p>
        </div>
      </section>

      {/* Grid Pattern Timeline container */}
      <div
        ref={timelineRef}
        className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] overflow-hidden"
      >

        {/* Timeline Center Line */}
        <div className="absolute left-1/2 top-[80px] bottom-[80px] w-[2px] bg-luxury-highlight/15 -translate-x-1/2 z-0 hidden md:block" />

        {/* Scroll Dot (follows scroll down) */}
        <motion.div
          style={{ top: dotY }}
          className="absolute left-1/2 w-4 h-4 rounded-full bg-brand-accent border-4 border-white shadow-[0_0_15px_rgba(225,29,72,0.6)] -translate-x-1/2 z-20 hidden md:block -mt-2"
        />

        {/* Alternate Services Layout Grid */}
        <div className="relative z-10 flex flex-col gap-24 md:gap-36">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = service.icon;
            return (
              <div
                key={service.num}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center relative"
              >

                {/* Left Side: Content (when isEven is true) or Image (when isEven is false) */}
                <div className="col-span-1 md:col-span-5">
                  {isEven ? (
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-120px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col gap-3 text-left items-start"
                    >
                      {/* Icon container */}
                      <div className="w-14 h-14 rounded-full border border-luxury-highlight/20 bg-luxury-highlight/5 flex items-center justify-center mb-2">
                        <IconComponent className="w-6 h-6 text-brand-accent stroke-[1.5]" />
                      </div>
                      <span className="text-[10px] tracking-[0.2em] text-brand-accent font-bold uppercase font-sans">
                        {service.tag}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-light text-primary-dark tracking-wide leading-snug">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-text-charcoal/70 leading-relaxed font-light max-w-lg">
                        {service.desc}
                      </p>
                    </motion.div>
                  ) : (
                    // Image container
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-120px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="relative rounded-2xl overflow-hidden shadow-lg border border-black/5 bg-white group"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent pointer-events-none" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Spacer in middle for line alignment (2 columns) */}
                <div className="hidden md:block col-span-2" />

                {/* Right Side: Image (when isEven is true) or Content (when isEven is false) */}
                <div className="col-span-1 md:col-span-5">
                  {!isEven ? (
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-120px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col gap-3 text-left items-start"
                    >
                      {/* Icon container */}
                      <div className="w-14 h-14 rounded-full border border-luxury-highlight/20 bg-luxury-highlight/5 flex items-center justify-center mb-2">
                        <IconComponent className="w-6 h-6 text-brand-accent stroke-[1.5]" />
                      </div>
                      <span className="text-[10px] tracking-[0.2em] text-brand-accent font-bold uppercase font-sans">
                        {service.tag}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-light text-primary-dark tracking-wide leading-snug">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-text-charcoal/70 leading-relaxed font-light max-w-lg">
                        {service.desc}
                      </p>
                    </motion.div>
                  ) : (
                    // Image container
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-120px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="relative rounded-2xl overflow-hidden shadow-lg border border-black/5 bg-white group"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent pointer-events-none" />
                      </div>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Call to Action pre-footer */}
      <CallToAction onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default OurServices;
