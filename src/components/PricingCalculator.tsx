import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { IndianRupee, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const features = [
  { name: "POS Dashboard", price: 1500 },
  { name: "Kitchen Display", price: 1000 },
  { name: "Analytics", price: 1200 },
  { name: "Custom Website", price: 2000 },
  { name: "Multi-Branch", price: 2500 },
];

export default function PricingCalculatorSection() {
  const [tables, setTables] = useState(10);
  const [selected, setSelected] = useState<string[]>([]);

  const BASE = 4000; // better positioning

  const toggle = (name: string) => {
    setSelected(prev =>
      prev.includes(name)
        ? prev.filter(i => i !== name)
        : [...prev, name]
    );
  };

  const total = useMemo(() => {
    const tableCost = tables * 50;
    const featureCost = features
      .filter(f => selected.includes(f.name))
      .reduce((sum, f) => sum + f.price, 0);

    return BASE + tableCost + featureCost;
  }, [tables, selected]);

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Pricing Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Build Your Perfect Plan
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Customize your setup based on your restaurant needs. Pay only for what you use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-6 shadow-card"
          >
            {/* Tables */}
            <div className="mb-6">
              <Label className="font-semibold">Number of Tables</Label>
              <Input
                type="number"
                value={tables}
                onChange={(e) => setTables(Number(e.target.value))}
                className="mt-2"
              />
              <p className="text-xs text-muted-foreground mt-1">
                ₹50 per table QR setup
              </p>
            </div>

            {/* Features */}
            <div>
              <Label className="font-semibold mb-3 block">Select Features</Label>
              <div className="space-y-3">
                {features.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-center justify-between bg-background/40 px-3 py-2 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={selected.includes(f.name)}
                        onCheckedChange={() => toggle(f.name)}
                      />
                      <span className="text-sm">{f.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ₹{f.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-8 shadow-card flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Your Investment</h3>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Base Setup: ₹{BASE}</p>
                <p>Tables ({tables}): ₹{tables * 50}</p>
                <p>
                  Features: ₹
                  {features
                    .filter(f => selected.includes(f.name))
                    .reduce((sum, f) => sum + f.price, 0)}
                </p>
              </div>

              {/* Value hint */}
              <div className="mt-4 flex items-center gap-2 text-xs text-green-600">
                <Zap size={14} />
                Recover cost in 2–3 days with increased orders
              </div>
            </div>

            {/* TOTAL */}
            <div className="mt-6 border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Total Setup Cost</span>
                <span className="text-3xl font-bold text-primary flex items-center gap-1">
                  <IndianRupee size={22} />
                  {total.toLocaleString("en-IN")}
                </span>
              </div>

              <p className="text-xs text-muted-foreground mt-2">
                One-time setup. Monthly subscription starts from ₹999.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}