
import { Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ListenSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSpotifyClick = () => {
    // Replace this URL with your actual Spotify podcast URL
    const spotifyUrl = "https://open.spotify.com/show/YOUR_PODCAST_ID";
    window.open(spotifyUrl, "_blank");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with your newsletter service (e.g., Mailchimp, ConvertKit, etc.)
      console.log("Suscribing email:", email);
      setIsSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Escucha en Spotify
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Tu podcast favorito sobre el éxito humano, disponible en Spotify
          </p>

          {/* Spotify button */}
          <div className="mb-16">
            <Button 
              onClick={handleSpotifyClick}
              className="bg-green-500 hover:bg-green-600 text-white h-auto p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center space-y-4 mx-auto cursor-pointer"
            >
              <Headphones className="h-8 w-8" />
              <span className="font-semibold text-xl">Spotify</span>
              <span className="text-base opacity-90">Escucha todos los episodios</span>
            </Button>
          </div>

          {/* Newsletter signup */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              No te pierdas ningún episodio
            </h3>
            <p className="text-gray-600 mb-8">
              Suscríbete para recibir notificaciones de nuevos episodios y contenido exclusivo sobre redefinir el éxito.
            </p>
            
            {isSubscribed ? (
              <div className="text-green-600 font-semibold text-lg">
                ¡Gracias por suscribirte! 🎉
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Suscribirse
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListenSection;
