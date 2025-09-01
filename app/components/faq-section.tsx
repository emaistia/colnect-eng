"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/use-language"

export function FAQSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about Colnect</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">
              How do I start swapping collectibles?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">
              Simply create your free account, add items to your collection and wishlist, and our auto-matching system
              will connect you with collectors who have what you want and want what you have.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">Is Colnect free to use?</AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">
              Yes, Colnect is free to join and use. You can manage your collection, connect with collectors, and explore
              the catalog without any cost.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">
              Can I trade coins and stamps internationally?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">
              Colnect connects collectors from 250+ countries worldwide. You can safely trade coins, stamps, and other
              collectibles internationally with our verified user system.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">
              What types of collectibles can I manage on Colnect?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">
              Colnect supports over 40 categories, including stamps, coins, banknotes, phonecards, tea bags, trading
              cards, and many more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-lg border shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">
              Is Colnect available on mobile?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600">
              Yes, Colnect has a dedicated mobile app available for both iOS and Android, allowing collectors to manage
              their inventory on the go.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
