
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const The5Elements = () => {
  const elements = [
    { 
      name: "WOOD", 
      description: "Spring. East. Growth. Expansion. Vision. Benevolence. Flexibility. Creativity. Patience. Birth. Youth. Optimism. Compassion. Imagination. Generosity. Leadership. Pioneering. Competition.",
      color: "bg-green-50",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&h=400"
    },
    { 
      name: "FIRE", 
      description: "Summer. South. Joy. Warmth. Enthusiasm. Passion. Communication. Charisma. Love. Laughter. Creativity. Spirituality. Intuition. Awareness. Transformation. Expression.",
      color: "bg-red-50",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=400"
    },
    { 
      name: "EARTH", 
      description: "Late Summer. Center. Stability. Grounding. Nurturing. Support. Thoughtfulness. Practicality. Reliability. Sympathy. Fairness. Harvest. Abundance. Acceptance. Contemplation.",
      color: "bg-yellow-50",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&h=400"
    },
    { 
      name: "METAL", 
      description: "Autumn. West. Grief. Letting go. Respect. Purity. Precision. Organization. Structure. Quality. Refinement. Discernment. Discipline. Efficiency. Order. Completion.",
      color: "bg-gray-50",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=400"
    },
    { 
      name: "WATER", 
      description: "Winter. North. Fear. Will power. Wisdom. Introspection. Reflection. Storage. Conservation. Endurance. Determination. Ambition. Reserved. Deep. Mysterious. Potential.",
      color: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                The 5 Elements
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our philosophy is rooted in the ancient wisdom of the five elements, creating harmony between nature and beauty through Traditional Chinese Medicine principles.
              </p>
            </div>
            
            <div className="space-y-12">
              {elements.map((element, index) => (
                <div key={index} className={`${element.color} rounded-lg overflow-hidden shadow-lg`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-80">
                      <img 
                        src={element.image} 
                        alt={element.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">{element.name}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{element.description}</p>
                    </div>
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
