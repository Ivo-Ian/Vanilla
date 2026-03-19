import { useLanguage } from '../context/LanguageContext';
import { addLocalePrefix } from '../utils/i18nRouting';

export function useLocalizedPath() {
  const { language } = useLanguage();

  return (path: string) => addLocalePrefix(path, language);
}
