import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EpisodesSection = () => {
  const { t } = useLanguage();

  const episodes = [
    { num: '01', title: t('episodes.ep1.title'), desc: t('episodes.ep1.desc'), duration: 28 },
    { num: '02', title: t('episodes.ep2.title'), desc: t('episodes.ep2.desc'), duration: 34 },
    { num: '03', title: t('episodes.ep3.title'), desc: t('episodes.ep3.desc'), duration: 22 },
  ];

  return (
    <section id="episodes" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="reveal font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-4 block text-center">
            {t('episodes.label')}
          </span>
          <div className="h-8" />

          <div className="space-y-4">
            {episodes.map((ep, i) => (
              <a
                key={ep.num}
                href="https://open.spotify.com/show/58LT1VZda7xCGoWH8SFaBl"
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${i + 1} group block bg-background rounded-2xl p-6 md:p-8 border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5`}
              >
                <div className="flex items-start gap-5 md:gap-8">
                  {/* Episode number */}
                  <span className="font-display text-4xl md:text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 leading-none">
                    {ep.num}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {ep.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground line-clamp-2">
                      {ep.desc}
                    </p>
                  </div>

                  {/* Duration + play */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-body text-xs text-muted-foreground hidden sm:block">
                      {ep.duration} {t('episodes.min')}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Play className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
