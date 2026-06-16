import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, IndianRupee } from "lucide-react";

const benefits = [
  {
    icon: IndianRupee,
    title: "Increase Revenue Instantly",
    desc: "Faster ordering means more table turnover. Restaurants using our system see up to 20% more daily sales.",
  },
  {
    icon: Clock,
    title: "Save Time & Reduce Chaos",
    desc: "No more running between tables. Orders go directly to kitchen — faster, accurate, stress-free.",
  },
  {
    icon: Users,
    title: "Reduce Staff Dependency",
    desc: "Operate smoothly even with fewer staff. Perfect for busy hours and small teams.",
  },
  {
    icon: TrendingUp,
    title: "Know What Actually Sells",
    desc: "Track top dishes, peak hours, and revenue — make smarter decisions daily.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Why Restaurants Choose Us
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Not just a QR menu — a system that increases your profit and simplifies your operations.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center hover:shadow-card-hover transition-all"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ROI Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold">
            Spend ₹999 → Earn ₹5,000+ More Every Month
          </h3>
          <p className="text-muted-foreground mt-2">
            Even 3 extra orders per day can cover your entire subscription cost.
          </p>
        </motion.div>

      </div>
    </section>
  );
}