"use client"

import { useLanguage as useLanguageContext } from "./language-context"
import { translations, type TranslationKey } from "./translations"

export function useLanguage() {
  const { language, setLanguage } = useLanguageContext()

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return { language, setLanguage, t }
}
