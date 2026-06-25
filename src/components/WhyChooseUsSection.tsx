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
      className="relative py-20 lg:py-28 overflow-hidden bg-white border-t border-slate-100/60 antialiased selection:bg-emerald-500/10"
    >
      {/* Background Soft Ambient Orbs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 text-slate-800 text-xs font-bold uppercase tracking-widest mb-5">
            Why Patients Trust Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Exceptional Clinical Care
            <span className="block text-emerald-600 mt-1">
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
                  className="group rounded-[24px] border border-slate-200/60 bg-white p-6 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/[0.03]"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/50 flex items-center justify-center mb-5 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-slate-700 group-hover:text-emerald-600 transition-colors" />
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
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
            <div className="rounded-[32px] border border-slate-200/60 bg-slate-50/50 backdrop-blur-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.02] rounded-bl-full pointer-events-none" />

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight tracking-tight">
                Dedicated To Your
                <span className="block text-emerald-600 mt-1">
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
                    25K+
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Happy Patients
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/40 p-4 shadow-sm shadow-slate-900/[0.01]">
                  <h4 className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
                    20+ Yrs
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Clinical Legacy
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/40 p-4 shadow-sm shadow-slate-900/[0.01]">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    4.9★
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

              {/* Founder Editorial Proclamation */}
              <div className="mt-6 p-4 rounded-xl border border-slate-200/40 bg-white/70 backdrop-blur-sm relative">
                <span className="absolute -top-3 left-4 px-2 py-0.5 rounded-md bg-emerald-500 text-[9px] font-black uppercase text-white tracking-widest">
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