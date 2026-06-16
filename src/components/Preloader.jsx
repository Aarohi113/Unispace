import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds loading simulation

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic-bezier easeOut progress animation (fast start, slow end)
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * 100));

      if (progress >= 1) {
        clearInterval(interval);
      }
    }, 16); // 60 FPS update interval

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -50,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-primary-bg flex flex-col justify-between p-8 md:p-16 select-none"
    >
      {/* Top Section */}
      <div className="flex justify-between items-center w-full">
        <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-primary-dark/60 uppercase">
          Unispace Contracts
        </span>
        <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-luxury-highlight uppercase">
          Est. 2009
        </span>
      </div>

      {/* Middle Section: Giant Number Counter */}
      <div className="flex flex-col items-start justify-center flex-grow py-8">
        <h1 className="font-display text-[26vw] md:text-[20vw] font-bold text-primary-dark leading-none tracking-tighter">
          {count.toString().padStart(3, '0')}<span className="text-luxury-highlight font-light text-[10vw] md:text-[8vw] ml-1">%</span>
        </h1>
      </div>

      {/* Bottom Section: Progress Bar and Status */}
      <div className="w-full flex flex-col gap-4">
        {/* Animated Progress Bar */}
        <div className="w-full h-[1.5px] bg-primary-dark/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 bg-luxury-highlight"
            style={{ width: `${count}%` }}
            layoutId="preloadProgress"
          />
        </div>
        
        <div className="flex justify-between items-center text-[10px] md:text-xs font-semibold tracking-[0.2em] text-primary-dark/40 uppercase">
          <span>Loading Architectural Assets</span>
          <span>Future Perfect</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
