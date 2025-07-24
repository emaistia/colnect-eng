"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Puzzle,
  Book,
  Globe,
  User,
  ShoppingCart,
  Search,
  Star,
  ArrowRight,
  Users,
  CheckCircle,
  MessageCircle,
  Mail,
  Facebook,
  Instagram,
  Menu,
  X,
  Camera,
  Smartphone,
  Store,
  Package,
  Bell,
  BarChart3,
} from "lucide-react"
import UserJourneyModal from "./components/user-journey-modal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const [selectedUserType, setSelectedUserType] = useState<"collector" | "seller" | "explorer" | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dynamicCTA, setDynamicCTA] = useState("Start Collecting")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  // Base UTM parameters
  const baseUtm = "utm_source=landing_page&utm_medium=website&utm_campaign=colnect_promo"
  const ctaUrl = `https://colnect.com/aff/_emLP/en/account/create?${baseUtm}`

  // Sticky CTA visibility on mobile
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowStickyCTA(window.scrollY > heroBottom)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleUserTypeClick = (userType: "collector" | "seller" | "explorer") => {
    setSelectedUserType(userType)
    setIsModalOpen(true)
  }

  const handleCTAClick = (userType: string) => {
    const ctaMap = {
      collector: "Start Collecting",
      seller: "Start Selling",
      explorer: "Start Exploring",
    }
    setDynamicCTA(ctaMap[userType as keyof typeof ctaMap] || "Start Collecting")
    setIsModalOpen(false)
    window.open(`${ctaUrl}&utm_content=${userType}_journey_cta&ref=ebook_lp`, "_blank")
  }

  // FAQ Data
  const faqData = [
    {
      question: "What is Colnect and how does it work?",
      answer:
        "Colnect is the world's largest online community for collectors of stamps, coins, banknotes, and other collectibles. Our platform helps you catalog your collection, find items you need, and connect with collectors worldwide for trading and selling. With over 20 million items in our database and 400,000+ active users, we make collecting easier and more enjoyable.",
    },
    {
      question: "Is Colnect really free to use?",
      answer:
        "Yes! Colnect is completely free to use. You can create an account, manage your collection, search our catalogs, and connect with other collectors at no cost. We also offer premium memberships with additional features for serious collectors, but all core functionality remains free forever.",
    },
    {
      question: "How does the auto-matching feature work?",
      answer:
        "Our smart algorithm analyzes your collection and wishlist, then compares them with thousands of other collectors worldwide. When it finds someone who has items you want and wants items you have, it suggests a potential swap. You can then contact each other directly through our secure messaging system to arrange the trade.",
    },
    {
      question: "What types of collectibles are supported?",
      answer:
        "Colnect supports a wide range of collectibles including stamps, coins, banknotes, postcards, phone cards, bottle caps, trading cards, beer labels, wine labels, and many more categories. Our catalog is constantly expanding based on collector demand and community contributions.",
    },
    {
      question: "Can I sell my collectibles on Colnect?",
      answer:
        "Yes! While Colnect is primarily focused on trading/swapping, we also have a marketplace where you can list items for sale. You can set your own prices and reach collectors from over 250 countries. Our secure payment system handles transactions safely.",
    },
    {
      question: "How do I ensure safe trading with other collectors?",
      answer:
        "Colnect has several safety features: user ratings and reviews, verified collector badges, secure messaging system, trading guidelines, and a dispute resolution process. We recommend starting with smaller trades to build trust, using tracked shipping, and clearly communicating about item conditions. Please note that Colnect facilitates connections but users are responsible for their own transactions.",
    },
    {
      question: "How accurate is the item identification and catalog?",
      answer:
        "Our catalogs are maintained by a community of expert collectors and are constantly updated. Each item includes detailed information, high-quality images, and specifications. Colnect provides a comprehensive collectibles catalog created as a wiki by contributing collectors. It is expected to replace most printed catalogs by providing more up-to-date, accurate information. If you find an error or missing item, you can contribute corrections or additions to help improve the database for everyone.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes! We have mobile apps available for both Android and iOS devices. We offer webview apps that provide full Colnect access with device notifications, catalog apps for browsing our comprehensive database, and image recognition apps that let you identify collectibles by taking photos. All apps sync with your web account automatically.",
    },
    {
      question: "What languages is Colnect available in?",
      answer:
        "Colnect is available in over 50 languages including English, Spanish, French, German, Italian, Portuguese, Russian, Chinese, Japanese, Arabic, and many more. You can easily switch languages using the language selector, and our community spans the globe.",
    },
    {
      question: "How do I get started as a new collector?",
      answer:
        "Getting started is easy! Create a free account, browse our catalogs to learn about different collectibles, and start building your wishlist. Use our key features like auto-matching to find swap partners, picture search to identify items, and comprehensive catalogs to explore. Our community is very welcoming to beginners, and you'll find plenty of helpful advice and guidance in our forums.",
    },
    {
      question: "What makes Colnect different from other collecting platforms?",
      answer:
        "Colnect stands out with our comprehensive catalogs (20M+ items), advanced auto-matching technology, global community (250+ countries), completely free core features, expert-maintained databases, and focus on both trading and education. We're built by collectors, for collectors.",
    },
    {
      question: "How can I contribute to the Colnect community?",
      answer:
        "There are many ways to contribute: add missing items to catalogs, upload high-quality images, write descriptions, help translate content, moderate community discussions, share your collecting knowledge, and help new collectors get started. Active contributors can earn special recognition and badges.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white print:text-black">
      {/* Navigation Bar */}
      <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm print:static print:shadow-none">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/colnect-logo.png"
              alt="Colnect - Collectors Community Platform"
              width={120}
              height={40}
              className="h-auto print:brightness-0"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="print:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Desktop CTA */}
          <a
            href={`${ctaUrl}&utm_content=header_cta&ref=ebook_lp`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white print:bg-gray-800">Start Free</Button>
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg print:hidden">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#features"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a href={`${ctaUrl}&utm_content=mobile_menu_cta&ref=ebook_lp`} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Start Free</Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky Mobile CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden print:hidden">
          <a href={`${ctaUrl}&utm_content=sticky_mobile_cta&ref=ebook_lp`} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-lg py-4">
              Start Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 print:bg-white print:py-8"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium print:bg-gray-100 print:text-gray-800">
                    🌟 Trusted by 400,000+ Collectors Worldwide
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight print:text-3xl">
                    Collect Smarter,
                    <span className="text-blue-600 print:text-gray-800"> Connect Faster</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed print:text-lg">
                    Manage your collection and find ideal swap partners, all from one place. Colnect offers a comprehensive catalog, automatic matching, and image search for collectors of stamps, coins, banknotes, and more.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 print:hidden">
                  <a
                    href={`${ctaUrl}&utm_content=hero_primary_cta&ref=ebook_lp`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 w-full sm:w-auto"
                    >
                      Start Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 w-full sm:w-auto bg-transparent"
                    onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Learn How It Works
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600 print:text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>100% Free to Start</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No Credit Card Required</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center print:hidden">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200 rounded-lg print:hidden"></div>
                  <Image
                    src="/images/collection-image.jpeg"
                    alt="Collection of stamps and coins showcasing the diversity of collectibles on Colnect"
                    width={500}
                    height={400}
                    className="relative rounded-lg shadow-xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="w-full py-12 bg-white border-b print:py-6 print:border-gray-300">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center print:gap-4">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2 print:text-2xl print:text-gray-800">400K+</div>
                <div className="text-gray-600 print:text-sm">Active Collectors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2 print:text-2xl print:text-gray-800">20M+</div>
                <div className="text-gray-600 print:text-sm">Catalog Items</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2 print:text-2xl print:text-gray-800">250+</div>
                <div className="text-gray-600 print:text-sm">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2 print:text-2xl print:text-gray-800">50+</div>
                <div className="text-gray-600 print:text-sm">Languages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2 print:text-2xl print:text-gray-800">40+</div>
                <div className="text-gray-600 print:text-sm">Collection Categories</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - 3x2 Grid */}
        <section
          id="features"
          className="w-full py-16 md:py-24 bg-gray-50 print:bg-white print:py-8 print:page-break-before-always"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 print:mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 print:text-2xl">
                Why Collectors Love Colnect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto print:text-base">
                Powerful tools and features designed specifically for collectors, by collectors
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:gap-4 print:grid-cols-2">
              {/* Auto-Matching */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-6 text-center print:p-4">
                  <div className="flex justify-center mb-4 print:mb-2">
                    <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                      <Puzzle className="h-8 w-8 text-blue-600 print:h-6 print:w-6 print:text-gray-800" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 print:text-lg print:mb-2">Auto-Matching</h3>
                  <p className="text-gray-600 print:text-sm">
                    Instantly find swap partners for your wishlist. Our smart algorithm connects you with the perfect
                    match, finding collectors who have what you want and want what you have.
                  </p>
                </CardContent>
              </Card>

              {/* Comprehensive Catalogs */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-6 text-center print:p-4">
                  <div className="flex justify-center mb-4 print:mb-2">
                    <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                      <Book className="h-8 w-8 text-blue-600 print:h-6 print:w-6 print:text-gray-800" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 print:text-lg print:mb-2">
                    Comprehensive Catalogs
                  </h3>
                  <p className="text-gray-600 print:text-sm">
                    Colnect provides a comprehensive collectibles catalog. The catalog is a wiki created by contributing
                    collectors, expected to replace printed catalogs with more up-to-date accurate information.
                  </p>
                </CardContent>
              </Card>

              {/* Global Community */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-6 text-center print:p-4">
                  <div className="flex justify-center mb-4 print:mb-2">
                    <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                      <Globe className="h-8 w-8 text-blue-600 print:h-6 print:w-6 print:text-gray-800" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 print:text-lg print:mb-2">Global Community</h3>
                  <p className="text-gray-600 print:text-sm">
                    Connect with trusted collectors from 250+ countries in our secure, moderated environment. Available
                    in 50+ languages. Expand your collection with international treasures with ease.
                  </p>
                </CardContent>
              </Card>

              {/* The Collector's Marketplace */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-6 text-center print:p-4">
                  <div className="flex justify-center mb-4 print:mb-2">
                    <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                      <Store className="h-8 w-8 text-blue-600 print:h-6 print:w-6 print:text-gray-800" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 print:text-lg print:mb-2">
                    The Collector's Marketplace
                  </h3>
                  <p className="text-gray-600 print:text-sm">
                    A marketplace built for collectors, by collectors. Your trusted hub to buy and sell with confidence.
                    Find rare items from trusted sellers or list your duplicates for a dedicated global audience.
                  </p>
                </CardContent>
              </Card>

              {/* Collection on the Go */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-6 text-center print:p-4">
                  <div className="flex justify-center mb-4 print:mb-2">
                    <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                      <Smartphone className="h-8 w-8 text-blue-600 print:h-6 print:w-6 print:text-gray-800" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 print:text-lg print:mb-2">
                    Collection on the Go
                  </h3>
                  <p className="text-gray-600 print:text-sm">
                    With our dedicated mobile apps, your entire collection inventory is always in your pocket. Available for iOS &amp; Android. 
                  </p>
                </CardContent>
              </Card>

              {/* Catalog with Your Camera */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-6 text-center print:p-4">
                  <div className="flex justify-center mb-4 print:mb-2">
                    <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                      <Camera className="h-8 w-8 text-blue-600 print:h-6 print:w-6 print:text-gray-800" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 print:text-lg print:mb-2">
                    Catalog with Your Camera
                  </h3>
                  <p className="text-gray-600 print:text-sm">
                    Go from a physical item to a fully cataloged digital entry in seconds. Snap a photo, and our Image
                    Search will find it in our vast catalog. One click adds it to your Collection, Swap, or Wishlist.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* User Journey Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-white print:py-8 print:page-break-before-always">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 print:mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 print:text-2xl">
                How Do You Want to Start?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6 print:text-base">
                Whether you're here to build your collection, make trades, or just explore, we’ve got the features to help you do it. You can collect, sell, or simply browse, start with what feels right today.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto print:gap-4">
              {/* Collector Card */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-8 flex flex-col justify-between h-full print:p-4">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                        <User className="h-8 w-8 text-blue-600 print:h-6 print:w-6 print:text-gray-800" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 print:text-lg">I'm a Collector</h3>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 print:text-base">
                      Build & Track Your Collection with Confidence
                    </h4>
                    <p className="text-gray-600 mb-6 print:text-sm">
                      Whether you're collecting stamps, coins, or banknotes, start your hobby with the best tools
                      available.
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-blue-600 font-bold print:text-gray-800">🔑</span>
                        <span className="font-semibold text-gray-900 print:text-sm">Key Features:</span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600 print:text-xs">
                        <li className="flex items-start gap-2">
                          <Package className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Personal Collection Manager with condition & quantity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Puzzle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Auto-Matching with global collectors based on your wishlist</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BarChart3 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Inventory system to organize duplicates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Camera className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Image Search to identify items you own or wish</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a
                    href={`${ctaUrl}&utm_content=collector_start_cta&ref=ebook_lp`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="print:hidden"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Start Here
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Seller Card */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-8 flex flex-col justify-between h-full print:p-4">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                        <ShoppingCart className="h-8 w-8 text-blue-600 print:h-6 print:w-6 print:text-gray-800" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 print:text-lg">I'm a Seller</h3>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 print:text-base">
                      Reach Buyers Who Are Actively Looking for Your Items
                    </h4>
                    <p className="text-gray-600 mb-6 print:text-sm">
                      Colnect connects you with collectors from 250+ countries via niche-friendly tools.
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-blue-600 font-bold print:text-gray-800">🔑</span>
                        <span className="font-semibold text-gray-900 print:text-sm">Key Features:</span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600 print:text-xs">
                        <li className="flex items-start gap-2">
                          <Package className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Add your inventory with detailed item conditions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Puzzle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Use Wishlist Matching to surface your items to ready buyers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BarChart3 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Track trades and manage swaps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Bell className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Get notified when users search for items you list</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a
                    href={`${ctaUrl}&utm_content=seller_start_cta&ref=ebook_lp`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="print:hidden"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Start Here
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Explorer Card */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden print:shadow-none print:border print:border-gray-300 md:col-span-2 lg:col-span-1">
                <CardContent className="p-8 flex flex-col justify-between h-full print:p-4">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                        <Search className="h-8 w-8 text-blue-600 print:h-6 print:w-6 print:text-gray-800" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 print:text-lg">I'm Just Exploring</h3>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 print:text-base">
                      Discover a World of Collectibles with One Click
                    </h4>
                    <p className="text-gray-600 mb-6 print:text-sm">
                      View millions of catalogued items, from vintage stamps to rare banknotes.
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-blue-600 font-bold print:text-gray-800">🔑</span>
                        <span className="font-semibold text-gray-900 print:text-sm">Key Features:</span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600 print:text-xs">
                        <li className="flex items-start gap-2">
                          <Book className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Browse our comprehensive catalog with 40+ collectible categories. </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Discover what makes each collectible unique</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Start your wishlist anytime</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 print:text-gray-800" />
                          <span>Learn from community discussions</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a
                    href={`${ctaUrl}&utm_content=explorer_start_cta&ref=ebook_lp`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="print:hidden"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Start Here
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-16 md:py-24 bg-blue-50 print:bg-white print:py-8 print:page-break-before-always"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 print:mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 print:text-2xl">
                Loved by Collectors Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto print:text-base">
                See what our community members have to say about their Colnect experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto print:gap-4">
              {/* Collector Testimonial */}
              <Card className="border-none shadow-lg print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-8 print:p-4">
                  <div className="flex items-center gap-1 mb-4 print:mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500 print:h-4 print:w-4" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic print:text-sm print:mb-3">
                    "I've been collecting stamps for 30 years, but Colnect revolutionized my hobby. The auto-matching
                    feature helped me complete more sets in the past year than in the previous five! Managing my
                    collection has never been easier."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 print:w-8 print:h-8 print:bg-gray-100">
                      <span className="text-blue-600 font-bold text-lg print:text-gray-800 print:text-sm">M</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 print:text-sm">Maria Santos</div>
                      <div className="text-gray-600 text-sm print:text-xs">Stamp Collector, Brazil</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Seller Testimonial */}
              <Card className="border-none shadow-lg print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-8 print:p-4">
                  <div className="flex items-center gap-1 mb-4 print:mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500 print:h-4 print:w-4" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic print:text-sm print:mb-3">
                    "As a coin dealer, Colnect's marketplace has been a game-changer. The global reach and dedicated
                    collector audience means my rare items find the right buyers quickly. The catalog integration makes
                    listing so much easier."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 print:w-8 print:h-8 print:bg-gray-100">
                      <span className="text-blue-600 font-bold text-lg print:text-gray-800 print:text-sm">J</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 print:text-sm">James Wilson</div>
                      <div className="text-gray-600 text-sm print:text-xs">Coin Dealer, United Kingdom</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Explorer Testimonial */}
              <Card className="border-none shadow-lg print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-8 print:p-4">
                  <div className="flex items-center gap-1 mb-4 print:mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500 print:h-4 print:w-4" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic print:text-sm print:mb-3">
                    "I started as just curious about banknote collecting, and Colnect made it so easy to explore and
                    learn. The picture search helped me identify items I inherited, and now I'm an active collector with
                    a growing collection!"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 print:w-8 print:h-8 print:bg-gray-100">
                      <span className="text-blue-600 font-bold text-lg print:text-gray-800 print:text-sm">A</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 print:text-sm">Anna Kowalski</div>
                      <div className="text-gray-600 text-sm print:text-xs">New Collector, Poland</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-16 md:py-24 bg-white print:py-8 print:page-break-before-always">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 print:mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 print:text-2xl">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto print:text-base">
                Everything you need to know about Colnect and how to get the most out of our platform
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4 print:space-y-2">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-6 bg-gray-50 print:bg-white print:px-4 print:py-2"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-4 print:py-2 print:text-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 leading-relaxed print:pb-2 print:text-sm print:leading-normal">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-16 bg-gray-50 print:bg-white print:py-6 print:page-break-before-always"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 print:mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 print:text-2xl">Get in Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto print:text-base">
                Have questions? Need help? Want to share feedback? We'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto print:gap-4">
              {/* Email Contact */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-4 text-center print:p-3">
                  <div className="flex justify-center mb-3 print:mb-2">
                    <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                      <Mail className="h-6 w-6 text-blue-600 print:h-5 print:w-5 print:text-gray-800" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 print:text-base print:mb-1">Email Support</h3>
                  <p className="text-gray-600 mb-4 text-sm print:text-xs print:mb-2">
                    Send us an email and we'll get back to you within 24 hours
                  </p>
                  <a href="mailto:emaistia@colnect.com" className="print:hidden">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">Send Email</Button>
                  </a>
                  <div className="hidden print:block text-xs text-gray-600">Email: emaistia@colnect.com</div>
                </CardContent>
              </Card>

              {/* Community Forum */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-4 text-center print:p-3">
                  <div className="flex justify-center mb-3 print:mb-2">
                    <div className="p-3 bg-blue-100 rounded-full print:bg-gray-100">
                      <Users className="h-6 w-6 text-blue-600 print:h-5 print:w-5 print:text-gray-800" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 print:text-base print:mb-1">Community Forum</h3>
                  <p className="text-gray-600 mb-4 text-sm print:text-xs print:mb-2">
                    Join discussions with other collectors in our community forum
                  </p>
                  <a
                    href="https://colnect.com/en/forums"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="print:hidden"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                      Visit Forum
                    </Button>
                  </a>
                  <div className="hidden print:block text-xs text-gray-600">Forum: colnect.com/en/forums</div>
                </CardContent>
              </Card>

              {/* Follow Us Card */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:border-gray-300">
                <CardContent className="p-4 text-center print:p-3">
                  <div className="mb-3 print:mb-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 print:text-base print:mb-1">Follow Us</h3>
                    <p className="text-gray-600 mb-4 text-sm print:text-xs print:mb-2">
                      Stay updated with the latest news, tips, and community highlights
                    </p>
                    <div className="flex justify-center gap-3 print:hidden">
                      <a
                        href="https://www.threads.net/@colnect.indonesia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Follow us on Threads"
                      >
                        <Image
                          src="/images/threads-logo.png"
                          alt="Threads"
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/colnect.indonesia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-pink-600 transition-colors"
                        aria-label="Follow us on Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.facebook.com/colnect.filatelis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Follow us on Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@colnect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-black transition-colors"
                        aria-label="Follow us on TikTok"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </a>
                    </div>
                    <div className="hidden print:block text-xs text-gray-600">
                      <p>Threads: @colnect.indonesia</p>
                      <p>Instagram: @colnect.indonesia</p>
                      <p>Facebook: colnect.filatelis</p>
                      <p>TikTok: @colnect</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section with Integrated Bonuses - Compressed */}
        <section className="w-full py-6 md:py-8 bg-blue-600 text-white print:hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Ready to Collect Smarter and Connect Faster?</h2>
              <p className="text-base text-blue-100 mb-3 max-w-2xl mx-auto">
                Start your collecting journey today. It's completely free, and packed with tools to grow your collection with confidence.
              </p>
            </div>

            {/* Integrated Bonus Section */}
            <div className="max-w-3xl mx-auto mb-3">
              <div className="text-center mb-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">Bonus for New Members:</h3>
              </div>

              <div className="space-y-1.5 mb-3">
                {/* Quick-start Guide Bonus */}
                <div className="flex items-start gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="flex-shrink-0">
                    <div className="text-lg">📘</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      Quick-start Guide: "5 Mistakes New Collectors Make"
                    </h4>
                    <p className="text-xs text-blue-100">
                      Essential tips to avoid common pitfalls and start your collection right.
                    </p>
                  </div>
                </div>

                {/* Pro Tips Email Series */}
                <div className="flex items-start gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="flex-shrink-0">
                    <div className="text-lg">📬</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white mb-0.5">Pro Tips Email Series</h4>
                    <p className="text-xs text-blue-100">
                      Exclusive insights from seasoned collectors delivered to your inbox.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Made Bigger */}
            <div className="text-center mb-3">
              <a
                href={`${ctaUrl}&utm_content=final_cta_with_bonuses&ref=ebook_lp`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                  👉 Start Free – Get Your Bonus Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Benefits and Happy Colnecting */}
            <div className="text-center">
              <div className="text-blue-200 text-xs mb-0.5">
                ✓ No credit card required ✓ Instant access ✓ Join 400,000+ collectors
              </div>
              <div className="text-blue-100 text-base font-semibold">Happy Colnecting 🥳</div>
            </div>

            {/* Footer content integrated into CTA section */}
            <div className="text-center mt-4 pt-2 border-t border-blue-700 print:hidden">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Image
                  src="/images/colnect-logo.png"
                  alt="Colnect Logo"
                  width={60} // Further reduced logo size
                  height={18}
                  className="h-auto brightness-0 invert"
                />
              </div>
              <p className="text-blue-100 text-xs mb-1 max-w-md mx-auto ml-auto leading-5 tracking-tight">
                COLLECT SMARTER, CONNECT FASTER         
              </p>
              <p className="text-blue-200 text-xs">
                © {new Date().getFullYear()} Colnect Ltd. All rights reserved. Made with ❤️ for collectors worldwide.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* User Journey Modal */}
      <UserJourneyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userType={selectedUserType}
        onCTAClick={handleCTAClick}
      />

      {/* Floating AI Assistant */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
          onClick={() => window.open("https://colnect.com/en/help", "_blank")}
          aria-label="AI Assistant Help"
        >
          
        </Button>
      </div>
    </div>
  )
}
