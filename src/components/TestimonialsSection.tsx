import React, { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Star, Quote, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

// Local asset imports for the auto-sliding image carousel
import img1 from "@/assets/img 1.png";
import img2 from "@/assets/img 2.png";
import img3 from "@/assets/img 3.png";
import img4 from "@/assets/img 4.png";

const CAROUSEL_IMAGES = [img1, img2, img3, img4];

const RECENT_TESTIMONIALS = [
  {
    name: "Akshay Poojary",
    role: "Patient (Tooth Cleaning)",
    review: "I recently visited Pro-Smile Dental & Orthodontic Centre for a tooth cleaning. At first, I felt a bit anxious, but Dr. Ashwini and her team made me feel completely at ease. The clinic was spotless, the staff was polite, and the procedure was quick and painless. I’m very satisfied with the results and would gladly recommend their services to anyone in need of dental care🤩🤩",
    color: "from-amber-500/10 to-orange-500/[0.02]",
   
  },
  {
    name: "Darshan Krishnan",
    role: "Patient (Invisalign Treatment)",
    review: "I visited this clinic for Invisalign treatment and I’m extremely satisfied. The orthodontist explained the complete process, duration, and expected results in a very professional way. The digital scanning and treatment planning were impressive. The staff is friendly and appointments are well organized. If you’re planning for clear aligners, this is the right place.",
    color: "from-amber-600/10 to-amber-500/[0.02]",

  },
  {
    name: "Prasad Hegde",
    role: "Patient (Wisdom Tooth Extraction)",
    review: "Dr. Ashwini and her team helped with my wisdom tooth extraction. They explained me the process, risks involved and gave me an accurate recovery timeline. The extraction procedure went as per plan and i am happy with the outcome.",
    color: "from-amber-700/10 to-orange-600/[0.02]",
  
  },
  {
    name: "Darshan A C",
    role: "Parent (Pediatric Care)",
    review: "Visited for my 4 year old Son. Doctor is very professional and have lot of patience to treat kids.",
    color: "from-slate-500/10 to-amber-500/[0.02]",
  
  },
  {
    name: "Sujal Gowda",
    role: "Patient (Clinical Follow-up)",
    review: "The staff is very polite and helpful. They always remind you about appointments and guide you properly regarding care instructions. The clinic atmosphere is welcoming and comfortable.",
    color: "from-orange-500/10 to-amber-600/[0.02]",
    link: "#"
  }
];


const AnimatedCounter = ({ value, suffix = "+" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = Math.floor(latest).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [value, inView]);

  return (
    <span className="font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const TestimonialsSection = () => {
  const duplicatedImages = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden antialiased selection:bg-amber-500/10">
      
      {/* Light Premium Spatial Ambient Fields */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/[0.06] border border-amber-500/20 text-amber-900 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm shadow-amber-500/[0.01]"
          >
            <ShieldCheck size={12} className="text-amber-600 fill-amber-500/20" />
            <span>Verified Center Reviews</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1]">
            Patient Experiences. <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent mt-1 block">
              Real Patient Outcomes.
            </span>
          </h2>

          <p className="mt-4 text-slate-500 text-sm sm:text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed">
            Discover why families trust Pro-Smile Dental & Orthodontic Centre for specialized alignment framework options and comprehensive oral surgeries.
          </p>
        </div>

        {/* Auto-Sliding Smile Transformation Showcases */}
        <div className="mb-20 relative w-full overflow-hidden py-4">
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          
          <motion.div 
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: [0, -1200] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }}
          >
            {duplicatedImages.map((img, idx) => (
              <div 
                key={idx} 
                className="w-[240px] sm:w-[320px] aspect-[4/3] rounded-3xl border border-slate-200/60 bg-slate-50 p-2 shadow-sm flex-shrink-0 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300"
              >
                <img 
                  src={img} 
                  alt={`Pro-Smile Track Case ${idx}`} 
                  className="w-full h-full object-cover rounded-2xl pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200/40 text-[9px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles size={8} className="text-amber-600 fill-amber-500/20" /> Verified Case
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Reviews Flex-Grid Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 items-start">
          {RECENT_TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`group relative rounded-[32px] border border-slate-150 bg-gradient-to-br ${testimonial.color} p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-amber-500/30 hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(217,119,6,0.05)] h-full`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-slate-900/10 fill-slate-900/5 group-hover:text-amber-600/10 group-hover:fill-amber-600/[0.02] transition-colors" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Patient Identity Footer */}
              <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-100/80 w-full">
                <div className="min-w-0">
                  <h4 className="font-black text-slate-900 text-base tracking-tight leading-none truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] text-amber-700 bg-amber-500/[0.06] border border-amber-500/10 rounded px-2 py-0.5 font-bold leading-normal mt-2 inline-block">
                    {testimonial.role}
                  </p>
                </div>

                {testimonial.link !== "#" && (
                  <a 
                    href={testimonial.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-amber-500/[0.06] border border-amber-500/20 flex items-center justify-center text-amber-600 flex-shrink-0 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm"
                    title="Verify review source"
                  >
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default TestimonialsSection;