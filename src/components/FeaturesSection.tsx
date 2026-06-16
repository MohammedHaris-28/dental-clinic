
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldPlus,
  Smile,
  Baby,
  Stethoscope,
  HeartPulse,
  ScanLine,
  PenTool,
} from "lucide-react";

const services = [
  {
    icon: ShieldPlus,
    title: "Dental Implants",
    description:
      "Permanent and natural-looking tooth replacement solutions designed for comfort and confidence.",
  },
  {
    icon: HeartPulse,
    title: "Root Canal Treatment",
    description:
      "Advanced pain-free procedures to save infected teeth and restore oral health.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter and more confident smile.",
  },
  {
    icon: PenTool,
    title: "Dental Braces",
    description:
      "Modern orthodontic treatments to align teeth and improve bite function.",
  },
  {
    icon: Smile,
    title: "Smile Makeover",
    description:
      "Comprehensive cosmetic dental solutions tailored to enhance your smile.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle and caring dental treatments designed specifically for children.",
  },
  {
    icon: ScanLine,
    title: "Tooth Extraction",
    description:
      "Safe and comfortable extraction procedures using modern dental techniques.",
  },
  {
    icon: Stethoscope,
    title: "General Dental Checkup",
    description:
      "Routine examinations and preventive care to maintain long-term oral health.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            Our Treatments
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Complete Dental Care
            <span className="block text-primary">
              For Every Smile
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            From preventive care to advanced restorative and cosmetic
            dentistry, we offer comprehensive treatments tailored to
            every stage of your oral health journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-3xl border border-border/40 bg-background/70 backdrop-blur-xl p-6 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center text-primary text-sm font-medium">
                    Learn More
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-border/40 bg-background/60 backdrop-blur-xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary">
                5000+
              </h3>
              <p className="text-muted-foreground mt-2">
                Successful Treatments
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">
                10+
              </h3>
              <p className="text-muted-foreground mt-2">
                Years of Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">
                4.9★
              </h3>
              <p className="text-muted-foreground mt-2">
                Patient Satisfaction
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

