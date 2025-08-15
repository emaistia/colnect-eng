"use client"

import { FaqAccordion } from "./faq-accordion"

export function FaqSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <FaqAccordion />
      </div>
    </section>
  )
}
