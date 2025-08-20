"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/use-language"

export function FAQSection() {
  const { language } = useLanguage()

  // SEO-optimized FAQ content
  const faqs = [
    {
      question: language === "id" ? "Apakah Colnect gratis digunakan?" : "Is Colnect free to use?",
      answer:
        language === "id"
          ? "Ya, Colnect gratis untuk bergabung dan digunakan. Anda dapat mengelola koleksi, terhubung dengan kolektor, dan menjelajahi katalog tanpa biaya apapun."
          : "Yes, Colnect is free to join and use. You can manage your collection, connect with collectors, and explore the catalog without any cost.",
    },
    {
      question:
        language === "id"
          ? "Jenis koleksi apa yang dapat saya kelola di Colnect?"
          : "What types of collectibles can I manage on Colnect?",
      answer:
        language === "id"
          ? "Colnect mendukung lebih dari 40 kategori, termasuk perangko, koin, uang kertas, kartu telepon, kantong teh, kartu perdagangan, dan banyak lagi."
          : "Colnect supports over 40 categories, including stamps, coins, banknotes, phonecards, tea bags, trading cards, and many more.",
    },
    {
      question:
        language === "id"
          ? "Bagaimana cara kerja fitur pencocokan otomatis?"
          : "How does the auto-matching feature work?",
      answer:
        language === "id"
          ? "Sistem pintar kami secara otomatis menghubungkan Anda dengan kolektor yang memiliki apa yang Anda inginkan dan menginginkan apa yang Anda miliki. Ini membuat pertukaran item menjadi mudah dan efisien."
          : "Our smart system automatically connects you with collectors who have what you want and want what you have. This makes swapping items easy and efficient.",
    },
    {
      question: language === "id" ? "Apakah Colnect tersedia di perangkat mobile?" : "Is Colnect available on mobile?",
      answer:
        language === "id"
          ? "Ya, Colnect memiliki aplikasi mobile khusus yang tersedia untuk iOS dan Android, memungkinkan kolektor mengelola inventaris mereka saat bepergian."
          : "Yes, Colnect has a dedicated mobile app available for both iOS and Android, allowing collectors to manage their inventory on the go.",
    },
    {
      question: language === "id" ? "Bisakah saya menjual item melalui Colnect?" : "Can I sell items through Colnect?",
      answer:
        language === "id"
          ? "Ya, Colnect menawarkan marketplace di mana kolektor terverifikasi dapat mendaftarkan dan menjual item mereka ke audiens global."
          : "Yes, Colnect offers a marketplace where verified collectors can list and sell their items to a global audience.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about Colnect</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
