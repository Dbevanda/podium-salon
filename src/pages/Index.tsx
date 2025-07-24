
import { useEffect } from "react";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Update page title for SEO
    document.title = "Podium Zagreb - Premium Beauty Salon | Future5 Treatments & Wellness";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ImageSlider />
      
      {/* Text Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
              {t('hero.title')}
              <br />
              <span className="font-normal">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mx-auto max-w-3xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about"
                className="px-8 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors text-center"
              >
                {t('hero.learnMore')}
              </Link>
              <Link 
                to="/treatments"
                className="px-8 py-3 border border-gray-300 text-gray-900 text-sm font-medium tracking-wide hover:border-gray-400 transition-colors text-center"
              >
                {t('hero.exploreTreatments')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
