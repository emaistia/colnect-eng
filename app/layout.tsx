import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Colnect | Online Collectibles Catalog & Global Collector Community",
  description:
    "Join Colnect: the global platform to manage, catalog, and swap collectibles online. Explore 40+ categories and connect with collectors worldwide.",
  keywords:
    "online collectibles catalog, coin collecting community, manage stamp collection, collectibles marketplace, collector's app, swap rare items online",
  openGraph: {
    title: "Colnect | Online Collectibles Catalog & Global Collector Community",
    description:
      "Join Colnect: the global platform to manage, catalog, and swap collectibles online. Explore 40+ categories and connect with collectors worldwide.",
    type: "website",
    url: "https://colnect.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colnect | Online Collectibles Catalog & Global Collector Community",
    description:
      "Join Colnect: the global platform to manage, catalog, and swap collectibles online. Explore 40+ categories and connect with collectors worldwide.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Colnect free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Colnect is free to join and use. You can manage your collection, connect with collectors, and explore the catalog without any cost.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of collectibles can I manage on Colnect?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Colnect supports over 40 categories, including stamps, coins, banknotes, phonecards, tea bags, trading cards, and many more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the auto-matching feature work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our smart system automatically connects you with collectors who have what you want and want what you have. This makes swapping items easy and efficient.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Colnect available on mobile?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Colnect has a dedicated mobile app available for both iOS and Android, allowing collectors to manage their inventory on the go.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I sell items through Colnect?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Colnect offers a marketplace where verified collectors can list and sell their items to a global audience.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
