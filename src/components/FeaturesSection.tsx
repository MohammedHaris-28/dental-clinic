import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Activity,
  Smile,
  Baby,
  Stethoscope,
  Layers,
  Sparkle,
  ArrowRight,
  Crown,
  Maximize2,
  Bookmark
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    description: "Permanent, medically certified tooth replacements engineered with structural precision to completely restore natural bite architecture.",
    tag: "Restorative Mastery",
    featured: true,
  },
  {
    icon: Layers,
    title: "Dental Laminates",
    description: "Ultra-thin, custom-crafted premium porcelain veneers designed to flawlessly correct severe chips, intrinsic stains, and structural gaps.",
    tag: "Elite Aesthetics",
    featured: false,
  },
  {
    icon: Activity,
    title: "Root Canal Treatment",
    description: "Advanced micro-endodontic therapy targeting deep pulp infections with advanced pain-free technology.",
    tag: "Clinical Precision",
    featured: false,
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Bespoke structural makeovers combining whitening, composite contouring, and alignment frameworks for breathtaking transformations.",
    tag: "Visual Design",
    featured: false,
  },
  {
    icon: Crown,
    title: "Premium Crowns",
    description: "Monolithic zirconia and E-Max structural caps tailored carefully to reinforce decayed or damaged teeth with natural light reflectivity.",
    tag: "Structural Integrity",
    featured: false,
  },
  {
    icon: Maximize2,
    title: "Bite & Spacing Correction",
    description: "Targeted cosmetic and interceptive orthodontic systems engineered to seamlessly resolve structural diastemas and complex deep overbites.",
    tag: "Bite Architecture",
    featured: true,
  },
  {
    icon: Sparkle,
    title: "Orthodontics & Fluorosis",
    description: "Advanced clinical micro-abrasion treatments for complex fluorosis enamel stains paired with premium ceramic teeth alignment tracks.",
    tag: "Enamel Care",
    featured: false,
  },
  {
    icon: Baby,
    title: "Early Childhood Caries",
    description: "Specialized non-invasive pediatric therapies to intercept developmental decay and carefully preserve foundational primary teeth.",
    tag: "Pediatric Intercept",
    featured: false,
  },
  {
    icon: Stethoscope,
    title: "General & Preventative Dentistry",
    description: "Comprehensive molecular oral screening, dynamic diagnostic cleanings, and proactive therapy to stop disease vectors before they start.",
    tag: "Absolute Prevention",
    featured: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-28 bg-slate-50/50 overflow-hidden antialiased selection:bg-amber-500/10">
      {/* Premium Ambient Background Spotlights */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-amber-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Elite Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/[0.06] border border-amber-500/20 text-amber-800 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles size={12} className="text-amber-600 animate-pulse" />
            <span>Clinical Treatments Portfolio</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none"
          >
            Elite Dental Architecture. <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Engineered For Perfection.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-slate-500 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Experience dental care operating at absolute clinical mastery. From advanced cosmetic veneers to complex structural implant surgeries, we design smiles with flawless biometric accuracy.
          </motion.p>
        </div>

        {/* Bento Grid with Permanent Color Accents and Hover Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
                className={`group relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white p-8 flex flex-col justify-between transition-all duration-400 hover:shadow-[0_30px_60px_-15px_rgba(217,119,6,0.12)] hover:border-amber-500/30 ${
                  service.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Permanent Luxury Accent Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />
                
                {/* Permanent Micro Ambient Back Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.015] via-transparent to-transparent pointer-events-none" />

                <div>
                  {/* Top Line Card Indicator */}
                  <div className="flex items-center justify-between mb-8">
                    {/* Permanent High-End Amber Gold Brand Hub */}
                    <div className="relative w-14 h-14 rounded-2xl bg-amber-500/[0.04] border border-amber-500/30 flex items-center justify-center text-amber-600 shadow-sm">
                      <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-transparent to-amber-500/10" />
                      <Icon className="w-6 h-6 relative z-10" />
                    </div>

                    {/* Permanent Premium Tag */}
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-500/20 px-3 py-1.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Text Suite */}
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className={`text-slate-500 text-sm leading-relaxed ${service.featured ? "max-w-2xl" : "max-w-none"}`}>
                    {service.description}
                  </p>
                </div>

                {/* Permanent Styled Action Trigger Bar */}
                <div className="mt-8 pt-4 border-t border-slate-100/80 flex items-center justify-between text-amber-700 text-xs font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    Explore Treatment Framework
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-900 text-white flex items-center justify-center shadow-sm">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Bottom Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 rounded-[36px] border border-slate-200 bg-white p-8 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between shadow-xl shadow-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.02] rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-5 text-left w-full lg:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-amber-500/20">
              <Bookmark className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-amber-600 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                Live Case Records
              </div>
              <h4 className="font-black text-slate-900 text-lg tracking-tight leading-tight">Explore verified Clinical Case Blogs</h4>
              <p className="text-slate-400 text-xs mt-1 font-medium">Real microscopic transformations documented by our surgeons.</p>
            </div>
          </div>

          <div className="h-px w-full lg:h-12 lg:w-px bg-slate-200" />

          <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center lg:text-left w-full lg:w-auto justify-around">
            <div>
              <h5 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">10k+</h5>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Successful Procedures</p>
            </div>
            <div>
              <h5 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">13+</h5>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years of Practice</p>
            </div>
            <div>
              <h5 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center lg:justify-start gap-0.5">
                4.9<span className="text-amber-500 text-xl sm:text-2xl">★</span>
              </h5>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Patient Satisfaction</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;