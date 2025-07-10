
import { Heart, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main question */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Tu carrera no tiene que costarte tu bienestar
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mx-auto mb-8"></div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
              <span className="font-semibold text-orange-600">¿Sientes que "tener éxito" significa sacrificar lo que realmente te importa?</span> 
              {" "}Si estás cansado/a de la presión constante por cumplir con expectativas que no elegiste, 
              este podcast te va a resonar profundamente.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Aquí conocerás a jóvenes profesionales que están construyendo carreras exitosas 
              <span className="font-semibold text-teal-600"> sin renunciar a sus valores, relaciones y bienestar mental.</span> 
              {" "}Es tu invitación a cuestionar las reglas del juego y crear tu propia definición de éxito.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Heart className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Éxito Auténtico</h3>
              <p className="text-gray-600 leading-relaxed">
                Descubre cómo profesionales están triunfando sin comprometer su salud mental ni sus relaciones.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Users className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Historias Reales</h3>
              <p className="text-gray-600 leading-relaxed">
                Conversaciones genuinas con personas que han encontrado su propio camino al éxito profesional y personal.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Lightbulb className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Herramientas Prácticas</h3>
              <p className="text-gray-600 leading-relaxed">
                Estrategias concretas para construir una carrera que te llene, sin caer en el burnout o la ansiedad constante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
