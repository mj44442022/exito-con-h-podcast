
import { Heart, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main question */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Elige tu propia versión del éxito
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mx-auto mb-8"></div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
              <span className="font-semibold text-orange-600">¿Te has preguntado si el éxito que persigues es realmente el tuyo?</span> 
              {" "}Este podcast te invita a reflexionar sobre lo que realmente significa triunfar 
              de acuerdo a TUS prioridades, TUS valores, TU vida.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              A través de conversaciones con jóvenes profesionales y mentores experimentados, 
              <span className="font-semibold text-teal-600"> descubrirás que puedes definir tu propia versión del éxito</span> 
              {" "}y vivir de acuerdo a ella, sin importar lo que digan los demás.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Heart className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tu Propia Definición</h3>
              <p className="text-gray-600 leading-relaxed">
                Reflexiones que te ayudan a descubrir qué significa realmente el éxito para ti, basado en tus valores únicos.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Users className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Diversas Perspectivas</h3>
              <p className="text-gray-600 leading-relaxed">
                Entrevistas auténticas con jóvenes profesionales y mentores que han encontrado su camino único al éxito.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Lightbulb className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Vive Según Tus Prioridades</h3>
              <p className="text-gray-600 leading-relaxed">
                Inspiración práctica para construir una vida y carrera alineadas con lo que realmente te importa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
