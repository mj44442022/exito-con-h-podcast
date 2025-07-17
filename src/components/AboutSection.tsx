
import { Heart, Users, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main question */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mx-auto mb-8"></div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
              <span className="font-semibold text-orange-600">{t('about.question')}</span> 
              {" "}{t('about.description1')}
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              {t('about.description2')}
              <span className="font-semibold text-teal-600"> {t('about.description2Bold')}</span> 
              {" "}{t('about.description2End')}
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Heart className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('about.feature1Title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.feature1Desc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Users className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('about.feature2Title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.feature2Desc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Lightbulb className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('about.feature3Title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.feature3Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
