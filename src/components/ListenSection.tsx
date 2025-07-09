
import { Headphones, Smartphone, Radio, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const ListenSection = () => {
  const platforms = [
    {
      name: "Spotify",
      icon: <Headphones className="h-6 w-6" />,
      color: "bg-green-500 hover:bg-green-600",
      description: "Escucha en Spotify"
    },
    {
      name: "Apple Podcasts",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-gray-800 hover:bg-gray-900",
      description: "Disponible en Apple Podcasts"
    },
    {
      name: "Google Podcasts",
      icon: <Radio className="h-6 w-6" />,
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Encuentra en Google Podcasts"
    },
    {
      name: "Web Player",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-purple-500 hover:bg-purple-600",
      description: "Escucha online"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Escucha donde prefieras
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Disponible en todas las principales plataformas de podcasts
          </p>

          {/* Platform buttons */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {platforms.map((platform, index) => (
              <Button
                key={index}
                className={`${platform.color} text-white h-auto p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center space-y-3`}
              >
                {platform.icon}
                <span className="font-semibold">{platform.name}</span>
                <span className="text-sm opacity-90">{platform.description}</span>
              </Button>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              No te pierdas ningún episodio
            </h3>
            <p className="text-gray-600 mb-8">
              Suscríbete para recibir notificaciones de nuevos episodios y contenido exclusivo sobre redefinir el éxito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListenSection;
