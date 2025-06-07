
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
              {t('hero.title')}
              <br />
              <span className="font-normal">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              {t('hero.description')}
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-medium">{t('hero.specializing')}</span> {t('hero.specialties')}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">{t('hero.location')}</span> {t('hero.locationValue')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Podium Zagreb Salon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
