import { Link } from 'react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-6">
              The World's Finest Vanilla
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Madagascar produces 80% of the world's vanilla, and for good reason. 
              The unique climate and rich volcanic soil create vanilla beans with 
              unmatched depth of flavor and aroma. We work directly with local 
              farmers to bring you the absolute finest vanilla beans, ensuring 
              quality, authenticity, and traceability every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <CheckCircle2 className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Direct Sourcing</h3>
              <p className="text-neutral-600">
                We work directly with farmers in Madagascar, ensuring fair prices 
                and premium quality.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <CheckCircle2 className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Ethical Practices</h3>
              <p className="text-neutral-600">
                Long-term partnerships with producers who share our commitment 
                to sustainability and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <CheckCircle2 className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Premium Quality</h3>
              <p className="text-neutral-600">
                Every bean is carefully selected, cured, and inspected to meet 
                the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">
              Our Premium Selection
            </h2>
            <p className="text-lg text-neutral-700">
              From gourmet to bulk-use, we offer the perfect vanilla for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl text-amber-900 mb-2">Grade A Vanilla</h3>
              <p className="text-3xl text-neutral-900 mb-4">$100</p>
              <p className="text-neutral-600 mb-6">
                Premium quality, flexible, aromatic. Ideal for chefs and businesses.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-amber-900 hover:text-amber-700"
              >
                Learn more <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-2 border-amber-600">
              <div className="inline-block px-3 py-1 bg-amber-600 text-white text-sm rounded mb-3">
                Most Popular
              </div>
              <h3 className="text-2xl text-amber-900 mb-2">Grade A Gourmet</h3>
              <p className="text-3xl text-neutral-900 mb-4">$150</p>
              <p className="text-neutral-600 mb-6">
                Highest quality, thick beans, high vanillin content. Luxury grade.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-amber-900 hover:text-amber-700"
              >
                Learn more <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl text-amber-900 mb-2">TK Vanilla</h3>
              <p className="text-3xl text-neutral-900 mb-4">$80</p>
              <p className="text-neutral-600 mb-6">
                More affordable, ideal for extracts and bulk use.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-amber-900 hover:text-amber-700"
              >
                Learn more <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 hover:bg-amber-800 text-white rounded transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

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
