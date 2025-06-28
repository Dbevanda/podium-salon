
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const The5Elements = () => {
  const { t } = useLanguage();

  const elements = [
    { 
      name: "PURIFICATION", 
      description: "For Purification, we selected ingredients that can gently cleanse the skin, remove impurities, exfoliate dead cells, calm skin irritation, eliminate harmful bacteria, and heal burns and wounds. Among the key ingredients supporting this element are Saponaria Officinalis (Soapwort), Green French clay, Great Burdock, Brewer's Yeast, and Mimosa Bark.",
      image: "/lovable-uploads/1039290a-0c24-47bd-b9b6-16d406f80467.png"
    },
    { 
      name: "STIMULATION", 
      description: "For Stimulation, our key ingredients encourage oxygen supply to the skin by enhancing blood circulation and lymphatic function. Among these ingredients supporting this element, you may find Centella Asiatica, Cinnamon, Arnica Montana, Clove, and Coffee.",
      image: "/lovable-uploads/cf5029f9-2a5e-4b11-9100-477afe6ec2c0.png"
    },
    { 
      name: "HYDRATION", 
      description: "For Hydration, we selected ingredients that can work on two significant aspects of skin moisture: attracting moisture and delivering it to the skin and retaining the skin's moisture, protecting it from hydration loss. Among the ingredients that support this element: Silk Amino acids, Algae, Milk protein, and Honey.",
      image: "/lovable-uploads/79dd37f0-408c-4672-87f6-ade1644dc242.png"
    },
    { 
      name: "NOURISHMENT", 
      description: "For Nourishment, we selected ingredients that can provide the skin with essential vitamins, fatty acids, minerals, and antioxidants required for the skin's long-term health. Among these ingredients, you may find Jojoba oil, Vitamin F, Rosehip oil, and Evening Primrose oil.",
      image: "/lovable-uploads/5e04e400-e0e5-4092-9334-b1c4741a54c6.png"
    },
    { 
      name: "PROTECTION", 
      description: "For Protection, we work with ingredients that support the long-term balance of healthy skin, detoxify it, and prevent external effects that may damage it. Among the ingredients that we include in our products to support this element are Squalene/ Squalane, Vitamin C, Green Tea, Red Vine, and Hibiscus.",
      image: "/lovable-uploads/390e4043-c6c1-4a57-860f-41bbc2d3a3f7.png"
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
            
            <div className="space-y-32">
              {elements.map((element, index) => (
                <div key={index} className="relative">
                  {/* Background Image */}
                  <div className={`absolute inset-0 flex ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } items-center pointer-events-none`}>
                    <div className="w-96 h-96 rounded-full overflow-hidden opacity-20">
                      <img 
                        src={element.image} 
                        alt={element.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className={`relative z-10 max-w-2xl ${
                    index % 2 === 0 
                      ? 'ml-auto text-right' 
                      : 'mr-auto text-left'
                  }`}>
                    <div className="bg-white bg-opacity-95 p-12 rounded-lg shadow-sm">
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
