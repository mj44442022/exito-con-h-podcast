import { Play, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const PodcastHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center water-gradient wave-pattern overflow-hidden">
      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSelector />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-[20%] right-[8%] w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[50%] w-40 h-40 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 leading-[0.9] tracking-tight opacity-0 animate-fade-up">
            {t('hero.title')}
          </h1>

          {/* Decorative line */}
          <div className="w-16 h-[2px] bg-secondary mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }} />

          {/* Subtitle */}
          <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://open.spotify.com/show/58LT1VZda7xCGoWH8SFaBl"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
            >
              <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
              {t('hero.cta')}
            </a>
            <a
              href="https://themajoletter.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground font-body font-medium text-base border-b-2 border-secondary/40 pb-1 transition-all duration-300 hover:border-secondary"
            >
              {t('hero.cta2')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-primary/30" />
      </div>
    </section>
  );
};

export default PodcastHero;
