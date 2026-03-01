import { type LucideIcon } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

interface ProcessStepProps {
  icon: LucideIcon;
  index: number;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  isPlaceholder?: boolean;
  reversed: boolean;
}

export function ProcessStep({
  icon: Icon,
  index,
  title,
  description,
  image,
  imageAlt,
  isPlaceholder = false,
  reversed,
}: ProcessStepProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className={reversed ? 'order-2 lg:order-1' : 'order-2'}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center">
              <Icon size={32} />
            </div>
          </div>
          <div>
            <div className="text-sm text-amber-600 mb-2">Step {index + 1}</div>
            <h3 className="text-2xl font-serif text-amber-900 mb-4">{title}</h3>
            <p className="text-lg text-neutral-700 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      <div className={reversed ? 'order-1 lg:order-2' : 'order-1'}>
        {isPlaceholder ? (
          <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg bg-amber-100 flex items-center justify-center">
            <div className="text-center p-8">
              <Icon className="mx-auto text-amber-900 mb-4" size={64} />
              <h4 className="text-2xl font-serif text-amber-900">{title}</h4>
            </div>
          </div>
        ) : (
          <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src={image!}
              alt={imageAlt!}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
