"use client"

import { useLanguage } from "./language-context"
import { translations } from "./translations"

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return { t, language }
}
