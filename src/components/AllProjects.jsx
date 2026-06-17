import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import CallToAction from './CallToAction';

const AllProjects = ({ onOpenConsultation }) => {
  // Project list containing 10 premium projects
  const projects = [
    {
      title: "Google Executive Hub",
      category: "Luxury Design & Build",
      location: "Bengaluru, India",
      year: "2025",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      description: "A state-of-the-art office spaces designed to foster innovation, collaboration, and high-performance engineering cultures."
    },
    {
      title: "Microsoft R&D Centre",
      category: "Acoustic Corporate Fit-Out",
      location: "Hyderabad, India",
      year: "2026",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      description: "Complex acoustic engineering and spatial designs engineered for Microsoft's elite R&D developers."
    },
    {
      title: "Samsung Design Studio",
      category: "Creative Workspace Layout",
      location: "Noida, India",
      year: "2025",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      description: "An elegant, minimal workspace blending premium glass, wood textures, and bespoke lighting fixtures."
    },
    {
      title: "HCL Innovation Lab",
      category: "High-Tech Corporate HQ",
      location: "Noida, India",
      year: "2024",
      image: "/hcl-reception.jpg",
      description: "A design that integrates smart-building technologies with ergonomic and collaborative breakout spaces."
    },
    {
      title: "Adani Corporate Headquarters",
      category: "Full-Scale Civil Fit-Out",
      location: "Ahmedabad, India",
      year: "2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      description: "A monumental design-build commercial infrastructure showcasing leadership, resilience, and industrial trust."
    },
    {
      title: "Genpact Operational Base",
      category: "Modular Team Space",
      location: "Gurugram, India",
      year: "2024",
      image: "/genpact-interior.jpg",
      description: "High-density modular seating architectures optimizing floor layouts while providing premium comfort."
    },
    {
      title: "Vanguard Corporate Hub",
      category: "Acoustic Meeting Rooms",
      location: "Mumbai, India",
      year: "2025",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&q=80",
      description: "Double-glazed acoustic partitions and premium finishes designed for confidential boardrooms."
    },
    {
      title: "Horizon executive Suite",
      category: "Premium Executive Lounge",
      location: "New Delhi, India",
      year: "2026",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      description: "A luxury lounge space incorporating glass, dark marble accents, and custom plush seating furniture."
    },
    {
      title: "Gail Corporate Tower",
      category: "Sustainable Design Build",
      location: "Greater Noida, India",
      year: "2025",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80",
      description: "An eco-friendly interior layout utilising natural daylighting, energy-saving fixtures, and bio-philic elements."
    },
    {
      title: "Samsung Digital Plaza",
      category: "Bespoke Experiential Lounge",
      location: "Gurugram, India",
      year: "2026",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      description: "A premium customer-experience design space emphasizing modern tech, minimal surfaces, and warm hospitality design."
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
    <div className="bg-primary-bg min-h-screen pt-[80px] font-sans text-text-charcoal overflow-x-hidden">
      
      {/* 1. Hero Section with Video */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-primary-dark">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 scale-105"
        >
          <source src="/video-2.mp4" type="video/mp4" />
        </video>
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
      <section className="py-20 bg-white relative">
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

                  <div className="mt-6 pt-6 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider group-hover:underline">
                      Explore Case Study
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary-bg border border-black/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
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
