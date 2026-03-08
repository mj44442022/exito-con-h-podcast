import { Lightbulb, Globe, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: Lightbulb, title: t('about.pillar1'), desc: t('about.pillar1desc'), delay: 1 },
    { icon: Globe, title: t('about.pillar2'), desc: t('about.pillar2desc'), delay: 2 },
    { icon: BarChart3, title: t('about.pillar3'), desc: t('about.pillar3desc'), delay: 3 },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="reveal font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-4 block">
            {t('about.label')}
          </span>
          <p className="reveal reveal-delay-1 font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug font-medium italic">
            {t('about.text')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {pillars.map(({ icon: Icon, title, desc, delay }) => (
            <div key={title} className={`reveal reveal-delay-${delay} text-center group`}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-105">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
