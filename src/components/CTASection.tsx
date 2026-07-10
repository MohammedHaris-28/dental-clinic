import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AppointmentCTA = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const clinicPhone = "089716 19006"; // Clinic dynamic phone display
  const whatsappNumber = "918971619006"; // International format for wa.me routing

  // Exact clinical service profile cataloged from provided data
  const treatmentsList = [
    "Invisalign (Clear Aligners)",
    "Dental Implant Fixing",
    "RCT (Root Canal Treatment)",
    "Wisdom Tooth Extraction",
    "Ceramic Crowns & Bridges Fixing",
    "Laser Dentistry",
    "Tooth Reshaping",
    "Scraping Periodontal / Flap Surgery",
    "General Consultation"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
🦷 Pro-Smile Dental Appointment Request

👤 Patient Name: ${form.name}
📞 Contact Number: ${form.phone}
🩺 Selected Treatment: ${form.treatment}

💬 Patient Message / Concern:
${form.message || "No additional notes provided."}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text.trim())}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-white overflow-hidden antialiased selection:bg-amber-500/10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Content Shell with Premium Subtle Contrast */}
        <div className="rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-slate-100 bg-slate-50/50 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT SIDE: Brand Value Statements */}
            <div className="lg:col-span-6 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between bg-white">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Clean Tag Badge */}
                <div className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 text-amber-800 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                  <Sparkles size={12} className="text-amber-500" />
                  <span>Direct Booking Suite</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                  Ready For A{" "}
                  <span className="block mt-1 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                    Pro-Smile?
                  </span>
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm md:text-base font-medium max-w-xl leading-relaxed">
                  Schedule your consultation instantly over our verified concierge channel. Receive boutique dental and specialized orthodontic treatment under the guidance of chief specialist Dr. Ashwini Shetty (MDS).
                </p>

                {/* Highly Balanced Bullet Framework */}
                <div className="space-y-4 sm:space-y-6 pt-5 sm:pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                      <Clock3 size={16} className="sm:size-[18px]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">Elite Consultation Hours</h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        Monday to Saturday (10:00 AM – 8:00 PM) for flexible scheduling.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                      <ShieldCheck size={16} className="sm:size-[18px]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">Specialist-Led Orthodontics</h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        Authorized Invisalign® Provider delivering custom structural smile transformations.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Minimal Emergency Quick Access Panel */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 sm:mt-12 p-4 sm:p-5 rounded-[20px] sm:rounded-[24px] border border-slate-200/60 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">Need Immediate Advice?</p>
                  <h3 className="font-black text-lg sm:text-xl text-slate-900 mt-0.5 tracking-tight">{clinicPhone}</h3>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full bg-white h-10 sm:h-11 px-5 text-xs font-bold border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95 transition-transform"
                  onClick={() => window.open(`tel:${clinicPhone.replace(/\s+/g, '')}`)}
                >
                  <Phone size={13} className="mr-2 text-amber-600" />
                  Call Reception 
                </Button>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Dedicated Clean Form Panel */}
            <div className="lg:col-span-6 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center bg-slate-50/60 border-t lg:border-t-0 lg:border-l border-slate-100">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full max-w-md mx-auto lg:mx-0"
              >
                <div className="mb-6 sm:mb-8 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Request Appointment
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold mt-1">
                    Select your desired treatment option to securely format your referral triage details.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Name Input */}
                  <div>
                    <Input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-12 sm:h-13 px-4 rounded-xl border-slate-200/80 bg-white placeholder:text-slate-400 font-medium text-slate-800 shadow-sm focus-visible:ring-amber-500 focus-visible:border-amber-500 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <Input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-12 sm:h-13 px-4 rounded-xl border-slate-200/80 bg-white placeholder:text-slate-400 font-medium text-slate-800 shadow-sm focus-visible:ring-amber-500 focus-visible:border-amber-500 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Treatment Dropdown Field */}
                  <div className="relative">
                    <select
                      required
                      value={form.treatment}
                      onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                      className="w-full h-12 sm:h-13 pl-4 pr-10 rounded-xl border border-slate-200/80 bg-white font-medium text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 appearance-none text-sm cursor-pointer invalid:text-slate-400"
                    >
                      <option value="" disabled hidden>
                        Select Treatment Needed
                      </option>
                      {treatmentsList.map((treatment, idx) => (
                        <option key={idx} value={treatment} className="text-slate-800 font-medium">
                          {treatment}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  {/* Custom Message Field */}
                  <div>
                    <Textarea
                      placeholder="Tell us about your concern or preferred appointment date..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-4 rounded-xl border-slate-200/80 bg-white placeholder:text-slate-400 font-medium text-slate-800 shadow-sm min-h-[110px] sm:min-h-[130px] focus-visible:ring-amber-500 focus-visible:border-amber-500 transition-all duration-200 resize-none text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-12 sm:h-14 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99] transition-all border-0 group mt-2"
                  >
                    <MessageCircle size={16} className="text-amber-400 group-hover:rotate-12 transition-transform" />
                    <span>Send via WhatsApp</span>
                    <ArrowUpRight size={15} className="text-slate-400 group-hover:text-white transition-colors" />
                  </Button>

                  <p className="text-[10px] sm:text-[11px] text-center text-slate-400 font-medium leading-relaxed pt-2">
                    By submitting, you agree to route triage records safely to Pro-Smile Dental & Orthodontic Centre.
                  </p>
                </form>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AppointmentCTA;