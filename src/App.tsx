import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutPage from "./pages/AboutUs&Contact.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import FeaturesPage from "./pages/FeaturesPage.tsx";
import ContactSection from "./pages/AboutUs&Contact.tsx";
import ReviewPage from "./pages/ReviewPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutPage />} />

          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/review" element={<ReviewPage />} />
        <Route path="/feedback" element={<ReviewPage />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
