
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Treatments = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 font-avenir">
                Treatments
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-avenir">
                Discover our range of advanced treatments designed to enhance your natural beauty.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4 font-avenir">Facial Treatments</h3>
                <p className="text-gray-600 font-avenir">Advanced facial treatments for all skin types.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4 font-avenir">Body Treatments</h3>
                <p className="text-gray-600 font-avenir">Rejuvenating body treatments for complete wellness.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4 font-avenir">Anti-Aging</h3>
                <p className="text-gray-600 font-avenir">Cutting-edge anti-aging solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Treatments;
