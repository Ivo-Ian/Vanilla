import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { FeatureCard } from './home/components/FeatureCard';
import { FeaturedProductCard } from './home/components/FeaturedProductCard';

export function Home() {
  const t = useTranslation();

  const features = [
    { title: t.home.directSourcing, description: t.home.directSourcingDesc },
    { title: t.home.ethicalProduction, description: t.home.ethicalProductionDesc },
    { title: t.home.premiumQuality, description: t.home.premiumQualityDesc },
    { title: t.home.reliableSupply, description: t.home.reliableSupplyDesc },
  ];

  const featuredProducts = [
    { name: t.home.gourmetBeans, description: t.home.gourmetBeansDesc },
    { name: t.home.extractGrade, description: t.home.extractGradeDesc },
    { name: t.home.vanillaPowder, description: t.home.vanillaPowderDesc },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1512372388054-a322888e67a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdmFuaWxsYSUyMGJlYW5zJTIwcG9kc3xlbnwxfHx8fDE3NzIyODMzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Premium vanilla beans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/60 to-neutral-900/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{t.home.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto">{t.home.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors">
              {t.home.getQuote}
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-neutral-900 rounded transition-colors">
              {t.home.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-6">{t.home.whyChooseTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">{t.home.featuredProductsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <FeaturedProductCard
                key={product.name}
                name={product.name}
                description={product.description}
                ctaLabel={t.home.requestQuote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">{t.home.readyTitle}</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">{t.home.readySubtitle}</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-amber-900 rounded transition-colors">
            {t.home.contactUs}
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
