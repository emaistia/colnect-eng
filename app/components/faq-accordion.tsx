"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "What is Colnect and how does it work?",
    answer:
      "Colnect is the world's largest online community for collectors of stamps, coins, banknotes, and other collectibles. Our platform helps you catalog your collection, find items you need, and connect with collectors worldwide for trading and selling. With over 20 million items in our database and 400,000+ active users, we make collecting easier and more enjoyable.",
  },
  {
    question: "Is Colnect really free to use?",
    answer:
      "Yes! Colnect is completely free to use. You can create an account, manage your collection, search our catalogs, and connect with other collectors at no cost. We also offer premium memberships with additional features for serious collectors, but all core functionality remains free forever.",
  },
  {
    question: "How does the auto-matching feature work?",
    answer:
      "Our smart algorithm analyzes your collection and wishlist, then compares them with thousands of other collectors worldwide. When it finds someone who has items you want and wants items you have, it suggests a potential swap. You can then contact each other directly through our secure messaging system to arrange the trade.",
  },
  {
    question: "What types of collectibles are supported?",
    answer:
      "Colnect supports a wide range of collectibles including stamps, coins, banknotes, postcards, phone cards, bottle caps, trading cards, beer labels, wine labels, and many more categories. Our catalog is constantly expanding based on collector demand and community contributions.",
  },
  {
    question: "Can I sell my collectibles on Colnect?",
    answer:
      "Yes! While Colnect is primarily focused on trading/swapping, we also have a marketplace where you can list items for sale. You can set your own prices and reach collectors from over 250 countries. Our secure payment system handles transactions safely.",
  },
  {
    question: "How do I ensure safe trading with other collectors?",
    answer:
      "Colnect has several safety features: user ratings and reviews, verified collector badges, secure messaging system, trading guidelines, and a dispute resolution process. We recommend starting with smaller trades to build trust, using tracked shipping, and clearly communicating about item conditions. Please note that Colnect facilitates connections but users are responsible for their own transactions.",
  },
]

export default function FAQAccordion() {
  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 rounded-lg px-6 bg-gray-50"
          >
            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4 leading-relaxed">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
