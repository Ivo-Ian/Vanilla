import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { FEATURED_PRODUCTS_PREVIEW } from '../constants';

export function HomeFeaturedProducts() {
  return (
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
          {FEATURED_PRODUCTS_PREVIEW.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow ${
                product.popular ? 'border-2 border-amber-600' : ''
              }`}
            >
              {product.popular && (
                <div className="inline-block px-3 py-1 bg-amber-600 text-white text-sm rounded mb-3">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl text-amber-900 mb-2">{product.name}</h3>
              <p className="text-3xl text-neutral-900 mb-4">{product.price}</p>
              <p className="text-neutral-600 mb-6">{product.description}</p>
              <Link
                to="/products"
                className="inline-flex items-center text-amber-900 hover:text-amber-700"
              >
                Learn more <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          ))}
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
  );
}
