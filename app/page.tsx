"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Star, Zap, Database, CheckCircle } from "lucide-react"
import { EmailSignupForm } from "./components/email-signup-form"
import { SignupModal } from "./components/signup-modal"
import { FAQSection } from "./components/faq-section"
import { ContactSection } from "./components/contact-section"
import { MobileApps } from "./components/mobile-apps"
import { LanguageSelector } from "./components/language-selector"
import { useLanguage } from "@/lib/use-language"

export default function LandingPage() {
  const [showSignupModal, setShowSignupModal] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/images/colnect-logo.png" alt="Colnect Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold text-blue-600">Colnect</span>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button onClick={() => setShowSignupModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Your Free Collection
            </Button>
          </div>
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
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl text-gray-300">"</div>
                  <p className="text-lg mb-6 italic">"Colnect makes managing my collection so simple!"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">A</span>
                    </div>
                    <div>
                      <p className="font-semibold">Alex</p>
                      <p className="text-sm text-gray-500">USA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl text-gray-300">"</div>
                  <p className="text-lg mb-6 italic">"Swapping collectibles has never been this smooth."</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">M</span>
                    </div>
                    <div>
                      <p className="font-semibold">Maria</p>
                      <p className="text-sm text-gray-500">Spain</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl text-gray-300">"</div>
                  <p className="text-lg mb-6 italic">"The best platform for collectors, hands down."</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">T</span>
                    </div>
                    <div>
                      <p className="font-semibold">Tom</p>
                      <p className="text-sm text-gray-500">UK</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <MobileApps />

      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Colnect</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest updates, collecting tips, and exclusive offers delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <EmailSignupForm
              placeholder="Enter your email address"
              buttonText="Subscribe"
              campaign="newsletter"
              source="landing-page"
              medium="email-signup"
            />
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

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/images/colnect-logo.png" alt="Colnect Logo" width={32} height={32} className="rounded" />
                <span className="text-xl font-bold">Colnect</span>
              </div>
              <p className="text-gray-400 text-sm">
                The global platform for collectors to manage, catalog, and swap collectibles online.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="https://colnect.com/en/collectors" className="hover:text-white">
                    Browse Collections
                  </Link>
                </li>
                <li>
                  <Link href="https://colnect.com/en/swap" className="hover:text-white">
                    Swap Items
                  </Link>
                </li>
                <li>
                  <Link href="https://colnect.com/en/catalog" className="hover:text-white">
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link href="https://colnect.com/en/forum" className="hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="https://colnect.com/en/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="https://colnect.com/en/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="https://colnect.com/en/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="https://colnect.com/en/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="https://facebook.com/colnect" className="hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/colnect" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/colnect" className="hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com/colnect" className="hover:text-white">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Colnect Collectors Community. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </div>
  )
}
