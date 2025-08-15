"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Globe, Shield, TrendingUp, Check, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { SignupModal } from "../components/signup-modal"
import { FaqSection } from "../components/faq-section"
import { LanguageSelector } from "../components/language-selector"
import { useTranslation } from "@/lib/use-language"

export default function WaysPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const collectingWays = [
    {
      icon: Star,
      title: "Start with What You Love",
      description:
        "Begin your collecting journey with items that spark your passion - stamps from your country, coins from travels, or cards from childhood.",
      tips: ["Choose a theme that excites you", "Start small and focused", "Learn the basics first"],
    },
    {
      icon: Globe,
      title: "Explore Global Markets",
      description:
        "Connect with collectors worldwide to discover rare items and expand your collection beyond local availability.",
      tips: ["Join international forums", "Attend virtual exhibitions", "Learn about global trends"],
    },
    {
      icon: Shield,
      title: "Build Safely & Securely",
      description: "Use trusted platforms and verification methods to ensure authentic items and secure transactions.",
      tips: ["Verify seller reputation", "Use secure payment methods", "Get certificates of authenticity"],
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description:
        "Monitor your collection's growth, value, and completion status to make informed collecting decisions.",
      tips: ["Catalog everything", "Track market values", "Set collecting goals"],
    },
  ]

  const collectionTypes = [
    {
      name: "Stamps",
      description: "Postal history and philatelic treasures",
      image: "/vintage-stamps.png",
      difficulty: "Beginner Friendly",
      investment: "Low to High",
    },
    {
      name: "Coins",
      description: "Numismatic wonders from around the world",
      image: "/placeholder-2hhiz.png",
      difficulty: "Intermediate",
      investment: "Medium to High",
    },
    {
      name: "Banknotes",
      description: "Paper money and currency history",
      image: "/vintage-banknotes.png",
      difficulty: "Intermediate",
      investment: "Medium",
    },
    {
      name: "Phone Cards",
      description: "Telecommunications memorabilia",
      image: "/placeholder-0mbkl.png",
      difficulty: "Beginner Friendly",
      investment: "Low",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/colnect-logo.png" alt="Colnect Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-xl">Colnect</span>
            </Link>

            <div className="flex items-center gap-4">
              <LanguageSelector />
              <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost">{t("logIn")}</Button>
                <SignupModal>
                  <Button>{t("getStarted")}</Button>
                </SignupModal>
              </div>

              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">Smart Ways to Build Your Collection</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover proven strategies and expert tips to grow your collection efficiently and enjoyably.
          </p>
          <SignupModal>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </SignupModal>
        </div>
      </section>

      {/* Collecting Ways Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Four Essential Ways to Collect</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master these fundamental approaches to become a successful collector
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collectingWays.map((way, index) => {
              const IconComponent = way.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{way.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">{way.description}</CardDescription>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Pro Tips:</h4>
                      <ul className="space-y-1">
                        {way.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Collection Types Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Collection Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore different types of collectibles and find your perfect match
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collectionTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={type.image || "/placeholder.svg"} alt={type.name} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="text-xs">
                      {type.difficulty}
                    </Badge>
                    <span className="text-sm text-gray-600">{type.investment}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Explore {type.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Collector Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from experienced collectors who've built amazing collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                location: "Singapore",
                specialty: "Asian Stamps",
                story: "Started with 50 stamps, now owns over 10,000 rare Asian postal items worth $50,000+",
                image: "/asian-woman-collector.png",
              },
              {
                name: "Marco Rodriguez",
                location: "Mexico",
                specialty: "World Coins",
                story: "Turned childhood coin collection into a museum-quality collection spanning 150 countries",
                image: "/placeholder-crobk.png",
              },
              {
                name: "Emma Thompson",
                location: "UK",
                specialty: "Vintage Banknotes",
                story: "Built the world's largest private collection of Commonwealth banknotes in just 8 years",
                image: "/british-woman-banknote-collector.png",
              },
            ].map((story, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>
                    {story.location} • {story.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Collection?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of collectors worldwide and discover the joy of collecting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignupModal>
              <Button size="lg" variant="secondary" className="text-primary">
                {t("getStarted")}
              </Button>
            </SignupModal>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Browse Collections
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/colnect-logo.png" alt="Colnect Logo" width={32} height={32} className="w-8 h-8" />
                <span className="font-bold text-xl">Colnect</span>
              </div>
              <p className="text-gray-400">{t("footerDescription")}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Collecting</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Collection Types
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Expert Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Trading
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Marketplace
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Colnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
