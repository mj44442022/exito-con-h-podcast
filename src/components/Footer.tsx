import { Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-foreground text-background/80">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div>
            <span className="font-display text-2xl font-bold text-background">Éxito con H</span>
            <span className="font-body text-sm text-background/50 ml-2">{t('footer.by')}</span>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/exitoconh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center transition-all duration-300 hover:border-background/50 hover:text-background"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/majocuenta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center transition-all duration-300 hover:border-background/50 hover:text-background"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Tagline */}
          <p className="font-display text-sm italic text-background/40">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
