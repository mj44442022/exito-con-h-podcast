import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    'nav.listen': 'Escuchar',
    'nav.about': 'Sobre el podcast',
    'nav.host': 'La conductora',
    'nav.newsletter': 'Newsletter',

    // Hero
    'hero.title': 'Éxito con H',
    'hero.subtitle': 'El podcast donde el éxito se escribe con historia, con hambre y con humanidad.',
    'hero.cta': 'Escuchar ahora',
    'hero.cta2': 'Suscribirse al newsletter',

    // About
    'about.label': 'De qué trata',
    'about.text': 'Éxito con H es para las que rompieron el molde pero siguen buscando su forma. Conversaciones honestas sobre carrera, identidad, ambición y vida bien vivida.',
    'about.pillar1': 'Mentalidad',
    'about.pillar1desc': 'Redefine lo que el éxito significa para ti, lejos del ruido.',
    'about.pillar2': 'Comunidad',
    'about.pillar2desc': 'Historias de latinas que construyen en sus propios términos.',
    'about.pillar3': 'Estrategia',
    'about.pillar3desc': 'Datos, frameworks y herramientas para tomar decisiones con claridad.',

    // Episodes
    'episodes.label': 'Episodios recientes',
    'episodes.listen': 'Escuchar',
    'episodes.min': 'min',
    'episodes.ep1.title': 'El éxito que nadie te enseñó a buscar',
    'episodes.ep1.desc': '¿Qué pasa cuando logras todo lo que te dijeron que querías y aún sientes que falta algo?',
    'episodes.ep2.title': 'Ser latina en corporate America',
    'episodes.ep2.desc': 'Navegando espacios donde eres la única que se parece a ti, sin perder tu esencia.',
    'episodes.ep3.title': 'Datos, decisiones y la vida real',
    'episodes.ep3.desc': 'Cómo usar pensamiento analítico para diseñar la vida que realmente quieres.',

    // Host
    'host.label': 'La conductora',
    'host.name': 'Majo',
    'host.bio': 'Senior Manager de Analytics. Escritora. Peruana en Toronto. Cuento datos como historias y historias como datos.',
    'host.instagram': 'Instagram',
    'host.linkedin': 'LinkedIn',

    // Platforms
    'platforms.label': 'Dónde escuchar',
    'platforms.subtitle': 'Disponible en tu plataforma favorita',

    // Newsletter
    'newsletter.label': 'The Majo Letter',
    'newsletter.headline': 'Cada martes a las 7AM, una carta para las que construyen en silencio.',
    'newsletter.placeholder': 'Tu email',
    'newsletter.cta': 'Unirme',
    'newsletter.note': 'Bilingüe. Honesta. Gratis.',

    // Footer
    'footer.tagline': 'Donde los datos se encuentran con la creatividad.',
    'footer.by': 'by Majo Cuenta',
  },
  en: {
    // Nav
    'nav.listen': 'Listen',
    'nav.about': 'About',
    'nav.host': 'The host',
    'nav.newsletter': 'Newsletter',

    // Hero
    'hero.title': 'Éxito con H',
    'hero.subtitle': 'The podcast where success is written with history, hunger, and humanity.',
    'hero.cta': 'Listen now',
    'hero.cta2': 'Subscribe to newsletter',

    // About
    'about.label': 'What it\'s about',
    'about.text': 'Éxito con H is for those who broke the mold but are still finding their shape. Honest conversations about career, identity, ambition, and a life well lived.',
    'about.pillar1': 'Mindset',
    'about.pillar1desc': 'Redefine what success means to you, away from the noise.',
    'about.pillar2': 'Community',
    'about.pillar2desc': 'Stories of Latinas building on their own terms.',
    'about.pillar3': 'Strategy',
    'about.pillar3desc': 'Data, frameworks, and tools to make decisions with clarity.',

    // Episodes
    'episodes.label': 'Recent episodes',
    'episodes.listen': 'Listen',
    'episodes.min': 'min',
    'episodes.ep1.title': 'The success no one taught you to seek',
    'episodes.ep1.desc': 'What happens when you achieve everything they told you to want and still feel something\'s missing?',
    'episodes.ep2.title': 'Being Latina in corporate America',
    'episodes.ep2.desc': 'Navigating spaces where you\'re the only one who looks like you, without losing your essence.',
    'episodes.ep3.title': 'Data, decisions, and real life',
    'episodes.ep3.desc': 'How to use analytical thinking to design the life you actually want.',

    // Host
    'host.label': 'The host',
    'host.name': 'Majo',
    'host.bio': 'Senior Manager of Analytics. Writer. Peruvian in Toronto. I tell data like stories and stories like data.',
    'host.instagram': 'Instagram',
    'host.linkedin': 'LinkedIn',

    // Platforms
    'platforms.label': 'Where to listen',
    'platforms.subtitle': 'Available on your favorite platform',

    // Newsletter
    'newsletter.label': 'The Majo Letter',
    'newsletter.headline': 'Every Tuesday at 7AM, a letter for those who build in silence.',
    'newsletter.placeholder': 'Your email',
    'newsletter.cta': 'Join',
    'newsletter.note': 'Bilingual. Honest. Free.',

    // Footer
    'footer.tagline': 'Where data meets creativity.',
    'footer.by': 'by Majo Cuenta',
  }
};
