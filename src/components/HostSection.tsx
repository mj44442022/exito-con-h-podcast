import { Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HostSection = () => {
  const { t } = useLanguage();

  return (
    <section id="host" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="reveal font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-12 block text-center">
            {t('host.label')}
          </span>

          <div className="reveal reveal-delay-1 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Photo placeholder */}
            <div className="shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden border-4 border-background shadow-xl">
                <span className="font-display text-6xl text-primary/40 font-bold">M</span>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('host.name')}
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
                {t('host.bio')}
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="https://instagram.com/majocuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border font-body text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  {t('host.instagram')}
                </a>
                <a
                  href="https://linkedin.com/in/majocorrales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border font-body text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                  {t('host.linkedin')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostSection;
