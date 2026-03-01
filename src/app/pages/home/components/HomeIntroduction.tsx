import { CheckCircle2 } from 'lucide-react';
import { FEATURE_BENEFITS } from '../constants';

export function HomeIntroduction() {
  return (
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
          {FEATURE_BENEFITS.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <CheckCircle2 className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">{benefit.title}</h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
