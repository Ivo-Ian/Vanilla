import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'large' | 'small';
}

export function BenefitCard({ icon: Icon, title, description, variant = 'large' }: BenefitCardProps) {
  if (variant === 'small') {
    return (
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <Icon className="text-amber-900 mb-4" size={32} />
        <h3 className="text-xl text-neutral-900 mb-3">{title}</h3>
        <p className="text-neutral-700">{description}</p>
      </div>
    );
  }

  return (
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
          <Icon className="text-amber-900" size={32} />
        </div>
      </div>
      <div>
        <h3 className="text-2xl text-amber-900 mb-3">{title}</h3>
        <p className="text-neutral-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
