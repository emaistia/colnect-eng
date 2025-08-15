"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Users,
  Shield,
  Star,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Globe,
  MessageSquare,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SignupModal } from "../components/signup-modal"
import { FAQSection } from "../components/faq-section"
import { ContactSection } from "../components/contact-section"
import { MobileApps } from "../components/mobile-apps"
import { EmailSignupForm } from "../components/email-signup-form"
import { LanguageSelector } from "../components/language-selector"
import { useLanguage } from "@/lib/use-language"

export default function WaysPage() {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: Search,
      title: t("catalogTitle"),
      description: t("catalogDescription"),
    },
    {
      icon: Shield,
      title: t("tradingTitle"),
      description: t("tradingDescription"),
    },
    {
      icon: Users,
      title: t("communityTitle"),
      description: t("communityDescription"),
    },
  ]

  const stats = [
    { number: "2M+", label: "Active Collectors" },
    { number: "50M+", label: "Cataloged Items" },
    { number: "600+", label: "Categories" },
    { number: "195", label: "Countries" },
  ]

  const collectingCategories = [
    { name: "Stamps", count: "15M+", color: "bg-red-100 text-red-800" },
    { name: "Coins", count: "12M+", color: "bg-yellow-100 text-yellow-800" },
    { name: "Banknotes", count: "8M+", color: "bg-green-100 text-green-800" },
    { name: "Postcards", count: "6M+", color: "bg-blue-100 text-blue-800" },
    { name: "Phone Cards", count: "4M+", color: "bg-purple-100 text-purple-800" },
    { name: "Trading Cards", count: "3M+", color: "bg-pink-100 text-pink-800" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/images/colnect-logo.png" alt="Colnect" width={40} height={40} className="rounded-lg" />
              <span className="text-2xl font-bold text-blue-600">Colnect</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t("features")}
              </a>
              <Link href="/premium" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t("pricing")}
              </Link>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t("about")}
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t("contact")}
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <LanguageSelector />
              <SignupModal campaign="colnect_ways" source="ways_page" medium="header">
                <Button variant="outline">{t("signUp")}</Button>
              </SignupModal>
              <SignupModal campaign="colnect_ways" source="ways_page" medium="header">
                <Button>{t("getStarted")}</Button>
              </SignupModal>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {t("features")}
                </a>
                <Link href="/premium" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {t("pricing")}
                </Link>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {t("about")}
                </a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {t("contact")}
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <LanguageSelector />
                  <SignupModal campaign="colnect_ways" source="ways_page" medium="mobile_menu">
                    <Button variant="outline" className="w-full bg-transparent">
                      {t("signUp")}
                    </Button>
                  </SignupModal>
                  <SignupModal campaign="colnect_ways" source="ways_page" medium="mobile_menu">
                    <Button className="w-full">{t("getStarted")}</Button>
                  </SignupModal>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Star className="w-4 h-4 mr-2" />
                  Discover New Ways to Collect
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">{t("heroTitle")}</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">{t("heroSubtitle")}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <SignupModal campaign="colnect_ways" source="ways_page" medium="hero">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      {t("startCollecting")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </SignupModal>
                  <Button size="lg" variant="outline">
                    {t("learnMore")}
                  </Button>
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
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-purple-200 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("featuresTitle")}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("featuresSubtitle")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Collecting Categories</h2>
              <p className="text-xl text-gray-600">
                Discover millions of items across hundreds of collecting categories
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {collectingCategories.map((category, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mx-auto mb-3"></div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <Badge variant="secondary" className={category.color}>
                      {category.count}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <MobileApps />

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("pricingTitle")}</h2>
              <p className="text-xl text-gray-600">{t("pricingSubtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Free Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl">{t("freeTitle")}</CardTitle>
                  <CardDescription>{t("freeDescription")}</CardDescription>
                  <div className="text-4xl font-bold">{t("freePrice")}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Basic collection cataloging</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Community access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Basic trading features</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Mobile app access</span>
                    </li>
                  </ul>
                  <SignupModal campaign="colnect_ways" source="ways_page" medium="pricing">
                    <Button className="w-full bg-transparent" variant="outline">
                      Get Started {t("free")}
                    </Button>
                  </SignupModal>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative border-2 border-blue-600 shadow-lg">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">{t("popular")}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("premiumTitle")}</CardTitle>
                  <CardDescription>{t("premiumDescription")}</CardDescription>
                  <div className="text-4xl font-bold">
                    {t("premiumPrice")}
                    <span className="text-lg text-gray-500">{t("month")}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Unlimited collection items</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Export capabilities</span>
                    </li>
                  </ul>
                  <Link href="/premium">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Upgrade to Premium</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Final CTA Section - Compressed for laptop screens */}
      <section className="py-8 lg:py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Ready to Start Your Collecting Journey?</h2>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 opacity-90">
              Join millions of collectors worldwide and discover the joy of organized collecting.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-6 lg:mb-8">
              <SignupModal campaign="colnect_ways" source="ways_page" medium="final_section">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Collecting Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignupModal>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Join 2M+ collectors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Compressed margins */}
      <footer className="bg-gray-900 text-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Image src="/images/colnect-logo.png" alt="Colnect" width={32} height={32} className="rounded" />
                  <span className="text-xl font-bold">Colnect</span>
                </div>
                <p className="text-gray-400 mb-4">{t("footerDescription")}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <MessageSquare className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Heart className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#features" className="hover:text-white">
                      {t("features")}
                    </a>
                  </li>
                  <li>
                    <Link href="/premium" className="hover:text-white">
                      {t("pricing")}
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Mobile Apps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      API
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white">
                      {t("contact")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Status
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <p className="text-gray-400 mb-4">Get collecting tips and updates</p>
                <EmailSignupForm
                  campaign="colnect_ways"
                  source="ways_page"
                  medium="footer"
                  placeholder="Your email"
                  buttonText="Subscribe"
                />
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 lg:pt-8 text-center text-gray-400">
              <p>&copy; 2024 Colnect. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
