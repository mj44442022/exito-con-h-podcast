import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NewsletterSection = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://themajoletter.substack.com', '_blank');
  };

  return (
    <section id="newsletter" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="reveal font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-6 block">
            {t('newsletter.label')}
          </span>

          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-10 text-primary-foreground">
            {t('newsletter.headline')}
          </h2>

          <form onSubmit={handleSubmit} className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-5 py-3.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-primary-foreground/40 transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-body font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              {t('newsletter.cta')}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="reveal reveal-delay-3 font-body text-sm text-primary-foreground/60">
            {t('newsletter.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
