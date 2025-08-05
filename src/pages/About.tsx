
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OptimizedImage } from "@/components/common";

// Lazy load the AboutTextContent component
const AboutTextContent = lazy(() => import("@/components/about/AboutTextContent"));

const ComponentLoader = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded mb-4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* Hero Image at the top - behind header, full height */}
      <div className="absolute top-0 left-0 right-0 h-80 overflow-hidden z-0">
        <OptimizedImage 
          src="/lovable-uploads/5dbde0f7-d10a-446c-8865-93c701b2eede.png"
          alt="Elegant spa interior with modern design"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
        />
      </div>
      
      <main className="pt-16 min-h-screen flex items-center bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-80">
          <Suspense fallback={<ComponentLoader />}>
            <AboutTextContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
