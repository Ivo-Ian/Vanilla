import { Flower, Sun, Droplets, Wind, Package, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { ProcessStep } from './process/components/ProcessStep';

// Import local photos
import photo1 from '../../photos/1.jpg';
import photo2 from '../../photos/2.jpg';
import photo3 from '../../photos/3.jpg';
import photo4 from '../../photos/4.jpg';
import photo5 from '../../photos/5.jpg';
import photo6 from '../../photos/6.jpg';
import photo7 from '../../photos/7.jpg';
import photo8 from '../../photos/8.png';

export function Process() {
  const t = useTranslation();

  const steps = [
    {
      title: t.process.cultivationTitle,
      description: t.process.cultivationDesc,
      icon: Flower,
      images: [
        {
          url: photo1,
          alt: 'Vanilla orchid cultivation',
        },
        {
          url: photo5,
          alt: 'Vanilla plantation',
        },
        {
          url: photo4,
          alt: 'Vanilla plantation',
        }
      ],
      reversed: false,
    },
    {
      title: t.process.harvestTitle,
      description: t.process.harvestDesc,
      icon: Package,
      images: [
        {
          url: photo4,
          alt: 'Harvesting vanilla beans',
        }
      ],
      reversed: true,
    },
    {
      title: t.process.curingTitle,
      description: t.process.curingDesc,
      icon: Droplets,
      images: [
        {
          url: photo6,
          alt: 'Vanilla beans drying in the sun',
        }
      ],
      reversed: false,
    },
    {
      title: t.process.sortingTitle,
      description: t.process.sortingDesc,
      icon: CheckCircle,
      images:  [
        {
          url: photo2,
          alt: 'Vanilla beans drying in the sun',
        },{
          url: photo3,
          alt: 'Vanilla beans drying in the sun',
        }
      ],
      imageAlt: 'Sorting and grading vanilla beans',
      reversed: true,
    },
    {
      title: t.process.qualityTitle,
      description: t.process.qualityDesc,
      icon: Sun,
      image: photo3,
      imageAlt: 'Spices and vanilla',
      reversed: false,
    },
    {
      title: t.process.packagingTitle,
      description: t.process.packagingDesc,
      icon: Wind,
      image: photo8,
      imageAlt: 'Vacuum sealed vanilla packaging',
      reversed: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672594429262-ceda365f82c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwZmxvd2VyJTIwb3JjaGlkfGVufDF8fHx8MTc3MjI4MzM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Vanilla orchid flower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">{t.process.title}</h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">{t.process.subtitle}</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                index={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                image={step.image}
                imageAlt={step.imageAlt}
                images={step.images}
                isPlaceholder={step.isPlaceholder}
                reversed={step.reversed}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-amber-900 mb-6">{t.process.traditionalMethodsTitle}</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">{t.process.traditionalMethodsDesc}</p>
          <h3 className="text-2xl font-serif text-amber-900 mb-4 mt-12">{t.process.timelineTitle}</h3>
          <p className="text-lg text-neutral-700 leading-relaxed">{t.process.timelineDesc}</p>
        </div>
      </section>
    </div>
  );
}
