
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { images, getImageSrc } from "@/config/images";

const The5Elements = () => {
  const { t } = useLanguage();

  const elements = [
    { 
      name: "PURIFICATION", 
      description: "For Purification, we selected ingredients that can gently cleanse the skin, remove impurities, exfoliate dead cells, calm skin irritation, eliminate harmful bacteria, and heal burns and wounds. Among the key ingredients supporting this element are Saponaria Officinalis (Soapwort), Green French clay, Great Burdock, Brewer's Yeast, and Mimosa Bark.",
      image: getImageSrc(images.elements.purification, "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&h=400")
    },
    { 
      name: "STIMULATION", 
      description: "For Stimulation, our key ingredients encourage oxygen supply to the skin by enhancing blood circulation and lymphatic function. Among these ingredients supporting this element, you may find Centella Asiatica, Cinnamon, Arnica Montana, Clove, and Coffee.",
      image: getImageSrc(images.elements.stimulation, "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&h=400")
    },
    { 
      name: "HYDRATION", 
      description: "For Hydration, we selected ingredients that can work on two significant aspects of skin moisture: attracting moisture and delivering it to the skin and retaining the skin's moisture, protecting it from hydration loss. Among the ingredients that support this element: Silk Amino acids, Algae, Milk protein, and Honey.",
      image: getImageSrc(images.elements.hydration, "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=400")
    },
    { 
      name: "NOURISHMENT", 
      description: "For Nourishment, we selected ingredients that can provide the skin with essential vitamins, fatty acids, minerals, and antioxidants required for the skin's long-term health. Among these ingredients, you may find Jojoba oil, Vitamin F, Rosehip oil, and Evening Primrose oil.",
      image: getImageSrc(images.elements.nourishment, "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=400")
    },
    { 
      name: "PROTECTION", 
      description: "For Protection, we work with ingredients that support the long-term balance of healthy skin, detoxify it, and prevent external effects that may damage it. Among the ingredients that we include in our products to support this element are Squalene/ Squalane, Vitamin C, Green Tea, Red Vine, and Hibiscus.",
      image: getImageSrc(images.elements.protection, "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&h=400")
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                {t('elements.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our skincare philosophy is built around five essential elements that work together to provide comprehensive skin health and beauty enhancement.
              </p>
            </div>
            
            <div className="relative">
              {elements.map((element, index) => (
                <div key={index} className="relative">
                  {/* Connection line (except for last element) */}
                  {index < elements.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-20 border-l-2 border-dashed border-gray-300 z-10" 
                         style={{ top: 'calc(100% - 2.5rem)' }}></div>
                  )}
                  
                  <div className="mb-20 last:mb-0 relative">
                    {/* Centered Image */}
                    <div className="flex justify-center mb-12 relative z-20">
                      <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                        <img 
                          src={element.image} 
                          alt={element.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Overlapping Text Content */}
                    <div className={`max-w-4xl mx-auto relative -mt-16 z-10 ${
                      index % 2 === 0 
                        ? 'lg:text-left lg:pl-40' 
                        : 'lg:text-right lg:pr-40'
                    } text-center`}>
                      <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-sm">
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">{element.name}</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">{element.description}</p>
                      </div>
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
