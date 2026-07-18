import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  Sparkle,
  MapPin,
  Clock,
  UserCheck
} from "lucide-react";

// Local asset imports matching your dynamic gallery framework
import img1 from "@/assets/img 1.png";
import img2 from "@/assets/img 2.png";
import img3 from "@/assets/img 3.png";
import img4 from "@/assets/img 4.png";

// --- Sub-Components Extracted for Individual Card Glow Injections ---

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '245, 158, 11'; 
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
    const { width, height = 0 } = cardRef.current.getBoundingClientRect();
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
        const rotateX = ((y - centerY) / centerY) * -4; 
        const rotateY = ((x - centerX) / centerX) * 4;
        gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.02;
        const magnetY = (y - centerY) * 0.02;
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
        background: radial-gradient(circle, rgba(${glowColor}, 0.2) 0%, rgba(${glowColor}, 0.05) 40%, transparent 80%);
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
    <div ref={cardRef} className={`${className} particle-container magic-bento-card`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
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
      background: radial-gradient(circle, rgba(${glowColor}, 0.08) 0%, rgba(${glowColor}, 0.03) 25%, transparent 60%);
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

const AdaptiveBentoHero = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const DECK_CARDS = [
    {
      id: 1,
      image: img1, 
      label: "Premium Orthodontics",
      location: "Pro Smile Dental Clinic",
      infoLabel: "Clinical Mastery",
      infoValue: "Elite Track",
      rating: "5.0",
      accentBg: "bg-amber-500/5"
    },
    {
      id: 2,
      image: img2, 
      label: "Invisalign Aligners",
      location: "Pro Smile Dental Clinic",
      infoLabel: "Clarity Level",
      infoValue: "Ultra-Invisible",
      rating: "4.9",
      accentBg: "bg-orange-500/5"
    },
    {
      id: 3,
      image: img3, 
      label: "Smile Transformations",
      location: "Pro Smile Dental Clinic",
      infoLabel: "Elite Expertise",
      infoValue: "Happy Smiles",
      rating: "5.0",
      accentBg: "bg-yellow-500/5"
    },
    {
      id: 4,
      image: img4, 
      label: "Pediatric Dentistry",
      location: "Pro Smile Dental Clinic",
      infoLabel: "Patient Care",
      infoValue: "Max Comfort",
      rating: "5.0",
      accentBg: "bg-amber-600/5"
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const slideInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DECK_CARDS.length);
    }, 5000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(slideInterval);
    };
  }, [DECK_CARDS.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-28 pb-16 lg:py-0 antialiased selection:bg-amber-500/20 bento-section">
      <GlobalSpotlight gridRef={deckRef} disableAnimations={isMobile} glowColor="245, 158, 11" />
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 order-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="self-center lg:self-start inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/[0.06] border border-amber-500/20 text-amber-900 text-xs font-bold tracking-widest uppercase shadow-sm"
            >
              <Sparkles size={13} className="text-amber-600 fill-amber-500/20" />
              <span>Pro-Smile Dental & Orthodontic Centre</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05]"
            >
              Healthy Smiles <br className="hidden sm:inline" /> Begin With{" "}
              <span className="block mt-2 bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 bg-clip-text text-transparent font-extrabold">
                Expert Dental Care.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-500 text-sm sm:text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed sm:leading-loose"
            >
              Two decades down the line, we’re delivering elite cosmetic, orthodontic, and implant dental care driven by absolute clinical mastery. Experience world-class oral treatment tailored to your lifestyle.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:max-w-md lg:max-w-none mx-auto lg:mx-0"
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://click4appointment.com/book-appointment-guest/959570/3914",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="w-full sm:w-auto rounded-full px-8 h-16 bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-slate-950/10 active:scale-[0.98] transition-all duration-200 border-0 group"
              >
                <Calendar className="h-4 w-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
                <ArrowUpRight
                  size={16}
                  className="text-slate-400 group-hover:text-white transition-all"
                />
              </Button>

              <a href="tel:+918971619006" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 h-16 border-slate-200 bg-white text-slate-800 hover:bg-slate-50 font-bold text-sm shadow-sm active:scale-[0.98] transition-all duration-200"
                >
                  <Phone className="mr-2.5 h-4 w-4 text-amber-600" />
                  <span>Call Reception</span>
                </Button>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-12 pt-8 border-t border-slate-100 max-w-xl mx-auto lg:mx-0 text-left"
            >
              <div>
                <span className="block text-xl sm:text-3xl font-black text-slate-900 tracking-tight">10k+</span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Cases Completed</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="block text-xl sm:text-3xl font-black text-slate-900 tracking-tight">13+</span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years Experience</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="flex items-center gap-0.5">
                  <span className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">5.0</span>
                  <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                </div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Rating</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: BRIGHT FULL IMAGE CARD STACK WITH CLEAN TEXT CONTRAST */}
          <div className="lg:col-span-7 order-2 w-full flex flex-col items-center justify-center">
            <div 
              ref={deckRef} 
              className="relative w-full max-w-[330px] sm:max-w-[380px] h-[460px] sm:h-[510px] flex items-center justify-center select-none"
            >
              <AnimatePresence mode="popLayout">
                {DECK_CARDS.map((card, idx) => {
                  const relativeIndex = (idx - activeIndex + DECK_CARDS.length) % DECK_CARDS.length;
                  
                  if (relativeIndex > 2) return null;
                  const isTopCard = relativeIndex === 0;

                  return (
                    <motion.div
                      key={card.id}
                      style={{ 
                        zIndex: DECK_CARDS.length - relativeIndex,
                        transformOrigin: "bottom center"
                      }}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ 
                        opacity: 1 - relativeIndex * 0.15, 
                        scale: 1 - relativeIndex * 0.04,
                        y: relativeIndex * 14, 
                        rotate: relativeIndex * (idx % 2 === 0 ? 2 : -2)
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: 320, 
                        scale: 0.9, 
                        rotate: 8,
                        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                      }}
                      transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <ParticleCard 
                        disableAnimations={isMobile || !isTopCard}
                        glowColor="245, 158, 11"
                        className="w-full h-full rounded-[28px] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.12)] flex flex-col justify-between overflow-hidden group p-6 sm:p-7"
                      >
                        {/* BRIGHT FULL IMAGE BACKGROUND */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[28px]">
                          <div className={`absolute inset-0 transition-all duration-1000 opacity-5 z-10 ${card.accentBg}`} />
                          <img
                            src={card.image}
                            className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                            alt={card.label}
                          />
                          {/* Refined gradient mask condensed purely at the bottom to boost upper bright image exposure */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent to-[65%] z-10" />
                        </div>

                        {/* TOP SECTION OVERLAY CONTENT */}
                        <div className="w-full flex justify-between items-start z-20 relative">
                          <div className="bg-slate-900/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white font-mono text-[10px] tracking-widest uppercase font-bold">
                            {card.infoValue}
                          </div>

                          {/* Premium Top Right White Rating Badge */}
                          <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 border border-white/20">
                            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                            <span className="text-xs font-black text-slate-800">{card.rating}</span>
                          </div>
                        </div>

                        {/* BOTTOM SECTION OVERLAY CONTENT */}
                        <div className="w-full z-20 relative space-y-3.5">
                          
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-1 group-hover:text-amber-400 transition-colors drop-shadow-sm">
                              {card.label}
                            </h3>
                            
                            <div className="flex items-center gap-1.5 text-slate-100 font-medium text-xs sm:text-sm">
                              <MapPin size={14} className="text-amber-400" />
                              <span>{card.location}</span>
                            </div>
                          </div>

                          {/* Divider Rows inside full layout overlay view */}
                          <div className="space-y-2.5 pt-0.5">
                            <div className="w-full h-px bg-white/20" />
                            
                            <div className="flex justify-between items-center text-xs sm:text-sm">
                              <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                                <UserCheck size={14} className="text-amber-400" />
                                <span>{card.infoLabel}</span>
                              </div>
                              <span className="font-bold text-white tracking-tight">{card.infoValue}</span>
                            </div>

                            <div className="w-full h-px bg-white/20" />

                            <div className="flex justify-between items-center text-xs sm:text-sm">
                              <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                                <Clock size={14} className="text-amber-400" />
                                <span>Availability</span>
                              </div>
                              <span className="font-extrabold text-amber-400 tracking-tight bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10 shadow-sm">
                                Book Now
                              </span>
                            </div>
                          </div>

                        </div>
                      </ParticleCard>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Pagination Controls Indicator */}
            <div className="w-full mt-8 flex justify-center items-center gap-2 px-1">
              {DECK_CARDS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
                    index === activeIndex ? "w-9 bg-slate-900" : "w-1.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Jump to slide ${index + 1}`}
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