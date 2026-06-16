
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Clock3,
  HeartHandshake,
  Microscope,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic Environment",
    description:
      "Strict sterilization protocols and modern infection-control standards ensure every visit is safe and comfortable.",
  },
  {
    icon: Microscope,
    title: "Advanced Dental Technology",
    description:
      "We use modern diagnostic and treatment equipment to provide accurate, efficient, and comfortable care.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Treatment Plans",
    description:
      "Every patient receives individual attention and customized treatment recommendations.",
  },
  {
    icon: Award,
    title: "Experienced Dental Care",
    description:
      "Professional expertise combined with a patient-first approach for reliable and lasting results.",
  },
  {
    icon: Clock3,
    title: "Convenient Appointments",
    description:
      "Flexible scheduling and minimal waiting times to make dental care fit your lifestyle.",
  },
  {
    icon: Sparkles,
    title: "Comfort-Focused Experience",
    description:
      "Gentle treatments designed to reduce anxiety and help patients feel relaxed throughout their visit.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

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
            Why Patients Trust Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Exceptional Dental Care
            <span className="block text-primary">
              With A Personal Touch
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We combine modern dentistry, compassionate care, and advanced
            technology to deliver a comfortable and reliable dental experience
            for every patient.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side Feature Cards */}

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-border/40 bg-background/70 backdrop-blur-xl p-6 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side Trust Panel */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-[32px] border border-border/40 bg-background/70 backdrop-blur-xl p-8 lg:p-10">
              <h3 className="text-3xl font-bold leading-tight">
                Dedicated To Your
                <span className="block text-primary">
                  Long-Term Oral Health
                </span>
              </h3>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                Our mission is to provide quality dental care in a welcoming
                environment where patients feel informed, comfortable, and
                confident about their treatment decisions.
              </p>

              {/* Trust Metrics */}

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="rounded-2xl bg-primary/5 p-5">
                  <h4 className="text-3xl font-bold text-primary">
                    5000+
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Happy Patients
                  </p>
                </div>

                <div className="rounded-2xl bg-primary/5 p-5">
                  <h4 className="text-3xl font-bold text-primary">
                    10+
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-2xl bg-primary/5 p-5">
                  <h4 className="text-3xl font-bold text-primary">
                    4.9★
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Patient Rating
                  </p>
                </div>

                <div className="rounded-2xl bg-primary/5 p-5">
                  <h4 className="text-3xl font-bold text-primary">
                    100%
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Care Focused
                  </p>
                </div>
              </div>

              {/* Quote */}

              <div className="mt-8 p-5 rounded-2xl border border-border/30 bg-background/60">
                <p className="italic text-muted-foreground">
                  "We believe every patient deserves compassionate care,
                  transparent communication, and modern treatment options
                  that support lifelong oral health."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

