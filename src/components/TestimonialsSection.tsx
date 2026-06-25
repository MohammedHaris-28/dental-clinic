import React, { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Star, Quote, ShieldCheck, ExternalLink } from "lucide-react";

// Curated accurate historical records directly from image_146621.jpg with high-res placeholder image blocks
const VIP_TESTIMONIALS = [
  {
    name: "Srinidhi Shetty",
    role: "Miss Supranational 2016, KGF Actress",
    review: "There is only one dentist whom i trust with my teeth and that is Dr. Sumanth Shetty. Thank you so much doctor.",
    color: "from-amber-500/10 to-orange-500/[0.02]",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdc1u3rE13r0pIBaxQG-HibM4ZP8ozoKWvNfrPiujxsw&s=10"
  },
  {
    name: "James Sangma",
    role: "Minister of Home, Law, Power, Govt. of Meghalaya",
    review: "Great work, fast treatment. Has arrogant smile of their own... both of them Dr Sumanth Shetty and Dr Rashmi Shetty were nice and helpful.",
    color: "from-emerald-500/10 to-teal-500/[0.02]",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHkQwhzPwZqvGm1QaPgCT7O9j6IQF1N763itySDy38Q&s=10"
  },
  {
    name: "Bharat Chettri",
    role: "Captain (Indian hockey team)",
    review: "Thank you for the outstanding dental work that you provided for me. I appreciate your thorough analysis of the procedures that would improve my bite and oral health. Thank you for the superb quality of service.",
    color: "from-blue-600/10 to-cyan-500/[0.02]",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2mhfXLSIFuzbIwB_dup968Alzx9amheCGX8PKlZSFA&s=10"
  }
];

// Exact platform counters and structural layouts extracted from image_1469c4.jpg
const PLATFORM_REACTIONS = [
  {
    platform: "Google Reviews",
    count: 1887,
    label: "Read Our Google Reviews",
    brandText: "G",
    brandColor: "text-blue-600 font-black text-2xl",
    bg: "bg-blue-50/60"
  },
  {
    platform: "Justdial Votes",
    count: 2148,
    label: "See Our JustDial Votes",
    brandText: "Jd",
    brandColor: "text-orange-600 font-extrabold text-2xl tracking-tighter italic",
    bg: "bg-orange-50/60"
  },
  {
    platform: "Practo Stories",
    count: 7635,
    label: "Read Our Practo Stories",
    brandText: "•p•",
    brandColor: "text-cyan-600 font-black text-xl tracking-tight",
    bg: "bg-cyan-50/60"
  }
];

const AnimatedCounter = ({ value, suffix = "+" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = Math.floor(latest).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [value, inView]);

  return (
    <span className="font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-28 bg-white overflow-hidden antialiased selection:bg-emerald-500/10">
      {/* Light Elite Spatial Ambient Fields */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/60 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <ShieldCheck size={12} className="text-emerald-500" />
            <span>Verified Patient Testimonials</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-none">
            Trusted By Public Figures. <br />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Validated By Thousands.
            </span>
          </h2>

          <p className="mt-4 text-slate-500 text-base sm:text-lg font-medium max-w-xl mx-auto leading-relaxed">
            Chisel Dental Clinic embodies the ethos of customer-friendly, cost effective, and complete clinical dental solutions.
          </p>
        </div>

        {/* VIP Premium Cards Grid Layout (From image_146621.jpg) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {VIP_TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative rounded-[32px] border border-slate-100 bg-gradient-to-br ${testimonial.color} p-8 flex flex-col justify-between transition-all duration-500 hover:border-slate-300/60 hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.04)]`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-slate-900/10 group-hover:text-slate-900/20 transition-colors" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Enhanced Identity Footer Featuring Expanded Verified Portraits */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100/80">
                <div className="w-16 h-16 rounded-[18px] border border-slate-200/80 overflow-hidden bg-slate-100 flex-shrink-0 shadow-md">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-base tracking-tight leading-none">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-bold leading-normal mt-1.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Divider */}
        <div className="w-full h-px bg-slate-100 mb-20" />

        {/* Customer Reactions Section (From image_1469c4.jpg) */}
        <div className="relative rounded-[40px] border border-slate-100 bg-slate-50/40 p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/[0.02] rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wider">
              Customer Reactions
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-3 leading-relaxed max-w-2xl mx-auto">
              We have treated more than 1 lakh customers and some have been kind enough to leave us a review on Google, Practo and other online modes they contacted us.
            </p>
          </div>

          {/* Interactive Live Counters Array featuring Custom Vector Platform Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 max-w-5xl mx-auto">
            {PLATFORM_REACTIONS.map((platform, i) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between items-center group hover:border-slate-300 transition-all duration-300"
              >
                {/* Platform Badge Frame incorporating high-contrast typography branding logos */}
                <div className="w-full flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner">
                      <span className={platform.brandColor}>{platform.brandText}</span>
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] font-black text-slate-900 leading-none">{platform.platform}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">Verified Hub</span>
                    </div>
                  </div>
                  <ExternalLink size={12} className="text-slate-300 group-hover:text-slate-900 transition-colors" />
                </div>

                <div className={`w-full py-2.5 px-3 rounded-xl ${platform.bg} text-[10px] font-extrabold text-slate-700 tracking-tight text-center mb-4`}>
                  {platform.label}
                </div>

                {/* Micro Animated Metric Suite */}
                <div className="my-2">
                  <AnimatedCounter value={platform.count} />
                </div>

                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-450 mt-2">
                  Total Digital Touchpoints
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aggregate Overview Statement */}
          <div className="mt-12 text-center text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            Aggregated cross-platform ranking holding at 4.9 out of 5 stars based on verified digital assets
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;