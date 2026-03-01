import { useTranslation } from '../../../hooks/useTranslation';

export function BeforeOrderSection() {
  const t = useTranslation();

  const items = [
    t.contact.beforeOrderMinimum,
    t.contact.beforeOrderSamples,
    t.contact.beforeOrderPayment,
    t.contact.beforeOrderShipping,
    t.contact.beforeOrderLead,
  ];

  return (
    <section className="py-20 bg-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-amber-900 mb-8 text-center">
          {t.contact.beforeOrderTitle}
        </h2>
        <div className="space-y-4 text-neutral-700">
          {items.map((item, i) => (
            <p key={i}><strong>•</strong> {item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
