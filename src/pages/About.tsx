
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-20 flex-grow">
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Placeholder */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] bg-gray-50 rounded-lg shadow-sm flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Podium Zagreb Salon Interior</p>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <h1 className="text-3xl md:text-4xl font-light text-gray-900">
                  {t('about.title')}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.description1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.description2')}
                </p>
                
                {showMore && (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {t('about.description3')}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {t('about.description4')}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {t('about.description5')}
                    </p>
                  </div>
                )}
                
                <button 
                  onClick={() => setShowMore(!showMore)}
                  className="text-gray-900 font-medium text-sm tracking-wide border-b border-gray-300 hover:border-gray-900 transition-colors pb-1"
                >
                  {showMore ? t('about.readLess') : t('about.readMore')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
