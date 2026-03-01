import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BenefitCard } from './why-choose-us/components/BenefitCard';
import { TestimonialCard } from './why-choose-us/components/TestimonialCard';
import { MAIN_BENEFITS, ADDITIONAL_BENEFITS, TESTIMONIALS } from './why-choose-us/constants';

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
            {MAIN_BENEFITS.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
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
            {ADDITIONAL_BENEFITS.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                variant="small"
              />
            ))}
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
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
              />
            ))}
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
