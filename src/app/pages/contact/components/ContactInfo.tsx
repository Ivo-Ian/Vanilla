import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

export function ContactInfo() {
  const t = useTranslation();

  const contactItems = [
    { icon: Mail, label: t.contact.emailLabel, value: t.footer.email },
    { icon: Phone, label: t.contact.phoneLabel, value: t.footer.whatsapp },
    { icon: MapPin, label: t.contact.locationLabel, value: t.contact.locationValue },
    { icon: Clock, label: t.contact.hoursLabel, value: t.contact.hoursValue },
  ];

  return (
    <div>
      <h2 className="text-3xl font-serif text-amber-900 mb-8">
        {t.contact.getInTouchTitle}
      </h2>
      <p className="text-lg text-neutral-700 mb-8">
        {t.contact.getInTouchDesc}
      </p>
      <div className="space-y-6">
        {contactItems.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start space-x-4">
            <Icon className="text-amber-600 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-1">{label}</h3>
              <p className="text-neutral-700">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
