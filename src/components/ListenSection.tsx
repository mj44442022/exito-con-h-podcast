
import { Headphones, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ListenSection = () => {
  const handleSpotifyClick = () => {
    window.open("https://open.spotify.com/show/58LT1VZda7xCGoWH8SFaBl", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/exitoconh", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Escucha cuando quieras
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Episodios de 20-30 minutos perfectos para tu commute, workout o break del trabajo
          </p>

          {/* Spotify button */}
          <div className="mb-16">
            <Button 
              onClick={handleSpotifyClick}
              className="bg-green-500 hover:bg-green-600 text-white h-auto p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center space-y-4 mx-auto cursor-pointer"
            >
              <Headphones className="h-8 w-8" />
              <span className="font-semibold text-xl">Disponible en Spotify</span>
              <span className="text-base opacity-90">Todos los episodios gratis</span>
            </Button>
          </div>

          {/* Instagram follow */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Síguenos en Instagram
            </h3>
            <p className="text-gray-600 mb-8">
              Únete a nuestra comunidad en @exitoconh para contenido exclusivo, 
              reflexiones diarias y conectar con otros que están redefiniendo el éxito.
            </p>
            
            <Button 
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <Instagram className="h-5 w-5" />
              <span>Seguir @exitoconh</span>
            </Button>
          </div>

          {/* Spotify Embed */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Escucha directamente aquí
            </h3>
            <div className="w-full max-w-2xl mx-auto">
              <iframe 
                style={{borderRadius:"12px"}} 
                src="https://open.spotify.com/embed/show/58LT1VZda7xCGoWH8SFaBl?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListenSection;
