import { Lightbulb, Globe, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import sectionAccent from "@/assets/section-accent.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: Lightbulb, title: t('about.pillar1'), desc: t('about.pillar1desc'), emoji: '💡' },
    { icon: Globe, title: t('about.pillar2'), desc: t('about.pillar2desc'), emoji: '🌎' },
    { icon: BarChart3, title: t('about.pillar3'), desc: t('about.pillar3desc'), emoji: '📊' },
  ];

  return (
    <section id="about" className="relative py-24 md:py-36 bg-background overflow-hidden">
      {/* Decorative accent image */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden opacity-30">
        <img src={sectionAccent} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Quote-style main text */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="reveal font-body text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-6 block">
            {t('about.label')}
          </span>
          <p className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.2] font-medium">
            "{t('about.text')}"
          </p>
        </div>

        {/* Pillars - card style with personality */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillars.map(({ title, desc, emoji }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} group relative bg-cream rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1`}
            >
              <span className="text-4xl mb-4 block">{emoji}</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">{title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">{desc}</p>
              {/* Accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[3px] bg-secondary/0 group-hover:bg-secondary rounded-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
