"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "What is Colnect and how does it work?",
    answer:
      "Colnect is the world's largest online community for collectors of stamps, coins, banknotes, and other collectibles. Our platform helps you catalog your collection, find items you need, and connect with collectors worldwide for trading and selling. With over 2 million items in our database and 400,000+ active users, we make collecting easier and more enjoyable.",
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
    question: "How do I ensure safe trading with other collectors?",
    answer:
      "Colnect has several safety features: user ratings and reviews, verified collector badges, secure messaging system, trading guidelines, and a dispute resolution process. We recommend starting with smaller trades to build trust, using tracked shipping, and clearly communicating about item conditions.",
  },
  {
    question: "Can I sell my collectibles on Colnect?",
    answer:
      "Yes! While Colnect is primarily focused on trading/swapping, we also have a marketplace where you can list items for sale. You can set your own prices and reach collectors from over 250 countries. Our secure payment system handles transactions safely.",
  },
  {
    question: "How accurate is the item identification and catalog?",
    answer:
      "Our catalogs are maintained by a community of expert collectors and are constantly updated. Each item includes detailed information, high-quality images, and specifications. If you find an error or missing item, you can contribute corrections or additions to help improve the database for everyone.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes! We have mobile apps available for both Android and iOS devices. You can manage your collection, search catalogs, communicate with other collectors, and even identify items using your phone's camera. The apps sync with your web account automatically.",
  },
  {
    question: "What languages is Colnect available in?",
    answer:
      "Colnect is available in over 40 languages including English, Spanish, French, German, Italian, Portuguese, Russian, Chinese, Japanese, Arabic, and many more. You can easily switch languages using the language selector, and our community spans the globe.",
  },
  {
    question: "How do I get started as a new collector?",
    answer:
      "Getting started is easy! Create a free account, browse our catalogs to learn about different collectibles, join collector groups in your areas of interest, and start building your wishlist. Our community is very welcoming to beginners, and you'll find plenty of helpful advice and guidance.",
  },
  {
    question: "What makes Colnect different from other collecting platforms?",
    answer:
      "Colnect stands out with our comprehensive catalogs (2M+ items), advanced auto-matching technology, global community (250+ countries), completely free core features, expert-maintained databases, and focus on both trading and education. We're built by collectors, for collectors.",
  },
  {
    question: "How can I contribute to the Colnect community?",
    answer:
      "There are many ways to contribute: add missing items to catalogs, upload high-quality images, write descriptions, help translate content, moderate community discussions, share your collecting knowledge, and help new collectors get started. Active contributors can earn special recognition and badges.",
  },
]

function FaqSection() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Colnect and how to get the most out of our platform
          </p>
        </div>

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
      </div>
    </section>
  )
}

export default FaqSection
export { FaqSection }
