import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Sparkles,
  ArrowUpRight
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

    const text = `
🦷 New Appointment Request

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🩺 Treatment: ${form.treatment}

💬 Message:
${form.message}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text.trim())}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden antialiased selection:bg-emerald-500/10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Content Shell with Premium Subtle Contrast */}
        <div className="rounded-[40px] border border-slate-100 bg-slate-50/50 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT SIDE: Brand Value Statements */}
            <div className="lg:col-span-6 p-8 md:p-14 lg:p-16 flex flex-col justify-between bg-white">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Clean Tag Badge */}
                <div className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/60 text-emerald-800 text-xs font-bold tracking-widest uppercase">
                  <Sparkles size={13} className="text-emerald-500" />
                  <span>Direct Booking Suite</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                  Ready For A{" "}
                  <span className="block mt-1 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Healthier Smile?
                  </span>
                </h2>

                <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl leading-relaxed sm:leading-loose">
                  Schedule your consultation instantly over our verified concierge channel and receive boutique medical-grade dental care driven by absolute mastery.
                </p>

                {/* Highly Balanced Bullet Framework */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <Clock3 size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">Flexible Scheduling</h4>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                        Priority and weekend dental care openings available.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">Safe & Certified Environment</h4>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                        Advanced structural sterilization matrix protocols.
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
                className="mt-12 p-5 rounded-[24px] border border-slate-200/60 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Need Immediate Advice?</p>
                  <h3 className="font-black text-xl text-slate-900 mt-1 tracking-tight">+91 XXXXX XXXXX</h3>
                </div>
                <Button 
                  variant="outline" 
                  className="rounded-full bg-white h-11 px-5 text-xs font-bold border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95 transition-transform"
                  onClick={() => window.open('tel:+91XXXXXXXXXX')}
                >
                  <Phone size={14} className="mr-2 text-emerald-600" />
                  Voice Concierge
                </Button>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Dedicated Clean Form Panel */}
            <div className="lg:col-span-6 p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-slate-50/60 border-t lg:border-t-0 lg:border-l border-slate-100">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full max-w-md mx-auto lg:mx-0"
              >
                <div className="mb-8 text-center lg:text-left">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Request Appointment
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold mt-1">
                    Fill out your data to instantly render a digital referral note.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-13 px-4 rounded-xl border-slate-200/80 bg-white placeholder:text-slate-400 font-medium text-slate-800 shadow-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="h-13 px-4 rounded-xl border-slate-200/80 bg-white placeholder:text-slate-400 font-medium text-slate-800 shadow-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      required
                      placeholder="Treatment Needed (e.g., Implant, Consultation)"
                      value={form.treatment}
                      onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                      className="h-13 px-4 rounded-xl border-slate-200/80 bg-white placeholder:text-slate-400 font-medium text-slate-800 shadow-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about your concern..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="p-4 rounded-xl border-slate-200/80 bg-white placeholder:text-slate-400 font-medium text-slate-800 shadow-sm min-h-[120px] focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-200 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99] transition-all border-0 group mt-2"
                  >
                    <MessageCircle size={16} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
                    <span>Send via WhatsApp</span>
                    <ArrowUpRight size={15} className="text-slate-400 group-hover:text-white transition-colors" />
                  </Button>

                  <p className="text-[11px] text-center text-slate-400 font-medium leading-relaxed pt-2">
                    By submitting, you agree to route secure triage data to Chisel Dental clinical officers.
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