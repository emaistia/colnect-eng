"use client"

import { useLanguage as useLanguageContext } from "./language-context"

export function useLanguage() {
  return useLanguageContext()
}
