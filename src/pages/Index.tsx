
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Podium Zagreb - Premium Beauty Salon | Future5 Treatments & Wellness";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
