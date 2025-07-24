"use client"

import { useAppLanguage } from "../providers"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SignupModal from "./signup-modal"
import LanguageSelector from "./language-selector"

export function ExampleHeader() {
  const { t } = useAppLanguage()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/colnect-logo.png" alt="Colnect Logo" width={120} height={40} className="h-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#benefits" className="text-sm font-medium text-purple-900 hover:text-purple-500">
            {t("benefits")}
          </a>
          <a href="#testimonials" className="text-sm font-medium text-purple-900 hover:text-purple-500">
            {t("testimonials")}
          </a>
          <a href="#faq" className="text-sm font-medium text-purple-900 hover:text-purple-500">
            {t("faq")}
          </a>
          <a href="#bonus" className="text-sm font-medium text-purple-900 hover:text-purple-500">
            {t("bonus")}
          </a>
          <Link href="/premium" className="text-sm font-medium text-purple-900 hover:text-purple-500">
            {t("premium")}
          </Link>
          <LanguageSelector />
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelector className="md:hidden" />
          <SignupModal>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">{t("signUpFree")}</Button>
          </SignupModal>
        </div>
      </div>
    </header>
  )
}
