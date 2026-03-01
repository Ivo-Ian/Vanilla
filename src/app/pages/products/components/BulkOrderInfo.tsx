import { Link } from 'react-router';

export function BulkOrderInfo() {
  return (
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
  );
}
