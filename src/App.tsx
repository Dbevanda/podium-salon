
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Treatments from "./pages/Treatments";
import FacialRejuvenation from "./pages/FacialRejuvenation";
import BodyWellness from "./pages/BodyWellness";
import AntiAgingTherapy from "./pages/AntiAgingTherapy";
import The5Elements from "./pages/The5Elements";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/facial-rejuvenation" element={<FacialRejuvenation />} />
          <Route path="/treatments/body-wellness" element={<BodyWellness />} />
          <Route path="/treatments/anti-aging" element={<AntiAgingTherapy />} />
          <Route path="/the-5-elements" element={<The5Elements />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
