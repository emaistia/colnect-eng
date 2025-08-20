"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/use-language"

export function FAQSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("faqTitle")}</h2>
          <p className="text-xl text-gray-600">Get answers to the most common questions about Colnect</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">{t("faq1Question")}</AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">{t("faq1Answer")}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">{t("faq2Question")}</AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">{t("faq2Answer")}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">{t("faq3Question")}</AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">{t("faq3Answer")}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">{t("faq4Question")}</AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">{t("faq4Answer")}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">{t("faq5Question")}</AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">{t("faq5Answer")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
