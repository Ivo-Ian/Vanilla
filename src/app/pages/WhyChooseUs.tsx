import { MapPin, Award, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { TestimonialCard } from './why-choose-us/components/TestimonialCard';
import { SectionWithIcon } from './why-choose-us/components/SectionWithIcon';

export function WhyChooseUs() {
  const t = useTranslation();

  const qualityChecks = [
    t.whyChooseUs.qualityVisual, t.whyChooseUs.qualityMoisture,
    t.whyChooseUs.qualityVanillin, t.whyChooseUs.qualityAroma,
    t.whyChooseUs.qualityDefects,
  ];

  const complianceItems = [
    t.whyChooseUs.complianceLicensed, t.whyChooseUs.complianceQuality,
    t.whyChooseUs.complianceOrganic, t.whyChooseUs.complianceDocumentation,
    t.whyChooseUs.complianceCompliant,
  ];

  const testimonials = [
    { quote: t.whyChooseUs.testimonial1, author: t.whyChooseUs.testimonial1Author },
    { quote: t.whyChooseUs.testimonial2, author: t.whyChooseUs.testimonial2Author },
    { quote: t.whyChooseUs.testimonial3, author: t.whyChooseUs.testimonial3Author },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1697546312799-e46bcbd73ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmb29kJTIwc3BpY2VzJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzIyODMzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury spices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">{t.whyChooseUs.title}</h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">{t.whyChooseUs.subtitle}</p>
        </div>
      </section>

      {/* Direct from Madagascar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionWithIcon icon={MapPin} title={t.whyChooseUs.directTitle}>
              <p className="text-lg text-neutral-700 leading-relaxed">{t.whyChooseUs.directDesc}</p>
            </SectionWithIcon>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionWithIcon icon={Award} title={t.whyChooseUs.qualityTitle}>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">{t.whyChooseUs.qualityP1}</p>
              <ul className="space-y-2 ml-4">
                {qualityChecks.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-neutral-700 leading-relaxed mt-4">{t.whyChooseUs.qualityP2}</p>
            </SectionWithIcon>
          </div>
        </div>
      </section>

      {/* Ethical Sourcing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionWithIcon icon={Award} title={t.whyChooseUs.ethicalTitle}>
              <p className="text-lg text-neutral-700 leading-relaxed">{t.whyChooseUs.ethicalDesc}</p>
            </SectionWithIcon>
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1674653495432-732d7328fa5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhhcnZlc3RpbmclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NzIyODMzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Harvesting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reliable Supply */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-amber-900 mb-6 text-center">{t.whyChooseUs.reliableTitle}</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">{t.whyChooseUs.reliableP1}</p>
            <p className="text-lg text-neutral-700 leading-relaxed">{t.whyChooseUs.reliableP2}</p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-amber-900 mb-6 text-center">{t.whyChooseUs.expertiseTitle}</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">{t.whyChooseUs.expertiseDesc}</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionWithIcon icon={Shield} title={t.whyChooseUs.complianceTitle}>
              <ul className="space-y-2 ml-4">
                {complianceItems.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionWithIcon>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">{t.whyChooseUs.testimonialsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} quote={item.quote} author={item.author} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-6">{t.home.readyTitle}</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">{t.home.readySubtitle}</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-amber-900 rounded transition-colors">
            {t.home.contactUs}
          </Link>
        </div>
      </section>
    </div>
  );
}
