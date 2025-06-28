
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutTextContent from "@/components/about/AboutTextContent";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* Hero Image at the top - same as homepage */}
      <div className="absolute top-16 left-0 right-0 h-60 overflow-hidden">
        <img 
          src="/lovable-uploads/aae7982a-6aad-41a8-91d5-b081abca6cb1.png"
          alt="Premium cosmetic textures"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <main className="pt-60 flex-grow relative z-10">
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutTextContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
