"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left font-medium">
          What types of collectibles can I swap on Colnect?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Colnect supports a wide range of collectibles including stamps, coins, banknotes, postcards, phone cards,
          bottle caps, trading cards, and more. Our platform is constantly expanding to include new categories based on
          collector demand.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left font-medium">How does the auto-matching feature work?</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Our smart algorithm analyzes your collection and wishlist, then compares them with other collectors around the
          world. When it finds someone who has items you want and wants items you have, it suggests a match. You can
          then initiate contact and arrange a swap directly through our platform.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-left font-medium">Is Colnect free to use?</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          <strong>Yes, Colnect is completely free to use!</strong> All core features are available to free users,
          including managing your collection, finding swap partners, and communicating with other collectors. You can
          enjoy the full collecting experience without any cost. Premium membership is entirely optional and offers
          additional features for collectors who want to enhance their experience.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-left font-medium">
          What's the difference between free and premium?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          The free version of Colnect includes all essential features needed to manage your collection and connect with
          other collectors. Premium membership adds convenience features like unlimited best matches, extended custom
          lists, ad-free browsing, and more. These additional features are designed to enhance the experience for
          serious collectors, but are not required to use and enjoy the platform.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-left font-medium">
          How do I ensure safe swapping with collectors from other countries?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Colnect has built-in safety features including user ratings and reviews, verified user badges, and a dispute
          resolution system. We recommend starting with smaller swaps to build trust, using tracked shipping methods,
          and communicating clearly about the condition of items. Our community guidelines also help ensure a positive
          experience for all collectors.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className="text-left font-medium">Can I sell my collectibles on Colnect?</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Colnect is primarily a swapping platform, but we do allow members to offer items for sale. You can indicate in
          your collection which items you're willing to sell and set prices. However, our main focus is on facilitating
          swaps between collectors who share a passion for collecting.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger className="text-left font-medium">In which languages is Colnect available?</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Colnect is available in over 40 languages including English, Bahasa Indonesia, Español, Deutsch, Français,
          Italiano, Português, Русский, 中文, 日本語, العربية, Nederlands, Polski, Türkçe, 한국어, and many more. You
          can easily switch languages using the language selector in the top navigation bar. Our global community of
          collectors communicates in many languages, and our built-in translation tools help facilitate communication
          between collectors who speak different languages.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
