import { Play, ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import heroImage from "@/assets/hero-abstract.jpg";

const PodcastHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSelector />
      </div>

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Small badge */}
        <div className="opacity-0 animate-fade-up mb-6">
          <span className="inline-block font-body text-xs font-semibold tracking-[0.3em] uppercase text-secondary px-4 py-2 rounded-full border border-secondary/30 backdrop-blur-sm bg-secondary/10">
            {t('hero.badge')}
          </span>
        </div>

        {/* Main title - massive and bold */}
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold text-cream leading-[0.85] tracking-tight opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Éxito
          <br />
          <span className="text-secondary">con H</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg md:text-xl text-cream/80 leading-relaxed mt-8 mb-12 max-w-xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
          {t('hero.subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://open.spotify.com/show/58LT1VZda7xCGoWH8SFaBl"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30 hover:scale-[1.03]"
          >
            <Play className="h-5 w-5 fill-current" />
            {t('hero.cta')}
          </a>
          <a
            href="https://majocorrales.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-cream/90 font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:text-secondary"
          >
            {t('hero.cta2')}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <a href="#about" className="text-cream/50 hover:text-cream/80 transition-colors animate-bounce">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default PodcastHero;
