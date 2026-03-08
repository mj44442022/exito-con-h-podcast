import { Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-foreground text-background/80 border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <div>
            <span className="font-display text-3xl font-bold text-background">Éxito con H</span>
            <span className="font-body text-sm text-background/40 ml-3">{t('footer.by')}</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="font-body text-sm text-background/50 hover:text-secondary transition-colors">{t('nav.about')}</a>
            <a href="#episodes" className="font-body text-sm text-background/50 hover:text-secondary transition-colors">{t('nav.listen')}</a>
            <a href="#host" className="font-body text-sm text-background/50 hover:text-secondary transition-colors">{t('nav.host')}</a>
            <a href="#newsletter" className="font-body text-sm text-background/50 hover:text-secondary transition-colors">{t('nav.newsletter')}</a>
          </nav>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://instagram.com/exitoconh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-background/15 flex items-center justify-center transition-all duration-300 hover:border-secondary hover:text-secondary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/majocorrales"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-background/15 flex items-center justify-center transition-all duration-300 hover:border-secondary hover:text-secondary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Tagline + copyright */}
          <div className="space-y-2">
            <p className="font-display text-sm italic text-background/30">
              {t('footer.tagline')}
            </p>
            <p className="font-body text-xs text-background/20">
              © {new Date().getFullYear()} Éxito con H. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
