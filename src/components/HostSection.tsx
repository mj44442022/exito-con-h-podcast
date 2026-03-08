import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import hostImage from "@/assets/host-majo.jpg";

const HostSection = () => {
  const { t } = useLanguage();

  return (
    <section id="host" className="py-24 md:py-36 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Photo - editorial crop */}
            <div className="reveal order-2 md:order-1">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={hostImage}
                    alt="Majo - Host de Éxito con H"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-secondary/20 blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 md:order-2">
              <span className="reveal font-body text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-6 block">
                {t('host.label')}
              </span>

              <h3 className="reveal reveal-delay-1 font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
                {t('host.name')}
              </h3>

              <p className="reveal reveal-delay-2 font-body text-lg text-primary-foreground/80 leading-relaxed mb-4">
                {t('host.bio')}
              </p>

              <p className="reveal reveal-delay-2 font-body text-base text-primary-foreground/60 leading-relaxed mb-8 italic">
                {t('host.bio2')}
              </p>

              <div className="reveal reveal-delay-3 flex gap-3">
                <a
                  href="https://instagram.com/majocuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/20 font-body text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/40"
                >
                  <Instagram className="h-4 w-4" />
                  @majocuenta
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.linkedin.com/in/majocorralesv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/20 font-body text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/40"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
