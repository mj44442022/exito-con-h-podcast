import { useLanguage } from "@/contexts/LanguageContext";

const platforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/show/58LT1VZda7xCGoWH8SFaBl', color: 'hover:bg-[#1DB954]/10 hover:text-[#1DB954] hover:border-[#1DB954]/30' },
  { name: 'Apple Podcasts', url: '#', color: 'hover:bg-[#A855F7]/10 hover:text-[#A855F7] hover:border-[#A855F7]/30' },
  { name: 'YouTube', url: '#', color: 'hover:bg-[#FF0000]/10 hover:text-[#FF0000] hover:border-[#FF0000]/30' },
  { name: 'Amazon Music', url: '#', color: 'hover:bg-[#25D1DA]/10 hover:text-[#25D1DA] hover:border-[#25D1DA]/30' },
];

const PlatformsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="reveal font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-3 block">
            {t('platforms.label')}
          </span>
          <p className="reveal reveal-delay-1 font-body text-muted-foreground mb-10">
            {t('platforms.subtitle')}
          </p>

          <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-3">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-full border border-border bg-background font-body text-sm font-medium text-foreground transition-all duration-300 ${p.color}`}
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
