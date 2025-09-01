"use client"

import { useState, useEffect } from "react"
import { translations, type Language } from "./translations"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return { language, setLanguage, t }
}

export { useLanguage as useTranslation }
