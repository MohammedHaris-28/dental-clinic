import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, ShieldCheck, Smile, Wallet, LineChart } from "lucide-react";

const comparison = [
  { traditional: "Waiters required", smart: "Reduced staff dependency" },
  { traditional: "Printed menus cost", smart: "Low printing cost, digital bills" },
  { traditional: "Manual errors", smart: "Automated orders" },
  { traditional: "No insights", smart: "Smart analytics" },
  { traditional: "Slow order flow", smart: "Instant digital orders" },
];

const benefits = [
  { icon: TrendingUp, title: "Increase Order Speed", desc: "Orders go directly to kitchen — no waiting." },
  { icon: ShieldCheck, title: "Reduce Human Errors", desc: "Digital ordering eliminates miscommunication." },
  { icon: Smile, title: "Better Customer Experience", desc: "Sleek menus, fast service, happy guests." },
  { icon: Wallet, title: "Save Operational Costs", desc: "Cut up to 30% on operational expenses." },
  { icon: LineChart, title: "Real-time Insights", desc: "Know what sells, when, and how much — live." },
];

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const BenefitsSection = () => (
  <section id="benefits" className="py-24 lg:py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
    <div className="container mx-auto px-4 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Benefits</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
          Why Restaurants Love Our System
        </h2>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
        {[
          { value: 30, suffix: "%", label: "Cost Savings" },
          { value: 24, suffix: "hrs", label: "Setup Time" },
          { value: 20, suffix: "%", label: "Approx Revenue Increase" },
        ].map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">
              <Counter target={s.value} suffix={s.suffix} />
            </p>
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl shadow-card overflow-hidden max-w-3xl mx-auto mb-16"
      >
        <div className="grid grid-cols-2 text-sm font-heading font-semibold">
          <div className="p-4 bg-muted/50 text-muted-foreground">Traditional System</div>
          <div className="p-4 bg-primary/10 text-primary">SmartQR System</div>
        </div>
        {comparison.map((row, i) => (
          <div key={i} className="grid grid-cols-2 text-sm border-t border-border/40">
            <div className="p-4 text-muted-foreground">{row.traditional}</div>
            <div className="p-4 text-foreground font-medium">{row.smart}</div>
          </div>
        ))}
      </motion.div>

      {/* Benefit Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <b.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{b.title}</h3>
            <p className="text-muted-foreground text-sm mt-2">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
