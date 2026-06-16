
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AppointmentCTA = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const handleSubmit = () => {
    const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

    const text = `
🦷 New Appointment Request

👤 Name: ${form.name}

📞 Phone: ${form.phone}

🩺 Treatment: ${form.treatment}

💬 Message:
${form.message}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}

      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="rounded-[40px] border border-border/40 bg-background/70 backdrop-blur-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}

            <div className="p-8 md:p-12 lg:p-14">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Calendar size={16} />
                  Book Your Appointment
                </span>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-6">
                  Ready For A
                  <span className="block text-primary">
                    Healthier Smile?
                  </span>
                </h2>

                <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                  Schedule your consultation today and receive
                  personalized dental care from experienced professionals.
                </p>

                <div className="space-y-5 mt-10">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock3 className="text-primary" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Flexible Scheduling
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        Convenient appointment slots available.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="text-primary" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Safe & Professional Care
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        Modern facilities and hygienic environment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="text-primary" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Quick Response
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        Our team will contact you shortly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency Card */}

                <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                  <p className="text-sm text-muted-foreground">
                    Need immediate assistance?
                  </p>

                  <h3 className="font-bold text-xl mt-1">
                    +91 XXXXX XXXXX
                  </h3>
                </div>
              </motion.div>
            </div>

            {/* RIGHT FORM */}

            <div className="p-8 md:p-12 lg:p-14 bg-background/30">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">
                  Request Appointment
                </h3>

                <div className="space-y-5">
                  <Input
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="h-12 rounded-xl"
                  />

                  <Input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    className="h-12 rounded-xl"
                  />

                  <Input
                    placeholder="Treatment Needed"
                    value={form.treatment}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        treatment: e.target.value,
                      })
                    }
                    className="h-12 rounded-xl"
                  />

                  <Textarea
                    placeholder="Tell us about your concern..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className="rounded-xl min-h-[140px]"
                  />

                  <Button
                    onClick={handleSubmit}
                    className="w-full h-14 rounded-xl text-base font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to be contacted
                    regarding your appointment request.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;

