
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'hr' | 'en';

interface Translations {
  [key: string]: {
    hr: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.treatments': {
    hr: 'Tretmani',
    en: 'Treatments'
  },
  'nav.elements': {
    hr: '5 elemenata',
    en: 'The 5 elements'
  },
  'nav.about': {
    hr: 'O nama',
    en: 'About us'
  },
  'nav.contact': {
    hr: 'Kontakt',
    en: 'Contact us'
  },
  
  // Hero section
  'hero.title': {
    hr: 'Podium Zagreb',
    en: 'Podium Zagreb'
  },
  'hero.subtitle': {
    hr: 'Premium Beauty & Wellness',
    en: 'Premium Beauty & Wellness'
  },
  'hero.description': {
    hr: 'Doživite budućnost ljepote s našim ekskluzivnim Future5 tretmanima i holističkim wellness rješenjima. Otkrijte premium beauty usluge u najelegantijem salonu Zagreba, gdje se drevna mudrost susreće s modernim inovacijama.',
    en: 'Experience the future of beauty with our exclusive Future5 treatments and holistic wellness solutions. Discover premium beauty services in Zagreb\'s most elegant salon, where ancient wisdom meets modern innovation.'
  },
  'hero.specializing': {
    hr: 'Specijalizirani za:',
    en: 'Specializing in:'
  },
  'hero.specialties': {
    hr: 'Future5 Tehnologija • Filozofija 5 elemenata • Napredna njega kože',
    en: 'Future5 Technology • 5 Elements Philosophy • Advanced Skincare'
  },
  'hero.location': {
    hr: 'Lokacija:',
    en: 'Location:'
  },
  'hero.locationValue': {
    hr: 'Zagreb, Hrvatska',
    en: 'Zagreb, Croatia'
  },
  'hero.learnMore': {
    hr: 'Saznajte više o Podiumu',
    en: 'Learn More About Podium'
  },
  'hero.exploreTreatments': {
    hr: 'Istražite Future5 tretmane',
    en: 'Explore Future5 Treatments'
  },
  
  // About page
  'about.title': {
    hr: 'O Podium Zagrebu',
    en: 'About Podium Zagreb'
  },
  'about.description1': {
    hr: 'Podium je zagrebački premijerni salon ljepote i wellnessa, gdje kombiniramo snagu jednostavnosti i elegancije s najsuvremenijom Future5 tehnologijom. Naš pristup spaja minimalističke dizajnerske principe s funkcionalnom izvrsnosti kako bismo stvorili iskustva koja su i lijepa i značajna.',
    en: 'Podium is Zagreb\'s premier beauty and wellness salon, where we combine the power of simplicity and elegance with cutting-edge Future5 technology. Our approach merges minimalist design principles with functional excellence to create experiences that are both beautiful and meaningful.'
  },
  'about.description2': {
    hr: 'Smješten u srcu Zagreba, salon Podium nudi ekskluzivne Future5 tretmane koji predstavljaju budućnost ljepote i wellnessa. Svaki tretman je prilika za pomicanje granica i istraživanje novih mogućnosti uz održavanje najviših standarda kvalitete i pažnje za detalje.',
    en: 'Located in the heart of Zagreb, Podium salon offers exclusive Future5 treatments that represent the future of beauty and wellness. Every treatment is an opportunity to push boundaries and explore new possibilities while maintaining the highest standards of quality and attention to detail.'
  },
  'about.description3': {
    hr: 'Naš stručni tim u Podium Zagrebu sastoji se od iskusnih profesionalaca koji su strastveni u pružanju iznimnih Future5 rezultata tretmana. Ponosimo se našim personaliziranim pristupom, osiguravajući da svaki klijent dobije pažnju i njegu koju zaslužuje u našoj premium zagrebačkoj lokaciji.',
    en: 'Our expert team at Podium Zagreb consists of experienced professionals who are passionate about delivering exceptional Future5 treatment results. We take pride in our personalized approach, ensuring that each client receives the attention and care they deserve in our premium Zagreb location.'
  },
  'about.description4': {
    hr: 'S godinama iskustva u industriji ljepote i wellnessa, salon Podium je razvio inovativne Future5 tretmane i tehnike koje nas izdvajaju od drugih zagrebačkih salona ljepote. Naša predanost kontinuiranom učenju i poboljšanju pokreće nas da ostanemo na čelu razvoja industrije.',
    en: 'With years of experience in the beauty and wellness industry, Podium salon has developed innovative Future5 treatments and techniques that set us apart from other Zagreb beauty salons. Our commitment to continuous learning and improvement drives us to stay at the forefront of industry developments.'
  },
  'about.description5': {
    hr: 'Vjerujemo da prava ljepota dolazi iznutra, a naš holistički pristup 5 elemenata bavi se i fizičkim i emocionalnim aspektima wellnessa. Naš cilj u Podium Zagrebu je pomoći vam da se osjećate samopouzdano, osvježeno i revitalizirano kroz naše premium Future5 tretmane.',
    en: 'We believe that true beauty comes from within, and our holistic 5 elements approach addresses both the physical and emotional aspects of wellness. Our goal at Podium Zagreb is to help you feel confident, refreshed, and revitalized through our premium Future5 treatments.'
  },
  'about.readMore': {
    hr: 'Pročitajte više o Podiumu',
    en: 'Read More About Podium'
  },
  'about.readLess': {
    hr: 'Pročitajte manje',
    en: 'Read Less'
  },
  
  // Footer
  'footer.contact': {
    hr: 'Kontaktirajte nas',
    en: 'Contact Us'
  },
  'footer.tagline': {
    hr: 'Premium Beauty & Wellness',
    en: 'Premium Beauty & Wellness'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hr'); // Croatian as default

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
