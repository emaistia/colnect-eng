"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Globe, Shield, TrendingUp, MessageCircle, Check, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { SignupModal } from "./components/signup-modal"
import { EmailSignupForm } from "./components/email-signup-form"
import { FaqSection } from "./components/faq-section"
import { ContactSection } from "./components/contact-section"
import { MobileApps } from "./components/mobile-apps"
import { LanguageSelector } from "./components/language-selector"
import { useTranslation } from "@/lib/use-language"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const features = [
    {
      icon: Globe,
      title: t("catalogTitle"),
      description: t("catalogDescription"),
    },
    {
      icon: Shield,
      title: t("tradingTitle"),
      description: t("tradingDescription"),
    },
    {
      icon: TrendingUp,
      title: t("trackingTitle"),
      description: t("trackingDescription"),
    },
    {
      icon: MessageCircle,
      title: t("communityTitle"),
      description: t("communityDescription"),
    },
  ]

  const stats = [
    { number: "2.5M+", label: t("collectors") },
    { number: "50M+", label: t("items") },
    { number: "195", label: t("countries") },
  ]

  const pricingPlans = [
    {
      name: t("freeTitle"),
      price: t("freePrice"),
      description: t("freeDescription"),
      features: [t("basicCatalog"), t("limitedTrades"), t("communityAccess")],
      popular: false,
    },
    {
      name: t("premiumTitle"),
      price: t("premiumPrice"),
      description: t("premiumDescription"),
      features: [t("fullCatalog"), t("unlimitedTrades"), t("prioritySupport"), t("advancedTools")],
      popular: true,
    },
    {
      name: t("proTitle"),
      price: t("proPrice"),
      description: t("proDescription"),
      features: [t("dealerTools"), t("bulkOperations"), t("apiAccess"), t("customReports")],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/images/colnect-logo.png" alt="Colnect Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-xl">Colnect</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t("features")}
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t("pricing")}
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t("about")}
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t("contact")}
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSelector />
              <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost">{t("logIn")}</Button>
                <SignupModal>
                  <Button>{t("getStarted")}</Button>
                </SignupModal>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t("features")}
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t("pricing")}
                </a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t("about")}
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t("contact")}
                </a>
                <div className="flex flex-col gap-2 pt-4 border-t">
                  <Button variant="ghost" className="justify-start">
                    {t("logIn")}
                  </Button>
                  <SignupModal>
                    <Button className="justify-start">{t("getStarted")}</Button>
                  </SignupModal>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">{t("heroTitle")}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{t("heroSubtitle")}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SignupModal>
                  <Button size="lg" className="text-lg px-8 py-6">
                    {t("startCollecting")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignupModal>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  {t("learnMore")}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/collection-image.jpeg"
                  alt="Collection showcase"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("featuresTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("featuresSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <MobileApps />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("pricingTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("pricingSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "$0" && <span className="text-gray-600">/month</span>}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <SignupModal>
                    <Button
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {t("choosePlan")}
                    </Button>
                  </SignupModal>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/premium">
              <Button variant="outline" size="lg">
                View Detailed Comparison
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest news, features, and collecting tips delivered to your inbox.
          </p>
          <EmailSignupForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />

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
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    {t("features")}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    {t("pricing")}
                  </a>
                </li>
                <li>
                  <Link href="/premium" className="hover:text-white transition-colors">
                    Premium Plans
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Apps
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    {t("contact")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
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
                    Community
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
