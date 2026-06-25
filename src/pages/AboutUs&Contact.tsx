import React, { useState } from "react";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Compass,
  CalendarCheck2,
  ArrowRight,
} from "lucide-react";

const ContactSection = () => {
  // Clinic Details
  const landline = "080-25524249";
  const mobile1 = "9986560009";
  const mobile2 = "9900370009";
  const email = "chiseldentalclinics@gmail.com";
  const whatsappNumber = "919986560009";

  // Form State for Appointment Route
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    treatment: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Constructing an elegant text format for manual WhatsApp submission
    const message = `Hello Chisel Dental Clinic, I would like to book an appointment.%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Preferred Treatment:* ${formData.treatment}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans selection:bg-emerald-500/20">
      <Navbar />

      <section className="relative py-28 overflow-hidden">
        {/* Premium Light Ambient Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-teal-600/10 to-emerald-500/0 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Connect With Us
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let's Chisel Your Perfect
              <span className="block mt-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
                Healthy Smile
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Two decades down the line, we're dedicated to elite cosmetic and implant dental care. Reach out or schedule your drop-in directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Contact Info Containers */}
            <div className="lg:col-span-5 space-y-6">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-wide flex items-center gap-2">
                  <span className="w-1 h-5 bg-emerald-500 rounded-full" />
                  Clinic Details
                </h3>

                <div className="space-y-4">
                  {/* Phone Containers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`tel:${mobile1}`}
                      className="group flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-emerald-500/[0.04] hover:border-emerald-500/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                        <Phone size={18} />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Mobile Contact</span>
                        <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">{mobile1}</span>
                      </div>
                    </a>

                    <a
                      href={`tel:${mobile2}`}
                      className="group flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-emerald-500/[0.04] hover:border-emerald-500/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                        <Phone size={18} />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Alternative Call</span>
                        <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">{mobile2}</span>
                      </div>
                    </a>
                  </div>

                  {/* Landline */}
                  <a
                    href={`tel:${landline}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-teal-500/[0.04] hover:border-teal-500/20 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Koramangala Landline</span>
                      <span className="text-sm sm:text-base font-bold text-slate-700 group-hover:text-teal-600 transition-colors">{landline}</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-emerald-500/[0.04] hover:border-emerald-500/20 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Inquiry</span>
                      <span className="text-sm sm:text-base font-bold text-slate-700 block truncate group-hover:text-emerald-600 transition-colors">{email}</span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Main Branch</span>
                      <p className="text-sm font-medium text-slate-600 mt-1 leading-relaxed">
                        No 18 1st main, 1st block Koramangala, Jakkasandra Extension, Near Wipro Park, Next to Mani Biriyani, Bangalore - 560034
                      </p>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/[0.02] to-transparent border border-amber-500/20">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                      <Clock3 size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-amber-700 uppercase tracking-wider">Clinic Hours</span>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">9:00 AM – 6:30 PM</p>
                      <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-600 font-medium">Tuesday Off</span>
                    </div>
                  </div>
                </div>

                {/* Social Connects */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Follow Our Updates</h4>
                  <div className="grid grid-cols-5 gap-2">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300" title="WhatsApp">
                      <MessageCircle size={18} />
                    </a>
                    <a href="https://www.instagram.com/chiseldentalclinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300" title="Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href="https://www.facebook.com/chiseldental/" target="_blank" rel="noreferrer" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300" title="Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCv4faw5JMvcOubRg2XobglQ" target="_blank" rel="noreferrer" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300" title="YouTube">
                      <Youtube size={18} />
                    </a>
                    <a href="https://in.pinterest.com/chiseldentalcli/" target="_blank" rel="noreferrer" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300" title="Pinterest">
                      <Compass size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Appointment Router & Map Components */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Premium WhatsApp Appointment Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-wide flex items-center gap-2">
                  <CalendarCheck2 className="text-emerald-500" size={22} />
                  Quick Appointment Route
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 font-medium">
                  Fill in your preferred timeline and tap to safely route & dispatch details seamlessly to our clinic WhatsApp coordinator desk.
                </p>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5 tracking-wider">Your Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500/50 focus:bg-white text-slate-800 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5 tracking-wider">Contact Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500/50 focus:bg-white text-slate-800 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5 tracking-wider">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500/50 focus:bg-white text-slate-800 text-sm outline-none transition-all color-scheme-light"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5 tracking-wider">Treatment Needed</label>
                      <div className="relative">
                        <select
                          name="treatment"
                          required
                          value={formData.treatment}
                          onChange={handleInputChange}
                          className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500/50 focus:bg-white text-slate-800 text-sm outline-none transition-all appearance-none"
                        >
                          <option value="" disabled>Select Care Category</option>
                          <option value="Dental Implants">Dental Implants</option>
                          <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                          <option value="Root Canal Treatment">Root Canal Treatment</option>
                          <option value="Teeth Whitening">Teeth Whitening / Scaling</option>
                          <option value="General Consultation">General Checkup</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.99] transition-all"
                  >
                    Confirm & Send to WhatsApp
                    <ArrowRight size={16} />
                  </button>
                </form>
              </motion.div>

              {/* Map Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-100 group"
              >
                <iframe
                  title="Chisel Dental Clinic Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4784.9109246672215!2d77.6371667!3d12.9276663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14426433b22d%3A0xd2bbeb8d0bf81bc6!2sChisel%20Dental%20Clinic!5e1!3m2!1sen!2sin!4v1782315107862!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="min-h-[340px] sm:min-h-[380px] w-full border-0 opacity-90 group-hover:opacity-100 transition-all duration-500"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactSection;