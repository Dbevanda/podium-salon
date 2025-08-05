
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
      {/* Hero Image at the top - same as homepage */}
      <div className="absolute top-16 left-0 right-0 h-60 overflow-hidden z-0">
        <OptimizedImage 
          src="/lovable-uploads/6d3438e7-148b-46dd-9c76-41defa912d90.png"
          alt="Elegant consultation area with comfortable seating"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
          fallback="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
        />
      </div>
      
      <main className="pt-16 min-h-screen flex items-center bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-60">
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
