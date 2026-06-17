import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';
import unispaceLogo from '../assets/unispacelogo.png';

const Navbar = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects-all' },
    { name: 'Contact', href: '#contact-us' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-primary-bg/95 border-b border-black/5 shadow-lg py-2.5 sm:py-4'
          : 'bg-black/10 backdrop-blur-md border-b border-white/10 py-3 sm:py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={unispaceLogo}
              alt="Unispace Contracts Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-sans text-xs uppercase tracking-widest font-semibold py-1.5 transition-colors duration-300 ${isScrolled ? 'text-primary-dark/80 hover:text-brand-accent' : 'text-white/80 hover:text-luxury-highlight'
                  } group`}
              >
                {link.name}
                {/* Custom animated underline */}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-brand-accent' : 'bg-luxury-highlight'
                  }`} />
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <Button variant="nav" onClick={onOpenConsultation}>
              Book Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-1.5 focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-primary-dark hover:text-brand-accent' : 'text-white hover:text-luxury-highlight'
              }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2]" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-bg/98 backdrop-blur-lg flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden"
          >
            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5 flex justify-between px-10">
              <div className="w-[1px] h-full bg-primary-dark" />
              <div className="w-[1px] h-full bg-primary-dark" />
              <div className="w-[1px] h-full bg-primary-dark" />
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-2xl font-semibold tracking-wider text-primary-dark hover:text-brand-accent flex items-center justify-between border-b border-black/5 pb-4 group"
                >
                  {link.name}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-brand-accent" />
                </motion.a>
              ))}
            </div>

            {/* Consultation Action at Bottom of Drawer */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative z-10 flex flex-col gap-5"
            >
              <Button
                variant="primary"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-4 text-center justify-center rounded-none"
              >
                Book Consultation
              </Button>
              <div className="text-center text-text-charcoal/40 text-[10px] uppercase tracking-widest">
                Unispace Contracts &copy; 2026
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
