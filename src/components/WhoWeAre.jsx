import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import whoWeAreVideo from '../assets/24769866696943997.mp4';

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Monitor scroll progress of the section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Slide left-side video in from the left and fade from 0.4 to 1
  const videoX = useTransform(smoothProgress, [0.1, 0.45, 0.7], [-150, 0, 0]);
  const videoOpacity = useTransform(smoothProgress, [0.1, 0.45, 0.7], [0.4, 1, 1]);

  // Slide right-side text in from the right and fade from 0.4 to 1
  const textX = useTransform(smoothProgress, [0.1, 0.45, 0.7], [150, 0, 0]);
  const textOpacity = useTransform(smoothProgress, [0.1, 0.45, 0.7], [0.4, 1, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-14 md:py-20 bg-primary-bg overflow-hidden relative border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side: Animated Video Container */}
          <motion.div
            style={isMobile ? {} : { x: videoX, opacity: videoOpacity }}
            initial={isMobile ? { x: -80, opacity: 0 } : false}
            whileInView={isMobile ? { x: 0, opacity: 1 } : false}
            viewport={isMobile ? { once: true, margin: "-100px" } : undefined}
            transition={isMobile ? { duration: 0.8, ease: "easeOut" } : undefined}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-primary-dark group cursor-pointer"
          >
            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              src={whoWeAreVideo}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />



            {/* Video Badges matching the requested visual style */}
            <div className="absolute bottom-6 left-6 z-10 font-sans">
              <div className="bg-primary-dark text-white px-4 py-1.5 text-xs font-semibold tracking-wider uppercase inline-block mb-1">
                The Story
              </div>
              <br />
              <div className="bg-luxury-highlight text-primary-dark px-4 py-1 text-[10px] font-bold tracking-widest uppercase inline-block">
                Behind Unispace
              </div>
            </div>
          </motion.div>

          {/* Right Side: Animated Text Content */}
          <motion.div
            style={isMobile ? {} : { x: textX, opacity: textOpacity }}
            initial={isMobile ? { x: 80, opacity: 0 } : false}
            whileInView={isMobile ? { x: 0, opacity: 1 } : false}
            viewport={isMobile ? { once: true, margin: "-100px" } : undefined}
            transition={isMobile ? { duration: 0.8, ease: "easeOut" } : undefined}
            className="flex flex-col items-start text-left"
          >
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-brand-accent uppercase block mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-primary-dark tracking-wide leading-tight mb-6">
              We Design And Deliver <span className="font-semibold text-secondary-accent">Intelligent Spaces</span> That Help Businesses Perform And Scale.
            </h2>
            <p className="font-sans text-sm md:text-base text-text-charcoal/70 leading-relaxed mb-8 max-w-xl">
              Unispace Contracts is a global tech-led design and build enterprise, simplifying how spaces are designed and built through a connected, end-to-end approach.
            </p>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 font-sans text-xs md:text-sm font-semibold tracking-wider text-primary-dark hover:text-brand-accent transition-colors border-b border-primary-dark/20 pb-1"
            >
              Know More
              <span className="transform group-hover:translate-x-1 transition-transform duration-300 font-sans">↗</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
