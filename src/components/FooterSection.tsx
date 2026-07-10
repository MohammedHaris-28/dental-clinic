import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Clock,
  ChevronRight,
  MessageCircle,
  Award
} from "lucide-react";

import logo from "@/assets/logo-dental.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white border-t border-slate-100 antialiased selection:bg-amber-500/10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Operational Footer Matrix */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Column 1: Core Clinic Brand Identity (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-200/60 bg-white p-2 flex items-center justify-center shadow-sm">
                  <img
                    src={logo}
                    alt="Pro-Smile Dental Clinic Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-black text-xl text-slate-900 tracking-tight flex items-center gap-1.5">
                    Pro-Smile 
                  </h3>
                  <p className="text-xs font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent uppercase tracking-widest mt-0.5 flex items-center gap-1">
                    Dental & Orthodontic Centre
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-800">Dr. Ashwini Shetty <span className="text-xs font-medium text-slate-500">BDS, MDS (Orthodontist)</span></p>
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Chief Dentist & Invisalign® Provider</p>
              </div>

              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                Providing elite, modern, and absolutely patient-focused dental care. Driven by clinical mastery, state-of-the-art laser dentistry, and premium aesthetic transformations in Shivamogga.
              </p>

              {/* Verified Direct Social Ecosystem */}
              <div className="flex gap-2.5 pt-2">
                <a
                  href="https://www.instagram.com/prosmile.shimoga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600 hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all flex items-center justify-center group"
                  aria-label="Instagram Profile Link"
                >
                  <Instagram size={18} className="group-hover:scale-105 transition-transform" />
                </a>

                <a
                  href="https://www.facebook.com/prosmile.shimoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600 hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all flex items-center justify-center group"
                  aria-label="Facebook Profile Link"
                >
                  <Facebook size={18} className="group-hover:scale-105 transition-transform" />
                </a>

                <a
                  href="https://wa.me/918971619006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600 hover:text-emerald-600 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all flex items-center justify-center group"
                  aria-label="WhatsApp Route Connection Link"
                >
                  <MessageCircle size={18} className="group-hover:scale-105 transition-transform" />
                </a>
              </div>
            </div>

            {/* Column 2: Treatments Matrix Dashboard (Span 4) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-6">
                  Treatments
                </h4>
                <ul className="space-y-3.5">
                  {[
                    "Tooth Reshaping",
                    "Dental Implants",
                    "Wisdom Extraction",
                    "Root Canal (RCT)",
                    "Oral Surgery",
                    "Periodontal Flap"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-sm font-medium text-slate-500 group select-none">
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-amber-500 transition-colors shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-6">
                  Services
                </h4>
                <ul className="space-y-3.5">
                  {[
                    "Laser Dentistry",
                    "Ceramic Crowns",
                    "Bridges Fixing",
                    "Invisalign® Aligners",
                    "Orthodontics",
                    "Smile Designing"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-sm font-medium text-slate-500 group select-none">
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-amber-500 transition-colors shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: Contact & Location Core + Live Map (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-2">
                Contact Info
              </h4>

              <div className="space-y-4">
                {/* Phone Integration */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-amber-600 mt-0.5 shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <a href="tel:+918971619006" className="font-bold text-slate-800 text-sm tracking-tight hover:text-amber-600 transition-colors">
                      +91 89716 19006
                    </a>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                      Clinic Desk Assistance
                    </p>
                  </div>
                </div>

                {/* Email Mapping */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-amber-600 mt-0.5 shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <a 
                      href="mailto:prosmile.shimoga@gmail.com" 
                      className="font-bold text-slate-800 text-sm hover:text-amber-600 transition-colors block break-all"
                    >
                      prosmile.shimoga@gmail.com
                    </a>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                      Official Clinic Inbox
                    </p>
                  </div>
                </div>

                {/* Timing Mapping */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-amber-600 mt-0.5 shrink-0">
                    <Clock size={15} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm tracking-tight">
                      10:00 AM – 8:00 PM <span className="text-xs font-medium text-slate-400 lowercase">(Mon - Sat)</span>
                    </p>
                    <p className="text-xs font-bold text-rose-600 uppercase tracking-wider mt-0.5">
                      Sunday Closed
                    </p>
                  </div>
                </div>

                {/* Address Mapping & Embed Combo Block */}
                <div className="flex gap-3.5 items-start pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-amber-600 mt-0.5 shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="font-medium text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Sagar Road, beside Hotel Ashoka Grand, Sharavathi Nagar, Hosamane, Shivamogga, Karnataka 577201
                    </p>
                    
                    {/* Seamless Embedded Map Interface Wrapper */}
                    <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-200/80 shadow-inner group relative bg-slate-50">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4764.808814661283!2d75.5568239!3d13.9376012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba9059bf6bb83%3A0x75d011a62e7937ad!2sPro-Smile%20Dental%20%26%20Orthodontic%20Centre!5e1!3m2!1sen!2sin!4v1783610821836!5m2!1sen!2sin" 
                        className="w-full h-full border-0 grayscale-[20%] contract-[110%] group-hover:grayscale-0 transition-all duration-500"
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Pro-Smile Dental Google Maps Location"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Editorial Legal Stripe */}
        <div className="border-t border-slate-100 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-semibold text-slate-400 text-center md:text-left">
              © {currentYear} Pro-Smile Dental™. All rights reserved. Designed and developed by{" "}
              <a 
                href="https://hash2codeteam.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-600 underline decoration-dotted underline-offset-4 transition-colors"
              >
                #2Code
              </a>.
            </p>

            <div className="flex items-center gap-6 text-xs font-semibold text-slate-400">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;