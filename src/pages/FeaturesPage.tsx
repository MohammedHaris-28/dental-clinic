import { motion } from "framer-motion";
import {
  Smartphone,
  QrCode,
  Zap,
  BarChart3,
  Monitor,
  Globe,
  MessageSquare,
  Wallet,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const features = [
  {
    icon: Smartphone,
    title: "No Hardware Required",
    desc: "Run your entire restaurant system from any mobile, tablet, or laptop. No need for expensive POS machines, printers, or cash boxes.",
  },
  {
    icon: QrCode,
    title: "Custom QR Code Tables",
    desc: "Each table gets a unique QR code. Customers scan, view menu, and order instantly without waiting for staff.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    desc: "Get your restaurant live within 24 hours. We handle QR setup, menu upload, and onboarding smoothly.",
  },
  {
    icon: Monitor,
    title: "Kitchen Display System",
    desc: "Real-time order updates directly to kitchen. Track preparation status and reduce confusion.",
  },
  {
    icon: Wallet,
    title: "Smart Billing System",
    desc: "Track payments via Cash, UPI, or Card. Send bills via WhatsApp or email without needing a printer.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Track revenue, top-selling items, peak hours, and business growth with easy-to-understand insights.",
  },
  {
    icon: Globe,
    title: "Own Restaurant Website",
    desc: "Get a beautiful, ready-to-use website for your restaurant with menu and branding included.",
  },
  {
    icon: MessageSquare,
    title: "Digital Customer Experience",
    desc: "Customers enjoy a modern experience with QR ordering, faster service, and no waiting.",
  },
  {
    icon: Sparkles,
    title: "Simple & Elegant UI",
    desc: "Clean and intuitive interface designed for restaurant staff — no technical knowledge required.",
  },
  { icon: Monitor, title: "CRM Tools", desc: "Manage customer relationships and track interactions." },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* ✅ NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 relative"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Features
          </span>

          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">
            Everything You Need to Run Your Restaurant 🚀
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            SmartQR combines powerful tools with simplicity — helping you manage orders,
            track revenue, and deliver a modern dining experience without expensive hardware.
          </p>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="text-primary" size={26} />
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mt-2 flex-1">
                    {feature.desc}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>
      </section>

      {/* VALUE SECTION (VERY IMPORTANT FOR SALES) */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Why Restaurants Choose SmartQR
            </h2>

            <p className="text-muted-foreground text-lg">
              Unlike traditional POS systems that require heavy investment in hardware,
              SmartQR delivers a complete restaurant solution at a fraction of the cost —
              helping you increase efficiency, reduce expenses, and grow your business faster.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-primary">80%+</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Cost Savings on Hardware
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">24 hrs</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Setup Time
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">100%</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Digital Ordering Experience
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold">
            Ready to Upgrade Your Restaurant? 🚀
          </h3>

          <p className="text-muted-foreground mt-3">
            Join restaurants already saving costs and improving efficiency with SmartQR.
          </p>
        </motion.div>
      </section>

      {/* ✅ FOOTER */}
      <FooterSection />

    </div>
  );
};

export default FeaturesPage;