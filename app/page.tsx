"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Star,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Globe,
  MessageSquare,
  Heart,
  Zap,
  Smartphone,
  Database,
  Layers,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LanguageSelector } from "./components/language-selector"
import { useLanguage } from "@/lib/use-language"

export default function LandingPage() {
  const { t, language } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // SEO optimized features
  const features = [
    {
      icon: Zap,
      title: "Auto-Matching for Easy Swapping",
      description: "Find swap partners instantly based on your wishlist and duplicates.",
    },
    {
      icon: Shield,
      title: "Safe and Secure Trading",
      description: "Verified user system with global reputation tracking for worry-free exchanges.",
    },
    {
      icon: Database,
      title: "Massive Catalog",
      description: "20+ million items in a collector-curated database updated daily.",
    },
    {
      icon: Layers,
      title: "Multi-Category Support",
      description: "Stamps, coins, phonecards, banknotes, tea bags, and many more.",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Access your full inventory and wishlist anytime, anywhere.",
    },
  ]

  const stats = [
    { number: "400K+", label: "Active Collectors" },
    { number: "20M+", label: "Cataloged Items" },
    { number: "40+", label: "Categories" },
    { number: "250+", label: "Countries" },
  ]

  const collectingCategories = [
    { name: "Stamps", count: "15M+", color: "bg-red-100 text-red-800" },
    { name: "Coins", count: "12M+", color: "bg-yellow-100 text-yellow-800" },
    { name: "Banknotes", count: "8M+", color: "bg-green-100 text-green-800" },
    { name: "Postcards", count: "6M+", color: "bg-blue-100 text-blue-800" },
    { name: "Phone Cards", count: "4M+", color: "bg-purple-100 text-purple-800" },
    { name: "Trading Cards", count: "3M+", color: "bg-pink-100 text-pink-800" },
  ]

  // How it works steps
  const howItWorks = [
    {
      title: "Start Your Free Account",
      description: "Sign up in seconds and gain access to tools made for collectors. No credit card required.",
    },
    {
      title: "Upload and Track Your Collection",
      description:
        "Use our personalized dashboard to organize items, track condition, manage duplicates, and set your wishlist.",
    },
    {
      title: "Connect and Swap Globally",
      description:
        "Use Colnect's smart system to find users looking for what you offer — swap directly, safely, and fast.",
    },
  ]

  // Testimonials
  const testimonials = [
    { quote: "Colnect makes managing my collection so simple!", author: "Alex", country: "USA" },
    { quote: "Swapping collectibles has never been this smooth.", author: "Maria", country: "Spain" },
    { quote: "The best platform for collectors, hands down.", author: "Tom", country: "UK" },
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
                Features
              </a>
              <Link href="/premium" className="text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <LanguageSelector />
              <Button variant="outline">Sign Up</Button>
              <Button>Get Started</Button>
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
                  Features
                </a>
                <Link href="/premium" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Pricing
                </Link>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <LanguageSelector />
                  <Button variant="outline" className="w-full bg-transparent">
                    Sign Up
                  </Button>
                  <Button className="w-full">Get Started</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Updated with PDF content */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Star className="w-4 h-4 mr-2" />
                  Join 400,000+ Collectors Worldwide
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  The Smartest Way to Collect and Swap Collectibles Online
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Manage 2M+ items in one place — auto-match, swap, and track effortlessly. Connect with collectors from
                  250+ countries and discover rare items from 40+ collectible categories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Your Free Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Join 400,000+ Collectors Worldwide
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/images/collection-image.jpeg"
                    alt="Stamp and coin collection on display - Colnect collector platform"
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

      {/* Stats Section - Updated with SEO stats */}
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

      {/* Features Section - Updated with PDF headings */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Collectors Love Colnect</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the tools and features that make collecting easier and more enjoyable
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <h3>Auto-Matching for Easy Swapping</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Find swap partners instantly based on your wishlist and duplicates.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <h3>Safe and Secure Trading</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Verified user system with global reputation tracking for worry-free exchanges.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Database className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <h3>Massive Catalog</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">20+ million items in a collector-curated database updated daily.</p>
                </CardContent>
              </Card>
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
              <p className="text-xl text-gray-600">Discover millions of items across 40+ collecting categories</p>
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

      {/* How It Works Section - Updated with PDF headings */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get started with Colnect in three simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <h3>Start Your Free Account</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sign up in seconds and gain access to tools made for collectors. No credit card required.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <h3>Upload and Track Your Collection</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Use our personalized dashboard to organize items, track condition, manage duplicates, and set your
                    wishlist.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <h3>Connect and Swap Globally</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Use Colnect's smart system to find users looking for what you offer — swap directly, safely, and
                    fast.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mobile Apps</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Take your collection with you wherever you go</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Collect on the Go</h3>
                <p className="text-gray-600 mb-6">
                  Our mobile apps for iOS and Android let you manage your collection, find swap partners, and discover
                  new items anytime, anywhere.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download for iOS
                  </Button>
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download for Android
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
                  <Smartphone className="h-32 w-32 mx-auto text-blue-600 mb-4" />
                  <p className="text-gray-600">Mobile app preview coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Updated with PDF testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonials from Our Community</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear what collectors around the world say about Colnect
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 text-4xl text-gray-300">"</div>
                    <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold text-blue-600">{testimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.country}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated with PDF questions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about Colnect</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How do I start swapping collectibles?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Simply create your free account, add items to your collection and wishlist, and our auto-matching
                    system will connect you with collectors who have what you want and want what you have.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is Colnect free to use?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, Colnect is free to join and use. You can manage your collection, connect with collectors, and
                    explore the catalog without any cost.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I trade coins and stamps internationally?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutely! Colnect connects collectors from 250+ countries worldwide. You can safely trade coins,
                    stamps, and other collectibles internationally with our verified user system.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What types of collectibles can I manage on Colnect?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Colnect supports over 40 categories, including stamps, coins, banknotes, phonecards, tea bags,
                    trading cards, and many more.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is Colnect available on mobile?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, Colnect has a dedicated mobile app available for both iOS and Android, allowing collectors to
                    manage their inventory on the go.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Updated with PDF CTAs */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Collecting Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Manage 2M+ items in one place — auto-match, swap, and track effortlessly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Free Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Join 400,000+ Collectors Worldwide
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 text-sm opacity-75">
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
                <span>Join 400K+ collectors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Image src="/images/colnect-logo.png" alt="Colnect" width={32} height={32} className="rounded" />
                  <span className="text-xl font-bold">Colnect</span>
                </div>
                <p className="text-gray-400 mb-4">
                  The world's largest platform for collectors, connecting 400,000+ enthusiasts across 250+ countries.
                </p>
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
                      Features
                    </a>
                  </li>
                  <li>
                    <Link href="/premium" className="hover:text-white">
                      Pricing
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
                      Contact
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
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Colnect Collectors Community. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
