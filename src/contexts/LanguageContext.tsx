
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
    hr: '5 Elemenata',
    en: 'The 5 Elements'
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
    hr: 'Doživite budućnost ljepote s našim ekskluzivnim Future5 tretmanima. Otkrijte premium beauty usluge u najelegantijem salonu Zagreba, gdje se drevna mudrost susreće s modernim inovacijama.',
    en: 'Experience the future of beauty with our exclusive Future5 treatments. Discover premium beauty services in Zagreb\'s most elegant salon, where ancient wisdom meets modern innovation.'
  },
  'hero.specializing': {
    hr: 'Specijalizirani za:',
    en: 'Specializing in:'
  },
  'hero.specialties': {
    hr: 'Future5 Tehnologija • Napredna njega kože',
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
    hr: 'S godinama iskustva u industriji ljepote i wellnessa, salon Podium je razvio tehnike koje nas izdvajaju od drugih zagrebačkih salona ljepote.',
    en: 'With years of experience in the beauty and wellness industry, Podium salon has developed techniques that set us apart from other Zagreb beauty salons.'
  },
  'about.description5': {
    hr: 'Vjerujemo da prava ljepota dolazi iznutra, a naš pristup bavi se i fizičkim i emocionalnim aspektima wellnessa. Naš cilj u Podium Zagrebu je pomoći vam da se osjećate samopouzdano, osvježeno i revitalizirano kroz naše tretmane.',
    en: 'We believe that true beauty comes from within, and our approach addresses both the physical and emotional aspects of wellness. Our goal at Podium Zagreb is to help you feel confident, refreshed, and revitalized through our treatments.'
  },
  'about.readMore': {
    hr: 'Pročitajte više o Podiumu',
    en: 'Read More About Podium'
  },
  'about.readLess': {
    hr: 'Pročitajte manje',
    en: 'Read Less'
  },
  
  // Services page
  'services.title': {
    hr: 'Naše usluge',
    en: 'Our Services'
  },
  'services.description': {
    hr: 'Nudimo niz usluga osmišljenih da vam pomognemo stvoriti nešto lijepo i funkcionalno.',
    en: 'We offer a range of services designed to help you create something beautiful and functional.'
  },
  'services.design.title': {
    hr: 'Dizajn',
    en: 'Design'
  },
  'services.design.description': {
    hr: 'Minimalistička i elegantna dizajnerska rješenja koja se fokusiraju na korisničko iskustvo i estetsku privlačnost.',
    en: 'Minimalist and elegant design solutions that focus on user experience and aesthetic appeal.'
  },
  'services.development.title': {
    hr: 'Razvoj',
    en: 'Development'
  },
  'services.development.description': {
    hr: 'Čist, učinkovit kod koji oživljava vašu viziju s modernim tehnologijama i najboljim praksama.',
    en: 'Clean, efficient code that brings your vision to life with modern technologies and best practices.'
  },
  'services.strategy.title': {
    hr: 'Strategija',
    en: 'Strategy'
  },
  'services.strategy.description': {
    hr: 'Promišljeno planiranje i strateško razmišljanje kako bi vaš projekt postigao svoje ciljeve.',
    en: 'Thoughtful planning and strategic thinking to ensure your project achieves its goals.'
  },
  
  // Treatments page
  'treatments.title': {
    hr: 'Tretmani',
    en: 'Treatments'
  },
  'treatments.description': {
    hr: 'Otkrijte naš asortiman naprednih tretmana dizajniranih da poboljšaju vašu prirodnu ljepotu.',
    en: 'Discover our range of advanced treatments designed to enhance your natural beauty.'
  },
  'treatments.facial.name': {
    hr: 'Pomlađivanje lica',
    en: 'Facial Rejuvenation'
  },
  'treatments.facial.description': {
    hr: 'Napredni tretmani lica za sve tipove kože',
    en: 'Advanced facial treatments for all skin types'
  },
  'treatments.facial.duration': {
    hr: '90 minuta',
    en: '90 minutes'
  },
  'treatments.facial.suitableFor': {
    hr: 'Svi tipovi kože, posebno zrela koža s znakovima starenja',
    en: 'All skin types, especially mature and aging skin'
  },
  'treatments.body.name': {
    hr: 'Wellness tijela',
    en: 'Body Wellness'
  },
  'treatments.body.description': {
    hr: 'Revitalizirajući tretmani tijela za potpuni wellness',
    en: 'Rejuvenating body treatments for complete wellness'
  },
  'treatments.body.duration': {
    hr: '120 minuta',
    en: '120 minutes'
  },
  'treatments.body.suitableFor': {
    hr: 'Svi tipovi kože, idealno za stresnu i umornu kožu',
    en: 'All skin types, ideal for stressed and tired skin'
  },
  'treatments.antiAging.name': {
    hr: 'Anti-aging terapija',
    en: 'Anti-Aging Therapy'
  },
  'treatments.antiAging.description': {
    hr: 'Najsuvremenija anti-aging rješenja',
    en: 'Cutting-edge anti-aging solutions'
  },
  'treatments.antiAging.duration': {
    hr: '75 minuta',
    en: '75 minutes'
  },
  'treatments.antiAging.suitableFor': {
    hr: 'Zrela koža sa znakovima starenja, borama i oštećenjima od sunca',
    en: 'Mature skin with signs of aging, wrinkles, and sun damage'
  },
  'treatments.duration': {
    hr: 'Trajanje:',
    en: 'Duration:'
  },
  'treatments.suitable': {
    hr: 'Pogodno za:',
    en: 'Suitable for:'
  },
  
  // Treatment detail pages
  'treatment.backToTreatments': {
    hr: 'Povratak',
    en: 'Back to Treatments'
  },
  'treatment.description': {
    hr: 'Opis',
    en: 'Description'
  },
  'treatment.price': {
    hr: 'Cijena',
    en: 'Price'
  },
  'treatment.perSession': {
    hr: 'po sesiji',
    en: 'per session'
  },
  'treatment.notFound': {
    hr: 'Tretman nije pronađen',
    en: 'Treatment not found'
  },
  'treatment.facial.description1': {
    hr: 'Naš napredni tretman pomlađivanja lica kombinira najsuvremeniju tehnologiju s premium sastojcima za njegu kože kako bi obnovio prirodni sjaj i vitalnost vaše kože.',
    en: 'Our advanced facial rejuvenation treatment combines cutting-edge technology with premium skincare ingredients to restore your skin\'s natural radiance and vitality.'
  },
  'treatment.facial.description2': {
    hr: 'Ovaj sveobuhvatan tretman cilja fine linije, nejednolični ton kože i gubitak elastičnosti, ostavljajući vašu kožu osvježenu, obnovljenu i blistavu od zdravlja.',
    en: 'This comprehensive treatment targets fine lines, uneven skin tone, and loss of elasticity, leaving your skin refreshed, renewed, and glowing with health.'
  },
  'treatment.body.description1': {
    hr: 'Doživite potpuno pomlađivanje tijela s našim holističkim wellness tretmanom koji kombinira terapeutsku masažu, hranjive body wrap-ove i premium njegu kože.',
    en: 'Experience complete body rejuvenation with our holistic wellness treatment that combines therapeutic massage, nourishing body wraps, and premium skincare.'
  },
  'treatment.body.description2': {
    hr: 'Ovaj tretman cijelog tijela potiče cirkulaciju, smanjuje napetost i duboko hidrira vašu kožu za potpuno wellness iskustvo.',
    en: 'This full-body treatment promotes circulation, reduces tension, and deeply moisturizes your skin for a complete wellness experience.'
  },
  'treatment.antiAging.description1': {
    hr: 'Naš najnapredniji anti-aging tretman kombinira najsuvremeniju tehnologiju sa znanstveno dokazanim sastojcima za borbu protiv znakova starenja na staničnoj razini.',
    en: 'Our most advanced anti-aging treatment combines cutting-edge technology with scientifically proven ingredients to combat signs of aging at the cellular level.'
  },
  'treatment.antiAging.description2': {
    hr: 'Ovaj premium tretman cilja duboke bore, mrlje od starenja i gubitak čvrstoće, pružajući vidljive rezultate i dugotrajno pomlađivanje.',
    en: 'This premium treatment targets deep wrinkles, age spots, and loss of firmness, delivering visible results and long-lasting rejuvenation.'
  },
  
  // Contact page
  'contact.title': {
    hr: 'Kontaktirajte nas',
    en: 'Get In Touch'
  },
  'contact.description': {
    hr: 'Razgovarajmo o vašem projektu i vidimo kako možemo raditi zajedno.',
    en: 'Let\'s discuss your project and see how we can work together.'
  },
  'contact.info': {
    hr: 'Kontakt informacije',
    en: 'Contact Information'
  },
  'contact.email': {
    hr: 'Email: hello@podium.com',
    en: 'Email: hello@podium.com'
  },
  'contact.phone': {
    hr: 'Telefon: +385 98-1967-172',
    en: 'Phone: +385 98-1967-172'
  },
  'contact.address': {
    hr: 'Adresa: Ulica Jurja Žerjavića 9, Zagreb, Hrvatska',
    en: 'Address: Jurja Žerjavića 9 Street, Zagreb, Croatia'
  },
  'contact.form.name': {
    hr: 'Vaše ime',
    en: 'Your Name'
  },
  'contact.form.email': {
    hr: 'Vaš email',
    en: 'Your Email'
  },
  'contact.form.message': {
    hr: 'Vaša poruka',
    en: 'Your Message'
  },
  'contact.form.send': {
    hr: 'Pošaljite poruku',
    en: 'Send Message'
  },
  
  // 5 Elements page
  'elements.title': {
    hr: '5 elemenata',
    en: 'The 5 Elements'
  },
  'elements.description': {
    hr: 'Naša filozofija njege kože izgrađena je oko pet osnovnih elemenata koji rade zajedno kako bi pružili sveobuhvatno zdravlje kože i poboljšanje ljepote.',
    en: 'Our skincare philosophy is built around five essential elements that work together to provide comprehensive skin health and beauty enhancement.'
  },
  'elements.purification.name': {
    hr: 'PROČIŠĆAVANJE',
    en: 'PURIFICATION'
  },
  'elements.purification.description': {
    hr: 'Za pročišćavanje, odabrali smo sastojke koji mogu nježno očistiti kožu, ukloniti nečistoće, eksfolirati mrtve stanice, umiriti iritaciju kože, eliminirati štetne bakterije i liječiti opekline i rane. Među ključnim sastojcima koji podržavaju ovaj element su Saponaria Officinalis (sapunica), zelena francuska glina, veliki čičak, pivski kvasac i mimoza kora.',
    en: 'For Purification, we selected ingredients that can gently cleanse the skin, remove impurities, exfoliate dead cells, calm skin irritation, eliminate harmful bacteria, and heal burns and wounds. Among the key ingredients supporting this element are Saponaria Officinalis (Soapwort), Green French clay, Great Burdock, Brewer\'s Yeast, and Mimosa Bark.'
  },
  'elements.stimulation.name': {
    hr: 'STIMULACIJA',
    en: 'STIMULATION'
  },
  'elements.stimulation.description': {
    hr: 'Za stimulaciju, naši ključni sastojci potiču opskrbu kože kisikom poboljšanjem cirkulacije krvi i limfne funkcije. Među ovim sastojcima koji podržavaju ovaj element možete pronaći Centella Asiatica, cimet, Arnica Montana, klinčić i kavu.',
    en: 'For Stimulation, our key ingredients encourage oxygen supply to the skin by enhancing blood circulation and lymphatic function. Among these ingredients supporting this element, you may find Centella Asiatica, Cinnamon, Arnica Montana, Clove, and Coffee.'
  },
  'elements.hydration.name': {
    hr: 'HIDRATACIJA',
    en: 'HYDRATION'
  },
  'elements.hydration.description': {
    hr: 'Za hidrataciju, odabrali smo sastojke koji mogu raditi na dva značajna aspekta vlažnosti kože: privlačenje vlage i dostavljanje je koži te zadržavanje vlage kože, štiteći je od gubitka hidratacije. Među sastojcima koji podržavaju ovaj element: aminokiseline svile, alge, proteini mlijeka i med.',
    en: 'For Hydration, we selected ingredients that can work on two significant aspects of skin moisture: attracting moisture and delivering it to the skin and retaining the skin\'s moisture, protecting it from hydration loss. Among the ingredients that support this element: Silk Amino acids, Algae, Milk protein, and Honey.'
  },
  'elements.nourishment.name': {
    hr: 'HRANJENJE',
    en: 'NOURISHMENT'
  },
  'elements.nourishment.description': {
    hr: 'Za hranjenje, odabrali smo sastojke koji mogu koži pružiti esencijalne vitamine, masne kiseline, minerale i antioksidanse potrebne za dugoročno zdravlje kože. Među ovim sastojcima možete pronaći jojoba ulje, vitamin F, ulje šipka i ulje noćurka.',
    en: 'For Nourishment, we selected ingredients that can provide the skin with essential vitamins, fatty acids, minerals, and antioxidants required for the skin\'s long-term health. Among these ingredients, you may find Jojoba oil, Vitamin F, Rosehip oil, and Evening Primrose oil.'
  },
  'elements.protection.name': {
    hr: 'ZAŠTITA',
    en: 'PROTECTION'
  },
  'elements.protection.description': {
    hr: 'Za zaštitu, radimo sa sastojcima koji podržavaju dugoročnu ravnotežu zdrave kože, detoksificiraju je i sprječavaju vanjske utjecaje koji je mogu oštetiti. Među sastojcima koje uključujemo u naše proizvode za podršku ovog elementa su skvalen/skvalan, vitamin C, zeleni čaj, crvena loza i hibiskus.',
    en: 'For Protection, we work with ingredients that support the long-term balance of healthy skin, detoxify it, and prevent external effects that may damage it. Among the ingredients that we include in our products to support this element are Squalene/ Squalane, Vitamin C, Green Tea, Red Vine, and Hibiscus.'
  },
  
  // NotFound page
  'notFound.title': {
    hr: '404',
    en: '404'
  },
  'notFound.message': {
    hr: 'Ups! Stranica nije pronađena',
    en: 'Oops! Page not found'
  },
  'notFound.backHome': {
    hr: 'Povratak na početnu',
    en: 'Return to Home'
  },
  
  // Footer
  'footer.contact': {
    hr: 'Kontaktirajte nas',
    en: 'Contact Us'
  },
  'footer.tagline': {
    hr: 'Premium Beauty & Wellness',
    en: 'Premium Beauty & Wellness'
  },
  'footer.email': {
    hr: 'info@podium.com',
    en: 'info@podium.com'
  },
  'footer.phone': {
    hr: '+1 (555) 123-4567',
    en: '+1 (555) 123-4567'
  },
  'footer.address': {
    hr: '123 Beauty Street, Wellness City',
    en: '123 Beauty Street, Wellness City'
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
