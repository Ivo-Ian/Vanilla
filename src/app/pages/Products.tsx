import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { ProductSpecCard } from './products/components/ProductSpecCard';

export function Products() {
  const t = useTranslation();

  const products = [
    {
      title: t.products.gradeATitle,
      specsLabel: t.products.gradeASpecs,
      specs: [
        t.products.gradeALength,
        t.products.gradeAMoisture,
        t.products.gradeAAppearance,
        t.products.gradeAAroma,
        t.products.gradeAUse,
        t.products.gradeAPackaging,
      ],
    },
    {
      title: t.products.gradeBTitle,
      specsLabel: t.products.gradeBSpecs,
      specs: [
        t.products.gradeBLength,
        t.products.gradeBMoisture,
        t.products.gradeBAppearance,
        t.products.gradeBAroma,
        t.products.gradeBUse,
        t.products.gradeBPackaging,
      ],
    },
    {
      title: t.products.powderTitle,
      specsLabel: t.products.powderSpecs,
      specs: [
        t.products.powderForm,
        t.products.powderIngredients,
        t.products.powderColor,
        t.products.powderUse,
        t.products.powderPackaging,
      ],
    },
    {
      title: t.products.pastesTitle,
      specsLabel: t.products.pastesSpecs,
      specs: [
        t.products.pastesIngredients,
        t.products.pastesVanillin,
        t.products.pastesAppearance,
        t.products.pastesUse,
        t.products.pastesPackaging,
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1512372388054-a322888e67a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdmFuaWxsYSUyMGJlYW5zJTIwcG9kc3xlbnwxfHx8fDE3NzIyODMzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Premium vanilla beans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">{t.products.title}</h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">{t.products.subtitle}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <ProductSpecCard
                key={product.title}
                title={product.title}
                specsLabel={product.specsLabel}
                specs={product.specs}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-amber-900 mb-6">{t.products.customTitle}</h2>
          <p className="text-lg text-neutral-700 mb-8">{t.products.customDesc}</p>
          <h3 className="text-2xl font-serif text-amber-900 mb-4">{t.products.pricingTitle}</h3>
          <p className="text-lg text-neutral-700 mb-8">{t.products.pricingDesc}</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 hover:bg-amber-800 text-white rounded transition-colors"
          >
            {t.home.contactUs}
          </Link>
        </div>
      </section>
    </div>
  );
}
