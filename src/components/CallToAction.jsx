import React from 'react';
import { motion } from 'framer-motion';
import ctaVideo from '../assets/351912462735820 (1) (1).mp4';

const CallToAction = ({ onOpenConsultation }) => {
  return (
    <section className="relative h-[480px] w-full overflow-hidden bg-primary-dark flex items-center justify-center text-center px-6">
      
      {/* Background Video looping continuously */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-65 z-0"
      >
        <source src={ctaVideo} type="video/mp4" />
      </video>

      {/* Dark luxury overlay tint */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl font-light text-white tracking-wide leading-tight"
        >
          Have a project in mind?<br />
          <span className="font-semibold text-luxury-highlight">Let's connect.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs md:text-sm text-white/80 tracking-[0.15em] uppercase font-light max-w-2xl leading-relaxed"
        >
          From concept to completion — we build workspaces that inspire.
        </motion.p>

        {/* Action Button (Transparent with thin white border, gold highlight on hover) */}
        <a href="#contact-us">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              scale: 1.05,
              borderColor: '#C8A96A',
              color: '#C8A96A',
              backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }}
            className="mt-6 px-8 py-3.5 border border-white text-white font-sans text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 cursor-pointer"
          >
            Witness Our Work in Action
          </motion.button>
        </a>

      </div>
    </section>
  );
};

export default CallToAction;
