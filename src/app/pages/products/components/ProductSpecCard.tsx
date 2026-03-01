import { Check } from 'lucide-react';

interface ProductSpecCardProps {
  title: string;
  specsLabel: string;
  specs: string[];
}

export function ProductSpecCard({ title, specsLabel, specs }: ProductSpecCardProps) {
  return (
    <div className="bg-neutral-50 rounded-lg p-8 shadow-sm">
      <h2 className="text-3xl font-serif text-amber-900 mb-6">{title}</h2>
      <div className="space-y-3 text-neutral-700">
        <p className="font-medium">{specsLabel}</p>
        <ul className="space-y-2 ml-4">
          {specs.map((spec, i) => (
            <li key={i} className="flex items-start">
              <Check className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={20} />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
