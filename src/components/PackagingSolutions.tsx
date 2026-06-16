import { motion } from "framer-motion";
import { Package, Truck, Paintbrush, Leaf, ArrowRight, Check, Printer, Box, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const packagingItems = [
  {
    title: "Premium Aluminum Containers",
    desc: "Heat-retaining, leak-proof containers for the perfect delivery experience.",
    image: "/api/placeholder/400/320", 
    features: ["Food Grade", "Heat Retention", "Eco-Friendly"],
    tag: "High Demand",
  },
  {
    title: "Eco-Kraft Carry Bags",
    desc: "Heavy-duty minimalist paper bags designed for brand presence.",
    image: "/api/placeholder/400/320", 
    features: ["Custom Printed", "Up to 5kg", "Sustainable"],
    tag: "Eco-Friendly",
  },
  {
    title: "Tamper-Evident Seals",
    desc: "Security stickers that build trust and ensure food safety.",
    image: "/api/placeholder/400/320",
    features: ["Anti-Tamper", "Branded", "Glossy Finish"],
    tag: "Must-Have",
  },
  {
    title: "Tamper-Evident Seals",
    desc: "Security stickers that build trust and ensure food safety.",
    image: "/api/placeholder/400/320",
    features: ["Anti-Tamper", "Branded", "Glossy Finish"],
    tag: "Must-Have",
  },
  {
    title: "Tamper-Evident Seals",
    desc: "Security stickers that build trust and ensure food safety.",
    image: "/api/placeholder/400/320",
    features: ["Anti-Tamper", "Branded", "Glossy Finish"],
    tag: "Must-Have",
  },
  {
    title: "Tamper-Evident Seals",
    desc: "Security stickers that build trust and ensure food safety.",
    image: "/api/placeholder/400/320",
    features: ["Anti-Tamper", "Branded", "Glossy Finish"],
    tag: "Must-Have",
  },
];

const PackagingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* HERO SECTION */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Animated Background Orbs */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16 lg:mb-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} />
                #2CODE Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mt-3 leading-tight">
                Your Food Deserves <br className="hidden md:block" /> 
                <span className="text-primary">Better Dressing.</span>
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Elevate your brand beyond the screen. We provide premium, eco-conscious 
                packaging designed to integrate seamlessly with your digital presence.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="rounded-full px-8 py-6 text-lg gradient-primary text-primary-foreground w-full sm:w-auto shadow-lg shadow-primary/20">
                  Browse Catalog
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg w-full sm:w-auto border-primary/20">
                  Talk to Sales
                </Button>
              </div>
            </motion.div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
              {packagingItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-[2rem] overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-white/10"
                >
                  <div className="relative h-64 md:h-72 overflow-hidden bg-muted/50">
                    <div className="absolute top-5 left-5 z-10">
                      <span className="bg-white/90 backdrop-blur-md text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                        {item.tag}
                      </span>
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    
                    <ul className="space-y-3 mb-8 flex-1">
                      {item.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Check size={12} className="text-primary" />
                          </div>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full rounded-2xl bg-foreground text-background hover:bg-foreground/90 py-7 group text-base font-semibold">
                      Order Samples
                      <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-20 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Paintbrush />, step: "01", title: "Design", desc: "Share your logo or let our experts create one." },
                { icon: <Printer />, step: "02", title: "Printing", desc: "High-quality offset printing on premium stock." },
                { icon: <Box />, step: "03", title: "Quality Check", desc: "Every batch is inspected for food safety." },
                { icon: <Truck />, step: "04", title: "Delivery", desc: "Dispatched straight to your restaurant door." },
              ].map((item, idx) => (
                <div key={idx} className="relative p-6 text-center lg:text-left">
                  <div className="text-5xl font-black text-primary/10 absolute -top-2 left-1/2 lg:left-6 -translate-x-1/2 lg:translate-x-0">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 border border-primary/10 relative z-10 shadow-sm">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <h4 className="font-bold text-lg mb-2 relative z-10">{item.title}</h4>
                  <p className="text-sm text-muted-foreground relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST PILLARS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="glass-strong rounded-[3rem] p-12 lg:p-20 text-center max-w-5xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to transform your <br className="hidden md:block"/> packaging?</h2>
               <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                 Join 50+ restaurants who upgraded to #2CODE's premium packaging 
                 and saw an immediate boost in customer satisfaction.
               </p>
               <Button className="rounded-full px-12 py-7 text-lg gradient-primary text-primary-foreground font-bold shadow-soft">
                  Contact Specialist
               </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default PackagingPage;