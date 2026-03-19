import { Award, ShieldCheck, Handshake, MessageCircleHeart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import cult from '../../photos/cult.jpg';
export function About() {
  const t = useTranslation();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695236013915-2636f16aa938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWRhZ2FzY2FyJTIwbGFuZHNjYXBlJTIwZmFybWVyc3xlbnwxfHx8fDE3NzIyODMzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Madagascar landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            {t.about.title}
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-6">
                {t.about.ourStoryTitle}
              </h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  {t.about.ourStoryP1}
                </p>
                <p>
                  {t.about.ourStoryP2}
                </p>
                <p>
                  {t.about.ourStoryP3}
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={cult}
                alt="Hands harvesting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
              <Award className="text-amber-900" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-6">
              {t.about.visionTitle}
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t.about.visionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900">
              {t.about.trustTitle}
            </h2>
          </div>
          <p className="max-w-4xl mx-auto text-center text-lg text-neutral-700 mb-12">
            {t.about.trustIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-lg p-8 text-center">
              <ShieldCheck className="text-amber-700 mx-auto mb-3" size={28} />
              <h3 className="text-xl font-serif text-amber-900 mb-2">{t.about.trustPoint1Title}</h3>
              <p className="text-neutral-700">{t.about.trustPoint1Desc}</p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-8 text-center">
              <Handshake className="text-amber-700 mx-auto mb-3" size={28} />
              <h3 className="text-xl font-serif text-amber-900 mb-2">{t.about.trustPoint2Title}</h3>
              <p className="text-neutral-700">{t.about.trustPoint2Desc}</p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-8 text-center">
              <MessageCircleHeart className="text-amber-700 mx-auto mb-3" size={28} />
              <h3 className="text-xl font-serif text-amber-900 mb-2">{t.about.trustPoint3Title}</h3>
              <p className="text-neutral-700">{t.about.trustPoint3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}