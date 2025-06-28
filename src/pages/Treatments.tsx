
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { images, getImageSrc } from "@/config/images";
import treatmentsData from "@/data/treatments.json";

const Treatments = () => {
  const { t } = useLanguage();

  const treatments = treatmentsData.map(treatment => ({
    ...treatment,
    name: t(treatment.name),
    description: t(treatment.description),
    duration: t(treatment.duration),
    suitableFor: t(treatment.suitableFor),
    image: getImageSrc(
      images.treatments[treatment.imageKey as keyof typeof images.treatments],
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400"
    )
  }));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white pb-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-32">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                {t('treatments.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed px-[36px] mb-16">
                {t('treatments.description')}
              </p>
            </div>
            
            <div className="space-y-32 pb-20">
              {treatments.map((treatment, index) => (
                <Link 
                  key={treatment.id} 
                  to={`/treatments/${treatment.id}`}
                  className="relative group cursor-pointer block"
                >
                  {/* Background Image */}
                  <div className={`absolute inset-0 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center pointer-events-none`}>
                    <div className="w-[500px] h-[500px] rounded-full overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0">
                      <img src={treatment.image} alt={treatment.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className={`relative z-10 max-w-2xl ${index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
                    <div className="bg-white bg-opacity-95 p-12 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">{treatment.name}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">{treatment.description}</p>
                      <div className="space-y-3">
                        <p className="text-gray-600">
                          <span className="font-medium">{t('treatments.duration')}</span> {treatment.duration}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">{t('treatments.suitable')}</span> {treatment.suitableFor}
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
