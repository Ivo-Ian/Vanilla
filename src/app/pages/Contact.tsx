import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { ContactInfo } from './contact/components/ContactInfo';
import { ContactForm } from './contact/components/ContactForm';
import { BeforeOrderSection } from './contact/components/BeforeOrderSection';

export function Contact() {
  const t = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762380832403-ca2c91505e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnlpbmclMjB2YW5pbGxhJTIwYmVhbnMlMjBwcm9jZXNzfGVufDF8fHx8MTc3MjI4MzM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Vanilla process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <BeforeOrderSection />
    </div>
  );
}
