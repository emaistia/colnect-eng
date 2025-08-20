"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Colnect free to use?",
    answer: "Yes, Colnect is free to join and use. You can manage your collection, connect with collectors, and explore the catalog without any cost."
  },
  {
    question: "What types of collectibles can I manage on Colnect?",
    answer: "Colnect supports over 40 categories, including stamps, coins, banknotes, phonecards, tea bags, trading cards, and many more."
  },
  {
    question: "How does the auto-matching feature work?",
    answer: "Our smart system automatically connects you with collectors who have what you want and want what you have. This makes swapping items easy and efficient."
  },
  {
    question: "Is Colnect available on mobile?",
    answer: "Yes, Colnect has a dedicated mobile app available for both iOS and Android, allowing collectors to manage their inventory on the go."
  },
  {
    question: "Can I sell items through Colnect?",
    answer: "Yes, Colnect offers a marketplace where verified collectors can list and sell their items to a global audience."
  },
  {
    question: "How do I start swapping with other collectors?",
    answer: "Simply add items to your collection and wishlist. Our system will automatically find potential swap partners and notify you of matches."
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We use industry-standard security measures to protect your data and never share your personal information without your consent."
  },
  {
    question: "Can I export my collection data?",
    answer: "Yes, premium users can export their collection data in various formats including CSV and PDF for backup or sharing purposes."
  }
]

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
