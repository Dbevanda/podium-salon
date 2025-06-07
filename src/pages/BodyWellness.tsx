
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BodyWellness = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/treatments" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
              <ArrowLeft size={20} className="mr-2" />
              {t('treatment.backToTreatments')}
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
                  alt={t('treatments.body.name')}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  {t('treatments.body.name')}
                </h1>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">{t('treatment.description')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('treatment.body.description1')}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t('treatment.body.description2')}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">{t('treatment.price')}</h2>
                  <p className="text-3xl font-semibold text-gray-900">$200</p>
                  <p className="text-gray-600">{t('treatment.perSession')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BodyWellness;
