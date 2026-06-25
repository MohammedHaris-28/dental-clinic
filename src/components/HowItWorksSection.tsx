import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Award,
} from "lucide-react";
import drSumanth from "@/assets/dr-sumanth.png"; 
import drRashmi from "@/assets/dr-rashmi.png";

// Directly extracted accurate clinical metadata from image_13ee22.jpg
const DOCTORS_DATA = [
  {
    id: "sumanth",
    name: "Dr. Sumanth Shetty",
    title: "Founder & Chief Pedodontist",
    credentials: "MDS Pedodontia",
    institution: "Bapuji Dental College, Davangere",
    bio: "Founder of Chisel Dental, Dr. Sumanth Shetty is an MDS Pedodontia from Bapuji Dental College, Davangere, Karnataka, India. He is now serving as a Professor in the Department of Pediatric dentistry.",
    image: drSumanth, 
    specialties: ["Pediatric Care", "Surgical Interventions", "Dental Growth Monitoring"],
    metric: "20+ Yrs Academia"
  },
  {
    id: "rashmi",
    name: "Dr. Rashmi Shetty",
    title: "Chief Endodontist & Aesthetic Specialist",
    credentials: "MDS Endodontics & Restorative Dentistry",
    institution: "S.D.M. College of Dental Sciences, Dharwad",
    bio: "Dr. Rashmi Shetty is an MDS Endodontics and Restorative dentistry from S.D.M. College of dental sciences, Dharwad, Karnataka. She is also a practicing aesthetic dentist and a certified 'Inman Aligner' Specialist.",
    image: drRashmi, 
    specialties: ["Root Canal Micro-Surgery", "Inman Aligners", "Smile Transformations"],
    metric: "Certified Aligner Expert"
  }
];

const DoctorProfileSection = () => {
  const [activeTab, setActiveTab] = useState("sumanth");
  const currentDoc = DOCTORS_DATA.find((doc) => doc.id === activeTab) || DOCTORS_DATA[0];

  // Auto-sliding engine
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = DOCTORS_DATA.findIndex((doc) => doc.id === prev);
        const nextIndex = (currentIndex + 1) % DOCTORS_DATA.length;
        return DOCTORS_DATA[nextIndex].id;
      });
    }, 6000); // Transitions profiles smoothly every 6 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative py-28 bg-white overflow-hidden antialiased selection:bg-emerald-500/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-emerald-500/[0.02] to-teal-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/60 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-5"
          >
            <Sparkles size={12} className="text-emerald-500 animate-pulse" />
            <span>Clinical Leadership</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-none">
            Absolute Mastery Behind <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Your Smile Architecture.
            </span>
          </h2>
          <p className="mt-4 text-slate-500 text-base font-medium max-w-xl mx-auto">
            Meet the senior masters and clinical directors shaping aesthetic and restorative workflows at Chisel Dental.
          </p>

          {/* Premium Doctor Selection Switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200/40 mt-10 gap-1">
            {DOCTORS_DATA.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setActiveTab(doc.id)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === doc.id
                    ? "text-white shadow-md shadow-slate-950/10"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {activeTab === doc.id && (
                  <motion.div
                    layoutId="activeDoctorGlow"
                    className="absolute inset-0 bg-slate-900 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{doc.name.split(". ")[1]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center min-h-[580px]">
          
          {/* Left Side: Clean, Minimalist Image Showcase Box */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDoc.id}
                initial={{ opacity: 0, scale: 0.97, x: -15 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.97, x: 15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full max-w-[400px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[32px] bg-slate-50 border border-slate-200/50 shadow-sm overflow-hidden"
              >
                {/* Simplified Portrait Display — No Heavy Tint Layers or Solid Background Overlays */}
                <img
                  src={currentDoc.image}
                  alt={currentDoc.name}
                  className="w-full h-full object-cover relative z-10 pointer-events-none"
                />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 right-4 bg-slate-950/95 text-white backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl z-20 border border-white/10">
                  <span className="block text-[8px] font-bold text-emerald-400 uppercase tracking-widest leading-none">Verified Status</span>
                  <span className="block text-[11px] font-black mt-1 tracking-tight">{currentDoc.metric}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Deep Clinical Documentation Content */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDoc.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6 text-center lg:text-left"
              >
                <div>
                  <span className="text-emerald-600 text-xs font-extrabold uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                    {currentDoc.title}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4">
                    {currentDoc.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center gap-2 mt-2 text-slate-500 text-sm font-medium justify-center lg:justify-start">
                    <span className="text-slate-800 font-bold bg-slate-100 px-2.5 py-0.5 rounded text-xs">{currentDoc.credentials}</span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span>{currentDoc.institution}</span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium italic">
                  "{currentDoc.bio}"
                </p>

                {/* Core Specialties Framework */}
                <div className="pt-2">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Core Expertise Framework</h4>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {currentDoc.specialties.map((spec, i) => (
                      <span key={i} className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200/60 px-4 py-2 rounded-xl">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Minimal Grid Trust Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-2xl mx-auto lg:mx-0 text-left">
                  <div className="flex gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Rigorous Specialization</h5>
                      <p className="text-slate-400 text-xs mt-1 leading-normal font-medium">Full master's specialization degrees with absolute clinical compliance standards.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm">
                      <Award size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Academic Excellence</h5>
                      <p className="text-slate-400 text-xs mt-1 leading-normal font-medium">Active instructional, professorship, and international certifications.</p>
                    </div>
                  </div>
                </div>

                {/* Aggregated Overall Brand Trust Metrics */}
                <div className="flex justify-center lg:justify-start items-center gap-8 pt-8 border-t border-slate-100 mt-8">
                  <div>
                    <span className="block text-2xl font-black text-slate-900 tracking-tight">20+ Yrs</span>
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Combined Praxis</span>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div>
                    <span className="block text-2xl font-black text-slate-900 tracking-tight">100%</span>
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ethical Micro-Care</span>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div>
                    <span className="block text-2xl font-black text-slate-900 tracking-tight flex items-center gap-0.5">
                      4.9<span className="text-amber-400 text-lg">★</span>
                    </span>
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Google Standing</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DoctorProfileSection;