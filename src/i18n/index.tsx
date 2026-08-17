import { useRouterState } from "@tanstack/react-router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { pt, type Dictionary } from "./pt";
import { en } from "./en";

export type Lang = "pt" | "en";

const dictionaries: Record<Lang, Dictionary> = { pt, en };

const STORAGE_KEY = "site-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function parseLang(value: unknown): Lang | null {
  return value === "en" ? "en" : value === "pt" ? "pt" : null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useRouterState({ select: (s) => s.location });
  const searchLang = parseLang((location.search as { lang?: string })?.lang);

  const [lang, setLangState] = useState<Lang>(searchLang ?? "pt");

  // Session persistence: only applies when the URL doesn't pin a language.
  useEffect(() => {
    if (searchLang) {
      window.sessionStorage.setItem(STORAGE_KEY, searchLang);
      return;
    }
    const stored = parseLang(window.sessionStorage.getItem(STORAGE_KEY));
    if (stored && stored !== lang) setLangState(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(STORAGE_KEY, next);
    const url = new URL(window.location.href);
    if (next === "pt") url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.history.replaceState(window.history.state, "", url.toString());
  }, []);

  const t = dictionaries[lang];

  // <html lang>, title and description follow the active language + route.
  useEffect(() => {
    const isCase = location.pathname.startsWith("/case");
    document.documentElement.lang = t.meta.htmlLang;
    document.title = isCase ? t.meta.caseTitle : t.meta.homeTitle;
    const description = isCase ? t.meta.caseDescription : t.meta.homeDescription;
    const selectors = [
      'meta[name="description"]',
      'meta[property="og:description"]',
    ];
    for (const selector of selectors) {
      const el = document.head.querySelector<HTMLMetaElement>(selector);
      if (el) el.content = description;
    }
    const ogTitle = document.head.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = document.title;
  }, [t, location.pathname]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang(lang === "pt" ? "en" : "pt"),
      t,
    }),
    [lang, setLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
