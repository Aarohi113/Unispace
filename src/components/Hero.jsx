import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Button from './Button';
import video1 from '../assets/video-1.mp4';
import video2 from '../assets/video-2.mp4';
import video3 from '../assets/video-3.mp4';

const Hero = ({ onExploreProjects, onContactUs }) => {
  const containerRef = useRef(null);

  // Manage state and refs for seamless triple video looping
  const [activeVideo, setActiveVideo] = useState(1);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  // Loop transition functions that cross-fade between the three videos
  const handleEnded1 = () => {
    setActiveVideo(2);
    if (videoRef2.current) {
      videoRef2.current.currentTime = 0;
      videoRef2.current.play().catch(() => { });
    }
    // Delay pause of video 1 to let the cross-fade opacity transition complete
    setTimeout(() => {
      if (videoRef1.current) videoRef1.current.pause();
    }, 800);
  };

  const handleEnded2 = () => {
    setActiveVideo(3);
    if (videoRef3.current) {
      videoRef3.current.currentTime = 0;
      videoRef3.current.play().catch(() => { });
    }
    // Delay pause of video 2 to let the cross-fade opacity transition complete
    setTimeout(() => {
      if (videoRef2.current) videoRef2.current.pause();
    }, 800);
  };

  const handleEnded3 = () => {
    setActiveVideo(1);
    if (videoRef1.current) {
      videoRef1.current.currentTime = 0;
      videoRef1.current.play().catch(() => { });
    }
    // Delay pause of video 3 to let the cross-fade opacity transition complete
    setTimeout(() => {
      if (videoRef3.current) videoRef3.current.pause();
    }, 800);
  };

  // Ensure first video auto-plays on component load
  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.play().catch(() => { });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Filter scroll progress through a spring to make animations buttery smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  // Map smooth progress to video scale, translation, and border-radius
  // Video scales down to card format during the scroll transition exit
  const videoScale = useTransform(smoothProgress, [0.55, 0.9], [1, 0.88]);
  const videoY = useTransform(smoothProgress, [0.55, 0.9], [0, -30]);
  const videoBorderRadius = useTransform(smoothProgress, [0.55, 0.9], ["0px", "28px"]);

  // Map smooth progress to text overlays:
  // - Starts completely visible at scroll 0 (opacity 1, y: 0)
  // - Slides up & fades out smoothly as scroll progresses
  const textOpacity = useTransform(smoothProgress, [0, 0.4, 0.75], [1, 1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.4, 0.75], [0, -45, -100]);

  // Coordinates overlay fades in and out with scroll
  const coordsOpacity = useTransform(smoothProgress, [0, 0.35, 0.55, 0.85], [0, 0.3, 0.3, 0]);

  return (
    // Parent scroll track: 180vh long to give space for scroll-linked animations
    <div ref={containerRef} className="relative h-[180vh] bg-primary-bg">

      {/* Sticky container: stays locked in view with layout optimized to fit all heights */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pt-20 pb-6 md:pb-10">

        {/* Background Video Wrapper - animated on scroll */}
        <motion.div
          style={{
            scale: videoScale,
            y: videoY,
            borderRadius: videoBorderRadius
          }}
          className="absolute top-0 md:top-0 h-[65vh] md:h-full left-0 right-0 z-0 overflow-hidden origin-center bg-primary-dark"
        >
          {/* Video 1 (video-1.mp4 local asset) */}
          <video
            ref={videoRef1}
            autoPlay
            muted
            preload="auto"
            playsInline
            src={video1}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: activeVideo === 1 ? 1 : 0, zIndex: activeVideo === 1 ? 1 : 0 }}
            onEnded={handleEnded1}
          />
          {/* Video 2 (video-2.mp4 local asset) */}
          <video
            ref={videoRef2}
            muted
            preload="auto"
            playsInline
            src={video2}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: activeVideo === 2 ? 1 : 0, zIndex: activeVideo === 2 ? 1 : 0 }}
            onEnded={handleEnded2}
          />
          {/* Video 3 (video-3.mp4 local asset) */}
          <video
            ref={videoRef3}
            muted
            preload="auto"
            playsInline
            src={video3}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: activeVideo === 3 ? 1 : 0, zIndex: activeVideo === 3 ? 1 : 0 }}
            onEnded={handleEnded3}
          />
 
          {/* Blueprint gridlines inside video container */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-5 flex justify-between px-10 md:px-24">
            <div className="w-[1px] h-full bg-white" />
            <div className="w-[1px] h-full bg-white hidden md:block" />
            <div className="w-[1px] h-full bg-white" />
          </div>
        </motion.div>
 
        {/* Hero Content Overlay (fades out and slides up on scroll) */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute top-[80px] left-0 right-0 h-[calc(65vh-80px)] md:relative md:h-auto md:top-auto md:left-auto md:right-auto z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center md:block mb-5 md:mb-6 pointer-events-none"
        >
          <div className="max-w-3xl text-left pointer-events-auto">
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border-l-2 border-luxury-highlight bg-black/20 backdrop-blur-sm mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-white/90 uppercase font-sans">
                Corporate Interior & Fit-Out Experts
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-wide leading-[1.3] md:leading-[1.15] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
              Transforming <br className="hidden md:inline" />
              Workspaces Into <br />
              <span className="font-semibold text-luxury-highlight relative inline-block group">
                Experiences
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-luxury-highlight/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-white/95 leading-relaxed font-normal mb-6 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Creating premium work environments with innovative design, precision execution and world-class craftsmanship.
            </p>

            {/* Buttons */}
            <div className="flex flex-row flex-wrap gap-4 items-center">
              <Button variant="primary" onClick={onExploreProjects}>
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={onContactUs} className="bg-black/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-dark">
                Contact Us
                <ArrowUpRight className="w-4 h-4 text-luxury-highlight group-hover:text-white" />
              </Button>
            </div>
          </div>
        </motion.div>



        {/* Coordinates overlay - scales down with scroll */}
        <motion.div
          style={{ opacity: coordsOpacity }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-4 text-[9px] tracking-[0.3em] uppercase text-white/30 [writing-mode:vertical-lr]"
        >
          <span>UNISPACE STUDIO &copy;</span>
          <div className="w-[1px] h-16 bg-white/20" />
          <span>12.9716&deg; N, 77.5946&deg; E</span>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
