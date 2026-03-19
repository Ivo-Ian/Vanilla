import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { SeoMeta } from './SeoMeta';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { getLocaleFromPathname } from '../utils/i18nRouting';

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const routeLanguage = getLocaleFromPathname(pathname);
    if (routeLanguage && routeLanguage !== language) {
      setLanguage(routeLanguage);
    }
  }, [language, pathname, setLanguage]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <SeoMeta />
      <AppHeader />
      <main className="flex-grow">{children}</main>
      <AppFooter />
    </div>
  );
}