import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* ✅ NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="py-24 lg:py-32 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 relative"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Legal
          </span>

          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">
            Terms & Conditions
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using #2CODE services.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-10 text-sm leading-relaxed text-muted-foreground">

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using #2CODE, you agree to be bound by these Terms & Conditions.
              If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. Service Overview</h2>
            <p>
              #2CODE provides a QR-based ordering and restaurant management system including
              menu management, order tracking, analytics, and reporting tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. User Responsibilities</h2>
            <p>
              Restaurants are responsible for maintaining accurate menu data, pricing, and ensuring
              proper use of the system. You must not misuse or attempt to disrupt the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Data Ownership</h2>
            <p>
              All data related to orders, menus, and operations belongs to the restaurant.
              #2CODE only processes and stores this data to provide services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">5. Data Storage Policy</h2>
            <p>
              To maintain system efficiency, detailed order data may not be stored indefinitely.
              At the end of each billing cycle, data may be exported as CSV for restaurant use.
              Only summarized or essential data may be retained in the system.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">6. Payments & Subscription</h2>
            <p>
              #2CODE operates on a subscription model. Setup fees and monthly charges may apply.
              Payments once made are non-refundable unless otherwise agreed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">7. Service Availability</h2>
            <p>
              We strive to maintain high uptime, but do not guarantee uninterrupted service.
              Temporary downtime may occur due to maintenance or technical issues.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">8. Limitation of Liability</h2>
            <p>
              #2CODE shall not be liable for any loss of data, revenue, or business interruption.
              Restaurants are responsible for exporting and maintaining their own records.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate services in case of misuse,
              non-payment, or violation of these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the service
              implies acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">11. Contact Information</h2>
            <p>
              For any questions regarding these terms, please contact:
            </p>
            <p className="mt-2 text-foreground font-medium">
              Haris M (Manager & Sales Representative) <br />
              Phone: +91 9036486726 <br />
              Email: hash2codeteam@gmail.com
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold">
            Build Smarter Restaurants with #2CODE 🚀
          </h3>
          <p className="text-muted-foreground mt-3">
            Simple. Powerful. Built for growth.
          </p>
        </motion.div>
      </section>

      {/* ✅ FOOTER */}
      <FooterSection />

    </div>
  );
};

export default TermsPage;