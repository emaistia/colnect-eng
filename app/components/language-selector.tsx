"use client"
import { Check, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/use-language"

interface Language {
  code: string
  name: string
  nativeName: string
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },
  // Keep other languages for future expansion
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "it", name: "Italian", nativeName: "Italiano" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "ru", name: "Russian", nativeName: "Русский" },
  { code: "zh", name: "Chinese", nativeName: "中文" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands" },
  { code: "pl", name: "Polish", nativeName: "Polski" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe" },
  { code: "ko", name: "Korean", nativeName: "한국어" },
]

interface LanguageSelectorProps {
  className?: string
}

export default function LanguageSelector({ className }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage()

  const currentLanguageObj = languages.find((lang) => lang.code === language) || languages[0]

  const handleLanguageChange = (languageCode: string) => {
    if (languageCode === "en" || languageCode === "id") {
      setLanguage(languageCode as "en" | "id")
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-1 text-purple-900 hover:text-purple-500 ${className}`}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguageObj.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px] max-h-[300px] overflow-y-auto">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center justify-between cursor-pointer"
            disabled={!["en", "id"].includes(lang.code)} // Only enable English and Indonesian
          >
            <span>
              {lang.nativeName} <span className="text-gray-500 text-xs">({lang.name})</span>
            </span>
            {currentLanguageObj.code === lang.code && <Check className="h-4 w-4 text-purple-600" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
