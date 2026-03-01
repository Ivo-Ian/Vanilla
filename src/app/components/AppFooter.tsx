import { Link } from 'react-router';
import { Phone, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useNavLinks } from '../hooks/useNavLinks';

export function AppFooter() {
  const t = useTranslation();
  const navLinks = useNavLinks();

  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif text-amber-100 mb-4">
              Madagascar Vanilla Co.
            </h3>
            <p className="text-sm">{t.footer.companyInfo}</p>
          </div>

          <div>
            <h4 className="text-lg text-amber-100 mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-amber-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-amber-100 mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} />
                <span>{t.footer.email}</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} />
                <span>{t.footer.whatsapp}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
