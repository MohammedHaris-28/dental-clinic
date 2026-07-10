import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-dental.png";

// Comprehensive section mapping across your landing ecosystem
const navItems = [
  { label: "Features", target: "Features" },
  { label: "Process", target: "How It Works" },
  { label: "Why Us", target: "Why Choose Us" },
  { label: "Testimonials", target: "Testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const doc = document.documentElement;
      const totalScroll = doc.scrollHeight - doc.clientHeight;
      const scrollProgress = totalScroll > 0 ? (doc.scrollTop / totalScroll) * 100 : 0;

      setProgress(scrollProgress);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (target: string) => {
    setOpen(false);

    if (target === "Contact") {
      navigate("/contact");
      return;
    }

    const sectionId = target.toLowerCase().replace(/ /g, "-");

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 border transition-all duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border-slate-200/60 shadow-lg shadow-slate-900/5"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Brand Identity / Logo */}
          <div
            onClick={() => {
              if (location.pathname !== "/") navigate("/");
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-white border border-slate-200/80 shadow-sm transition-all duration-300 group-hover:scale-[1.03]">
              <img
                src={logo}
                alt="Pro-Smile Dental & Orthodontic Centre Logo"
                className="w-full h-full object-contain p-1.5"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-base sm:text-lg text-slate-900 tracking-tight leading-none">
                Pro-Smile
              </span>
              <span className="text-[9px] font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent tracking-widest uppercase mt-1">
                Dental Center
              </span>
            </div>
          </div>

          {/* Desktop Floating Link Pill */}
          <div className="hidden md:flex items-center gap-1 bg-slate-50 border border-slate-100 p-1 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 rounded-full hover:bg-white transition-all duration-200 uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
            
            {/* Direct Contact Route Trigger */}
            <button
              onClick={() => scrollTo("Contact")}
              className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 rounded-full hover:bg-white transition-all duration-200 uppercase tracking-wider"
            >
              Contact
            </button>
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate("/review")}
              className="px-4 h-11 text-xs font-bold bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/20 text-amber-600 rounded-full transition-all duration-200 uppercase tracking-wider flex items-center gap-1.5 group active:scale-[0.98]"
            >
              <Star size={14} className="fill-amber-500 text-amber-500 group-hover:rotate-12 transition-transform" />
              <span>Leave a Review</span>
            </button>

            <Button
  onClick={() =>
    window.open(
      "https://click4appointment.com/book-appointment-guest/959570/3914",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="rounded-full px-6 h-11 bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-md shadow-slate-950/5 border-0 group active:scale-[0.98] transition-all"
>
  <Calendar
    size={14}
    className="text-amber-400 group-hover:rotate-12 transition-transform"
  />
  <span>Book Appointment</span>
</Button>
          </div>

          {/* Mobile Menu Action Toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Options"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>

        {/* Mobile Navigation Drawer Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden mt-2 rounded-2xl bg-white border border-slate-200/60 shadow-xl overflow-hidden p-3"
            >
              <div className="flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.target)}
                    className="text-left px-4 py-3 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all uppercase tracking-wider"
                  >
                    {item.label}
                  </button>
                ))}

                <button
                  onClick={() => scrollTo("Contact Us")}
                  className="text-left px-4 py-3 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all uppercase tracking-wider"
                >
                  Contact
                </button>

                {/* Mobile Extra Navigation Integration */}
                <div className="mt-2 pt-2 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => {
                      navigate("/review");
                      setOpen(false);
                    }}
                    className="w-full rounded-xl h-12 bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/20 text-amber-600 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
                  >
                    <Star size={14} className="fill-amber-500 text-amber-500" />
                    <span>Leave a Review</span>
                  </button>

                  <Button
                    onClick={() => scrollTo("Contact Us")}
                    className="w-full rounded-xl h-12 bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 border-0"
                  >
                    <Calendar size={14} className="text-amber-400" />
                    <span>Book Appointment</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600"
        style={{
          width: `${progress}%`,
          transition: "width 0.15s ease-out",
        }}
      />
    </header>
  );
};

export default Navbar;