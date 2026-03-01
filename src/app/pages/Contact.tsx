import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useContactForm } from './contact/hooks/useContactForm';
import { ContactForm } from './contact/components/ContactForm';
import { ContactInfo } from './contact/components/ContactInfo';
import { ExportInfo } from './contact/components/ExportInfo';

export function Contact() {
  const { formData, isSubmitted, handleSubmit, handleChange } = useContactForm();

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
            Contact Us
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Let's discuss your vanilla needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif text-amber-900 mb-6">
                Request a Quote
              </h2>
              <p className="text-neutral-700 mb-8">
                Fill out the form below and we'll get back to you within 24-48 hours 
                with a detailed quote. For urgent inquiries, please contact us via 
                WhatsApp or email.
              </p>

              <ContactForm
                formData={formData}
                isSubmitted={isSubmitted}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
            </div>

            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Export Info */}
      <ExportInfo />
    </div>
  );
}
