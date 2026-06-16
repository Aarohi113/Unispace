import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  ...props 
}) => {
  // Base classes
  const baseStyle = 'relative overflow-hidden font-sans uppercase tracking-widest text-xs font-semibold px-6 py-3.5 transition-all duration-300 focus:outline-none flex items-center justify-center gap-2 cursor-pointer';
  
  // Custom variants based on requirements
  const variants = {
    primary: 'bg-brand-accent text-white border border-brand-accent hover:border-luxury-highlight',
    outline: 'border border-luxury-highlight text-luxury-highlight hover:text-white',
    nav: 'bg-brand-accent text-white px-5 py-2.5 border border-brand-accent text-xs font-semibold rounded-none tracking-widest'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Background slide/shine animations */}
      {variant === 'primary' && (
        <motion.span 
          className="absolute inset-0 bg-luxury-highlight"
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ mixBlendMode: 'difference', zIndex: 1 }}
        />
      )}
      
      {variant === 'outline' && (
        <motion.span 
          className="absolute inset-0 bg-luxury-highlight"
          initial={{ y: '100%' }}
          whileHover={{ y: '0%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ zIndex: 0 }}
        />
      )}

      {variant === 'nav' && (
        <motion.span 
          className="absolute inset-0 bg-luxury-highlight"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ originX: 0, zIndex: 0 }}
        />
      )}

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
