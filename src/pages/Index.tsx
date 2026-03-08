import { useScrollReveal } from "@/hooks/useScrollReveal";
import PodcastHero from "@/components/PodcastHero";
import AboutSection from "@/components/AboutSection";
import EpisodesSection from "@/components/EpisodesSection";
import HostSection from "@/components/HostSection";
import PlatformsSection from "@/components/PlatformsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <PodcastHero />
      <AboutSection />
      <EpisodesSection />
      <HostSection />
      <PlatformsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
