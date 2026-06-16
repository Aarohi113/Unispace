import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const items = [
  {
    type: "History",
    title: "UNISPACE CONTRACTS",
    subtitle: "Brief History & Evolution",
    desc: [
      "Originally established in 2009 as Golden Global Contracts with a vision to deliver high-quality civil and interior fit-out solutions, we built a strong reputation through consistent technical expertise.",
      "In 2017, the company was formally incorporated as Unispace Contracts Pvt. Ltd. to execute large-scale corporate construction and high-finish CXO-grade fit-out projects.",
      "Today, with 17+ years of experience, we maintain an impeccable track record with zero cases of non-performance, zero instances of blacklisting, and zero litigation history."
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    type: "Policy",
    num: "01",
    title: "QUALITY POLICY",
    desc: "We are committed to delivering high quality in all our projects by using superior materials and skilled workmanship. Proper quality checks and supervision are maintained at every stage of execution to ensure compliance with client requirements and industry standards. Our focus on precision, consistency, and timely delivery helps us achieve reliable, durable, and defect-free work.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    type: "Policy",
    num: "02",
    title: "HEALTH, SAFETY & ENVIRONMENT POLICY",
    desc: "We are committed to ensuring safe working conditions and protecting the environment in all our activities. All work is carried out as per legal and client requirements, with strict safety practices and continuous monitoring to prevent risks and ensure compliance.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    type: "Policy",
    num: "03",
    title: "ANTI-FORCED & CHILD LABOR POLICY",
    desc: "We strictly prohibit forced and child labor across all our projects and offices. All employees and subcontractors must comply with applicable laws and uphold ethical work practices. We are committed to maintaining a workplace based on respect, dignity, and legal compliance.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    type: "Policy",
    num: "04",
    title: "CODE OF CONDUCT & CONFLICT OF INTEREST",
    desc: "We are committed to maintaining high standards of integrity, professionalism, and ethical conduct in all our operations. All employees must act with honesty and disclose any potential conflicts of interest. We promote transparency, accountability, and fair dealings to ensure a trustworthy work environment.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    type: "Policy",
    num: "05",
    title: "DATA SECURITY AND PRIVACY POLICY",
    desc: "We are committed to protecting client data and maintaining strict data security and privacy standards. Access to sensitive information is controlled and used only as permitted. We follow applicable laws, implement security measures, and conduct regular monitoring to ensure data protection and confidentiality.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    type: "Policy",
    num: "06",
    title: "SUSTAINABLE PROCUREMENT POLICY",
    desc: "Unispace Contracts Pvt Ltd is committed to sustainable procurement by prioritizing eco-friendly materials, ethical practices, and responsible suppliers. We consider the full life-cycle impact of materials to promote energy efficiency and reduce waste, while actively collaborating with suppliers to support innovation and positive environmental impact.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
  }
];

const HistoryAndPolicies = () => {
  const containerRef = useRef(null);

  // Monitor scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll progression using spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    restDelta: 0.001
  });

  // Transforms for cards sliding in alternately from left (-100vw) and right (100vw)
  // Card 0 (History) starts centered
  const x0 = "0vw";
  const x1 = useTransform(smoothProgress, [0.08, 0.20], ["-100vw", "0vw"]); // Left slide
  const x2 = useTransform(smoothProgress, [0.22, 0.34], ["100vw", "0vw"]);  // Right slide
  const x3 = useTransform(smoothProgress, [0.36, 0.48], ["-100vw", "0vw"]); // Left slide
  const x4 = useTransform(smoothProgress, [0.50, 0.62], ["100vw", "0vw"]);  // Right slide
  const x5 = useTransform(smoothProgress, [0.64, 0.76], ["-100vw", "0vw"]); // Left slide
  const x6 = useTransform(smoothProgress, [0.78, 0.90], ["100vw", "0vw"]);  // Right slide

  const xTransforms = [x0, x1, x2, x3, x4, x5, x6];

  return (
    // Long track section to allow enough space for 7 containers to slide in
    <div ref={containerRef} className="relative h-[400vh] bg-primary-bg">
      
      {/* Sticky viewport content container */}
      <div className="sticky top-[60px] md:top-0 h-[calc(100vh-60px)] md:h-screen w-full overflow-hidden flex flex-col justify-center items-center py-6 md:py-12 px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 max-w-2xl z-10">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-brand-accent uppercase block mb-2 font-sans">
            Trust &amp; Compliance
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-light text-primary-dark tracking-wide">
            Our Journey &amp; Code of Conduct
          </h2>
          <p className="font-sans text-[10px] md:text-xs text-text-charcoal/50 mt-1 uppercase tracking-widest">
            (Scroll down to view history and core policies)
          </p>
        </div>

        {/* Stack Container */}
        <div className="relative w-full max-w-5xl h-[480px] md:h-[520px] lg:h-[560px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              style={{ x: xTransforms[index], zIndex: (index + 1) * 10 }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <div className="w-full h-full bg-primary-dark text-white border border-luxury-highlight/15 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] grid grid-cols-1 md:grid-cols-12">
                
                {/* Left Side: Information Content */}
                <div className="col-span-1 md:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col justify-center overflow-y-auto">
                  {item.type === "History" ? (
                    <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
                      <span className="text-[10px] tracking-[0.25em] text-luxury-highlight font-bold uppercase font-sans">
                        {item.subtitle}
                      </span>
                      <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-semibold text-white tracking-wide leading-snug border-b border-white/10 pb-3 break-words w-full">
                        {item.title}
                      </h3>
                      <div className="flex flex-col gap-3 font-sans text-xs text-white/80 leading-relaxed font-light">
                        {item.desc.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-luxury-highlight/15 border border-luxury-highlight/20 text-xs font-bold text-luxury-highlight font-sans">
                          {item.num}
                        </span>
                        <span className="text-[10px] tracking-[0.25em] text-luxury-highlight font-bold uppercase font-sans">
                          Corporate Governance
                        </span>
                      </div>
                      <h3 className="font-display text-base sm:text-lg md:text-2xl font-semibold text-white tracking-wide leading-snug border-b border-white/10 pb-3 break-words w-full">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-white/85 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Side: Showcase Image */}
                <div className="hidden md:block md:col-span-5 relative bg-black/40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-transparent to-transparent pointer-events-none" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HistoryAndPolicies;
