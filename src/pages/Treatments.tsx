
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Treatments = () => {
  const treatments = [
    {
      id: "facial-rejuvenation",
      name: "Facial Rejuvenation",
      description: "Advanced facial treatments for all skin types",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400",
      duration: "90 minutes",
      suitableFor: "All skin types, especially mature and aging skin"
    },
    {
      id: "body-wellness",
      name: "Body Wellness",
      description: "Rejuvenating body treatments for complete wellness",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
      duration: "120 minutes",
      suitableFor: "All skin types, ideal for stressed and tired skin"
    },
    {
      id: "anti-aging",
      name: "Anti-Aging Therapy",
      description: "Cutting-edge anti-aging solutions",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&h=400",
      duration: "75 minutes",
      suitableFor: "Mature skin with signs of aging, wrinkles, and sun damage"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Treatments
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover our range of advanced treatments designed to enhance your natural beauty.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment) => (
                <Link 
                  key={treatment.id} 
                  to={`/treatments/${treatment.id}`}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                    <img 
                      src={treatment.image} 
                      alt={treatment.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{treatment.name}</h3>
                      <p className="text-gray-600 mb-3">{treatment.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Duration:</span> {treatment.duration}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Suitable for:</span> {treatment.suitableFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Treatments;
