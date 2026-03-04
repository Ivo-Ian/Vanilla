import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'mg', name: 'Malagasy', flag: '🇲🇬' },
  ] as const;

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-neutral-100 transition-colors">
        <Globe size={20} className="text-neutral-600" />
        <span className="text-sm text-neutral-700">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full px-4 py-3 text-left hover:bg-neutral-50 transition-colors flex items-center space-x-3 ${
              language === lang.code ? 'bg-amber-50 text-amber-900' : 'text-neutral-700'
            } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${lang.code === 'mg' ? 'rounded-b-lg' : ''}`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="text-sm font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
