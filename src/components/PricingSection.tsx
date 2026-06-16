import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "399",
    desc: "Perfect for small restaurants getting started.",
    features: [
      "QR Menu System",
      "Basic Order Management",
      "Menu Management",
      "1 Restaurant",
      "Email Support",
    ],
    cta: "Start Basic",
  },
  {
    name: "Pro",
    price: "699",
    desc: "For growing restaurants that need more power.",
    features: [
      "Everything in Basic",
      "POS Dashboard",
      "Kitchen Display System",
      "Analytics Dashboard",
      "Cash Logs",
      "CRM Tools",
      "Reports & Insights",
      "Role-based Access",
      "Priority Support",
    ],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Pro+",
    price: "1,299",
    desc: "For serious restaurants & multi-branch setups.",
    features: [
      "Everything in Pro",
      "Multi-branch Support",
      "Custom Website",
      "Future Add-ons Ready",
    ],
    cta: "Go Premium",
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 lg:py-32 relative">
    <div className="container mx-auto px-4 lg:px-8">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">
          Pricing
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          No hidden charges. Designed to help you increase revenue from day one.
        </p>
      </motion.div>

      {/* PRICING CARDS */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
              plan.popular
                ? "glass glow-primary shadow-card-hover scale-[1.03] border-primary/30"
                : "glass shadow-card hover:shadow-card-hover"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}

            <h3 className="font-heading font-bold text-xl text-foreground">
              {plan.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>

            <div className="mt-6 mb-6">
              <span className="text-4xl font-heading font-bold text-foreground">
                ₹{plan.price}
              </span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>

            <ul className="space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              className={`mt-8 rounded-full py-5 text-base w-full ${
                plan.popular
                  ? "gradient-primary text-primary-foreground shadow-soft"
                  : "bg-accent text-foreground hover:bg-accent/80"
              }`}
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* 🔥 SETUP + TRUST SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 max-w-4xl mx-auto grid md:grid-cols-3 gap-6"
      >
        <div className="glass rounded-2xl p-6 text-center">
          <IndianRupee className="mx-auto mb-3 text-primary" />
          <h4 className="font-semibold">One-Time Setup</h4>
          <h4 className="font-semibold">₹7,999/-</h4>
          <p className="text-sm text-muted-foreground mt-2">
            Includes full onboarding & QR setup.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 text-center">
          <Zap className="mx-auto mb-3 text-primary" />
          <h4 className="font-semibold">Fast ROI</h4>
          <p className="text-sm text-muted-foreground mt-2">
            Recover your cost with increased orders and efficient management.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 text-center">
          <ShieldCheck className="mx-auto mb-3 text-primary" />
          <h4 className="font-semibold">No Hidden Fees</h4>
          <p className="text-sm text-muted-foreground mt-2">
            No commissions. No hidden charges. complete transparency.
          </p>
        </div>
      </motion.div>

      {/*  FINAL CTA */}
      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-4">
          Join #2CODE-Restraunt Solutions for better operations and more revenue. Start your free trial today, no credit card required.
        </p>
        <Button className="rounded-full px-8 py-5 text-lg gradient-primary text-primary-foreground shadow-soft">
          Start Free Trial
        </Button>
      </div>
    </div>
  </section>
);

export default PricingSection;