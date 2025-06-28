
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 py-8 mt-auto" style={{ backgroundColor: '#FCFBFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/ddc95419-1919-43fa-8230-a940853d09a1.png" 
              alt="Podium Logo" 
              className="h-20 w-auto mx-auto md:mx-0 mb-2"
            />
            <p className="text-gray-900 font-medium">Podium</p>
            <p className="text-gray-600 text-sm">{t('footer.tagline')}</p>
          </div>

          {/* Contact Details - moved to complete right */}
          <div className="text-center md:text-right">
            <h3 className="text-gray-900 font-medium mb-2">{t('footer.contact')}</h3>
            <p className="text-gray-600 text-sm">{t('footer.email')}</p>
            <p className="text-gray-600 text-sm">{t('footer.phone')}</p>
            <p className="text-gray-600 text-sm">{t('footer.address')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
