"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslation } from "@/lib/use-language"

const faqData = {
  en: [
    {
      question: "What is Colnect?",
      answer:
        "Colnect is the world's largest platform for collectors, offering comprehensive catalogs, secure trading, and a global community for stamps, coins, banknotes, phone cards, and many other collectibles.",
    },
    {
      question: "Is Colnect free to use?",
      answer:
        "Yes! Colnect offers a free plan that includes basic catalog access, up to 10 trades per month, and community access. We also offer Premium and Pro plans with additional features.",
    },
    {
      question: "How does the trading system work?",
      answer:
        "Our secure trading platform connects collectors worldwide. You can browse want lists, make trade offers, and complete transactions with built-in protection and feedback systems.",
    },
    {
      question: "What types of collectibles are supported?",
      answer:
        "Colnect supports a wide variety of collectibles including stamps, coins, banknotes, phone cards, postcards, bottle caps, and many more categories.",
    },
    {
      question: "How accurate is the catalog information?",
      answer:
        "Our catalogs are maintained by a community of expert collectors and are constantly updated. We strive for the highest accuracy and welcome contributions from our users.",
    },
    {
      question: "Can I access my collection on mobile?",
      answer:
        "Yes! We offer mobile apps for both iOS and Android, allowing you to access your collection, make trades, and browse catalogs on the go.",
    },
  ],
  id: [
    {
      question: "Apa itu Colnect?",
      answer:
        "Colnect adalah platform terbesar di dunia untuk kolektor, menawarkan katalog komprehensif, perdagangan aman, dan komunitas global untuk perangko, koin, uang kertas, kartu telepon, dan banyak koleksi lainnya.",
    },
    {
      question: "Apakah Colnect gratis digunakan?",
      answer:
        "Ya! Colnect menawarkan paket gratis yang mencakup akses katalog dasar, hingga 10 perdagangan per bulan, dan akses komunitas. Kami juga menawarkan paket Premium dan Pro dengan fitur tambahan.",
    },
    {
      question: "Bagaimana sistem perdagangan bekerja?",
      answer:
        "Platform perdagangan aman kami menghubungkan kolektor di seluruh dunia. Anda dapat menjelajahi daftar keinginan, membuat penawaran perdagangan, dan menyelesaikan transaksi dengan perlindungan dan sistem umpan balik terintegrasi.",
    },
    {
      question: "Jenis koleksi apa yang didukung?",
      answer:
        "Colnect mendukung berbagai macam koleksi termasuk perangko, koin, uang kertas, kartu telepon, kartu pos, tutup botol, dan banyak kategori lainnya.",
    },
    {
      question: "Seberapa akurat informasi katalog?",
      answer:
        "Katalog kami dikelola oleh komunitas kolektor ahli dan terus diperbarui. Kami berusaha untuk akurasi tertinggi dan menyambut kontribusi dari pengguna kami.",
    },
    {
      question: "Bisakah saya mengakses koleksi saya di mobile?",
      answer:
        "Ya! Kami menawarkan aplikasi mobile untuk iOS dan Android, memungkinkan Anda mengakses koleksi, melakukan perdagangan, dan menjelajahi katalog saat bepergian.",
    },
  ],
}

export function FaqAccordion() {
  const { t, language } = useTranslation()
  const faqs = faqData[language]

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">{t("faqTitle")}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
