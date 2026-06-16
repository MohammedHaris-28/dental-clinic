
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
      const scrollProgress =
        (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;

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

    if (id === "Services") {
      navigate("/");
      setOpen(false);
      return;
    }

    if (id === "About Us") {
      navigate("/");
      setOpen(false);
      return;
    }

  if (id === "Contact") {
      navigate("/contact");
      setOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setOpen(false);
      return;
    }

    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{
            y: -20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={`flex items-center justify-between rounded-2xl px-5 sm:px-6 py-3 border transition-all duration-500 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}

          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white border border-border/30 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:scale-105">
  <img
    src={logo}
    alt="Dental Clinic Logo"
    className="w-full h-full object-contain p-1"
  />
</div>

            <span className="font-heading text-xl font-black tracking-tight">
              <span className="text-foreground">Dental Clinic</span>
            </span>
          </div>

          {/* Desktop Nav */}

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-all duration-200"
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-all duration-200"
            >
              About Us
            </button>
          </div>

          {/* Desktop CTA */}

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="rounded-xl"
            >
          
            </Button>

            <Button
              onClick={() => navigate("/")}
              className="rounded-xl px-6 bg-primary hover:bg-primary/90 shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Toggle */}

          <button
            className="md:hidden p-2 rounded-xl hover:bg-muted/50 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </motion.nav>

        {/* Mobile Drawer */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="md:hidden mt-2 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-[0_20px_40px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="text-left px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                  >
                    {item}
                  </button>
                ))}

                <button
                  onClick={() => {
                    navigate("/");
                    setOpen(false);
                  }}
                  className="text-left px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  About Us
                </button>

                <div className="mt-3 flex flex-col gap-3">
                  <Button
                    onClick={() => {
                      navigate("/");
                      setOpen(false);
                    }}
                    className="rounded-xl py-6"
                  >
                    Book Appointment
                  </Button>

                 
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress */}

      <div
        className="absolute bottom-0 left-0 h-[2px] bg-primary"
        style={{
          width: `${progress}%`,
          transition: "width 0.1s linear",
        }}
      />
    </header>
  );
};

export default Navbar;

