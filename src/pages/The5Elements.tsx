
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const The5Elements = () => {
  const { t } = useLanguage();
  
  const elements = [
    {
      name: t('elements.purification.name'),
      description: t('elements.purification.description'),
      image: "/lovable-uploads/79dd37f0-408c-4672-87f6-ade1644dc242.png"
    },
    {
      name: t('elements.stimulation.name'),
      description: t('elements.stimulation.description'),
      image: "/lovable-uploads/cf5029f9-2a5e-4b11-9100-477afe6ec2c0.png"
    },
    {
      name: t('elements.hydration.name'),
      description: t('elements.hydration.description'),
      image: "/lovable-uploads/1039290a-0c24-47bd-b9b6-16d406f80467.png"
    },
    {
      name: t('elements.nourishment.name'),
      description: t('elements.nourishment.description'),
      image: "/lovable-uploads/5e04e400-e0e5-4092-9334-b1c4741a54c6.png"
    },
    {
      name: t('elements.protection.name'),
      description: t('elements.protection.description'),
      image: "/lovable-uploads/390e4043-c6c1-4a57-860f-41bbc2d3a3f7.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-12 md:py-20 bg-white pb-16 md:pb-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 md:mb-32">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                {t('elements.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 md:px-[36px] mb-8 md:mb-16 text-sm md:text-base">
                {t('elements.description')}
              </p>
            </div>
            
            <div className="space-y-16 md:space-y-32 pb-12 md:pb-20">
              {elements.map((element, index) => (
                <div key={index} className="relative group cursor-pointer">
                  {/* Mobile Layout - Stacked */}
                  <div className="block md:hidden">
                    <div className="mb-6">
                      <div className="w-full h-48 rounded-lg overflow-hidden">
                        <img 
                          src={element.image} 
                          alt={element.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                    </div>
                    <div className="px-4">
                      <h3 className="text-xl font-light text-gray-900 mb-3">{element.name}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm">{element.description}</p>
                    </div>
                  </div>

                  {/* Desktop Layout - Side by Side */}
                  <div className="hidden md:block">
                    {/* Background Image */}
                    <div className={`absolute inset-0 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center pointer-events-none`}>
                      <div className="w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] rounded-full overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0">
                        <img src={element.image} alt={element.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className={`relative z-10 max-w-2xl ${index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
                      <div className="bg-white bg-opacity-95 p-8 lg:p-12 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-900 mb-4 lg:mb-6">{element.name}</h3>
                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg">{element.description}</p>
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
