import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Clock,
  ChevronRight,
  Sparkles
} from "lucide-react";

import logo from "@/assets/logo-dental.png";

// Simple custom Pinterest Icon path to avoid extra package dependencies
const PinterestIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="transition-transform duration-200"
  >
    <path d="M12.289 2C6.617 2 2 6.617 2 12.289c0 4.34 2.682 8.047 6.49 9.608-.09-.81-.17-2.06.03-2.95.19-.81 1.21-5.13 1.21-5.13s-.31-.62-.31-1.54c0-1.44.83-2.52 1.88-2.52.89 0 1.32.67 1.32 1.47 0 .89-.57 2.23-.86 3.47-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.27-1.95 3.27-4.76 0-2.49-1.79-4.23-4.34-4.23-2.95 0-4.69 2.22-4.69 4.51 0 .89.34 1.85.77 2.37.09.1.1.19.07.31l-.29 1.18c-.05.18-.16.22-.36.13-1.32-.61-2.14-2.53-2.14-4.07 0-3.32 2.42-6.37 6.96-6.37 3.65 0 6.49 2.6 6.49 6.08 0 3.63-2.29 6.55-5.47 6.55-1.07 0-2.07-.56-2.41-1.22l-.66 2.52c-.24.92-.89 2.08-1.33 2.81 1 .31 2.06.48 3.16.48 5.67 0 10.29-4.62 10.29-10.29C22.578 6.617 17.961 2 12.289 2z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white border-t border-slate-100 antialiased selection:bg-emerald-500/10">
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
                    alt="Chisel Dental Clinic Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-black text-xl text-slate-900 tracking-tight flex items-center gap-1.5">
                    Chisel Dental™
                  </h3>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-0.5">
                    Est. 2004
                  </p>
                </div>
              </div>

              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                Providing elite, modern, and absolute patient-focused dental care. Driven by clinical mastery and premium aesthetic transformations in Bangalore.
              </p>

              {/* Verified Direct Social Ecosystem */}
              <div className="flex gap-2.5 pt-2">
                <a
                  href="https://www.instagram.com/chiseldentalclinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600 hover:text-emerald-600 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all flex items-center justify-center group"
                  aria-label="Instagram Link"
                >
                  <Instagram size={18} className="group-hover:scale-105 transition-transform" />
                </a>

                <a
                  href="https://www.facebook.com/chiseldental/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600 hover:text-emerald-600 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all flex items-center justify-center group"
                  aria-label="Facebook Link"
                >
                  <Facebook size={18} className="group-hover:scale-105 transition-transform" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCv4faw5JMvcOubRg2XobglQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600 hover:text-emerald-600 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all flex items-center justify-center group"
                  aria-label="YouTube Link"
                >
                  <Youtube size={18} className="group-hover:scale-105 transition-transform" />
                </a>

                <a
                  href="https://in.pinterest.com/chiseldentalcli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600 hover:text-emerald-600 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all flex items-center justify-center text-slate-600 hover:text-emerald-600"
                  aria-label="Pinterest Link"
                >
                  <PinterestIcon size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Navigational Matrix (Span 2) */}
            <div className="lg:col-span-2 lg:pl-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-6">
                Quick Links
              </h4>

              <ul className="space-y-3.5">
                {["Home", "About", "Services", "Why Choose Us", "Testimonials", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group"
                    >
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Medical Services (Span 2) */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-6">
                Treatments
              </h4>

              <ul className="space-y-3.5">
                {[
                  "Dental Implants",
                  "Root Canal",
                  "Teeth Whitening",
                  "Smile Makeover",
                  "Dental Braces",
                  "Pediatric Dentistry",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                    <ChevronRight size={14} className="text-slate-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Location Core (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-2">
                Contact Info
              </h4>

              <div className="space-y-4">
                {/* Dual Lines Phone Integration */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm tracking-tight">
                      080-25524249 <span className="text-slate-300 font-normal mx-1">|</span> 9986560009 <span className="text-slate-300 font-normal mx-1">|</span> 9900370009
                    </p>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                      Call Concierge Assistance
                    </p>
                  </div>
                </div>

                {/* Email Mapping */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <a 
                      href="mailto:chiseldentalclinics@gmail.com" 
                      className="font-bold text-slate-800 text-sm hover:text-emerald-600 transition-colors block break-all"
                    >
                      chiseldentalclinics@gmail.com
                    </a>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                      Official Clinic Inbox
                    </p>
                  </div>
                </div>

                {/* Timing Mapping */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                    <Clock size={15} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm tracking-tight">
                      9:00 AM – 6:30 PM
                    </p>
                    <p className="text-xs font-bold text-rose-600 uppercase tracking-wider mt-0.5">
                      Tuesday Off
                    </p>
                  </div>
                </div>

                {/* Precise Branch Location Mapping */}
                <div className="flex gap-3.5 items-start pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Main Branch</p>
                    <p className="font-medium text-slate-600 text-xs sm:text-sm leading-relaxed">
                      No 18, 1st Main, 1st Block Koramangala,<br />
                      Jakkasandra Extension, Near Wipro Park,<br />
                      Next to Mani Biriyani, Bangalore – 560034
                    </p>
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
              © {new Date().getFullYear()} Chisel Dental™. All rights reserved. Developed by #2Code-digital solutions.
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