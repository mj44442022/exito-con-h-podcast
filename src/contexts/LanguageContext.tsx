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
    'nav.listen': 'Episodios',
    'nav.about': 'Sobre el podcast',
    'nav.host': 'Majo',
    'nav.newsletter': 'Newsletter',

    // Hero
    'hero.badge': 'Podcast · Newsletter · Comunidad',
    'hero.title': 'Éxito con H',
    'hero.subtitle': 'El podcast donde el éxito se escribe con historia, con hambre y con humanidad.',
    'hero.cta': 'Escuchar ahora',
    'hero.cta2': 'Newsletter gratis',

    // About
    'about.label': 'De qué va esto',
    'about.text': 'Éxito con H es para las que rompieron el molde pero siguen buscando su forma. Conversaciones reales sobre carrera, identidad, ambición y vida bien vivida.',
    'about.pillar1': 'Mentalidad',
    'about.pillar1desc': 'Redefine lo que el éxito significa para ti. Sin fórmulas, sin ruido.',
    'about.pillar2': 'Comunidad',
    'about.pillar2desc': 'Historias de latinas construyendo en sus propios términos.',
    'about.pillar3': 'Estrategia',
    'about.pillar3desc': 'Datos, frameworks y herramientas para decidir con claridad.',

    // Episodes
    'episodes.label': 'Escucha',
    'episodes.heading': 'Episodios recientes',
    'episodes.viewAll': 'Ver todos en Spotify',
    'episodes.listen': 'Escuchar',
    'episodes.min': 'min',
    'episodes.ep1.title': 'El éxito que nadie te enseñó a buscar',
    'episodes.ep1.desc': '¿Qué pasa cuando logras todo lo que te dijeron que querías y aún sientes que falta algo?',
    'episodes.ep2.title': 'Ser latina en corporate America',
    'episodes.ep2.desc': 'Navegando espacios donde eres la única que se parece a ti, sin perder tu esencia.',
    'episodes.ep3.title': 'Datos, decisiones y la vida real',
    'episodes.ep3.desc': 'Cómo usar pensamiento analítico para diseñar la vida que realmente quieres.',

    // Host
    'host.label': 'La voz detrás del mic',
    'host.name': 'Majo',
    'host.bio': 'Senior Manager de Analytics. Escritora. Peruana en Toronto. Cuento datos como historias y historias como datos.',
    'host.bio2': '"Creo que el éxito más difícil es el que defines tú misma."',
    'host.instagram': 'Instagram',
    'host.linkedin': 'LinkedIn',

    // Platforms
    'platforms.label': 'Escúchalo donde quieras',
    'platforms.subtitle': 'Disponible en todas las plataformas',

    // Newsletter
    'newsletter.label': 'The Majo Letter',
    'newsletter.headline': 'Cada martes a las 7AM, una carta para las que construyen en silencio.',
    'newsletter.desc': 'Data, historias y reflexiones honestas directo a tu inbox. Sin spam, sin relleno.',
    'newsletter.cta': 'Suscribirme gratis',
    'newsletter.note': 'Bilingüe · Honesta · 100% gratis',

    // Footer
    'footer.tagline': 'Donde los datos se encuentran con la creatividad.',
    'footer.by': 'by Majo Cuenta',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Nav
    'nav.listen': 'Episodes',
    'nav.about': 'About',
    'nav.host': 'Majo',
    'nav.newsletter': 'Newsletter',

    // Hero
    'hero.badge': 'Podcast · Newsletter · Community',
    'hero.title': 'Éxito con H',
    'hero.subtitle': 'The podcast where success is written with history, hunger, and humanity.',
    'hero.cta': 'Listen now',
    'hero.cta2': 'Free newsletter',

    // About
    'about.label': 'What this is about',
    'about.text': 'Éxito con H is for those who broke the mold but are still finding their shape. Real conversations about career, identity, ambition, and a life well lived.',
    'about.pillar1': 'Mindset',
    'about.pillar1desc': 'Redefine what success means to you. No formulas, no noise.',
    'about.pillar2': 'Community',
    'about.pillar2desc': 'Stories of Latinas building on their own terms.',
    'about.pillar3': 'Strategy',
    'about.pillar3desc': 'Data, frameworks, and tools to make decisions with clarity.',

    // Episodes
    'episodes.label': 'Listen',
    'episodes.heading': 'Recent episodes',
    'episodes.viewAll': 'See all on Spotify',
    'episodes.listen': 'Listen',
    'episodes.min': 'min',
    'episodes.ep1.title': 'The success no one taught you to seek',
    'episodes.ep1.desc': 'What happens when you achieve everything they told you to want and still feel something\'s missing?',
    'episodes.ep2.title': 'Being Latina in corporate America',
    'episodes.ep2.desc': 'Navigating spaces where you\'re the only one who looks like you, without losing your essence.',
    'episodes.ep3.title': 'Data, decisions, and real life',
    'episodes.ep3.desc': 'How to use analytical thinking to design the life you actually want.',

    // Host
    'host.label': 'The voice behind the mic',
    'host.name': 'Majo',
    'host.bio': 'Senior Analytics Manager. Writer. Peruvian in Toronto. I tell data like stories and stories like data.',
    'host.bio2': '"I believe the hardest success is the one you define yourself."',
    'host.instagram': 'Instagram',
    'host.linkedin': 'LinkedIn',

    // Platforms
    'platforms.label': 'Listen anywhere',
    'platforms.subtitle': 'Available on all platforms',

    // Newsletter
    'newsletter.label': 'The Majo Letter',
    'newsletter.headline': 'Every Tuesday at 7AM, a letter for those who build in silence.',
    'newsletter.desc': 'Data, stories, and honest reflections straight to your inbox. No spam, no filler.',
    'newsletter.cta': 'Subscribe for free',
    'newsletter.note': 'Bilingual · Honest · 100% free',

    // Footer
    'footer.tagline': 'Where data meets creativity.',
    'footer.by': 'by Majo Cuenta',
    'footer.rights': 'All rights reserved.',
  }
};
