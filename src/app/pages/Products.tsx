import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProductCard } from './products/components/ProductCard';
import { BulkOrderInfo } from './products/components/BulkOrderInfo';
import { QualityGuarantee } from './products/components/QualityGuarantee';
import { PRODUCTS } from './products/constants';

export function Products() {
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
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Our Products
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Premium Madagascar vanilla beans for every application
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-neutral-700 leading-relaxed">
            We offer carefully graded vanilla beans to meet different needs and 
            budgets. All our products come directly from Madagascar's finest 
            vanilla-growing regions, ensuring authentic quality and flavor.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders Info */}
      <BulkOrderInfo />

      {/* Quality Guarantee */}
      <QualityGuarantee />
    </div>
  );
}
