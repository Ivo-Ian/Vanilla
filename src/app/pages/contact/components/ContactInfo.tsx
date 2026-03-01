import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-serif text-amber-900 mb-6">Get in Touch</h2>
      <p className="text-neutral-700 mb-8">
        We're here to answer your questions and help you find the perfect
        vanilla solution for your business.
      </p>

      <div className="space-y-6 mb-12">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
            <Mail className="text-amber-900" size={24} />
          </div>
          <div>
            <h3 className="text-lg text-neutral-900 mb-1">Email</h3>
            <a
              href="mailto:info@madagascarvanilla.com"
              className="text-amber-900 hover:text-amber-700"
            >
              info@madagascarvanilla.com
            </a>
            <p className="text-sm text-neutral-600 mt-1">
              We respond within 24-48 hours
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
            <Phone className="text-amber-900" size={24} />
          </div>
          <div>
            <h3 className="text-lg text-neutral-900 mb-1">WhatsApp</h3>
            <a
              href="https://wa.me/261XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:text-amber-700"
            >
              +261 XX XXX XXXX
            </a>
            <p className="text-sm text-neutral-600 mt-1">For urgent inquiries</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
            <MapPin className="text-amber-900" size={24} />
          </div>
          <div>
            <h3 className="text-lg text-neutral-900 mb-1">Location</h3>
            <p className="text-neutral-700">Madagascar</p>
            <p className="text-sm text-neutral-600 mt-1">
              Serving clients worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 rounded-lg p-6">
        <h3 className="text-xl text-amber-900 mb-4">Business Information</h3>
        <div className="space-y-3 text-neutral-700">
          <div className="flex justify-between">
            <span>Response Time:</span>
            <span className="text-neutral-900">24-48 hours</span>
          </div>
          <div className="flex justify-between">
            <span>Minimum Order:</span>
            <span className="text-neutral-900">50 kg</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span className="text-neutral-900">Worldwide</span>
          </div>
          <div className="flex justify-between">
            <span>Payment Terms:</span>
            <span className="text-neutral-900">Flexible</span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-neutral-100 rounded-lg p-6">
        <h3 className="text-lg text-neutral-900 mb-3">Specializing in B2B</h3>
        <p className="text-neutral-700">
          We focus on bulk orders for restaurants, bakeries, manufacturers,
          distributors, and exporters. Whether you need a one-time shipment or
          regular supply, we're equipped to handle your requirements.
        </p>
      </div>
    </div>
  );
}
