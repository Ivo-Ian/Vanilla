import { Link } from 'react-router';
import { useLocalizedPath } from '../../../hooks/useLocalizedPath';

interface FeaturedProductCardProps {
  name: string;
  description: string;
  ctaLabel: string;
}

export function FeaturedProductCard({ name, description, ctaLabel }: FeaturedProductCardProps) {
  const localizedPath = useLocalizedPath();

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl text-amber-900 mb-4">{name}</h3>
      <p className="text-neutral-600 mb-6">{description}</p>
      <Link
        to={localizedPath('/contact')}
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
