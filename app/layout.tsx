import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Colnect | Online Collectibles Catalog & Global Collector Community",
  description:
    "Join Colnect: the global platform to manage, catalog, and swap collectibles online. Explore 40+ categories and connect with collectors worldwide.",
  keywords:
    "online collectibles catalog, coin collecting community, manage stamp collection, collectibles marketplace, collector's app, swap rare items online",
  authors: [{ name: "Colnect" }],
  openGraph: {
    title: "Colnect | Online Collectibles Catalog & Global Collector Community",
    description:
      "Join Colnect: the global platform to manage, catalog, and swap collectibles online. Explore 40+ categories and connect with collectors worldwide.",
    url: "https://colnect.com",
    siteName: "Colnect",
    images: [
      {
        url: "/images/colnect-full-logo.png",
        width: 1200,
        height: 630,
        alt: "Colnect - Global Collector Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colnect | Online Collectibles Catalog & Global Collector Community",
    description:
      "Join Colnect: the global platform to manage, catalog, and swap collectibles online. Explore 40+ categories and connect with collectors worldwide.",
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
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
