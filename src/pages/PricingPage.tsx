import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Zap,
  IndianRupee,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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

const features = [
  { name: "POS Dashboard", price: 1500 },
  { name: "Kitchen Display", price: 1000 },
  { name: "Analytics", price: 1200 },
  { name: "Custom Website", price: 2000 },
  { name: "Multi-Branch", price: 2500 },
];

export default function PricingPage() {
  const [tables, setTables] = useState(10);
  const [selected, setSelected] = useState<string[]>([]);
  const [qrType, setQrType] = useState<"standard" | "premium">("standard");

  const BASE = 4000;

  const toggle = (name: string) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((i) => i !== name)
        : [...prev, name]
    );
  };

  const qrCostPerTable = qrType === "premium" ? 150 : 50;

  const total = useMemo(() => {
    const tableCost = tables * qrCostPerTable;

    const featureCost = features
      .filter((f) => selected.includes(f.name))
      .reduce((sum, f) => sum + f.price, 0);

    return BASE + tableCost + featureCost;
  }, [tables, selected, qrType]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="py-24 text-center">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">
          Pricing
        </span>
        <h1 className="text-4xl font-heading font-bold mt-3">
          Simple, Transparent Pricing
        </h1>
        <p className="text-muted-foreground mt-4">
          No hidden charges. Built to maximize your revenue.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 max-w-5xl">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "glass glow-primary scale-105 border-primary/30"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white text-xs px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {plan.desc}
              </p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                <span className="text-sm text-muted-foreground">
                  {" "}
                  /month
                </span>
              </div>

              <ul className="space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check size={16} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button className="mt-6 rounded-full">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>


      {/* TRUST SECTION */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 max-w-4xl text-center">

          <div className="glass p-6 rounded-2xl">
            <IndianRupee className="mx-auto text-primary mb-3" />
            <h4 className="font-semibold">Affordable Setup</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Pay only for what you need. No unnecessary hardware.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <Zap className="mx-auto text-primary mb-3" />
            <h4 className="font-semibold">Fast ROI</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Recover cost within days through efficiency.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <ShieldCheck className="mx-auto text-primary mb-3" />
            <h4 className="font-semibold">No Hidden Fees</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Transparent pricing. No commissions.
            </p>
          </div>

        </div>
      </section>

      <FooterSection />
    </div>
  );
}