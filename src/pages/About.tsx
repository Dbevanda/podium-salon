
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
            <div className="space-y-12">
              {/* Image - Always on top, horizontally oriented */}
              <div className="w-full">
                <div className="aspect-[16/6] bg-gray-50 rounded-lg shadow-sm flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Podium Zagreb Salon Interior</p>
                </div>
              </div>

              {/* Text Content with embedded images */}
              <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl md:text-4xl font-light text-gray-900 text-center">
                  {t('about.title')}
                </h1>
                
                <div className="relative">
                  {/* First embedded image - float left */}
                  <div className="float-left mr-6 mb-4 w-64 h-48 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Treatment Room</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.description1')}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.description2')}
                  </p>
                </div>
                
                {showMore && (
                  <div className="space-y-4">
                    <div className="relative">
                      {/* Second embedded image - float right */}
                      <div className="float-right ml-6 mb-4 w-64 h-48 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center">
                        <p className="text-gray-400 text-xs text-center">Wellness Area</p>
                      </div>
                      
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
