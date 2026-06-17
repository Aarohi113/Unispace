import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Read Google Web App URL from environment variables
    const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;
    
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams(formData).toString()
        });
      } catch (error) {
        console.error("Error submitting contact form:", error);
      }
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3500);
  };

  return (
    <div className="bg-primary-bg min-h-screen pt-[80px] font-sans text-text-charcoal overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" 
            alt="Contact Us Corporate Background" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] text-brand-accent uppercase block mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-wide leading-tight mb-4"
          >
            Connect With <span className="font-semibold text-luxury-highlight">Unispace</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-xl mx-auto font-light uppercase tracking-wider"
          >
            Ready to design your workspace? Drop us a line or visit our design headquarters.
          </motion.p>
        </div>
      </section>

      {/* 2. Content Grid Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Contact Information & Cards */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs tracking-[0.25em] text-brand-accent font-semibold uppercase block mb-2 font-sans">
                  Design Headquarters
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-normal text-primary-dark tracking-wide leading-snug">
                  Corporate Offices & Studio
                </h2>
                <p className="font-sans text-sm text-text-charcoal/70 leading-relaxed font-light mt-3">
                  Located in the prominent commercial center of Noida, our corporate office houses our primary design team, consultation center, and project planning studio.
                </p>
              </div>

              {/* Cards Container */}
              <div className="flex flex-col gap-5">
                
                {/* Name & Address */}
                <div className="flex gap-4 p-5 bg-primary-bg border border-black/5 hover:border-brand-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-text-charcoal/40 font-semibold">Office Address</span>
                    <span className="font-display text-sm font-semibold text-primary-dark">Unispace Contracts</span>
                    <span className="text-xs text-text-charcoal/70 leading-relaxed">Office No-305, B-79, Sector -63, NOIDA, Uttar Pradesh, 201301</span>
                  </div>
                </div>

                {/* Direct Contact Numbers */}
                <div className="flex gap-4 p-5 bg-primary-bg border border-black/5 hover:border-brand-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-text-charcoal/40 font-semibold">Phone Inquiries</span>
                    <a href="tel:+918882928434" className="text-sm font-semibold text-primary-dark hover:text-brand-accent transition-colors">
                      +91 8882928434
                    </a>
                    <span className="text-xs text-text-charcoal/50">Call or message on WhatsApp for instant booking</span>
                  </div>
                </div>

                {/* Corporate Emails */}
                <div className="flex gap-4 p-5 bg-primary-bg border border-black/5 hover:border-brand-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/5 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-text-charcoal/40 font-semibold">Email Directory</span>
                    <a href="mailto:info@unispacecontracts.in" className="text-sm font-semibold text-primary-dark hover:text-brand-accent transition-colors">
                      info@unispacecontracts.in
                    </a>
                    <span className="text-xs text-text-charcoal/50">For career opportunity: HR@unispacecontracts.in</span>
                  </div>
                </div>

                {/* Studio Timings */}
                <div className="flex gap-4 p-5 bg-primary-bg border border-black/5 hover:border-brand-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/5 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-text-charcoal/40 font-semibold">Working Hours</span>
                    <span className="text-sm font-semibold text-primary-dark">Monday - Saturday</span>
                    <span className="text-xs text-text-charcoal/70">09:00 AM - 06:30 PM (IST)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: High-end Contact Form */}
            <div className="lg:col-span-7 bg-primary-bg border border-black/5 p-8 md:p-10 rounded-2xl shadow-sm relative overflow-hidden">
              
              <div className="flex flex-col mb-8">
                <span className="text-xs tracking-[0.25em] text-brand-accent font-bold uppercase">
                  Direct Channel
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-light text-primary-dark tracking-wide mt-1">
                  Send A Message
                </h3>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary-accent/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-secondary-accent animate-bounce" />
                  </div>
                  <h4 className="font-display text-2xl font-semibold text-primary-dark mb-2">
                    Inquiry Transmitted
                  </h4>
                  <p className="text-sm text-text-charcoal/70 leading-relaxed max-w-sm">
                    Thank you for contacting Unispace Contracts. One of our lead consulting architects will contact you within 1 business day to discuss your corporate design needs.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  
                  {/* Name and Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-accent font-sans text-primary-dark"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 99000 88000"
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-accent font-sans text-primary-dark"
                      />
                    </div>
                  </div>

                  {/* Email and Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jdoe@company.com"
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-accent font-sans text-primary-dark"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                        Inquiry Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Scope / Consultation"
                        className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-accent font-sans text-primary-dark"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-primary-dark/60 mb-2">
                      Message Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Please specify structural size, workspace style, requirements, location, and timelines..."
                      className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-accent font-sans text-primary-dark resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <span>Submit Query</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Map Section */}
      <section className="relative w-full h-[450px] bg-primary-bg overflow-hidden border-t border-black/5">
        <iframe 
          title="Unispace Noida HQ Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.138676239109!2d77.38870107528889!3d28.625595975668352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef01265ed64d%3A0xe543ef67dfbbcd0a!2sB-79%2C%20B%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1718621250000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) brightness(0.95)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </div>
  );
};

export default ContactUs;
