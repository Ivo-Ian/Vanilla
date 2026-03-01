import { Check, Star } from 'lucide-react';
import { Link } from 'react-router';
import { Product } from '../constants';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${
        product.popular ? 'ring-2 ring-amber-600 transform lg:scale-105' : ''
      }`}
    >
      {product.popular && (
        <div className="bg-amber-600 text-white text-center py-2 px-4">
          <div className="flex items-center justify-center space-x-2">
            <Star size={16} fill="currentColor" />
            <span className="font-medium">Most Popular</span>
            <Star size={16} fill="currentColor" />
          </div>
        </div>
      )}

      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-serif text-amber-900 mb-2">{product.name}</h3>
        <div className="text-sm text-neutral-600 mb-4">{product.size}</div>
        <div className="text-4xl text-neutral-900 mb-4">{product.price}</div>
        <p className="text-neutral-700 mb-6">{product.description}</p>

        <ul className="space-y-3 mb-8">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <Check className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
              <span className="text-neutral-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 pt-0">
        <Link
          to="/contact"
          className={`block w-full text-center py-3 px-6 rounded transition-colors ${
            product.popular
              ? 'bg-amber-600 hover:bg-amber-700 text-white'
              : 'bg-neutral-900 hover:bg-neutral-800 text-white'
          }`}
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
