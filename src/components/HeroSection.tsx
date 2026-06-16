
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Award,
} from "lucide-react";

import doctorImage from "@/assets/clinic.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <ShieldCheck size={16} />
              Trusted Dental Care
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Healthy Smiles Begin With
              <span className="block text-primary">
                Expert Dental Care
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Comprehensive dental treatments, advanced technology,
              and personalized care designed to keep your smile healthy,
              confident, and beautiful.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              
              <Button
              
                size="lg"
                className="rounded-xl px-8 py-6"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8 py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold">5,000+</h3>
                <p className="text-muted-foreground text-sm">
                  Happy Patients
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-muted-foreground text-sm">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">4.9★</h3>
                <p className="text-muted-foreground text-sm">
                  Patient Rating
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={doctorImage}
                alt="Dental Doctor"
                className="w-full rounded-3xl object-cover shadow-2xl"
              />

              {/* Floating Card 1 */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute top-8 -left-6 bg-background/90 backdrop-blur-xl border rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Award className="text-primary" />
                  <div>
                    <h4 className="font-semibold">
                      Advanced Equipment
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Modern Dental Technology
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute bottom-10 -right-6 bg-background/90 backdrop-blur-xl border rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <div>
                    <h4 className="font-semibold">
                      4.9 Patient Rating
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Trusted by Families
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="rounded-2xl border bg-background/60 backdrop-blur-xl p-6">
            <Users className="text-primary mb-3" />
            <h3 className="font-semibold mb-2">
              Patient-Centered Care
            </h3>
            <p className="text-sm text-muted-foreground">
              Personalized treatment plans tailored to your needs.
            </p>
          </div>

          <div className="rounded-2xl border bg-background/60 backdrop-blur-xl p-6">
            <ShieldCheck className="text-primary mb-3" />
            <h3 className="font-semibold mb-2">
              Safe & Hygienic
            </h3>
            <p className="text-sm text-muted-foreground">
              Strict sterilization and safety protocols followed.
            </p>
          </div>

          <div className="rounded-2xl border bg-background/60 backdrop-blur-xl p-6">
            <Award className="text-primary mb-3" />
            <h3 className="font-semibold mb-2">
              Advanced Treatments
            </h3>
            <p className="text-sm text-muted-foreground">
              Modern dentistry for lasting oral health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

