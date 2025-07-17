
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

const translations = {
  es: {
    // Hero Section
    'hero.question': '¿Y si el éxito fuera diferente?',
    'hero.subtitle': 'Define tu propia versión del éxito y vive según tus prioridades',
    'hero.description': 'Reflexiones y conversaciones que te ayudan a descubrir qué significa realmente triunfar para ti. Porque al final se trata de TUS prioridades, TUS valores, TU vida.',
    'hero.host': 'Conducido por',
    'hero.listenNow': 'Escuchar Ahora',
    'hero.latestEpisodes': 'Últimos Episodios',
    
    // About Section
    'about.title': 'Elige tu propia versión del éxito',
    'about.question': '¿Te has preguntado si el éxito que persigues es realmente el tuyo?',
    'about.description1': 'Este podcast te invita a reflexionar sobre lo que realmente significa triunfar de acuerdo a TUS prioridades, TUS valores, TU vida.',
    'about.description2': 'A través de conversaciones con jóvenes profesionales y mentores experimentados,',
    'about.description2Bold': 'descubrirás que puedes definir tu propia versión del éxito',
    'about.description2End': 'y vivir de acuerdo a ella, sin importar lo que digan los demás.',
    'about.feature1Title': 'Tu Propia Definición',
    'about.feature1Desc': 'Reflexiones que te ayudan a descubrir qué significa realmente el éxito para ti, basado en tus valores únicos.',
    'about.feature2Title': 'Diversas Perspectivas',
    'about.feature2Desc': 'Entrevistas auténticas con jóvenes profesionales y mentores que han encontrado su camino único al éxito.',
    'about.feature3Title': 'Vive Según Tus Prioridades',
    'about.feature3Desc': 'Inspiración práctica para construir una vida y carrera alineadas con lo que realmente te importa.',
    
    // Listen Section
    'listen.title': 'Escucha cuando quieras',
    'listen.subtitle': 'Episodios de 20-30 minutos perfectos para tu commute, workout o break del trabajo',
    'listen.allEpisodes': 'Todos los episodios disponibles gratis',
    'listen.followTitle': 'Síguenos en Instagram',
    'listen.followDesc': 'Únete a nuestra comunidad en @exitoconh para contenido exclusivo y conectar con otros que están redefiniendo el éxito.',
    'listen.followButton': 'Seguir @exitoconh'
  },
  en: {
    // Hero Section
    'hero.question': 'What if success was different?',
    'hero.subtitle': 'Define your own version of success and live according to your priorities',
    'hero.description': 'Reflections and conversations that help you discover what it really means to succeed for you. Because in the end, it\'s about YOUR priorities, YOUR values, YOUR life.',
    'hero.host': 'Hosted by',
    'hero.listenNow': 'Listen Now',
    'hero.latestEpisodes': 'Latest Episodes',
    
    // About Section
    'about.title': 'Choose your own version of success',
    'about.question': 'Have you ever wondered if the success you\'re pursuing is really yours?',
    'about.description1': 'This podcast invites you to reflect on what it really means to succeed according to YOUR priorities, YOUR values, YOUR life.',
    'about.description2': 'Through conversations with young professionals and experienced mentors,',
    'about.description2Bold': 'you\'ll discover that you can define your own version of success',
    'about.description2End': 'and live according to it, regardless of what others say.',
    'about.feature1Title': 'Your Own Definition',
    'about.feature1Desc': 'Reflections that help you discover what success really means to you, based on your unique values.',
    'about.feature2Title': 'Diverse Perspectives',
    'about.feature2Desc': 'Authentic interviews with young professionals and mentors who have found their unique path to success.',
    'about.feature3Title': 'Live According to Your Priorities',
    'about.feature3Desc': 'Practical inspiration to build a life and career aligned with what really matters to you.',
    
    // Listen Section
    'listen.title': 'Listen whenever you want',
    'listen.subtitle': '20-30 minute episodes perfect for your commute, workout or work break',
    'listen.allEpisodes': 'All episodes available for free',
    'listen.followTitle': 'Follow us on Instagram',
    'listen.followDesc': 'Join our community at @exitoconh for exclusive content and to connect with others who are redefining success.',
    'listen.followButton': 'Follow @exitoconh'
  }
};
