
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { images, getImageSrc } from "@/config/images";
import treatmentsData from "@/data/treatments.json";

const TreatmentDetail = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  
  const treatment = treatmentsData.find(t => t.id === id);
  
  if (!treatment) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-3xl font-light text-gray-900 mb-4">{t('treatment.notFound')}</h1>
            <Link to="/treatments" className="text-blue-600 hover:text-blue-800">
              {t('treatment.backToTreatments')}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const imageUrl = getImageSrc(
    images.treatments[treatment.imageKey as keyof typeof images.treatments], 
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=600"
  );

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
                  src={imageUrl}
                  alt={t(treatment.name)}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  {t(treatment.name)}
                </h1>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">{t('treatment.description')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t(treatment.detailDescription1)}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t(treatment.detailDescription2)}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">{t('treatment.price')}</h2>
                  <p className="text-3xl font-semibold text-gray-900">{treatment.price}</p>
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

export default TreatmentDetail;
