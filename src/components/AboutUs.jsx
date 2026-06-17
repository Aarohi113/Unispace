import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Users } from 'lucide-react';

const AboutUs = () => {
  // Animation Variants for Scroll-Triggered animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -80 : 80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
    }
  });

  return (
    <div className="bg-primary-bg min-h-screen pt-[80px] font-sans text-text-charcoal overflow-x-hidden">
      
      {/* 1. Hero Section (60-70vh) */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" 
            alt="Unispace Corporate Office Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] text-luxury-highlight uppercase block mb-4"
          >
            WHO WE ARE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            About <span className="font-semibold text-luxury-highlight">Unispace</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Simplifying how commercial workspaces are designed and built through a unified, end-to-end approach that guarantees performance, luxury, and quality.
          </motion.p>
        </div>

        {/* Blueprint gridlines inside hero container */}
        <div className="absolute inset-0 z-1 pointer-events-none opacity-5 flex justify-between px-10 md:px-24">
          <div className="w-[1px] h-full bg-white" />
          <div className="w-[1px] h-full bg-white hidden md:block" />
          <div className="w-[1px] h-full bg-white" />
        </div>
      </section>

      {/* 1.5. Corporate Overview & Trust Section */}
      <section className="py-20 bg-white border-b border-black/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Heading/Tagline */}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="lg:col-span-5 flex flex-col items-start"
            >
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-brand-accent uppercase block mb-3">
                CORPORATE PROFILE
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-primary-dark tracking-wide leading-tight">
                A Premier Vanguard in <br />
                <span className="font-semibold text-secondary-accent">Civil &amp; Corporate Fit-Outs</span>
              </h2>
              <div className="w-12 h-[2px] bg-brand-accent mt-6" />
            </motion.div>

            {/* Right side: Refined Copy & Clients */}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="lg:col-span-7 flex flex-col gap-8"
            >
              <p className="text-base md:text-lg text-text-charcoal/80 leading-relaxed font-sans font-light">
                Unispace Contracts Private Limited stands as a premier vanguard in the civil and interior fit-out industry, orchestrating high-end design-build solutions tailored exclusively for modern corporate environments. With an illustrious legacy of execution excellence, we have collaborated with global industry giants, engineering environments that foster innovation and growth.
              </p>
              
              <p className="text-sm md:text-base text-text-charcoal/65 leading-relaxed font-sans">
                Our comprehensive expertise spans the design, execution, and master management of large-scale commercial infrastructures—harmonizing strict operational efficiency, sophisticated design aesthetics, and seamless functionality.
              </p>

              {/* Client Logotypes list/badges */}
              <div className="pt-6 border-t border-black/5">
                <span className="text-[10px] font-semibold tracking-wider text-text-charcoal/40 uppercase block mb-4">
                  TRUSTED COLLABORATORS &amp; PARTNERS
                </span>
                <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
                  {['HCL', 'Genpact', 'Microsoft', 'Google', 'Gail', 'Adani', 'Samsung'].map((client) => (
                    <span 
                      key={client} 
                      className="text-xs md:text-sm font-semibold text-text-charcoal/60 bg-primary-bg px-3 py-1.5 rounded-md border border-black/5 hover:border-brand-accent/25 hover:text-brand-accent transition-all duration-300"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Section 2: Left Image, Right Text */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Animated Image */}
            <motion.div 
              variants={imageVariants('left')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-primary-dark group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80" 
                alt="Workspace Collaboration Areas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <div className="bg-primary-dark text-white px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase inline-block">
                  ESTABLISHED 2009
                </div>
              </div>
            </motion.div>

            {/* Right Side: Animated Text */}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-brand-accent uppercase block mb-3">
                OUR VISION
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-primary-dark tracking-wide leading-tight mb-6">
                Creating environments where <br />
                <span className="font-semibold text-secondary-accent">businesses thrive and connect.</span>
              </h2>
              <p className="text-sm md:text-base text-text-charcoal/70 leading-relaxed mb-6 font-sans">
                At Unispace Contracts, we envision workspaces that transcend traditional layouts. Over the last 17+ years, we have built a reputation of excellence by designing and constructing commercial interiors that align perfectly with corporate brand values and operational workflows.
              </p>
              <p className="text-sm md:text-base text-text-charcoal/70 leading-relaxed mb-8 font-sans">
                By integrating state-of-the-art virtual design tools, pre-construction visualization, and advanced building technologies, we eliminate traditional design bottlenecks, ensuring that every project is delivered on time, within budget, and with zero non-performance.
              </p>
              <div className="grid grid-cols-2 gap-6 w-full pt-4 border-t border-black/5">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark text-sm">Target Driven</h4>
                    <p className="text-xs text-text-charcoal/60 mt-0.5">Strict adherence to delivery timelines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-brand-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark text-sm">Premium Quality</h4>
                    <p className="text-xs text-text-charcoal/60 mt-0.5">Zero compromise on materials & safety.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Section 3: Right Image, Left Text */}
      <section className="py-20 md:py-28 bg-primary-bg relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Animated Text */}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="lg:col-span-6 lg:order-1 flex flex-col items-start text-left"
            >
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-brand-accent uppercase block mb-3">
                OUR METHODOLOGY
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-primary-dark tracking-wide leading-tight mb-6">
                A unified, end-to-end <br />
                <span className="font-semibold text-secondary-accent">design &amp; build journey.</span>
              </h2>
              <p className="text-sm md:text-base text-text-charcoal/70 leading-relaxed mb-6 font-sans">
                Our approach consolidates complex development lifecycle stages into a single, cohesive timeline. We handle everything from space planning, architecture, 3D visualization, material procurement, MEP and HVAC engineering, to final interior fit-out.
              </p>
              <p className="text-sm md:text-base text-text-charcoal/70 leading-relaxed mb-8 font-sans">
                This single-point-of-contact execution model eliminates coordination conflicts between designers and contractors. We hold full accountability for the design integrity, cost efficiency, and construction precision of your future commercial infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-6 w-full pt-4 border-t border-black/5">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-brand-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark text-sm">Award Winning</h4>
                    <p className="text-xs text-text-charcoal/60 mt-0.5">Recognized for commercial design excellence.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-brand-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark text-sm">Global Standards</h4>
                    <p className="text-xs text-text-charcoal/60 mt-0.5">Adhering to world-class safety & design norms.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Animated Image */}
            <motion.div 
              variants={imageVariants('right')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="lg:col-span-6 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-primary-dark group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Corporate Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <div className="bg-luxury-highlight text-primary-dark px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase inline-block">
                  WORLD-CLASS STANDARDS
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-20 md:py-28 bg-white border-t border-black/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-brand-accent uppercase block mb-3">
              OUR LEADERSHIP
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-primary-dark tracking-wide leading-tight">
              The Visionaries Behind <span className="font-semibold text-secondary-accent">Unispace Contracts</span>
            </h2>
            <div className="w-16 h-[2px] bg-brand-accent mx-auto mt-6" />
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Leader 1: Amod Kumar Giri */}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-col items-center text-center md:items-start md:text-left bg-primary-bg rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-primary-dark group">
                <img 
                  src="/amod-giri.png" 
                  alt="Amod Kumar Giri - MD & CEO" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary-dark tracking-wide">Amod Kumar Giri</h3>
              <p className="text-xs font-semibold tracking-wider text-brand-accent uppercase mt-1 mb-6">MD &amp; CEO</p>
              
              <blockquote className="relative border-l-2 border-brand-accent/40 pl-4 py-1 italic text-text-charcoal/70 text-sm font-sans leading-relaxed">
                “For over 17 years, our success has been built on trust, quality, and enduring partnerships. At Unispace Contracts, we don’t just construct spaces—we create environments that enable businesses to thrive.”
              </blockquote>
            </motion.div>

            {/* Leader 2: Suganti Giri */}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-col items-center text-center md:items-start md:text-left bg-primary-bg rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-primary-dark group">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                  alt="Suganti Giri - Director" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary-dark tracking-wide">Suganti Giri</h3>
              <p className="text-xs font-semibold tracking-wider text-brand-accent uppercase mt-1 mb-6">Director</p>
              
              <blockquote className="relative border-l-2 border-brand-accent/40 pl-4 py-1 italic text-text-charcoal/70 text-sm font-sans leading-relaxed">
                “True design integrity lies in the alignment of functionality and aesthetics. We are committed to translating our clients' organizational cultures into world-class, productive infrastructures.”
              </blockquote>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
