import { Send } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useContactForm } from '../hooks/useContactForm';

export function ContactForm() {
  const t = useTranslation();
  const { formData, isSubmitted, handleChange, handleSubmit } = useContactForm();

  const productOptions = [
    { value: 'tk-noir', label: t.contact.formProductTkNoir },
    { value: 'gourmet', label: t.contact.formProductGourmet },
    { value: 'grade-b', label: t.contact.formProductGradeB },
    { value: 'grade-c', label: t.contact.formProductGradeC },
    { value: 'powder', label: t.contact.formProductPowder },
    { value: 'seeds', label: t.contact.formProductSeeds },
    { value: 'other', label: t.contact.formProductOther },
  ];

  const inputClass =
    'w-full px-4 py-3 border border-neutral-300 rounded focus:ring-2 focus:ring-amber-600 focus:border-transparent';

  return (
    <div className="bg-neutral-50 rounded-lg p-8">
      <h2 className="text-3xl font-serif text-amber-900 mb-4">{t.contact.formTitle}</h2>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-green-700 text-lg font-medium mb-2">
            Thank you for your inquiry!
          </div>
          <p className="text-green-600">We'll get back to you within 24 hours.</p>
        </div>
      ) : (
        <>
          <p className="text-neutral-700 mb-6">{t.contact.formDesc}</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.contact.formName}
              </label>
              <input type="text" id="name" name="name" value={formData.name}
                onChange={handleChange} required placeholder={t.contact.formNamePlaceholder}
                className={inputClass} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.contact.formEmail}
              </label>
              <input type="email" id="email" name="email" value={formData.email}
                onChange={handleChange} required placeholder={t.contact.formEmailPlaceholder}
                className={inputClass} />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.contact.formCompany}
              </label>
              <input type="text" id="company" name="company" value={formData.company}
                onChange={handleChange} placeholder={t.contact.formCompanyPlaceholder}
                className={inputClass} />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.contact.formCountry}
              </label>
              <input type="text" id="country" name="country" value={formData.country}
                onChange={handleChange} placeholder={t.contact.formCountryPlaceholder}
                className={inputClass} />
            </div>

            <div>
              <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.contact.formProduct}
              </label>
              <select id="product" name="product" value={formData.product}
                onChange={handleChange} className={inputClass}>
                <option value="">{t.contact.formProduct}</option>
                {productOptions.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.contact.formQuantity}
              </label>
              <input type="text" id="quantity" name="quantity" value={formData.quantity}
                onChange={handleChange} placeholder={t.contact.formQuantityPlaceholder}
                className={inputClass} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.contact.formMessage}
              </label>
              <textarea id="message" name="message" value={formData.message}
                onChange={handleChange} rows={4}
                placeholder={t.contact.formMessagePlaceholder}
                className={inputClass} />
            </div>

            <button type="submit"
              className="w-full bg-amber-900 hover:bg-amber-800 text-white py-4 rounded transition-colors flex items-center justify-center">
              <Send className="mr-2" size={20} />
              {t.contact.formSubmit}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
