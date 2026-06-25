import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-dental.png";

const navItems = [
  "Services",
  "Contact",
  "Blogs",
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

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const sectionId = id.toLowerCase().replace(/ /g, "-");

    if (id === "Services" || id === "About Us") {
      if (location.pathname !== "/") {
        navigate(`/#${sectionId}`);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
      setOpen(false);
      return;
    }

    if (id === "Contact") {
      navigate("/contact");
      setOpen(false);
      return;
    }

    // Default Fallback
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
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
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white border border-slate-200/80 shadow-sm transition-all duration-300 group-hover:scale-[1.03]">
              <img
                src={logo}
                alt="Chisel Dental Clinic Logo"
                className="w-full h-full object-contain p-1.5"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-base sm:text-lg text-slate-900 tracking-tight leading-none">
                Chisel Dental™
              </span>
              <span className="text-[9px] font-bold text-emerald-600 tracking-widest uppercase mt-0.5">
                Premium Care
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-50 border border-slate-100 p-1 rounded-full">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 rounded-full hover:bg-white transition-all duration-200 uppercase tracking-wider"
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => scrollTo("About Us")}
              className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 rounded-full hover:bg-white transition-all duration-200 uppercase tracking-wider"
            >
              About Us
            </button>
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={() => scrollTo("Contact")}
              className="rounded-full px-6 h-11 bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-md shadow-slate-950/5 active:scale-[0.98] transition-all duration-150 border-0"
            >
              <Calendar size={14} className="text-emerald-400" />
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
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="text-left px-4 py-3 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all uppercase tracking-wider"
                  >
                    {item}
                  </button>
                ))}

                <button
                  onClick={() => scrollTo("About Us")}
                  className="text-left px-4 py-3 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all uppercase tracking-wider"
                >
                  About Us
                </button>

                <div className="mt-2 pt-2 border-t border-slate-100">
                  <Button
                    onClick={() => scrollTo("Contact")}
                    className="w-full rounded-xl h-12 bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                  >
                    <Calendar size={14} className="text-emerald-400" />
                    <span>Book Appointment</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Smooth Linear Page Scroll Indicator */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500"
        style={{
          width: `${progress}%`,
          transition: "width 0.15s ease-out",
        }}
      />
    </header>
  );
};

export default Navbar;