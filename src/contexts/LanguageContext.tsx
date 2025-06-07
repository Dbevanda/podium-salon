
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
    hr: 'Povratak na tretmane',
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
    hr: 'Telefon: +1 (555) 123-4567',
    en: 'Phone: +1 (555) 123-4567'
  },
  'contact.address': {
    hr: 'Adresa: 123 Design Street, City, State 12345',
    en: 'Address: 123 Design Street, City, State 12345'
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
    hr: 'Naša filozofija ukorijenjena je u drevnoj mudrosti pet elemenata, stvarajući sklad između prirode i ljepote kroz principe tradicionalne kineske medicine.',
    en: 'Our philosophy is rooted in the ancient wisdom of the five elements, creating harmony between nature and beauty through Traditional Chinese Medicine principles.'
  },
  'elements.wood.description': {
    hr: 'Proljeće. Istok. Rast. Ekspanzija. Vizija. Benevolencija. Fleksibilnost. Kreativnost. Strpljenje. Rođenje. Mladost. Optimizam. Suosjećanje. Mašta. Velikodušnost. Vodstvo. Pionirstvo. Natjecanje.',
    en: 'Spring. East. Growth. Expansion. Vision. Benevolence. Flexibility. Creativity. Patience. Birth. Youth. Optimism. Compassion. Imagination. Generosity. Leadership. Pioneering. Competition.'
  },
  'elements.fire.description': {
    hr: 'Ljeto. Jug. Radost. Toplina. Entuzijazam. Strast. Komunikacija. Karizma. Ljubav. Smijeh. Kreativnost. Duhovnost. Intuicija. Svjesnost. Transformacija. Izražavanje.',
    en: 'Summer. South. Joy. Warmth. Enthusiasm. Passion. Communication. Charisma. Love. Laughter. Creativity. Spirituality. Intuition. Awareness. Transformation. Expression.'
  },
  'elements.earth.description': {
    hr: 'Kasno ljeto. Centar. Stabilnost. Uzemljenje. Njega. Podrška. Promišljenost. Praktičnost. Pouzdanost. Simpatija. Pravednost. Žetva. Obilje. Prihvaćanje. Kontemplacija.',
    en: 'Late Summer. Center. Stability. Grounding. Nurturing. Support. Thoughtfulness. Practicality. Reliability. Sympathy. Fairness. Harvest. Abundance. Acceptance. Contemplation.'
  },
  'elements.metal.description': {
    hr: 'Jesen. Zapad. Žalost. Puštanje. Poštovanje. Čistoća. Preciznost. Organizacija. Struktura. Kvaliteta. Rafiniranost. Razlučivanje. Disciplina. Učinkovitost. Red. Završetak.',
    en: 'Autumn. West. Grief. Letting go. Respect. Purity. Precision. Organization. Structure. Quality. Refinement. Discernment. Discipline. Efficiency. Order. Completion.'
  },
  'elements.water.description': {
    hr: 'Zima. Sjever. Strah. Snaga volje. Mudrost. Introspekcija. Razmišljanje. Skladištenje. Konzervacija. Izdržljivost. Odlučnost. Ambicija. Rezerviranost. Dubina. Tajanstvenost. Potencijal.',
    en: 'Winter. North. Fear. Will power. Wisdom. Introspection. Reflection. Storage. Conservation. Endurance. Determination. Ambition. Reserved. Deep. Mysterious. Potential.'
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
