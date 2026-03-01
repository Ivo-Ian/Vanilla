import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { HomeIntroduction } from './home/components/HomeIntroduction';
import { HomeFeaturedProducts } from './home/components/HomeFeaturedProducts';

export function Home() {
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
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Premium Madagascar Vanilla Beans
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto">
            Sourced directly from local farmers. Ethically produced. 
            Exceptionally aromatic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-neutral-900 rounded transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <HomeIntroduction />

      {/* Featured Products Preview */}
      <HomeFeaturedProducts />

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to Experience Premium Madagascar Vanilla?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            We specialize in bulk orders for businesses, restaurants, and exporters.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-amber-900 rounded transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
