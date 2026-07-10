import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageCircle, Phone, MapPin, ArrowLeft, Smile, Frown, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { feedbackConfig } from "@/config/feedbackConfig";
import logo from "@/assets/logo-dental.png";

type FlowStep = "RATING" | "POSITIVE_DASHBOARD";

export default function ReviewPage() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [step, setStep] = useState<FlowStep>("RATING");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleRatingSelect = (selectedRating: number) => {
    setRating(selectedRating);
    
    if (selectedRating >= feedbackConfig.positiveThreshold) {
      setStep("POSITIVE_DASHBOARD");
    } else {
      // INTERNAL RECOVERY OVER WHATSAPP
      const whatsappText = encodeURIComponent(
        `Hello Pro-Smile Team, I am writing to share feedback regarding my recent visit. I rated my experience ${selectedRating}/5 stars. I would love to share how things can be improved...`
      );
      const whatsappUrl = `https://wa.me/${feedbackConfig.whatsappNumber}?text=${whatsappText}`;
      
      // Instantly open your WhatsApp support pipeline
      window.open(whatsappUrl, "_blank");
    }
  };

  const handleTemplateClick = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    
    // Smooth transition buffer allowing users to see the "Copied!" notification state before navigation
    setTimeout(() => {
      setCopiedIndex(null);
      window.open(feedbackConfig.googleReviewUrl, "_blank");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col justify-between antialiased selection:bg-amber-500/10 pb-24">
      
      {/* Brand Identity Header */}
      <div className="w-full max-w-md mx-auto px-4 pt-12 text-center">
        <div className="inline-flex w-20 h-20 rounded-2xl overflow-hidden border border-slate-200/60 bg-white p-3 shadow-md mb-4 justify-center items-center">
          <img src={logo} alt={feedbackConfig.businessName} className="w-full h-full object-contain" />
        </div>
        <h1 className="font-black text-xl text-slate-900 tracking-tight">{feedbackConfig.businessName}</h1>
        <p className="text-sm font-semibold text-slate-500 mt-1">{feedbackConfig.tagline}</p>
      </div>

      {/* Main Framework Centerpiece */}
      <main className="w-full max-w-md mx-auto px-4 flex-1 flex items-center justify-center py-8">
        <div className="w-full bg-white border border-slate-200/60 shadow-xl shadow-slate-200/30 rounded-3xl p-6 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Rating Screen */}
            {step === "RATING" && (
              <motion.div
                key="rating-step"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="text-center py-4"
              >
                <h2 className="text-base font-bold text-slate-800 tracking-tight mb-6">
                  How was your experience today?
                </h2>
                
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingSelect(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-1 transition-transform active:scale-90 hover:scale-110 duration-100"
                    >
                      <Star
                        size={40}
                        className={`transition-colors duration-150 ${
                          star <= (hoveredRating || rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-semibold mt-4">Tap stars to submit instantly</p>
              </motion.div>
            )}

            {/* STEP 2: Positive Feedback Dashboard */}
            {step === "POSITIVE_DASHBOARD" && (
              <motion.div
                key="positive-step"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5"
              >
                <div className="text-center space-y-1.5">
                  <div className="mx-auto w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-1">
                    <Smile size={24} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 leading-none">🎉 Thank you!</h2>
                  <p className="text-xs font-medium text-slate-400">
                    Tap a pre-written review below. It will copy automatically and open Google Reviews so you can paste it!
                  </p>
                </div>

                {/* Pre-written templates wrapper */}
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {feedbackConfig.reviewTemplates.map((text, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleTemplateClick(text, idx)}
                      className="w-full text-left p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-amber-50/40 hover:border-amber-500/20 active:scale-[0.99] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-6 h-6 rounded-md bg-white border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:text-amber-600 group-hover:border-amber-500/20 shrink-0 mt-0.5 shadow-sm">
                        {copiedIndex === idx ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                      </div>
                      <p className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 leading-relaxed transition-colors">
                        {copiedIndex === idx ? "Copied text! Opening Google Reviews..." : text}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <a href={feedbackConfig.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button className="w-full h-11 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 border-0 shadow-md">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span>Write my own instead</span>
                    </Button>
                  </a>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setStep("RATING")}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest"
                  >
                    <ArrowLeft size={10} />
                    <span>Change Rating</span>
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>

      {/* Persistent Floating Utility Dashboard (Action Row) */}
      <div className="fixed bottom-4 inset-x-4 z-40 max-w-md mx-auto">
        <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-2 flex items-center justify-between gap-1">
          <a href={`tel:${feedbackConfig.phoneNumber}`} className="flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all">
            <Phone size={16} />
            <span className="text-[10px] font-bold tracking-widest uppercase">Call</span>
          </a>
          <div className="w-px h-6 bg-white/10" />
          <a href={`https://wa.me/${feedbackConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all">
            <MessageCircle size={16} className="text-emerald-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase">WhatsApp</span>
          </a>
          <div className="w-px h-6 bg-white/10" />
          <a href={feedbackConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all">
            <MapPin size={16} className="text-amber-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Maps</span>
          </a>
        </div>
      </div>

    </div>
  );
}