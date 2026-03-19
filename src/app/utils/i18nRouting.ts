export type AppLanguage = 'en' | 'fr' | 'mg';

const LANGS: AppLanguage[] = ['en', 'fr', 'mg'];

export function isSupportedLanguage(value?: string | null): value is AppLanguage {
  return !!value && LANGS.includes(value as AppLanguage);
}

export function getLocaleFromPathname(pathname: string): AppLanguage | null {
  const first = pathname.split('/').filter(Boolean)[0];
  return isSupportedLanguage(first) ? first : null;
}

export function stripLocalePrefix(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) {
    return pathname || '/';
  }

  const stripped = pathname.replace(new RegExp(`^/${locale}`), '');
  return stripped === '' ? '/' : stripped;
}

export function addLocalePrefix(pathname: string, language: AppLanguage): string {
  const normalized = stripLocalePrefix(pathname);
  if (normalized === '/') {
    return `/${language}`;
  }
  return `/${language}${normalized}`;
}
