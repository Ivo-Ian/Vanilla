import { useTranslation } from './useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { addLocalePrefix } from '../utils/i18nRouting';

export function useNavLinks() {
  const t = useTranslation();
  const { language } = useLanguage();

  return [
    { path: addLocalePrefix('/', language), label: t.nav.home },
    { path: addLocalePrefix('/about', language), label: t.nav.about },
    { path: addLocalePrefix('/process', language), label: t.nav.process },
    { path: addLocalePrefix('/products', language), label: t.nav.products },
    { path: addLocalePrefix('/why-choose-us', language), label: t.nav.whyChooseUs },
    { path: addLocalePrefix('/contact', language), label: t.nav.contact },
  ];
}
