
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { images, getImageSrc } from '@/config/images';

const AboutTextContent = () => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-4xl font-light text-gray-900 text-center">
        {t('about.title')}
      </h1>
      
      <div className="relative">
        {/* First embedded image - float left */}
        <div className="float-left mr-6 mb-4 w-64 h-64 bg-gray-50 rounded-lg shadow-sm overflow-hidden">
          <img 
            src="/lovable-uploads/05ae8591-7522-4d65-b51f-5798effc4515.png"
            alt="Elegant candles creating spa ambiance"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
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
            <div className="float-right ml-6 mb-4 w-64 h-64 bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/lovable-uploads/5b1bd3f3-73ae-4a22-aa77-deea706e0d76.png"
                alt="Beauty treatment with specialized skincare tools"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
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
  );
};

export default AboutTextContent;
