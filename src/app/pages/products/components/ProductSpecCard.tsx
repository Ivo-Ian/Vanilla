import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
// import horizon from '../../photos/horizon.jpg';
interface ProductSpecCardProps {
  title: string;
  specsLabel: string;
  specs: string[];
  image?: string;
  priceLabel?: string;
  priceTiers?: Array<{ dimension: string; price: string }>;
}

export function ProductSpecCard({ title, specsLabel, specs, image, priceLabel, priceTiers }: ProductSpecCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image || "https://images.unsplash.com/photo-1596040033229-a9821ebd05ec?q=80&w=1000"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow">
        <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4 group-hover:text-amber-900 transition-colors duration-300">
          {title}
        </h3>

        {priceTiers && priceTiers.length > 0 && (
          <div className="mb-6 rounded-xl border border-amber-200/70 bg-amber-50/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 mb-3">
              {priceLabel}
            </p>
            <div className="space-y-2">
              {priceTiers.map((tier) => (
                <div
                  key={`${tier.dimension}-${tier.price}`}
                  className="flex items-center justify-between gap-4 rounded-lg bg-white/80 border border-amber-100 px-3 py-2"
                >
                  <span className="text-sm font-medium text-neutral-700">{tier.dimension}</span>
                  <span className="text-sm font-semibold text-amber-900">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-8 bg-amber-600/30" />
            <p className="font-medium text-amber-800 tracking-widest uppercase text-xs">
              {specsLabel}
            </p>
          </div>

          <ul className="space-y-3">
            {specs.map((spec, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start text-neutral-600"
              >
                <div className="mt-1 mr-3 bg-amber-50 rounded-full p-1 group-hover:bg-amber-100 transition-colors duration-300">
                  <Check className="text-amber-700 flex-shrink-0" size={14} />
                </div>
                <span className="leading-relaxed text-sm md:text-base">{spec}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
