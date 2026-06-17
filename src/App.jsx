import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Phone, Mail, ArrowUpRight, CheckCircle2, ChevronRight, Award, Briefcase, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Button from './components/Button';
import TrustStripe from './components/TrustStripe';
import WhoWeAre from './components/WhoWeAre';
import InteractiveProjects from './components/InteractiveProjects';
import WhatWeDo from './components/WhatWeDo';
import StatsCard from './components/StatsCard';
import CallToAction from './components/CallToAction';
import HistoryAndPolicies from './components/HistoryAndPolicies';
import unispaceLogo from './assets/unispacelogo.png';
import Preloader from './components/Preloader';
import AboutUs from './components/AboutUs';
import AllProjects from './components/AllProjects';
import OurServices from './components/OurServices';
import ContactUs from './components/ContactUs';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#projects-all') {
        setCurrentPage('projects-all');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#services') {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#contact-us') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentPage === 'home' && window.location.hash) {
      const timer = setTimeout(() => {
        const id = window.location.hash.substring(1);
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPage, window.location.hash]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [footerSubmitted, setFooterSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Interior Design',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Interior Design',
        message: ''
      });
    }, 2500);
  };

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setFooterSubmitted(true);
    setTimeout(() => {
      setFooterSubmitted(false);
    }, 4000);
  };

  const stats = [
    {
      stat: "17+ Years",
      label: "Experience",
      icon: Award,
    },
    {
      stat: "500+ Projects",
      label: "Delivered",
      icon: Briefcase,
    },
    {
      stat: "Trusted",
      label: "Corporate Partners",
      icon: Users,
    }
  ];

  // Portfolio items for below-the-fold display
  const featuredProjects = [
    {
      title: "OmniCorp Headquarters",
      category: "Corporate Fit-Out",
      location: "Financial District",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      year: "2025"
    },
    {
      title: "Vanguard Creative Labs",
      category: "Acoustic Workspace",
      location: "Tech Hub Park",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      year: "2025"
    },
    {
      title: "The Horizon Boardroom & Executive Suite",
      category: "Luxury Boardroom",
      location: "Skyline Tower",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      year: "2026"
    }
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-primary-bg selection:bg-luxury-highlight selection:text-primary-dark">
      
      {/* Floating Navbar */}
      <Navbar onOpenConsultation={() => setIsModalOpen(true)} />

      {currentPage === 'about' ? (
        <AboutUs onOpenConsultation={() => setIsModalOpen(true)} />
      ) : currentPage === 'projects-all' ? (
        <AllProjects onOpenConsultation={() => setIsModalOpen(true)} />
      ) : currentPage === 'services' ? (
        <OurServices onOpenConsultation={() => setIsModalOpen(true)} />
      ) : currentPage === 'contact' ? (
        <ContactUs />
      ) : (
        <>
          {/* Main Full-Screen Hero */}
          <Hero 
            onExploreProjects={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onContactUs={() => setIsModalOpen(true)} 
          />

          {/* Stats Cards Section (scrolls naturally between Hero and TrustStripe) */}
          <section className="py-12 bg-primary-bg relative z-25 border-b border-black/5 -mt-6">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {stats.map((statItem, index) => (
                  <StatsCard
                    key={index}
                    stat={statItem.stat}
                    label={statItem.label}
                    icon={statItem.icon}
                    delay={0.15 * index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Infinite Scrolling Corporate Partners Logo Stripe */}
          <TrustStripe />

          {/* Dynamic Who We Are Section */}
          <WhoWeAre />

          {/* Interactive Project Showcase with 3D Explode & Mobile Sticky Stack */}
          <InteractiveProjects />

          {/* Animated Dual-Marquee Services Overview */}
          <WhatWeDo />

          {/* Scroll-pinned Company History and Policies Stacking Section */}
          <HistoryAndPolicies />

          {/* Call to Action Video Section */}
          <CallToAction onOpenConsultation={() => setIsModalOpen(true)} />
        </>
      )}

      {/* Luxury Light Footer */}
      <footer id="contact" className="bg-white border-t border-black/10 text-text-charcoal/80 py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5">
            <div className="flex items-center gap-3">
              <img 
                src={unispaceLogo} 
                alt="Unispace Contracts Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-text-charcoal/60 leading-relaxed font-light font-sans">
              Designing and building commercial workspaces that inspire performance, foster community, and express organizational excellence.
            </p>
            {/* Colored Social Icons Row */}
            <div className="flex items-center justify-center md:justify-start gap-3.5 mt-2">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/unispace_contracts?igsh=cTl1eGJvdzVxYno1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#E1306C] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://m.facebook.com/profile.php?id=61590563107461" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/918882928434" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.628 3.977 14.153 2.955 11.53 2.954c-5.44 0-9.865 4.371-9.87 9.8-.002 1.83.483 3.61 1.402 5.2l-.307.35-3.08 1.127 1.147-3.003-.376-.237zm11.233-6.61c-.3-.149-1.777-.876-2.052-.976-.275-.099-.475-.149-.675.15-.2.299-.775.976-.95 1.175-.175.199-.35.224-.65.075-1.122-.562-1.924-.925-2.686-2.229-.2-.343.2-.319.575-1.07.1-.199.05-.373-.025-.522-.075-.149-.675-1.626-.925-2.224-.244-.588-.493-.508-.675-.518-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.299-1.05 1.026-1.05 2.503 0 1.478 1.075 2.902 1.225 3.102.15.199 2.115 3.227 5.125 4.525.715.309 1.275.494 1.712.633.719.228 1.373.197 1.892.119.579-.087 1.777-.726 2.027-1.427.25-.701.25-1.302.175-1.427-.075-.125-.275-.199-.575-.349z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@Unispace_contracts" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@unispacecontracts.in" 
                className="w-8 h-8 rounded-full bg-[#D44638] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3v18h24V3H0zm2 2h20v2L12 13 2 7V5zm0 14V9l10 6 10-6v10H2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
            <h4 className="font-display text-sm font-semibold text-primary-dark tracking-widest uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col items-center md:items-start gap-2.5 text-xs font-sans">
              <a href="#home" className="text-text-charcoal/70 hover:text-brand-accent transition-colors">Home</a>
              <a href="#projects" className="text-text-charcoal/70 hover:text-brand-accent transition-colors">Projects</a>
              <a href="#services" className="text-text-charcoal/70 hover:text-brand-accent transition-colors">Services</a>
              <a href="#contact" className="text-text-charcoal/70 hover:text-brand-accent transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
            <h4 className="font-display text-sm font-semibold text-primary-dark tracking-widest uppercase">
              Office HQ
            </h4>
            <div className="flex flex-col items-center md:items-start gap-3.5 text-xs font-sans">
              <div className="flex flex-col items-center md:flex-row md:items-start text-center md:text-left gap-2.5">
                <MapPin className="w-4 h-4 text-luxury-highlight shrink-0 mt-0.5" />
                <span className="text-text-charcoal/70">Office No-305, B-79, Sector -63, NOIDA</span>
              </div>
              <div className="flex flex-col items-center md:flex-row md:items-center text-center md:text-left gap-2.5">
                <Phone className="w-4 h-4 text-luxury-highlight shrink-0" />
                <a href="tel:+918882928434" className="text-text-charcoal/70 hover:text-luxury-highlight transition-colors">
                  +91 8882928434
                </a>
              </div>
              <div className="flex flex-col items-center md:flex-row md:items-center text-center md:text-left gap-2.5">
                <Mail className="w-4 h-4 text-luxury-highlight shrink-0" />
                <a href="mailto:info@unispacecontracts.in" className="text-text-charcoal/70 hover:text-luxury-highlight transition-colors">
                  info@unispacecontracts.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Form */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 w-full">
            <h4 className="font-display text-sm font-semibold text-primary-dark tracking-widest uppercase">
              Quick Inquiry
            </h4>
            {footerSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left py-4"
              >
                <div className="flex items-center gap-2 text-secondary-accent font-semibold text-xs mb-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message Sent Successfully</span>
                </div>
                <p className="text-[11px] text-text-charcoal/60 leading-relaxed max-w-[200px]">
                  Thank you! Our representative will call you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFooterSubmit} className="w-full flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-primary-bg border border-black/10 px-4 py-2.5 text-xs focus:outline-none focus:border-brand-accent font-sans text-primary-dark rounded-none"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Contact Number"
                  className="w-full bg-primary-bg border border-black/10 px-4 py-2.5 text-xs focus:outline-none focus:border-brand-accent font-sans text-primary-dark rounded-none"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-primary-bg border border-black/10 px-4 py-2.5 text-xs focus:outline-none focus:border-brand-accent font-sans text-primary-dark rounded-none"
                />
                <Button variant="primary" type="submit" className="w-full py-3 text-xs uppercase tracking-widest font-semibold justify-center rounded-none mt-1">
                  Send Message
                </Button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-widest uppercase text-text-charcoal/40 gap-4">
          <span>&copy; 2026 Unispace Contracts. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-brand-accent transition-colors">Terms of Use</a>
            <a href="#privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>

      {/* Animated Modal overlay (Consultation booking form) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-text-charcoal/60"
            />

            {/* Form Side-Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-md h-full bg-primary-bg shadow-2xl p-8 md:p-10 flex flex-col justify-between overflow-y-auto z-10"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="font-display text-xs font-semibold tracking-widest text-brand-accent uppercase">
                      Design Studio
                    </span>
                    <h3 className="font-display text-2xl font-light text-primary-dark tracking-wide mt-1">
                      Consultation Booking
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 rounded-full hover:bg-black/5 transition-colors cursor-pointer text-primary-dark"
                    aria-label="Close form"
                  >
                    <X className="w-6 h-6 stroke-[1.5]" />
                  </button>
                </div>

                {/* Form Logic */}
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary-accent/15 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-secondary-accent" />
                    </div>
                    <h4 className="font-display text-xl font-semibold text-primary-dark mb-2">
                      Inquiry Received
                    </h4>
                    <p className="text-xs text-text-charcoal/70 leading-relaxed max-w-xs">
                      An architecture partner from Unispace Contracts will review your corporate specifications and reach out within 1 business day.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                    
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Johnathan Doe"
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-luxury-highlight font-sans text-primary-dark"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jdoe@company.com"
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-luxury-highlight font-sans text-primary-dark"
                      />
                    </div>

                    {/* Contact Number */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 99000 88000"
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-luxury-highlight font-sans text-primary-dark"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corporation"
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-luxury-highlight font-sans text-primary-dark"
                      />
                    </div>

                    {/* Service Required */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                        Required Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-luxury-highlight font-sans text-primary-dark"
                      >
                        <option value="Interior Design">Corporate Interior Design</option>
                        <option value="Architecture">Commercial Architecture</option>
                        <option value="Fit-Out">Fit-Out & Turnkey Contracting</option>
                        <option value="Acoustic">Acoustic & Workplace Solutions</option>
                      </select>
                    </div>

                    {/* Specifications */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                        Project Scope & Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Briefly describe project square-footage, timelines, and locations..."
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-luxury-highlight font-sans text-primary-dark resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button variant="primary" type="submit" className="w-full py-4 mt-2">
                      Submit Consultation Request
                    </Button>
                  </form>
                )}
              </div>

              {/* Bottom Support Information */}
              <div className="mt-8 pt-6 border-t border-black/5 flex items-center gap-4 text-xs text-text-charcoal/50">
                <Calendar className="w-4 h-4 text-luxury-highlight shrink-0" />
                <span>Mon - Sat: 9:00 AM to 6:30 PM (IST)</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sticky Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/918882928434" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping opacity-75 group-hover:animate-none" />
        <svg className="w-7 h-7 text-white fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.988 4.479-9.988 9.984 0 1.76.459 3.477 1.33 4.996L2.005 22l5.163-1.354c1.472.802 3.125 1.226 4.84 1.226h.004c5.502 0 9.985-4.479 9.985-9.984C22 4.479 17.518 2 12.012 2zm0 18.294h-.003c-1.554 0-3.078-.418-4.408-1.208l-.316-.188-3.279.86.876-3.197-.206-.328c-.867-1.38-1.325-2.981-1.325-4.631 0-4.629 3.769-8.4 8.411-8.4 2.247 0 4.36.877 5.949 2.468 1.59 1.59 2.465 3.704 2.465 5.937 0 4.631-3.771 8.402-8.41 8.402zm4.61-6.289c-.253-.127-1.498-.738-1.73-.822-.232-.085-.401-.127-.57.127-.168.254-.654.822-.801.99-.148.169-.296.19-.55.064-.253-.127-1.071-.395-2.04-1.26-.754-.672-1.263-1.503-1.411-1.757-.148-.253-.016-.391.111-.518.114-.113.253-.296.38-.444.127-.148.169-.254.254-.423.085-.169.042-.317-.021-.444-.064-.127-.57-1.374-.781-1.88-.206-.5-.434-.43-.595-.436-.152-.007-.327-.008-.503-.008-.176 0-.465.066-.707.309-.243.243-.927.907-.927 2.212s.949 2.566 1.082 2.747c.133.18 1.861 2.842 4.51 3.981.63.271 1.122.433 1.507.556.634.201 1.21.173 1.666.105.508-.076 1.498-.612 1.708-1.204.21-.593.21-1.101.148-1.205-.063-.105-.232-.148-.485-.276z"/>
        </svg>
      </a>

      </div>
    </>
  );
}

export default App;
