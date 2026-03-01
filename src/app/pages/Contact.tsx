import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    quantity: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in a real app, this would send to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        quantity: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Send className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl text-green-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been sent. We'll contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-neutral-700 mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm text-neutral-700 mb-2"
                    >
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
                    <label
                      htmlFor="company"
                      className="block text-sm text-neutral-700 mb-2"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm text-neutral-700 mb-2"
                    >
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
                    <label
                      htmlFor="quantity"
                      className="block text-sm text-neutral-700 mb-2"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm text-neutral-700 mb-2"
                    >
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
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif text-amber-900 mb-6">
                Get in Touch
              </h2>
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
                    <p className="text-sm text-neutral-600 mt-1">
                      For urgent inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-amber-900" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-1">Location</h3>
                    <p className="text-neutral-700">
                      Madagascar
                    </p>
                    <p className="text-sm text-neutral-600 mt-1">
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours & Info */}
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl text-amber-900 mb-4">
                  Business Information
                </h3>
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
                <h3 className="text-lg text-neutral-900 mb-3">
                  Specializing in B2B
                </h3>
                <p className="text-neutral-700">
                  We focus on bulk orders for restaurants, bakeries, manufacturers, 
                  distributors, and exporters. Whether you need a one-time shipment 
                  or regular supply, we're equipped to handle your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Info */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-amber-900 mb-6">
              International Shipping & Export
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              We handle all aspects of international shipping, including:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg text-amber-900 mb-2">Documentation</h3>
                <p className="text-neutral-700">
                  Export permits, phytosanitary certificates, and customs documentation
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg text-amber-900 mb-2">Packaging</h3>
                <p className="text-neutral-700">
                  Professional vacuum-sealed packaging to preserve quality
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg text-amber-900 mb-2">Shipping Partners</h3>
                <p className="text-neutral-700">
                  Reliable carriers with experience in food product transport
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg text-amber-900 mb-2">Tracking</h3>
                <p className="text-neutral-700">
                  Full shipment tracking from Madagascar to your location
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
