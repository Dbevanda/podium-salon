
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { images, getImageSrc } from "@/config/images";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-white">
      {/* Hero Image at the top */}
      <div className="absolute top-16 left-0 right-0 h-32 overflow-hidden">
        <img 
          src="/lovable-uploads/aae7982a-6aad-41a8-91d5-b081abca6cb1.png"
          alt="Premium cosmetic textures"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-40 relative z-10">
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

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={getImageSrc(images.home.hero)}
                alt="Podium Zagreb Salon"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
