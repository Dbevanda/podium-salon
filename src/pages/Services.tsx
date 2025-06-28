
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.design.title'),
      description: t('services.design.description')
    },
    {
      title: t('services.development.title'),
      description: t('services.development.description')
    },
    {
      title: t('services.strategy.title'),
      description: t('services.strategy.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-20 flex-grow">
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {t('services.description')}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center space-y-4 p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
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

export default Services;
