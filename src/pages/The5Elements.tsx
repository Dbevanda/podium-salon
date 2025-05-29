
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const The5Elements = () => {
  const elements = [
    { name: "Fire", description: "Energy and vitality for radiant skin", color: "bg-red-100" },
    { name: "Water", description: "Hydration and flow for balanced complexion", color: "bg-blue-100" },
    { name: "Earth", description: "Grounding and stability for skin health", color: "bg-yellow-100" },
    { name: "Metal", description: "Precision and clarity for refined beauty", color: "bg-gray-100" },
    { name: "Wood", description: "Growth and renewal for youthful appearance", color: "bg-green-100" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                The 5 Elements
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our philosophy is rooted in the ancient wisdom of the five elements, creating harmony between nature and beauty.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {elements.map((element, index) => (
                <div key={index} className={`${element.color} p-6 rounded-lg text-center`}>
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{element.name}</h3>
                  <p className="text-gray-700 text-sm">{element.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default The5Elements;
