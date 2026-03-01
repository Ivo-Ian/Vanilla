import { MapPin, Users, Award, TrendingUp, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function WhyChooseUs() {
  return (
    <div>
      {/* Hero Section */}
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
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Why Choose Us
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Your trusted partner for premium Madagascar vanilla
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Benefit 1 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-amber-900" size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-amber-900 mb-3">
                  Direct from Madagascar
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  We source our vanilla directly from farmers in Madagascar's premier 
                  vanilla-growing regions. By eliminating intermediaries, we ensure 
                  you receive the freshest, highest-quality beans while supporting 
                  local communities with fair prices. Our direct relationships mean 
                  better traceability, consistency, and value for you.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="text-amber-900" size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-amber-900 mb-3">
                  Strong Farmer Relationships
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  We've built long-term partnerships with vanilla farmers based on 
                  mutual trust and respect. These relationships span years, allowing 
                  us to maintain consistent quality standards and ensure sustainable 
                  practices. When you work with us, you benefit from these established 
                  connections and the reliability they provide.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="text-amber-900" size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-amber-900 mb-3">
                  Rigorous Quality Control
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Every batch of vanilla undergoes strict quality inspection. We 
                  check moisture content, length, flexibility, aroma, and appearance. 
                  Only beans that meet our premium standards are selected for export. 
                  This meticulous attention to quality ensures you receive consistently 
                  excellent vanilla with every order.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="text-amber-900" size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-amber-900 mb-3">
                  Export Experience
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  With extensive experience in international vanilla trade, we handle 
                  all the complexities of export logistics. From certifications and 
                  documentation to packaging and shipping, we manage every detail. 
                  Our established export processes ensure your vanilla arrives safely 
                  and on time, wherever you are in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <TrendingUp className="text-amber-900 mb-4" size={32} />
              <h3 className="text-xl text-neutral-900 mb-3">
                Competitive Pricing
              </h3>
              <p className="text-neutral-700">
                Direct sourcing means better prices for you. We offer competitive 
                rates on bulk orders without compromising quality.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Shield className="text-amber-900 mb-4" size={32} />
              <h3 className="text-xl text-neutral-900 mb-3">
                Full Traceability
              </h3>
              <p className="text-neutral-700">
                Know exactly where your vanilla comes from. We provide complete 
                traceability from specific farms to your facility.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Users className="text-amber-900 mb-4" size={32} />
              <h3 className="text-xl text-neutral-900 mb-3">
                Responsive Service
              </h3>
              <p className="text-neutral-700">
                Quick quote responses, clear communication, and dedicated support 
                throughout your order process.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Award className="text-amber-900 mb-4" size={32} />
              <h3 className="text-xl text-neutral-900 mb-3">
                Consistent Supply
              </h3>
              <p className="text-neutral-700">
                Our established farmer network ensures reliable supply year-round, 
                even during market fluctuations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Globe className="text-amber-900 mb-4" size={32} />
              <h3 className="text-xl text-neutral-900 mb-3">
                Global Reach
              </h3>
              <p className="text-neutral-700">
                We ship worldwide with proper documentation and certifications for 
                international trade compliance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <MapPin className="text-amber-900 mb-4" size={32} />
              <h3 className="text-xl text-neutral-900 mb-3">
                Authentic Madagascar
              </h3>
              <p className="text-neutral-700">
                100% genuine Madagascar vanilla. No blends, no substitutes—just 
                pure, authentic Bourbon vanilla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">
            Trusted by Businesses Worldwide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Exceptional quality and reliable service. The vanilla beans are 
                consistently excellent, and the team is always responsive to our needs."
              </p>
              <div className="text-sm">
                <div className="text-neutral-900">Sarah M.</div>
                <div className="text-neutral-600">Pastry Chef, Paris</div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Direct sourcing makes a real difference. The traceability and quality 
                are exactly what we need for our premium products."
              </p>
              <div className="text-sm">
                <div className="text-neutral-900">James L.</div>
                <div className="text-neutral-600">Food Manufacturer, USA</div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Fast shipping, proper documentation, and outstanding vanilla. They've 
                become our go-to supplier for all Madagascar vanilla."
              </p>
              <div className="text-sm">
                <div className="text-neutral-900">Maria G.</div>
                <div className="text-neutral-600">Import Specialist, Spain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join businesses worldwide who trust us for their premium Madagascar vanilla needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white hover:bg-neutral-100 text-amber-900 rounded transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
