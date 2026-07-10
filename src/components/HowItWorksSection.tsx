import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Award,
} from "lucide-react";
import doctorHero from "../assets/doctor-hero.png";

const DOCTOR_DATA = {
  name: "Dr. Ashwini Shetty",
  title: "Chief Dentist",
  credentials: "BDS, MDS (Orthodontist)",
  institution: "Specialist in Advanced Orthodontic Frameworks & Dentofacial Orthopedics",
  bio: "As the Chief Dentist at Pro-Smile Dental & Orthodontic Centre, Dr. Ashwini Shetty combines comprehensive clinical expertise with advanced specialization in orthodontics. She designs custom alignment tracks and corrective architectural systems to build structurally flawless, healthy smiles.",
  specialties: ["Orthodontic Mechanics", "Dentofacial Orthopedics", "Aesthetic Alignment Systems", "Comprehensive Oral Care"],
  metric: "Master of Dental Surgery"
};

const DoctorProfileSection = () => {
  return (
    <section className="relative py-28 bg-slate-50/40 overflow-hidden antialiased selection:bg-amber-500/10">
      {/* Enhanced Yellowish Orange Ambient Atmosphere */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/[0.04] to-amber-400/[0.01] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[700px] h-[700px] bg-gradient-to-bl from-amber-600/[0.05] to-amber-500/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/[0.06] border border-amber-500/20 text-amber-800 text-xs font-bold tracking-widest uppercase mb-5 shadow-sm shadow-amber-500/[0.02]"
          >
            <Sparkles size={12} className="text-amber-500 fill-amber-500/30 animate-pulse" />
            <span>Clinical Leadership</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-none">
            Absolute Mastery Behind <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Your Smile Architecture.
            </span>
          </h2>
          <p className="mt-4 text-slate-500 text-base font-medium max-w-xl mx-auto">
            Meet the chief expert shaping aesthetic, alignment, and structural restorative workflows at Pro-Smile Dental & Orthodontic Centre.
          </p>
        </div>

        {/* Layout Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center max-w-5xl mx-auto">
          
          {/* Left Side: Portrait Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-[380px] rounded-[32px] bg-white border border-slate-200/70 p-4 shadow-md shadow-slate-200/40 overflow-hidden group transition-all duration-400 hover:shadow-[0_30px_60px_-15px_rgba(217,119,6,0.12)] hover:border-amber-500/20">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] to-transparent pointer-events-none" />
              
              <img
                src={doctorHero}
                alt={DOCTOR_DATA.name}
                className="w-full h-full object-cover rounded-[24px] relative z-10 pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Side: Chief Doctor Documentation Details */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[32px] border border-slate-200/70 bg-white p-8 sm:p-10 relative shadow-sm shadow-slate-100 overflow-hidden transition-all duration-400 hover:shadow-[0_30px_60px_-15px_rgba(217,119,6,0.14)] hover:border-amber-500/30 group">
            {/* Accent Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 to-amber-600" />
            
            <div className="space-y-6">
              <div>
                <span className="text-amber-700 text-[10px] font-extrabold uppercase tracking-widest bg-amber-50 border border-amber-500/20 px-3 py-1 rounded-full">
                  {DOCTOR_DATA.title}
                </span>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight mt-4">
                  {DOCTOR_DATA.name}
                </h3>
                <div className="mt-2 text-slate-500 text-xs font-medium space-y-2">
                  <span className="inline-block text-slate-800 font-bold bg-slate-100 px-2.5 py-0.5 rounded text-[11px]">
                    {DOCTOR_DATA.credentials}
                  </span>
                  <p className="text-slate-500 leading-relaxed font-medium">{DOCTOR_DATA.institution}</p>
                </div>
              </div>

              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium italic">
                "{DOCTOR_DATA.bio}"
              </p>

              <div>
                <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Core Expertise Framework</h4>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR_DATA.specialties.map((spec, i) => (
                    <span key={i} className="text-xs font-bold text-slate-700 bg-white border border-slate-200/70 shadow-sm px-3.5 py-1.5 rounded-xl transition-all duration-300 group-hover:border-slate-300">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Clinical Standing</span>
              <span className="text-xs font-black text-amber-700 bg-amber-50 border border-amber-500/20 px-3 py-1 rounded-lg">
                {DOCTOR_DATA.metric}
              </span>
            </div>
          </div>

        </div>

        {/* Global Academic & Experience Credentials Dashboard Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto text-left">
          <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-sm relative overflow-hidden group transition-all duration-300 hover:border-amber-500/20">
            {/* Premium Multi-Layer Rich Filled Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 flex items-center justify-center text-amber-600 flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500/[0.1]">
              <GraduationCap size={20} className="fill-amber-500/20" />
            </div>
            <div>
              <h5 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Rigorous Orthodontic Focus</h5>
              <p className="text-slate-400 text-xs mt-1 leading-normal font-medium">Advanced master's degree criteria targeting maxillofacial harmony and mechanical precision.</p>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-sm relative overflow-hidden group transition-all duration-300 hover:border-amber-500/20">
            {/* Premium Multi-Layer Rich Filled Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 flex items-center justify-center text-amber-600 flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500/[0.1]">
              <Award size={20} className="fill-amber-500/20" />
            </div>
            <div>
              <h5 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Elite Clinical Excellence</h5>
              <p className="text-slate-400 text-xs mt-1 leading-normal font-medium">Proactive structural treatment framework optimized for complete patient aesthetic care.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorProfileSection;