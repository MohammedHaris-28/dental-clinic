import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    
    <main className="flex-1">
      {/* Hero Content Block */}
      <HeroSection />

      {/* Features Content Block */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* How It Works Content Block */}
      <section id="how-it-works">
        <HowItWorksSection />
      </section>

      {/* Why Choose Us Content Block */}
      <section id="why-choose-us">
        <WhyChooseUsSection />
      </section>

      {/* Testimonials Content Block */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Direct Action Core Component */}
      <CTASection />
    </main>

    <FooterSection />
  </div>
);

export default Index;