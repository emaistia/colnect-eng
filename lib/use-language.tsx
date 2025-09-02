"use client"

import { useState, useEffect } from "react"

export function useLanguage() {
  const [language, setLanguage] = useState<string>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
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
    const translations: Record<string, Record<string, string>> = {
      en: {
        "hero.title": "The Smartest Way to Collect and Swap Collectibles Online",
        "hero.subtitle": "Join 400,000+ collectors worldwide",
        "cta.start": "Start Free Collection",
      },
      es: {
        "hero.title": "La Forma Más Inteligente de Coleccionar e Intercambiar Coleccionables en Línea",
        "hero.subtitle": "Únete a más de 400,000 coleccionistas en todo el mundo",
        "cta.start": "Comenzar Colección Gratuita",
      },
      // Add more languages as needed
    }

    return translations[language]?.[key] || key
  }

  return { language, setLanguage, t }
}

// Re-export useLanguage for compatibility
export { useLanguage as useTranslation }
