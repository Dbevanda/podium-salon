
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const The5Elements = () => {
  const elements = [
    { 
      name: "Wood", 
      description: "Represents growth, flexibility, and renewal. Wood energy promotes healthy circulation and detoxification, supporting skin regeneration and vitality.",
      color: "bg-green-100",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&h=300"
    },
    { 
      name: "Fire", 
      description: "Symbolizes energy, warmth, and transformation. Fire energy enhances circulation and brings radiance to the skin, promoting a healthy glow.",
      color: "bg-red-100",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=300"
    },
    { 
      name: "Earth", 
      description: "Represents stability, nourishment, and grounding. Earth energy provides deep nutrition and balance, supporting skin's natural healing processes.",
      color: "bg-yellow-100",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&h=300"
    },
    { 
      name: "Metal", 
      description: "Symbolizes precision, purification, and structure. Metal energy promotes clarity and refinement, helping to purify and strengthen the skin.",
      color: "bg-gray-100",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400&h=300"
    },
    { 
      name: "Water", 
      description: "Represents flow, adaptability, and deep nourishment. Water energy provides essential hydration and supports the skin's natural moisture barrier.",
      color: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=300"
    }
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
                Our philosophy is rooted in the ancient wisdom of the five elements, creating harmony between nature and beauty through Traditional Chinese Medicine principles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {elements.map((element, index) => (
                <div key={index} className={`${element.color} rounded-lg overflow-hidden shadow-md`}>
                  {/* Picture Frame */}
                  <div className="relative h-48 bg-white m-4 rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={element.image} 
                      alt={element.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 pt-2">
                    <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">{element.name}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed text-center">{element.description}</p>
                  </div>
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
