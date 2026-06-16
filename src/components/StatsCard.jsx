import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ stat, label, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ 
        y: -10, 
        borderColor: 'rgba(200, 169, 106, 0.4)', 
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.3)'
      }}
      className="relative flex items-center gap-5 p-4 md:p-5 lg:p-6 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_0_rgba(0,0,0,0.3)] overflow-hidden group transition-all duration-500"
    >
      {/* Decorative Champagne Gold ambient hover glow */}
      <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-luxury-highlight/10 blur-2xl group-hover:bg-luxury-highlight/35 transition-all duration-700" />
      
      {/* Icon Wrapper */}
      {Icon && (
        <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 border border-white/15 group-hover:border-luxury-highlight/40 text-luxury-highlight group-hover:text-white transition-all duration-500">
          <Icon className="w-6 h-6 stroke-[1.5]" />
        </div>
      )}
      
      {/* Card Content */}
      <div className="flex flex-col">
        <motion.span 
          className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-none group-hover:text-luxury-highlight transition-colors duration-300 drop-shadow-sm"
        >
          {stat}
        </motion.span>
        <span className="text-[10px] md:text-xs text-white/80 uppercase tracking-widest font-semibold mt-1.5 leading-relaxed drop-shadow-sm">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export default StatsCard;
