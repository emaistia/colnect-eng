import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Colnect - The Ultimate Platform for Collectors",
  description:
    "Join millions of collectors worldwide. Catalog, trade, and discover collectibles from stamps to coins, banknotes to phone cards.",
  keywords: "collectibles, stamps, coins, banknotes, phone cards, trading, catalog, collectors",
  authors: [{ name: "Colnect" }],
  creator: "Colnect",
  publisher: "Colnect",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://colnect.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Colnect - The Ultimate Platform for Collectors",
    description: "Join millions of collectors worldwide. Catalog, trade, and discover collectibles.",
    url: "https://colnect.com",
    siteName: "Colnect",
    images: [
      {
        url: "/images/colnect-full-logo.png",
        width: 1200,
        height: 630,
        alt: "Colnect - Collectors Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colnect - The Ultimate Platform for Collectors",
    description: "Join millions of collectors worldwide. Catalog, trade, and discover collectibles.",
    images: ["/images/colnect-full-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
