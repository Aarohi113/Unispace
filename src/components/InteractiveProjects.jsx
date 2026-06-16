import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const InteractiveProjects = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Motion values to track normalize coordinate offsets
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Framer Motion spring physics config for natural weight/glide
  const springConfig = { damping: 25, stiffness: 120, mass: 0.6 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  const handleMouseMove = (e) => {
    // Disable on mobile/touch viewports
    if (!isDesktop) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates around center (0,0)
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Scale rotation to max +/- 10 degrees
    x.set((mouseX / (width / 2)) * 10);
    y.set((mouseY / (height / 2)) * -10);
  };

  const handleMouseLeave = () => {
    // Return to zero orientation smoothly
    x.set(0);
    y.set(0);
  };

  return (
    <div id="projects" className="unispace-projects-hover-section border-t border-black/5">
      <div className="projects-viewport-wrapper">
        
        <div className="projects-section-header">
          <span className="proj-tag text-brand-accent tracking-[0.25em] font-sans font-semibold text-xs mb-3 block">
            Future Perfect
          </span>
          <h2 className="proj-main-title font-display text-2xl md:text-4xl font-light text-primary-dark tracking-wide leading-tight mb-4">
            Inspiring The Next Generation With Futuristic End-To-End Spaces.
          </h2>
          <span className="desktop-instruction font-sans text-xs md:text-sm text-text-charcoal/40 italic block">
            (Hover over the center card to explore projects)
          </span>
        </div>

        <div className="projects-hover-orbit-container">
          <motion.div 
            className="projects-pentagon-orbit group/orbit"
            style={isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Concentric Architectural Spin Rings (slow ambient rotations) - hidden on mobile to prevent overflow */}
            <div className="absolute inset-0 z-0 hidden lg:flex items-center justify-center pointer-events-none opacity-20 group-hover/orbit:opacity-40 transition-opacity duration-700 select-none">
              <div className="w-[520px] h-[520px] rounded-full border border-dashed border-luxury-highlight/35 animate-spin-slow-forward" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-luxury-highlight/20 animate-spin-slow-reverse" />
              <div className="absolute w-[680px] h-[680px] rounded-full border border-luxury-highlight/10 animate-spin-slow-super-forward" />
            </div>

            {/* CARD 1: HCL (Central Master Card) */}
            <div className="project-card central-master-card" style={{ '--card-index': 1 }}>
              <img 
                src="https://unispacecontracts.com/wp-content/uploads/2026/06/Screenshot-2026-06-16-104123.png" 
                alt="HCL Workspace" 
                loading="eager" 
                decoding="async"
              />
              <div className="proj-card-overlay"></div>
              <div className="proj-card-details">
                <h3 className="font-display font-light tracking-wide text-white mb-2">HCL<br />Workspace</h3>
                <p className="proj-card-desc font-sans text-xs text-white/80 leading-relaxed">
                  Interior built with premium acoustic custom ceiling elements and modern turnkey fit-outs.
                </p>
                <a href="#contact" className="view-details-link font-sans text-xs tracking-wider">
                  View Details ↗
                </a>
              </div>
            </div>

            {/* CARD 2: Microsoft Hub (Top Left Satellite Card) */}
            <div className="project-card exploded-satellite-card pos-top-left" style={{ '--card-index': 2 }}>
              <img 
                src="https://unispacecontracts.com/wp-content/uploads/2026/06/Screenshot-2026-06-16-103612.png" 
                alt="Microsoft Corporate Hub" 
                loading="lazy" 
                decoding="async"
              />
              <div className="proj-card-overlay"></div>
              <div className="proj-card-details">
                <h3 className="font-display font-light tracking-wide text-white mb-2">Microsoft<br />Hub</h3>
                <p className="proj-card-desc font-sans text-xs text-white/80 leading-relaxed">
                  Ergonomic architectural layout engineered for high productivity corporate teams.
                </p>
                <a href="#contact" className="view-details-link font-sans text-xs tracking-wider">
                  View Details ↗
                </a>
              </div>
            </div>

            {/* CARD 3: Genpact - Interior (Top Right Satellite Card) */}
            <div className="project-card exploded-satellite-card pos-top-right" style={{ '--card-index': 3 }}>
              <img 
                src="https://unispacecontracts.com/wp-content/uploads/2026/06/Screenshot-2026-06-16-103424.png" 
                alt="Genpact - Interior" 
                loading="lazy" 
                decoding="async"
              />
              <div className="proj-card-overlay"></div>
              <div className="proj-card-details">
                <h3 className="font-display font-light tracking-wide text-white mb-2">Genpact<br />Interior</h3>
                <p className="proj-card-desc font-sans text-xs text-white/80 leading-relaxed">
                  Tech-led collaborative spaces integrated with biophilic design systems.
                </p>
                <a href="#contact" className="view-details-link font-sans text-xs tracking-wider">
                  View Details ↗
                </a>
              </div>
            </div>

            {/* CARD 4: TATA Project (Bottom Left Satellite Card) */}
            <div className="project-card exploded-satellite-card pos-bottom-left" style={{ '--card-index': 4 }}>
              <img 
                src="https://unispacecontracts.com/wp-content/uploads/2026/06/Screenshot-2026-06-16-104551.png" 
                alt="TATA Project" 
                loading="lazy" 
                decoding="async"
              />
              <div className="proj-card-overlay"></div>
              <div className="proj-card-details">
                <h3 className="font-display font-light tracking-wide text-white mb-2">TATA<br />Project</h3>
                <p className="proj-card-desc font-sans text-xs text-white/80 leading-relaxed">
                  Minimalistic monochromatic theme engineered with luxury executive lounges.
                </p>
                <a href="#contact" className="view-details-link font-sans text-xs tracking-wider">
                  View Details ↗
                </a>
              </div>
            </div>

            {/* CARD 5: Gail Project (Bottom Right Satellite Card) */}
            <div className="project-card exploded-satellite-card pos-bottom-right" style={{ '--card-index': 5 }}>
              <img 
                src="https://unispacecontracts.com/wp-content/uploads/2026/06/Screenshot-2026-06-16-104307.png" 
                alt="Gail Project" 
                loading="lazy" 
                decoding="async"
              />
              <div className="proj-card-overlay"></div>
              <div className="proj-card-details">
                <h3 className="font-display font-light tracking-wide text-white mb-2">Gail<br />Project</h3>
                <p className="proj-card-desc font-sans text-xs text-white/80 leading-relaxed">
                  Premium modern conference layouts backed by automated utilities.
                </p>
                <a href="#contact" className="view-details-link font-sans text-xs tracking-wider">
                  View Details ↗
                </a>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default InteractiveProjects;
