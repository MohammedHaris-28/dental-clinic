
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

import logo from "@/assets/logo-dental.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/30">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer */}

        <div className="py-16">
          <div className="grid gap-10 lg:grid-cols-4">
            {/* Clinic Info */}

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-border/40 bg-white">
                  <img
                    src={logo}
                    alt="Clinic Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                     Dental
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Advanced Clinic
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Providing trusted, modern, and patient-focused dental care
                with a commitment to comfort, safety, and healthy smiles.
              </p>

              {/* Social Links */}

              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}

            <div>
              <h4 className="font-semibold text-lg mb-5">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Why Choose Us",
                  "Testimonials",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight size={16} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}

            <div>
              <h4 className="font-semibold text-lg mb-5">
                Treatments
              </h4>

              <ul className="space-y-3">
                {[
                  "Dental Implants",
                  "Root Canal",
                  "Teeth Whitening",
                  "Smile Makeover",
                  "Dental Braces",
                  "Pediatric Dentistry",
                ].map((item) => (
                  <li key={item}>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <ChevronRight size={16} />
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h4 className="font-semibold text-lg mb-5">
                Contact Info
              </h4>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone
                    size={18}
                    className="text-primary mt-1"
                  />

                  <div>
                    <p className="font-medium">
                      +91 XXXXX XXXXX
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Call us anytime
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail
                    size={18}
                    className="text-primary mt-1"
                  />

                  <div>
                    <p className="font-medium">
                      clinic@email.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Send us an email
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin
                    size={18}
                    className="text-primary mt-1"
                  />

                  <div>
                    <p className="font-medium">
                      Shimoga, Karnataka
                    </p>
                    <p className="text-sm text-muted-foreground">
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="border-t border-border/30 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} #2Code-digital solutions.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

