
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
} from "lucide-react";

const ContactSection = () => {
  const phone = "+91 XXXXX XXXXX";
  const email = "clinic@email.com";
  const whatsapp = "919XXXXXXXXX";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Visit Our
            <span className="block text-primary">
              Dental Clinic
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            We're here to help you achieve a healthier and brighter smile.
            Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-border/40 bg-background/70 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-8">
              Clinic Information
            </h3>

            <div className="space-y-5">
              {/* Phone */}

              <a
                href={`tel:${phone}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Call Us
                  </h4>

                  <p className="text-muted-foreground">
                    {phone}
                  </p>
                </div>
              </a>

              {/* Email */}

              <a
                href={`mailto:${email}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Email Us
                  </h4>

                  <p className="text-muted-foreground">
                    {email}
                  </p>
                </div>
              </a>

              {/* Address */}

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Clinic Address
                  </h4>

                  <p className="text-muted-foreground">
                    Shimoga, Karnataka, India
                  </p>
                </div>
              </a>

              {/* Hours */}

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock3 className="text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Opening Hours
                  </h4>

                  <p className="text-muted-foreground">
                    Mon - Sat: 9:00 AM – 8:00 PM
                  </p>

                  <p className="text-muted-foreground">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}

            <div className="mt-8">
              <h4 className="font-semibold mb-4">
                Follow Us
              </h4>

              <div className="flex gap-4">
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <MessageCircle size={20} />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[32px] border border-border/40 bg-background/70 backdrop-blur-xl"
          >
            <iframe
              title="Clinic Location"
              src="https://maps.google.com/maps?q=Shimoga%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[600px] w-full border-0"
            />
          </motion.div>
        </div>
      </div>
      
    </section>
    <FooterSection />
    </div>
  );
};

export default ContactSection;

