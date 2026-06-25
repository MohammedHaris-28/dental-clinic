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
  Eye,
  Crown,
  Maximize2,
  Bookmark
} from "lucide-react";

// Curated data matrix precisely covering items from image_13e9e5.png
const services = [
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    description: "Permanent, medically certified tooth replacements engineered with structural precision to completely restore natural bite architecture.",
    tag: "Restorative Mastery",
    featured: true, // Takes up more space for premium layout variety
  },
  {
    icon: Layers,
    title: "Dental Laminates", // From image_13e9e5.png
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
    title: "Cosmetic Dentistry", // From image_13e9e5.png
    description: "Bespoke structural makeovers combining whitening, composite contouring, and alignment frameworks for breathtaking transformations.",
    tag: "Visual Design",
    featured: false,
  },
  {
    icon: Crown,
    title: "Premium Crowns", // From image_13e9e5.png
    description: "Monolithic zirconia and E-Max structural caps tailored carefully to reinforce decayed or damaged teeth with natural light reflectivity.",
    tag: "Structural Integrity",
    featured: false,
  },
  {
    icon: Maximize2,
    title: "Bite & Spacing Correction", // Covers Deep Bite, Spacing from image_13e9e5.png
    description: "Targeted cosmetic and interceptive orthodontic systems engineered to seamlessly resolve structural diastemas and complex deep overbites.",
    tag: "Bite Architecture",
    featured: true,
  },
  {
    icon: Sparkle,
    title: "Orthodontics & Fluorosis", // Covers Orthodontics, Dental Fluorosis from image_13e9e5.png
    description: "Advanced clinical micro-abrasion treatments for complex fluorosis enamel stains paired with premium ceramic teeth alignment tracks.",
    tag: "Enamel Care",
    featured: false,
  },
  {
    icon: Baby,
    title: "Early Childhood Caries", // From image_13e9e5.png
    description: "Specialized non-invasive pediatric therapies to intercept developmental decay and carefully preserve foundational primary teeth.",
    tag: "Pediatric Intercept",
    featured: false,
  },
  {
    icon: Stethoscope,
    title: "General & Preventative Dentistry", // Covers General Dentistry, Dental Treatments from image_13e9e5.png
    description: "Comprehensive molecular oral screening, dynamic diagnostic cleanings, and proactive therapy to stop disease vectors before they start.",
    tag: "Absolute Prevention",
    featured: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-28 bg-white overflow-hidden antialiased selection:bg-emerald-500/10">
      {/* Premium Ambient Background Spotlights */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-teal-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Elite Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/60 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles size={12} className="text-emerald-500 animate-pulse" />
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
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
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

        {/* Re-Engineered Asymmetric Bento Grid */}
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
                className={`group relative overflow-hidden rounded-[32px] border border-slate-100 bg-slate-50/40 p-8 flex flex-col justify-between transition-all duration-500 hover:border-emerald-500/30 hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.06)] ${
                  service.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Micro Ambient Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/[0.02] via-transparent to-transparent pointer-events-none" />

                <div>
                  {/* Top Line Card Indicator */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-800 group-hover:text-emerald-600 group-hover:border-emerald-500/20 transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100/80 px-3 py-1 rounded-full group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors duration-300">
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

                {/* Learn More Interactive Action Trigger */}
                <div className="mt-8 pt-4 border-t border-slate-100/60 flex items-center justify-between text-slate-800 text-xs font-bold uppercase tracking-wider group-hover:text-emerald-600 transition-colors duration-300">
                  <span className="flex items-center gap-1.5">
                    Explore Treatment Framework
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 group-hover:translate-x-0.5">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Bottom Interactive Strip: Case Blogs & Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 rounded-[36px] border border-slate-100 bg-slate-50/50 p-8 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between shadow-sm"
        >
          {/* Case Blogs Interactive Callout (From image_13e9e5.png) */}
          <div className="flex items-center gap-5 text-left w-full lg:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-emerald-500/20">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 mb-0.5">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                Live Case Records
              </div>
              <h4 className="font-black text-slate-900 text-lg tracking-tight leading-tight">Explore verified Clinical Case Blogs</h4>
              <p className="text-slate-400 text-xs mt-1 font-medium">Real microscopic transformations documented by our surgeons.</p>
            </div>
          </div>

          <div className="h-px w-full lg:h-12 lg:w-px bg-slate-200/80" />

          {/* Elite Verified Trust Pillars */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center lg:text-left w-full lg:w-auto justify-around">
            <div>
              <h5 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">25k+</h5>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Successful Procedures</p>
            </div>
            <div>
              <h5 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">18+</h5>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years of Practice</p>
            </div>
            <div>
              <h5 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center lg:justify-start gap-0.5">
                4.9<span className="text-emerald-500 text-xl sm:text-2xl">★</span>
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