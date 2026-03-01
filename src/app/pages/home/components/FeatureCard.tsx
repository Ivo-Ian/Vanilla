import { CheckCircle2 } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
        <CheckCircle2 className="text-amber-900" size={32} />
      </div>
      <h3 className="text-xl text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
}
