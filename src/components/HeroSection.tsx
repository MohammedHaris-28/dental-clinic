import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { gsap } from 'gsap';
import {
  Calendar,
  Phone,
  Sparkles,
  ArrowUpRight,
  Medal,
  Star,
  Sparkle
} from "lucide-react";

// --- Sub-Components Extracted from MagicBento for Individual Card Injection ---

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '16, 185, 129'; // Updated to match your Emerald-500 palette (RGB)
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x: number, y: number, color: string): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

interface ParticleCardProps {
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const ParticleCard: React.FC<ParticleCardProps> = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = React.useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = React.useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => { particle.parentNode?.removeChild(particle); }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = React.useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
      }, index * 100);
      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
      if (enableTilt) {
        gsap.to(element, { rotateX: 3, rotateY: 3, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
      if (enableTilt) gsap.to(element, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' });
      if (enableMagnetism) gsap.to(element, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -6; 
        const rotateY = ((x - centerX) / centerX) * 6;
        gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.03;
        const magnetY = (y - centerY) * 0.03;
        magnetismAnimationRef.current = gsap.to(element, { x: magnetX, y: magnetY, duration: 0.3, ease: 'power2.out' });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y));

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute; width: ${maxDistance * 2}px; height: ${maxDistance * 2}px; border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.3) 0%, rgba(${glowColor}, 0.1) 40%, transparent 80%);
        left: ${x - maxDistance}px; top: ${y - maxDistance}px; pointer-events: none; z-index: 1000;
      `;
      element.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => ripple.remove() });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div ref={cardRef} className={`${className} particle-container magic-bento-card magic-bento-card--border-glow`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({ gridRef, disableAnimations = false, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR }) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed; width: 800px; height: 800px; border-radius: 50%; pointer-events: none;
      background: radial-gradient(circle, rgba(${glowColor}, 0.12) 0%, rgba(${glowColor}, 0.06) 20%, transparent 60%);
      z-index: 200; opacity: 0; transform: translate(-50%, -50%); mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll('.magic-bento-card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 });
        cards.forEach(card => (card as HTMLElement).style.setProperty('--glow-intensity', '0'));
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) glowIntensity = 1;
        else if (effectiveDistance <= fadeDistance) glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });
      const targetOpacity = minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;
      gsap.to(spotlightRef.current, { opacity: targetOpacity, duration: 0.2 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, spotlightRadius, glowColor]);

  return null;
};

// --- Core Data Matrix ---
const BENTO_SLIDES = [
  {
    primaryImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop", 
    secondaryImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop", 
    tertiaryImage: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1000&auto=format&fit=crop", 
    accentBg: "bg-emerald-500/10"
  },
  {
    primaryImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop", 
    secondaryImage: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1000&auto=format&fit=crop",
    tertiaryImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    accentBg: "bg-teal-500/10"
  },
  {
    primaryImage: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    tertiaryImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    accentBg: "bg-cyan-500/10"
  }
];

const AdaptiveBentoHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BENTO_SLIDES.length);
    }, 5500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20 pb-16 lg:py-0 antialiased selection:bg-emerald-500/20 bento-section">
      <GlobalSpotlight gridRef={gridRef} disableAnimations={isMobile} glowColor="16, 185, 129" />
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Side: Typography Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 order-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="self-center lg:self-start inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/60 text-emerald-800 text-xs font-bold tracking-widest uppercase"
            >
              <Sparkles size={13} className="text-emerald-500 animate-pulse" />
              <span>Chisel Dental™ Since 2004</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05]"
            >
              Healthy Smiles <br className="hidden sm:inline" /> Begin With{" "}
              <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-extrabold">
                Expert Dental Care.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-500 text-sm sm:text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed sm:leading-loose"
            >
              Two decades down the line, we’re not only the best but the biggest dental health center in Bangalore. Experience elite cosmetic and implant dental care driven by absolute clinical mastery.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:max-w-md lg:max-w-none mx-auto lg:mx-0"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 h-16 bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-slate-950/10 active:scale-[0.98] transition-all duration-200 border-0 group"
              >
                <Calendar className="h-4 w-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white transition-all" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 h-16 border-slate-200 bg-white text-slate-800 hover:bg-slate-50 font-bold text-sm shadow-sm active:scale-[0.98] transition-all duration-200"
              >
                <Phone className="mr-2.5 h-4 w-4 text-emerald-600" />
                <span>Call Reception</span>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-12 pt-8 border-t border-slate-100 max-w-xl mx-auto lg:mx-0 text-left"
            >
              <div>
                <span className="block text-xl sm:text-3xl font-black text-slate-900 tracking-tight">25k+</span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Cases Completed</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="block text-xl sm:text-3xl font-black text-slate-900 tracking-tight">18+</span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years Experience</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="flex items-center gap-0.5">
                  <span className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">5.0</span>
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive Bento Layout Framework */}
          <div className="lg:col-span-7 order-2 w-full mt-4 lg:mt-0">
            <div ref={gridRef} className="card-grid w-full max-w-xl lg:max-w-none mx-auto grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:aspect-[1.35/1] gap-4 lg:gap-5">
              
              {/* Box 1: Left Vertical Pillar */}
              <ParticleCard 
                disableAnimations={isMobile}
                glowColor="16, 185, 129"
                className="col-span-1 lg:col-span-1 lg:row-span-2 rounded-[24px] lg:rounded-[32px] bg-slate-50 border border-slate-100 shadow-sm aspect-[4/5] lg:aspect-auto"
                style={{'--glow-color': '16, 185, 129'} as React.CSSProperties}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide + "-b1"}
                    src={BENTO_SLIDES[activeSlide].primaryImage}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="w-full h-full object-cover absolute inset-0 pointer-events-none"
                    alt="Premium Operations"
                  />
                </AnimatePresence>
                <div className="absolute top-4 right-4 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-900 border border-slate-200/30 shadow-md z-20 cursor-pointer hover:scale-105 transition-transform duration-200">
                  <ArrowUpRight size={15} className="rotate-45 text-slate-800" />
                </div>
              </ParticleCard>

              {/* Box 2: Top Right Wide Banner */}
              <ParticleCard 
                disableAnimations={isMobile}
                glowColor="16, 185, 129"
                className="col-span-1 lg:col-span-2 lg:row-span-1 rounded-[24px] lg:rounded-[32px] bg-slate-50 border border-slate-100 shadow-sm aspect-square lg:aspect-auto"
                style={{'--glow-color': '16, 185, 129'} as React.CSSProperties}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide + "-b2"}
                    src={BENTO_SLIDES[activeSlide].secondaryImage}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.05 }}
                    className="w-full h-full object-cover absolute inset-0 pointer-events-none"
                    alt="Micro Surgical Precision"
                  />
                </AnimatePresence>
                <div className="absolute bottom-4 left-4 bg-slate-950/40 backdrop-blur-md px-3 py-1 rounded-full text-[8px] lg:text-[9px] font-mono tracking-widest text-white border border-white/10 uppercase font-bold z-20">
                  LIVE STUDIO
                </div>
              </ParticleCard>

              {/* Box 3: Bottom Middle Block */}
              <ParticleCard 
                disableAnimations={isMobile}
                glowColor="16, 185, 129"
                className="col-span-1 lg:col-span-1 lg:row-span-1 rounded-[24px] lg:rounded-[32px] bg-slate-50 border border-slate-100 shadow-sm aspect-square lg:aspect-auto"
                style={{'--glow-color': '16, 185, 129'} as React.CSSProperties}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide + "-b3"}
                    src={BENTO_SLIDES[activeSlide].tertiaryImage}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                    className="w-full h-full object-cover absolute inset-0 pointer-events-none"
                    alt="Elite Aesthetics"
                  />
                </AnimatePresence>
              </ParticleCard>

              {/* Box 4: Bottom Right Interactive Accent Card */}
              <ParticleCard 
                disableAnimations={isMobile}
                glowColor="16, 185, 129"
                className="col-span-1 lg:col-span-1 lg:row-span-1 bg-slate-50 border border-slate-100 rounded-[24px] lg:rounded-[32px] p-4 lg:p-6 flex flex-col justify-between items-center text-center shadow-sm aspect-square lg:aspect-auto"
                style={{'--glow-color': '16, 185, 129'} as React.CSSProperties}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 transition-colors duration-500 ${BENTO_SLIDES[activeSlide].accentBg}`}
                  />
                </AnimatePresence>
                
                <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm z-10 border border-slate-100">
                  <Medal className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                
                <div className="z-10 px-1">
                  <h4 className="font-black text-xs lg:text-[13px] text-slate-900 uppercase tracking-widest leading-none">TOP ELITE</h4>
                  <p className="text-[10px] lg:text-xs font-bold text-slate-400 mt-2 leading-none">Bangalore</p>
                </div>
                
                <Sparkle size={12} className="text-emerald-500/30 absolute bottom-3 right-3 hidden sm:block z-10" />
              </ParticleCard>

            </div>

            {/* Pagination Controls */}
            <div className="w-full mt-6 lg:mt-8 flex justify-center lg:justify-end items-center gap-2 px-1">
              {BENTO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
                    index === activeSlide ? "w-9 bg-slate-900" : "w-1.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Jump to panel view frame ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptiveBentoHero;