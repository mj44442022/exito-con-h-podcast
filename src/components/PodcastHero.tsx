
import { Headphones, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const PodcastHero = () => {
  const handleListenNowClick = () => {
    window.open("https://open.spotify.com/episode/20qy4jVvLf250PMyNOWu5L?si=j0CC7scpRwOmOKxHFiPGNA", "_blank");
  };

  const handleLatestEpisodesClick = () => {
    window.open("https://open.spotify.com/show/58LT1VZda7xCGoWH8SFaBl", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo area */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-5xl font-bold text-orange-500">É</span>
                  <span className="text-4xl font-bold text-teal-600">xito con</span>
                </div>
                <div className="flex justify-center mt-2">
                  <span className="text-6xl font-bold text-teal-600 tracking-wider">H</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            El Éxito con una 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-600"> H Humana</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Un podcast que cuestiona la mirada convencional del éxito
          </p>
          
          {/* Host info */}
          <p className="text-lg text-gray-500 mb-12">
            Conducido por <span className="font-semibold text-gray-700">Majo Corrales</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleListenNowClick}
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Play className="mr-2 h-5 w-5" />
              Escuchar Ahora
            </Button>
            <Button 
              onClick={handleLatestEpisodesClick}
              variant="outline" 
              size="lg"
              className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Headphones className="mr-2 h-5 w-5" />
              Últimos Episodios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastHero;
