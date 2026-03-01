import { Send } from 'lucide-react';
import { ContactFormData } from '../hooks/useContactForm';

interface ContactFormProps {
  formData: ContactFormData;
  isSubmitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

export function ContactForm({
  formData,
  isSubmitted,
  handleSubmit,
  handleChange,
}: ContactFormProps) {
  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Send className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your message has been sent. We'll contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-neutral-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-neutral-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm text-neutral-700 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-neutral-700 mb-2">
          Phone / WhatsApp
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm text-neutral-700 mb-2">
          Estimated Quantity (kg)
        </label>
        <select
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
        >
          <option value="">Select quantity range</option>
          <option value="50-100">50-100 kg</option>
          <option value="100-250">100-250 kg</option>
          <option value="250-500">250-500 kg</option>
          <option value="500+">500+ kg</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-neutral-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
          placeholder="Tell us about your vanilla needs, preferred grade, delivery location, etc."
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-amber-900 hover:bg-amber-800 text-white rounded transition-colors flex items-center justify-center space-x-2"
      >
        <span>Send Message</span>
        <Send size={20} />
      </button>
    </form>
  );
}
