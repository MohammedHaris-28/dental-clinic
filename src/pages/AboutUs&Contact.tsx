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
  CalendarCheck2,
  ArrowRight,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  // Pro-Smile Clinic Details
  const mobileContact = "089716 19006";
  const email = "prosmile.shimoga@gmail.com";
  const whatsappNumber = "918971619006"; // Verified international format

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
    
    // Constructing a premium text format for manual WhatsApp submission
    const message = `Hello Pro-Smile Dental & Orthodontic Centre, I would like to book an appointment.%0A%0A` +
      `*Patient Name:* ${formData.name}%0A` +
      `*Contact Phone:* ${formData.phone}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Preferred Treatment:* ${formData.treatment}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans selection:bg-amber-500/10">
      <Navbar />

      {/* Increased padding-top on mobile view (pt-32) to prevent layout overlapping with fixed Navbar */}
      <section className="relative pt-32 pb-16 sm:py-24 lg:py-28 overflow-hidden">
        {/* Premium Light Ambient Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-10%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gradient-to-tr from-amber-600/10 to-amber-500/0 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section with responsive spacing adjustment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-semibold tracking-wide uppercase mb-5 sm:mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Connect With Us
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Ready For Your Perfect
              <span className="block mt-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                Pro-Smile?
              </span>
            </h2>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience boutique specialist-led dental care and clear orthodontics with Chief Dentist Dr. Ashwini Shetty (BDS, MDS). Reach out or book your session directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left: Contact Info Containers */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xl shadow-slate-100"
              >
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 sm:mb-6 tracking-wide flex items-center gap-2">
                  <span className="w-1 h-5 bg-amber-500 rounded-full" />
                  Clinic Details
                </h3>

                <div className="space-y-3.5 sm:space-y-4">
                  {/* Primary Hotline */}
                  <a
                    href={`tel:${mobileContact.replace(/\s+/g, '')}`}
                    className="group flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 hover:bg-amber-500/[0.04] hover:border-amber-500/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Clinic Helpline</span>
                      <span className="text-sm sm:text-base font-bold text-slate-700 group-hover:text-amber-600 transition-colors">{mobileContact}</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 hover:bg-amber-500/[0.04] hover:border-amber-500/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Email Inquiry</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 block truncate group-hover:text-amber-600 transition-colors">{email}</span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Location Address</span>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1 leading-relaxed">
                        Sagar Road, beside Hotel Ashoka Grand, Sharavathi Nagar, Hosamane, Shivamogga, Karnataka 577201
                      </p>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500/[0.02] to-transparent border border-amber-500/20">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                      <Clock3 size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-amber-700 uppercase tracking-wider">Clinical Timings</span>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">10:00 AM – 8:00 PM</p>
                      <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-600 font-semibold">Sunday Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Connects */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Follow Our Updates</h4>
                  <div className="flex items-center gap-3">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 flex-1" title="WhatsApp">
                      <MessageCircle size={18} />
                    </a>
                    <a href="https://www.instagram.com/prosmile.shimoga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 flex-1" title="Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href="https://www.facebook.com/prosmile.shimoga" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 flex-1" title="Facebook">
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
               <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:max-w-md lg:max-w-none mx-auto lg:mx-0"
            >
              <Button
  size="lg"
  onClick={() =>
    window.open(
      "https://click4appointment.com/book-appointment-guest/959570/3914",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="w-full sm:w-auto rounded-full px-8 h-16 bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-slate-950/10 active:scale-[0.98] transition-all duration-200 border-0 group"
>
  <Calendar className="h-4 w-4 text-amber-400 group-hover:rotate-12 transition-transform" />
  <span>Book Appointment Through Click4Appointment</span>
  <ArrowUpRight
    size={16}
    className="text-slate-400 group-hover:text-white transition-all"
  />
</Button>

            
            </motion.div>
            </div>
             
            {/* Right Side: Appointment Router & Map Components */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              {/* Premium WhatsApp Appointment Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xl shadow-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-wide flex items-center gap-2">
                  <CalendarCheck2 className="text-amber-500" size={22} />
                  Quick Appointment Route
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-5 sm:mb-6 font-medium">
                  Fill in your timeline and tap to safely format and route your scheduling request details to our clinical coordinator desk.
                </p>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Your Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Patient Name"
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500/50 focus:bg-white text-slate-800 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Contact Number</label>
                      <input
                        type="text"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500/50 focus:bg-white text-slate-800 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500/50 focus:bg-white text-slate-800 text-sm outline-none transition-all light:color-scheme"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Treatment Needed</label>
                      <div className="relative">
                        <select
                          name="treatment"
                          required
                          value={formData.treatment}
                          onChange={handleInputChange}
                          className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500/50 focus:bg-white text-slate-800 text-sm outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled hidden>Select Treatment Option</option>
                          <option value="Invisalign Aligners">Invisalign (Clear Aligners)</option>
                          <option value="Dental Implants">Dental Implant Fixing</option>
                          <option value="Root Canal Treatment">RCT (Root Canal)</option>
                          <option value="Wisdom Tooth Extraction">Wisdom Tooth Extraction</option>
                          <option value="Laser Dentistry">Laser Dentistry</option>
                          <option value="Tooth Reshaping">Tooth Reshaping</option>
                          <option value="Crowns & Bridges Fixing">Ceramic Crowns / Bridges</option>
                          <option value="Periodontal Treatment">Scraping / Flap Surgery</option>
                          <option value="General Consultation">General Checkup</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 h-12 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 active:scale-[0.99] transition-all"
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
                className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-100 group"
              >
                <iframe
                  title="Pro-Smile Dental & Orthodontic Centre Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4764.808814661283!2d75.5568239!3d13.9376012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba9059bf6bb83%3A0x75d011a62e7937ad!2sPro-Smile%20Dental%20%26%20Orthodontic%20Centre!5e1!3m2!1sen!2sin!4v1783610821836!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="min-h-[300px] sm:min-h-[360px] w-full border-0 opacity-95 group-hover:opacity-100 transition-all duration-500"
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