import { Play, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EpisodesSection = () => {
  const { t } = useLanguage();

  const episodes = [
    { num: '01', title: t('episodes.ep1.title'), desc: t('episodes.ep1.desc'), duration: 28 },
    { num: '02', title: t('episodes.ep2.title'), desc: t('episodes.ep2.desc'), duration: 34 },
    { num: '03', title: t('episodes.ep3.title'), desc: t('episodes.ep3.desc'), duration: 22 },
  ];

  return (
    <section id="episodes" className="py-24 md:py-36 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header with asymmetric layout */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
            <div>
              <span className="reveal font-body text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-3 block">
                {t('episodes.label')}
              </span>
              <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-bold text-foreground">
                {t('episodes.heading')}
              </h2>
            </div>
            <a
              href="https://open.spotify.com/show/58LT1VZda7xCGoWH8SFaBl"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal reveal-delay-2 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              {t('episodes.viewAll')}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Episode cards */}
          <div className="space-y-4">
            {episodes.map((ep, i) => (
              <a
                key={ep.num}
                href="https://open.spotify.com/show/58LT1VZda7xCGoWH8SFaBl"
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${i + 1} group block bg-background rounded-2xl p-6 md:p-8 border border-border/50 transition-all duration-500 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 hover:-translate-y-0.5`}
              >
                <div className="flex items-center gap-5 md:gap-8">
                  {/* Play button */}
                  <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                    <Play className="h-5 w-5 text-primary group-hover:text-secondary-foreground fill-current transition-colors duration-500" />
                  </div>

                  {/* Episode number */}
                  <span className="font-display text-5xl md:text-6xl font-bold text-primary/10 group-hover:text-secondary/30 transition-colors shrink-0 leading-none hidden sm:block">
                    {ep.num}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {ep.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground line-clamp-1">
                      {ep.desc}
                    </p>
                  </div>

                  {/* Duration */}
                  <span className="font-body text-xs font-medium text-muted-foreground shrink-0 bg-muted px-3 py-1 rounded-full hidden sm:block">
                    {ep.duration} {t('episodes.min')}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Spotify embed */}
          <div className="reveal reveal-delay-4 mt-12 rounded-2xl overflow-hidden">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/show/58LT1VZda7xCGoWH8SFaBl?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Éxito con H Spotify Player"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
