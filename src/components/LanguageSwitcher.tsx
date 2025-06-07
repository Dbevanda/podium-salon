
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => setLanguage('hr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'hr'
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        HR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
