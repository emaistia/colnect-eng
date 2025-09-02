"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Colnect free to use?",
    answer:
      "Yes! Colnect is completely free to use. You can create your collection, browse catalogs, and connect with other collectors at no cost. We also offer premium features for advanced collectors.",
  },
  {
    question: "How do I start swapping collectibles?",
    answer:
      "Simply create your collection, add items to your wishlist, and our auto-matching system will connect you with collectors who have what you want and want what you have. You can then arrange swaps directly through our platform.",
  },
  {
    question: "Can I trade coins and stamps internationally?",
    answer:
      "Colnect connects collectors from 250+ countries worldwide. You can trade, buy, and sell with collectors globally through our secure marketplace and swap system.",
  },
  {
    question: "How does the auto-matching feature work?",
    answer:
      "Our intelligent system analyzes your collection and wishlist, then matches you with other collectors who have complementary items. You'll receive notifications when potential swap partners are found.",
  },
  {
    question: "What types of collectibles can I manage on Colnect?",
    answer:
      "Colnect supports 40+ collectible categories including stamps, coins, banknotes, postcards, phone cards, trading cards, and many more. Each category has detailed catalogs with images and variants.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we take security seriously. All transactions are protected, and we never share your personal information without your consent. Our marketplace includes seller ratings and secure communication tools.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about collecting and swapping on Colnect
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
