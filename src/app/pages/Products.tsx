import { Check, Star } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Products() {
  const products = [
    {
      name: 'Grade A Vanilla',
      size: '15-18 cm',
      price: '$100',
      description: 'Premium quality, flexible, aromatic. Ideal for chefs and businesses.',
      features: [
        'Flexible and plump beans',
        'Rich, aromatic fragrance',
        'Moisture content: 30-35%',
        'Perfect for culinary use',
        'Ideal for restaurants and bakeries',
        'Visible vanillin crystals',
      ],
      popular: false,
    },
    {
      name: 'Grade A Gourmet Vanilla',
      size: 'Premium Select',
      price: '$150',
      description: 'Highest quality, thick beans, high vanillin content. Luxury grade.',
      features: [
        'Extra thick and oily beans',
        'Highest vanillin content',
        'Exceptional aroma and flavor',
        'Moisture content: 30-35%',
        'Perfect for high-end applications',
        'Individually selected for perfection',
      ],
      popular: true,
    },
    {
      name: 'TK Vanilla',
      size: 'Basic Grade',
      price: '$80',
      description: 'More affordable, ideal for extracts and bulk use.',
      features: [
        'Great value for money',
        'Perfect for vanilla extract',
        'Suitable for bulk processing',
        'Good aromatic properties',
        'Ideal for manufacturing',
        'Consistent quality',
      ],
      popular: false,
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
            {products.map((product, index) => (
              <div
                key={index}
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
                  <h3 className="text-2xl font-serif text-amber-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="text-sm text-neutral-600 mb-4">{product.size}</div>
                  <div className="text-4xl text-neutral-900 mb-4">
                    {product.price}
                  </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-amber-900 mb-6">
                Bulk Orders & Custom Packaging
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                We specialize in bulk orders for businesses, restaurants, manufacturers, 
                and exporters. Whether you need 1kg or 1000kg, we can accommodate your 
                needs with competitive pricing and reliable delivery.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl text-amber-900 mb-2">50kg+</div>
                  <div className="text-neutral-600">Minimum Order</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-amber-900 mb-2">24-48h</div>
                  <div className="text-neutral-600">Quote Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-amber-900 mb-2">Global</div>
                  <div className="text-neutral-600">Shipping Available</div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-amber-900 hover:bg-amber-800 text-white rounded transition-colors"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-amber-900 mb-8 text-center">
              Our Quality Guarantee
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl text-neutral-900 mb-3">
                  Authentic Madagascar Origin
                </h3>
                <p className="text-neutral-700">
                  All our vanilla is sourced exclusively from Madagascar, with full 
                  traceability from farm to export.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl text-neutral-900 mb-3">
                  Rigorous Quality Control
                </h3>
                <p className="text-neutral-700">
                  Every batch is inspected for moisture content, appearance, aroma, 
                  and flexibility to ensure consistent premium quality.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl text-neutral-900 mb-3">
                  Proper Storage & Handling
                </h3>
                <p className="text-neutral-700">
                  We maintain optimal storage conditions to preserve the beans' 
                  quality, aroma, and appearance until delivery.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl text-neutral-900 mb-3">
                  Reliable Export Experience
                </h3>
                <p className="text-neutral-700">
                  We handle all documentation, certifications, and shipping logistics 
                  to ensure smooth international delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
