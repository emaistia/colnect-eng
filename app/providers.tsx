"use client"

import type React from "react"

import { useLanguage } from "@/lib/use-language"
import { createContext, useContext } from "react"

// Create a context to share the language functions
const LanguageContext = createContext<ReturnType<typeof useLanguage> | null>(null)

// Export a hook to use the language context
export function useAppLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useAppLanguage must be used within a LanguageProvider")
  }
  return context
}

// Provider component to wrap the app
export function Providers({ children }: { children: React.ReactNode }) {
  const languageUtils = useLanguage()

  return <LanguageContext.Provider value={languageUtils}>{children}</LanguageContext.Provider>
}
