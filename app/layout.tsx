import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Colnect - The Smartest Way to Collect and Swap Collectibles Online",
  description:
    "Track, catalog, and exchange rare items from 40+ collectible categories. Join 400,000+ collectors in 250+ countries. Auto-match, swap, and track effortlessly.",
  keywords: "collectibles, stamps, coins, trading cards, swap, collect, catalog, collectors community",
  openGraph: {
    title: "Colnect - The Smartest Way to Collect and Swap Collectibles Online",
    description: "Manage 2M+ items in one place — auto-match, swap, and track effortlessly",
    images: ["/images/collection-image.jpeg"],
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
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
