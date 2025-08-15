"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Colnect?",
    answer:
      "Colnect is the world's largest collecting community platform where collectors can catalog their items, trade with others, and discover new collectibles. We support over 600 categories including stamps, coins, banknotes, postcards, and much more.",
  },
  {
    question: "Is Colnect free to use?",
    answer:
      "Yes! Colnect offers a comprehensive free plan that includes basic cataloging, trading features, and community access. We also offer premium plans with advanced features for serious collectors.",
  },
  {
    question: "How does trading work on Colnect?",
    answer:
      "Our trading system allows you to safely exchange items with collectors worldwide. You can browse want lists, make trade offers, and use our built-in messaging system. All trades are protected by our verification system and community feedback.",
  },
  {
    question: "What types of collectibles are supported?",
    answer:
      "Colnect supports over 600 categories of collectibles including stamps, coins, banknotes, postcards, phone cards, bottle caps, trading cards, and many more. If you collect it, chances are we support it!",
  },
  {
    question: "How accurate is the catalog information?",
    answer:
      "Our catalog is maintained by a community of expert collectors and is constantly updated. Each item includes detailed information, high-quality images, and market values. Our data is used by collectors, dealers, and auction houses worldwide.",
  },
  {
    question: "Can I access Colnect on mobile devices?",
    answer:
      "Yes! Colnect is fully responsive and works great on all devices. We also offer dedicated mobile apps for iOS and Android with offline capabilities and camera integration for easy cataloging.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up for a free account and start exploring! You can begin by searching for items in your collection, joining relevant collecting groups, or browsing our extensive catalog to discover new items.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Absolutely. We take privacy and security seriously. Your personal information is encrypted and protected, and we never share your data with third parties without your consent. You control what information is visible to other collectors.",
  },
]

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
