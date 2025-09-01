import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Colnect: The Community for Stamp, Coin & Banknote Collectors",
  description:
    "Join Colnect, the largest online community for collectors. Easily manage your collection, find rare items, and swap stamps, coins, and banknotes with collectors worldwide. Start for free!",
  keywords: "collectors, stamps, coins, banknotes, collectibles, swap, trading, collection management, community",
  authors: [{ name: "Colnect" }],
  openGraph: {
    title: "Colnect: The Community for Stamp, Coin & Banknote Collectors",
    description:
      "Join Colnect, the largest online community for collectors. Easily manage your collection, find rare items, and swap stamps, coins, and banknotes with collectors worldwide. Start for free!",
    url: "https://colnect.vercel.app",
    siteName: "Colnect",
    images: [
      {
        url: "/images/collection-image.png",
        width: 1200,
        height: 630,
        alt: "Colnect - The Community for Collectors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colnect: The Community for Stamp, Coin & Banknote Collectors",
    description:
      "Join Colnect, the largest online community for collectors. Easily manage your collection, find rare items, and swap stamps, coins, and banknotes with collectors worldwide. Start for free!",
    images: ["/images/collection-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
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
        {children}
        <Toaster />
      </body>
    </html>
  )
}
