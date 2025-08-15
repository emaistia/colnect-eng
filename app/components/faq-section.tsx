"use client"

import { FAQAccordion } from "./faq-accordion"
import { useLanguage } from "@/lib/use-language"

export function FAQSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("faqTitle")}</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about Colnect</p>
          </div>
          <FAQAccordion />
        </div>
      </div>
    </section>
  )
}
