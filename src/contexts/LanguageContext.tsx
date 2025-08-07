
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
  'nav.homepage': {
    hr: 'Početna',
    en: 'Homepage'
  },
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
    hr: 'Podium',
    en: 'Podium'
  },
  'hero.subtitle': {
    hr: 'Premium',
    en: 'Premium'
  },
  'hero.description': {
    hr: 'Više od 20 godina iskustva u pristupu njege kože temeljenog na znanju, iskustvu i dubokoj posvećenosti svakom klijentu. Izbor proizvoda za rad rezultat je dugotrajnog istraživanja. Koristimo isključivo prirodne i holističke proizvode, bez štetnih sastojaka.\n\nUz sve napredne tehnologije za nas su najdragocjenije: ruke, oči i intuicija.\nSalon u srcu grada, mjesto gdje se klijentice osjećaju opušteno i njegovano. Bilo da dolazite na jedan tretman ili ste se odlučili za protokole, vašoj koži osigurali smo jedinstveno iskustvo s naglaskom na zdravlje i ljepotu kože.',
    en: 'With over 20 years of experience, our approach to skincare is rooted in knowledge, dedication, and a deep commitment to each client. Every product we use is the result of thorough research – carefully selected based on strict quality standards, with a focus on natural, therapeutic formulas free from harmful ingredients.\n\nAlongside top-quality products and advanced equipment, the most valuable tools remain: hands, eyes, and intuition.\nOur salon is a peaceful oasis in the heart of the city – a place where clients feel relaxed, cared for, and seen.\nWhether you come for a single treatment or a complete beauty ritual, you\'ll leave feeling refreshed, confident, and radiant.'
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
    hr: 'Podium je mjesto gdje se snaga jednostavnosti i elegancije susreće s najsuvremenijom tehnologijom. Naš pristup spaja minimalističke taylor made principe s funkcionalnom izvrsnošću, stvarajući iskustva koja su značajna za kvalitetu kože i opću dobrobit.',
    en: 'Podium is a place where the power of simplicity and elegance meets cutting-edge technology. Our approach combines minimalist, tailor-made principles with functional excellence, creating experiences that truly enhance skin quality and overall well-being.'
  },
  'about.description2': {
    hr: 'Smješten u srcu Zagreba, salon Podium nudi ekskluzivne protokole njege s izabranim brendovima, primjenjujući masažne tehnike ovisno o zahtjevima kože. Svaki tretman je prilika za pomicanje granica i istraživanje novih mogućnosti uz održavanje najviših standarda kvalitete i pažnje za detalje.',
    en: 'Located in the heart of Zagreb, Podium offers exclusive skincare protocols using carefully selected brands, applying massage techniques tailored to the skin\'s specific needs. Each treatment is an opportunity to push boundaries and explore new possibilities, while maintaining the highest standards of quality and attention to detail.'
  },
  'about.description3': {
    hr: 'Naša misija je posvetiti se svakom klijentu s potpunom pažnjom i stručnošću, pružajući tretman prilagođen individualnim potrebama kože.\nVerujemo da rezultati njege ne završavaju u salonu, zato uz svaki tretman pružamo personaliziranu preporuku za kućnu njegu, kako biste i kod kuće mogli nastaviti s njegom koja donosi vidljive i dugotrajne rezultate.',
    en: 'Our mission is to dedicate full attention and expertise to each client, providing a treatment tailored to the skin\'s individual needs.\nWe believe that skincare results shouldn\'t end in the salon, which is why every treatment includes a personalized home care recommendation, allowing you to continue effective, visible, and long-lasting results at home.'
  },
  'about.description4': {
    hr: '.',
    en: ''
  },
  'about.description5': {
    hr: 'Vjerujemo da prava ljepota dolazi iznutra, zato se u Podiumu brinemo i o izgledu i unutarnjem balansu. Naš cilj je da se kroz tretmane osjećate samopouzdano i revitalizirano.\n\n.',
    en: 'We believe that true beauty comes from within, which is why at Podium we care for both your appearance and inner balance.\nOur goal is for you to leave each treatment feeling confident, refreshed, and renewed.\n\n.'
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
    hr: 'Otkrijte našu ponudu naprednih protokola.',
    en: 'Discover our range of protocols.'
  },
  'treatments.resetDetoxify.name': {
    hr: 'Reset & Detoxify Protocol',
    en: 'Reset & Detoxify Protocol'
  },
  'treatments.resetDetoxify.description': {
    hr: 'Profesionalni tretman za dubinsko čišćenje i balansiranje kože',
    en: 'Professional treatment for deep cleansing and skin balancing'
  },
  'treatments.resetDetoxify.duration': {
    hr: '75 minuta',
    en: '75 minutes'
  },
  'treatments.resetDetoxify.suitableFor': {
    hr: 'Preporučuje se za masnu kožu izvan ravnoteže, sklonu seboreji i aknama',
    en: 'Recommended for oily skin out of balance, prone to seborrhea and acne'
  },
  'treatments.wellAging.name': {
    hr: 'Well-Aging Protocol',
    en: 'Well-Aging Protocol'
  },
  'treatments.wellAging.description': {
    hr: 'Napredni tretman za kožu koja pokazuje znakove starenja',
    en: 'Advanced treatment for skin showing signs of aging'
  },
  'treatments.wellAging.duration': {
    hr: '90 minuta',
    en: '90 minutes'
  },
  'treatments.wellAging.suitableFor': {
    hr: 'Za kožu koja pokazuje znakove starenja',
    en: 'For skin showing signs of aging'
  },
  'treatments.deactivateStress.name': {
    hr: 'Deactivate Stress Protocol',
    en: 'Deactivate Stress Protocol'
  },
  'treatments.deactivateStress.description': {
    hr: 'Cjeloviti tretman za umiravanje i revitalizaciju kože pod stresom',
    en: 'Complete treatment for calming and revitalizing stressed skin'
  },
  'treatments.deactivateStress.duration': {
    hr: '85 minuta',
    en: '85 minutes'
  },
  'treatments.deactivateStress.suitableFor': {
    hr: 'Preporučuje se za osjetljivu kožu pod stresom zbog negativnog učinka urbanog života',
    en: 'Recommended for sensitive skin under stress due to negative effects of urban life'
  },
  'treatments.proRenewalPeel.name': {
    hr: 'Pro Renewal Gradual Peel Protocol',
    en: 'Pro Renewal Gradual Peel Protocol'
  },
  'treatments.proRenewalPeel.description': {
    hr: 'Tretman za kožu sklonu aknama i post-aknama, kod znakova starenja, hiperpigmentacija',
    en: 'Treatment for acne-prone and post-acne skin, signs of aging, hyperpigmentation'
  },
  'treatments.proRenewalPeel.duration': {
    hr: '90 minuta',
    en: '90 minutes'
  },
  'treatments.proRenewalPeel.suitableFor': {
    hr: 'Tretman za kožu sklonu aknama i post-aknama, kod znakova starenja, hiperpigmentacija, za postizanje iznimnog sjaja',
    en: 'Treatment for acne-prone and post-acne skin, signs of aging, hyperpigmentation, for achieving exceptional radiance'
  },
  'treatments.brighteningTouch.name': {
    hr: 'Brightening Touch',
    en: 'Brightening Touch'
  },
  'treatments.brighteningTouch.description': {
    hr: 'Preporučeno za poboljšanje sjaja kože, hidratacije i teksture',
    en: 'Recommended for improving skin radiance, hydration and texture'
  },
   'treatments.brighteningTouch.duration': {
    hr: '80 minuta',
    en: '80 minutes'
  },
  'treatments.brighteningTouch.suitableFor': {
    hr: 'Preporučeno za poboljšanje sjaja kože, hidratacije i teksture',
    en: 'Recommended for improving skin radiance, hydration and texture'
  },
  'treatments.sixtyMinutes.name': {
    hr: '60-Minutes Treatment',
    en: '60-Minutes Treatment'
  },
  'treatments.sixtyMinutes.description': {
    hr: 'Preporučuje se za normalnu, mješovitu, umornu i sivu kožu, kao i za kožu kojoj je potrebna nježna obnova i blago posvjetljivanje',
    en: 'Recommended for normal, combination, tired and dull skin, as well as skin that needs gentle renewal and mild brightening'
  },
  'treatments.sixtyMinutes.duration': {
    hr: '60 minuta',
    en: '60 minutes'
  },
  'treatments.sixtyMinutes.suitableFor': {
    hr: 'Normalna, mješovita, umorna i siva koža koja treba nježnu obnovu',
    en: 'Normal, combination, tired and dull skin that needs gentle renewal'
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
    hr: 'Svi tipovi kože, posebno zrela koža sa znakovima starenja',
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
    hr: 'Svi tipovi kože, idealno za umornu kožu od stresom',
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
    hr: 'tretman',
    en: 'treatment'
  },
  'treatment.notFound': {
    hr: 'Tretman nije pronađen',
    en: 'Treatment not found'
  },
  'treatment.resetDetoxify.description1': {
    hr: 'Ovaj profesionalni tretman nježno ali temeljito čisti kožu, balansira i dubinski hidratizira. Kombinacija detoksikacijskih maski, infuzije kamilice, ultrazvuka i eventualne ekstrakcije pruža koži osvježen izgled i vraća prirodni sjaj.',
    en: 'This professional facial deeply yet gently cleanses the skin, balances and hydrates it thoroughly. A combination of detox masks, chamomile infusion, ultrasound and optional extractions revives tired, congested, unbalanced or dehydrated skin.'
  },
  'treatment.resetDetoxify.description2': {
    hr: 'Idealan je za umornu, začepljenu, neuravnoteženu ili dehidriranu kožu. Tretman završava smirujućom limfnom drenažom i dubinskom njegom.',
    en: 'The treatment ends with soothing lymphatic drainage and intense nourishment for a fresh, radiant glow.'
  },
  'treatment.wellAging.description1': {
    hr: 'Ovaj tretman kombinira dubinsko čišćenje, detoksikaciju i intenzivnu njegu kože pomoću moćnih maski, aktivnih seruma i masaža. Prilagođen je različitim tipovima kože – od dehidrirane do masne i aknama sklone.',
    en: 'This treatment combines deep cleansing, detox, and intense skin nourishment using powerful masks, active serums, and massage techniques. It\'s tailored to suit various skin types – from dehydrated to oily or acne-prone.'
  },
  'treatment.wellAging.description2': {
    hr: 'Zahvaljujući kombinaciji manuelne masaže, infuzije kamilice i mogućnosti upotrebe ultrazvučnih uređaja, tretman obnavlja kožu, vraća ravnotežu i ostavlja je blistavom, nahranjenom i vidno zaglađenom.',
    en: 'With a mix of manual massage, chamomile infusion, and optional ultrasonic device use, the treatment restores skin balance, refreshes the complexion, and leaves the face glowing, nourished, and visibly smoother.'
  },
  'treatment.deactivateStress.description1': {
    hr: 'Ovaj tretman pruža cjelovitu njegu kože kroz nježno čišćenje, detoksikaciju i dubinsku hidrataciju. Koriste se hranjive maske, serum s antioksidansima i Golden Touch Oil za poboljšanje elastičnosti i sjaja kože.',
    en: 'This treatment offers complete skin care through gentle cleansing, detoxification, and deep hydration. Nourishing masks, antioxidant serums, and Golden Touch Oil help boost elasticity and glow.'
  },
  'treatment.deactivateStress.description2': {
    hr: 'Završava relaksirajućom masažom, maskom prema tipu kože i preporučenom limfnom drenažom za dodatni drenažni i umirujući učinak. Idealno za sve tipove kože, posebno umornu i dehidriranu.',
    en: 'It ends with a relaxing massage, a customized mask, and optional lymphatic drainage for extra soothing and drainage benefits. Perfect for all skin types, especially tired or dehydrated skin.'
  },
  'treatment.proRenewalPeel.description1': {
    hr: 'Ovaj tretman kombinira nježno, ali učinkovito čišćenje s enzimskim pilingom, dubinskom hidratacijom i revitalizacijom kože. Posebna pažnja posvećuje se i njezi područja oko očiju.',
    en: 'This treatment combines gentle yet effective cleansing with enzymatic peeling, deep hydration, and skin revitalization. Special care is also given to the delicate eye area.'
  },
  'treatment.proRenewalPeel.description2': {
    hr: 'Tretman uključuje korištenje seruma i gelova prilagođenih tipu kože, a završava hranjivom kremom koja obnavlja i umiruje kožu. Idealan je za sivu, umornu i neujednačenu kožu kojoj je potrebno osvježenje.',
    en: 'The procedure uses customized serums and gels based on skin type and finishes with a nourishing cream that soothes and restores. Perfect for dull, tired, and uneven skin in need of a refreshing boost.'
  },
  'treatment.brighteningTouch.description1': {
    hr: 'Ovaj tretman usmjeren je na pročišćavanje, posvjetljivanje i dubinsku revitalizaciju kože. Kombinira piling, serum s posvjetljujućim učinkom, masku bogatu aktivnim sastojcima te opcionalnu upotrebu ultrazvuka ili galvanske struje.',
    en: 'This facial focuses on purification, brightening, and deep revitalization of the skin. It combines enzymatic peeling, a brightening serum, a nutrient-rich mask, and optional use of an ultrasonic or galvanic device.'
  },
  'treatment.brighteningTouch.description2': {
    hr: 'Tretman završava umirujućom kremom i čini kožu blistavijom, mekšom i ujednačenijom. Idealan je za umornu, neujednačenu ili sivu kožu.',
    en: 'The treatment ends with a calming cream, leaving the skin radiant, smooth, and more even in tone. Perfect for dull, uneven, or tired skin.'
  },
  'treatment.sixtyMinutes.description1': {
    hr: 'Ovaj tretman kombinira piling, aktivne serume i umirujuće maske kako bi koža bila dubinski očišćena, revitalizirana i nahranjena. Koristi se Heritage maska s Flash peelingom, nakon čega slijedi hranjiva maska s individualno prilagođenim serumima.',
    en: 'This facial combines peeling, active serums, and soothing masks to deeply cleanse, revitalize, and nourish the skin. The treatment includes a Heritage & Flash exfoliating mask, followed by a hydrating mask with custom-blended serums.'
  },
  'treatment.sixtyMinutes.description2': {
    hr: 'Tretman završava završnom kremom za obnovu kože, ostavljajući je osvježenu, blistaviju i s poboljšanom teksturom. Idealan je za redovitu njegu i održavanje zdravog izgleda kože.',
    en: 'The treatment ends with a final cream for skin restoration, leaving the skin refreshed, more radiant, and with improved texture. Perfect for regular care and maintaining healthy-looking skin.'
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
    hr: 'Ovaj premium tretman usmjeren na duboke bore, hiperpigmentacije i gubitak čvrstoće, pružajući vidljive rezultate i dugotrajno pomlađivanje.',
    en: 'This premium treatment targets deep wrinkles, age spots, and loss of firmness, delivering visible results and long-lasting rejuvenation.'
  },
  
  // Contact page
  'contact.title': {
    hr: 'Kontaktirajte nas već danas',
    en: 'Get In Touch'
  },
  'contact.description': {
    hr: 'Molimo ispunite podatke u nastavku i povratno ćemo vam se javiti u najkraćem mogućem roku.',
    en: 'Please fill in the information below and we\'ll get back to you as soon as possible.'
  },
  'contact.info': {
    hr: 'Kontakt informacije',
    en: 'Contact Information'
  },
  'contact.email': {
    hr: 'Email: skincare.podium@gmail.com',
    en: 'Email: skincare.podium@gmail.com'
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
  'contact.form.phone': {
    hr: 'Vaš telefon (opcionalno)',
    en: 'Your Phone (optional)'
  },
  'contact.form.subject': {
    hr: 'Naslov (opcionalno)',
    en: 'Subject (optional)'
  },
  'contact.form.message': {
    hr: 'Vaša poruka',
    en: 'Your Message'
  },
  'contact.form.send': {
    hr: 'Pošaljite poruku',
    en: 'Send Message'
  },
  'contact.form.required': {
    hr: 'Molimo unesite sva obavezna polja',
    en: 'Please fill in all required fields'
  },
  'contact.form.success': {
    hr: 'Poruka je uspješno poslana! Otvorit će se vaš email klijent.',
    en: 'Message sent successfully! Your email client will open.'
  },
  'contact.form.error': {
    hr: 'Greška pri slanju poruke. Molimo pokušajte ponovno.',
    en: 'Error sending message. Please try again.'
  },
  
  // 5 Elements page
  'elements.title': {
    hr: '5 elemenata',
    en: 'The 5 Elements'
  },
  'elements.description': {
    hr: 'Naša filozofija njege kože temeljena na 5 osnovnih elemenata koji rade zajedno kako bi pružili sveobuhvatno zdravlje kože.',
    en: 'Our skincare philosophy is built around five essential elements that work together to provide comprehensive skin health.'
  },
  'elements.purification.name': {
    hr: 'PROČIŠĆAVANJE',
    en: 'PURIFICATION'
  },
  'elements.purification.description': {
    hr: 'Za pročišćavanje, odabrali smo sastojke koji mogu nježno očistiti kožu, ukloniti nečistoće, eksfolirati mrtve stanice, umiriti iritaciju kože, eliminirati štetne učinke te liječiti upalna stanja. Među ključnim sastojcima koji podržavaju ovaj element su Saponaria Officinalis (sapunica), zelena francuska glina, veliki čičak, pivski kvasac i mimoza kora.',
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
    hr: 'Premium Beauty',
    en: 'Premium Beauty'
  },
  'footer.email': {
    hr: 'skincare.podium@gmail.com',
    en: 'skincare.podium@gmail.com'
  },
  'footer.phone': {
    hr: '+38598 1967172',
    en: '+38598 1967172'
  },
  'footer.address': {
    hr: 'Jurja Žerjavića 9, 10000 Zagreb',
    en: 'Jurja Žerjavića 9, 10000 Zagreb'
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
