import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import CallToAction from './CallToAction';

const AllProjects = ({ onOpenConsultation }) => {
  // Project list containing 11 premium projects
  const projects = [
    {
      title: "Brookfield Office",
      category: "Utility & MEP Infrastructure",
      location: "Noida, India",
      year: "2025",
      image: "/gail-workspace.png",
      description: "Turnkey pipeline design-build planning, MEP, and corporate fit-out works managing utility and administrative hubs."
    },
    {
      title: "Premium Residential Interior",
      category: "Modular Turnkey Fit-Out",
      location: "Noida, Sector 62",
      year: "2024",
      image: "/residential-img.jpeg",
      description: "High-density modular seating architectures optimizing floor layouts while providing premium comfort."
    },
    {
      title: "Board Room - Genpact ",
      category: "Executive Workspace Design",
      location: "Jaipur, India",
      year: "2025",
      image: "/genpact.jpeg",
      description: "Collaborative workspace lounge zones and executive boardrooms featuring premium custom acoustics."
    },
    {
      title: "Microsoft Noida ",
      category: "High-Tech Corporate Hub",
      location: "Noida & Gurugram, India",
      year: "2026",
      image: "/microsoft.jpeg",
      description: "Advanced software R&D workspace design-build featuring premium acoustic pods and flexible workstation systems."
    },
    {
      title: "Incuspaze Project",
      category: "Co-Working Managed Workspace",
      location: "Gurugram, India",
      year: "2025",
      image: "/incuz-2.jpeg",
      description: "A vibrant managed co-working setup focusing on smart meeting pods, shared collaboration desks, and modern café zones."
    },
    {
      title: "HCL - Interior Work",
      category: "Premium Corporate Offices",
      location: "Sector-126, Noida, India",
      year: "2025",
      image: "/Hcl-interior.jpeg",
      description: "High-end luxury corporate  offices interior with custom marble lobby finishes and executive boardrooms."
    },
    {
      title: "IOCL Adani Gas Pvt Ltd., Bulandshehar",

      location: "Bulandshahr, India",
      year: "2024",
      image: "/IOCL-CNG.jpg",
      description: "Strategic joint venture administrative facility construction and high-grade functional GAS pipeline."
    },
    {
      title: "Think Gas (Sub Contract basis)",

      location: "Baghpat, India",
      year: "2025",
      image: "/mdpe-think_gas.jpeg",
      description: "Premium laying of MDPE pipeline."
    },
    {
      title: "TV Today Studio",
      category: "Acoustic Broadcast Studio",
      location: "Noida, India",
      year: "2023",
      image: "/tv-today.png",
      description: "Acoustic broadcast studio fit-out, engineering soundproof production bays and media presentation environments."
    },
    {
      title: "Vidyagyan School (Interior and Facility Upgradation)",
      category: "Institutional Upgrades",
      location: "Bulandshahr, India",
      year: "2024",
      image: "/vidyagyan-school.png",
      description: "Institutional interior upgrade program featuring modern smart classrooms, teacher lounges, and upgraded academic wings."
    },
    {
      title: "Angelique International",
      category: "Global Headquarters Fit-Out",
      location: "Noida, India",
      year: "2026",
      image: "/angelique-international.png",
      description: "Global headquarters fit-out highlighting corporate administration wings, international conference suites, and rich wood paneling."
    },
    {
      title: "HCL - Interior Turnkey",
      category: "Global Headquarters Fit-Out",
      location: "Sector-3,Noida, India",
      year: "2026",
      image: "/Hcl-interior-2.jpeg",
      description: "Premium corporate workspace showcasing modular workstations, executive zones, and seamless acoustical environments."
    }
  ];

  // Framer Motion animation variants
  const cardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  });

  return (
    <div className="bg-primary-bg min-h-screen pt-[50px] font-sans text-text-charcoal overflow-x-hidden">

      {/* 1. Hero Section with Video */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-primary-dark">
        {/* Background Image */}
        <img
          src="/microsoft.jpeg"
          alt="Engineering Masterpieces Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-black/50 z-1" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] text-luxury-highlight uppercase block mb-4"
          >
            OUR WORKS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            Engineering <span className="font-semibold text-luxury-highlight">Masterpieces</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-light"
          >
            A curated showcase of our commercial developments and luxury corporate fit-out works across prime business destinations.
          </motion.p>
        </div>
      </section>

      {/* 2. Grid Section - 2 Columns with Left/Right Scroll Reveal */}
      <section className="py-10 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className="group flex flex-col bg-primary-bg rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-primary-dark cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold tracking-wider text-primary-dark bg-luxury-highlight px-3 py-1 uppercase rounded">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Location and Year */}
                    <div className="flex items-center gap-6 text-xs text-text-charcoal/50 mb-3">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-primary-dark tracking-wide group-hover:text-brand-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-charcoal/70 mt-3 font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CTA Section */}
      <CallToAction onOpenConsultation={onOpenConsultation} />

    </div>
  );
};

export default AllProjects;
