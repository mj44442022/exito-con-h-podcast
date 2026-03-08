import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NewsletterSection = () => {
  const { t } = useLanguage();

  return (
    <section id="newsletter" className="relative py-24 md:py-36 bg-foreground text-background overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="reveal mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20">
            <Mail className="h-7 w-7 text-secondary" />
          </div>

          <span className="reveal font-body text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-6 block">
            {t('newsletter.label')}
          </span>

          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-background">
            {t('newsletter.headline')}
          </h2>

          <p className="reveal reveal-delay-2 font-body text-background/60 mb-10 text-lg">
            {t('newsletter.desc')}
          </p>

          {/* CTA button that redirects to Substack */}
          <div className="reveal reveal-delay-3">
            <a
              href="https://majocorrales.substack.com/?utm_campaign=profile_chips"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-10 py-5 rounded-full font-body font-bold text-base uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30 hover:scale-[1.03]"
            >
              {t('newsletter.cta')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="reveal reveal-delay-4 font-body text-sm text-background/40 mt-8">
            {t('newsletter.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
