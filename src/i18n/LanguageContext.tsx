import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { translations, type Language, type TranslationKey } from './translations';

interface LanguageContextValue {
  lang: Language;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => void;
}

const STORAGE_KEY = 'spotmydeal:lang';

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    /* localStorage indisponível (modo privado, SSR...) */
  }
  return 'pt';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignora */
    }
  }, [lang]);

  const t = useCallback((key: TranslationKey): string => translations[lang][key], [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'pt' ? 'en' : 'pt'));
  }, []);

  const value = useMemo(() => ({ lang, t, toggleLanguage }), [lang, t, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>');
  return ctx;
}
