
import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    treatment: "Root Canal Treatment",
    review:
      "The entire experience was comfortable and professional. The doctor explained every step clearly and made me feel at ease throughout the treatment.",
  },
  {
    name: "Rahul K.",
    treatment: "Dental Implants",
    review:
      "Excellent care and modern facilities. The implant procedure was smooth, and the results look completely natural. Highly recommended.",
  },
  {
    name: "Ananya M.",
    treatment: "Smile Makeover",
    review:
      "I am extremely happy with my smile transformation. The attention to detail and personalized care exceeded my expectations.",
  },
];

const TestimonialsSection = () => {
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
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            <ShieldCheck size={16} />
            Patient Experiences
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Trusted By Hundreds
            <span className="block text-primary">
              Of Happy Patients
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Our patients trust us for compassionate care, advanced
            treatments, and exceptional results.
          </p>
        </motion.div>

        {/* Rating Summary */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto mt-12"
        >
          <div className="rounded-3xl border border-border/40 bg-background/70 backdrop-blur-xl p-8 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <h3 className="text-5xl font-bold">4.9</h3>

            <p className="mt-2 text-muted-foreground">
              Average Patient Rating
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Based on 500+ verified patient reviews
            </p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}

        <div className="grid lg:grid-cols-3 gap-6 mt-14">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative rounded-3xl border border-border/40 bg-background/70 backdrop-blur-xl p-7 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-5" />

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mt-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <div className="rounded-2xl border border-border/30 bg-background/60 backdrop-blur-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">
              5000+
            </h3>
            <p className="text-muted-foreground mt-2">
              Happy Patients
            </p>
          </div>

          <div className="rounded-2xl border border-border/30 bg-background/60 backdrop-blur-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">
              10+
            </h3>
            <p className="text-muted-foreground mt-2">
              Years Experience
            </p>
          </div>

          <div className="rounded-2xl border border-border/30 bg-background/60 backdrop-blur-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">
              4.9★
            </h3>
            <p className="text-muted-foreground mt-2">
              Patient Satisfaction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

