import { type LucideIcon } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../../components/ui/carousel';

interface ProcessStepProps {
  icon: LucideIcon;
  index: number;
  title: string;
  description: string;
  images?: { url: string; alt: string }[];
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
  images,
  image,
  imageAlt,
  isPlaceholder = false,
  reversed,
}: ProcessStepProps) {
  const displayImages = images || (image ? [{ url: image, alt: imageAlt || '' }] : []);

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
            {displayImages.length > 1 ? (
              <Carousel 
                className="w-full h-full"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
                <CarouselContent>
                  {displayImages.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative h-[350px]">
                        <ImageWithFallback
                          src={img.url}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute bottom-4 right-16 flex gap-2 z-10">
                  <CarouselPrevious className="relative inset-auto translate-y-0 h-8 w-8 bg-white/80 hover:bg-white text-amber-900 border-none shadow-md" />
                  <CarouselNext className="relative inset-auto translate-y-0 h-8 w-8 bg-white/80 hover:bg-white text-amber-900 border-none shadow-md" />
                </div>
              </Carousel>
            ) : (
              <ImageWithFallback
                src={displayImages[0]?.url || ''}
                alt={displayImages[0]?.alt || ''}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
