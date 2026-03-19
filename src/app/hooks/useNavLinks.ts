import { useTranslation } from './useTranslation';

export function useNavLinks() {
  const t = useTranslation();

  return [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/process', label: t.nav.process },
    { path: '/products', label: t.nav.products },
    { path: '/why-choose-us', label: t.nav.whyChooseUs },
    { path: '/contact', label: t.nav.contact },
  ];
}
