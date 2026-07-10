import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Clock3,
  HeartHandshake,
  Microscope,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic Environment",
    description:
      "Strict clinical sterilization protocols and modern infection-control standards ensure every patient visit is absolute and safe.",
  },
  {
    icon: Microscope,
    title: "Advanced Dental Technology",
    description:
      "We utilize cutting-edge diagnostic tools and treatment equipment to deliver highly accurate, efficient, and gentle oral care.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Treatment Plans",
    description:
      "Every individual receives undivided specialist attention, detailed diagnostics, and tailored long-term recommendations.",
  },
  {
    icon: Award,
    title: "Elite Clinical Expertise",
    description:
      "Professional expertise combined with an aesthetic-first philosophy for highly predictable, lasting therapeutic results.",
  },
  {
    icon: Clock3,
    title: "Convenient Scheduling",
    description:
      "Streamlined booking matrices and highly optimized wait-times designed around your professional lifestyle.",
  },
  {
    icon: Sparkles,
    title: "Comfort-Focused Experience",
    description:
      "Premium care techniques intentionally engineered to minimize dental anxiety and foster deep clinical relaxation.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section 
      id="why-choose-us" 
      className="relative py-20 lg:py-28 overflow-hidden bg-white border-t border-slate-100/60 antialiased selection:bg-amber-500/10"
    >
      {/* Smooth Yellowish Orange Background Ambient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-600/[0.04] rounded-full blur-[110px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/[0.06] border border-amber-500/20 text-amber-900 text-xs font-bold uppercase tracking-widest mb-5 shadow-sm shadow-amber-500/[0.01]">
            Why Patients Trust Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Exceptional Clinical Care
            <span className="block bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent mt-1">
              With A Premium Touch
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            We masterfully integrate advanced dental science, absolute patient care parameters, and clinical accuracy to orchestrate a pristine, reliable healthcare journey.
          </p>
        </motion.div>

        {/* Main Grid Interface Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Block: Interactive Feature Cards (Span 7) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className="group rounded-[24px] border border-slate-200/60 bg-white p-6 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/[0.03]"
                >
                  {/* Premium Micro-Container with Permanent Fill & Border */}
                  <div className="w-12 h-12 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/[0.12] group-hover:border-amber-500/30 transition-all duration-300 group-hover:scale-105">
                    {/* Permanently filled vector interior */}
                    <Icon className="w-5 h-5 text-amber-600 fill-amber-500/20 group-hover:text-amber-700 group-hover:fill-amber-500/35 transition-all duration-300" />
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Block: Premium Brand Trust Panel (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="rounded-[32px] border border-slate-200/70 bg-slate-50/40 backdrop-blur-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-sm shadow-slate-100 transition-all duration-400 hover:shadow-[0_30px_60px_-15px_rgba(217,119,6,0.08)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.02] rounded-bl-full pointer-events-none" />

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight tracking-tight">
                Dedicated To Your
                <span className="block text-amber-700 mt-1">
                  Long-Term Oral Health
                </span>
              </h3>

              <p className="mt-4 text-slate-500 text-sm font-medium leading-relaxed">
                Our uncompromising clinical mandate is to unlock world-class diagnostics in a welcoming environment, ensuring you feel completely secure, fully educated, and structural in your smile decisions.
              </p>

              {/* Data Metric Matrices */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="rounded-2xl bg-white border border-slate-200/40 p-4 shadow-sm shadow-slate-900/[0.01]">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    10K+
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Happy Patients
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/40 p-4 shadow-sm shadow-slate-900/[0.01]">
                  <h4 className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight">
                    13+ Yrs
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Clinical Legacy
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/40 p-4 shadow-sm shadow-slate-900/[0.01]">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-0.5">
                    4.9<span className="text-amber-500 text-xl">★</span>
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Patient Rating
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/40 p-4 shadow-sm shadow-slate-900/[0.01]">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    100%
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Care Focused
                  </p>
                </div>
              </div>

              {/* Leader Editorial Creed Badge */}
              <div className="mt-6 p-4 rounded-xl border border-slate-200/50 bg-white shadow-sm relative group">
                <span className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-md bg-amber-600 text-[9px] font-black uppercase text-white tracking-widest shadow-sm shadow-amber-600/20">
                  Our Creed
                </span>
                <p className="italic text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pt-1">
                  "Every patient deserves unconditional elite attention, highly transparent diagnostic clarity, and ultra-modern clinical options to sustain pristine oral health for life."
                </p>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;