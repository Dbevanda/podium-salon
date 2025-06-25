
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHeroImage from "@/components/about/AboutHeroImage";
import AboutTextContent from "@/components/about/AboutTextContent";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-20 flex-grow">
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <AboutHeroImage />
              <AboutTextContent />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
