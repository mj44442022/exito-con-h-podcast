
import { Heart, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main question */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              ¿Qué es el éxito?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mx-auto mb-8"></div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
              <span className="font-semibold text-orange-600">¿Qué metas realmente nos llenan?</span> 
              {" "}Estas son las preguntas que buscamos responder en este podcast. 
              Acompáñanos a ponerle una H al éxito, una H humana, al conocer a personas que 
              cuestionan la mirada convencional del éxito.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Al escuchar sus experiencias y valoraciones, te invitamos a cuestionar qué significa 
              el éxito para ti y <span className="font-semibold text-teal-600">repensar lo que es más importante en la vida.</span>
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Heart className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Perspectiva Humana</h3>
              <p className="text-gray-600 leading-relaxed">
                Exploramos el éxito desde una mirada más humana y auténtica, más allá de los logros convencionales.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Users className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Historias Reales</h3>
              <p className="text-gray-600 leading-relaxed">
                Conoce a personas que han redefinido el éxito en sus propios términos y vidas.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Lightbulb className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Reflexión Profunda</h3>
              <p className="text-gray-600 leading-relaxed">
                Te invitamos a cuestionar y repensar lo que realmente importa en tu vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
