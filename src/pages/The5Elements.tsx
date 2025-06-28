
import { useMemo } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ElementCard from "@/components/elements/ElementCard";
import { useLanguage } from "@/contexts/LanguageContext";

const The5Elements = () => {
  const { t } = useLanguage();
  
  // Memoize elements array to prevent unnecessary re-renders
  const elements = useMemo(() => [
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
  ], [t]);

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
                <ElementCard 
                  key={`element-${index}`} 
                  element={element} 
                  index={index} 
                />
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
