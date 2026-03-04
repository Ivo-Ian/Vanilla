import { Users, Heart, Award, Handshake } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';

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
                src="https://images.unsplash.com/photo-1674653495432-732d7328fa5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhhcnZlc3RpbmclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NzIyODMzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hands harvesting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">
              {t.about.ourValuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Award className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">{t.about.qualityFirst}</h3>
              <p className="text-neutral-600">
                {t.about.qualityFirstDesc}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Handshake className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">{t.about.fairTrade}</h3>
              <p className="text-neutral-600">
                {t.about.fairTradeDesc}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Heart className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">{t.about.sustainability}</h3>
              <p className="text-neutral-600">
                {t.about.sustainabilityDesc}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Users className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">{t.about.transparency}</h3>
              <p className="text-neutral-600">
                {t.about.transparencyDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Certification */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-amber-900 mb-6">
                {t.about.ourTeamTitle}
              </h2>
              <p className="text-lg text-neutral-700">
                {t.about.ourTeamDesc}
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif text-amber-900 mb-6">
                {t.about.certifiedTitle}
              </h2>
              <p className="text-lg text-neutral-700">
                {t.about.certifiedDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}