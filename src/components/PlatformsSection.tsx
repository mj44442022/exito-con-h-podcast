import { useLanguage } from "@/contexts/LanguageContext";

const platforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/show/58LT1VZda7xCGoWH8SFaBl', icon: '🎧' },
  { name: 'Substack', url: 'https://majocorrales.substack.com/?utm_campaign=profile_chips', icon: '✉️' },
];

const PlatformsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="reveal font-body text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-3 block">
            {t('platforms.label')}
          </span>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            {t('platforms.subtitle')}
          </h2>

          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-5 rounded-2xl bg-cream border border-border/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/20"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
                <span className="font-body text-base font-semibold text-foreground">{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
