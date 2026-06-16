
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import doctorImage from "@/assets/doctor-hero.png";

const DoctorProfileSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Meet Your Dentist
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Expert Care You Can Trust
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            Dedicated to providing comfortable, modern, and personalized
            dental care for every patient.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src={doctorImage}
                alt="Doctor"
                className="w-full h-[550px] object-cover"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 right-6 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl px-6 py-4 shadow-xl">
              <h4 className="text-2xl font-bold text-primary">10+</h4>
              <p className="text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-medium">
              Chief Dental Surgeon
            </span>

            <h3 className="mt-2 text-4xl font-bold">
              Dr. Name
            </h3>

            <p className="mt-2 text-lg text-muted-foreground">
              BDS, Dental Surgeon
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              With years of experience in modern dentistry, Dr. Arshiya
              specializes in preventive, cosmetic, and restorative dental
              treatments. Her patient-first approach ensures every visit
              is comfortable, transparent, and focused on long-term oral health.
            </p>

            {/* Trust Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="glass rounded-2xl p-5 border border-border/30">
                <GraduationCap className="text-primary mb-3" />
                <h4 className="font-semibold">
                  Qualified Professional
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Certified dental surgeon with advanced training.
                </p>
              </div>

              <div className="glass rounded-2xl p-5 border border-border/30">
                <Award className="text-primary mb-3" />
                <h4 className="font-semibold">
                  Modern Treatments
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Latest techniques and dental technologies.
                </p>
              </div>

              <div className="glass rounded-2xl p-5 border border-border/30">
                <HeartHandshake className="text-primary mb-3" />
                <h4 className="font-semibold">
                  Patient Focused
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Personalized treatment plans for every patient.
                </p>
              </div>

              <div className="glass rounded-2xl p-5 border border-border/30">
                <ShieldCheck className="text-primary mb-3" />
                <h4 className="font-semibold">
                  Safe & Hygienic
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Strict sterilization and safety standards.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <h4 className="text-3xl font-bold text-primary">
                  5000+
                </h4>
                <p className="text-sm text-muted-foreground">
                  Happy Patients
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-primary">
                  10+
                </h4>
                <p className="text-sm text-muted-foreground">
                  Years Practice
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-primary">
                  4.9★
                </h4>
                <p className="text-sm text-muted-foreground">
                  Average Rating
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileSection;

