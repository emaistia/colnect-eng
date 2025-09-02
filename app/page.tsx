"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Users,
  Globe,
  Shield,
  Camera,
  Search,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  TrendingUp,
  Award,
  Monitor,
} from "lucide-react"
import SignupModal from "./components/signup-modal"
import { FaqSection } from "./components/faq-section"

export default function LandingPage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const ctaUrl = "https://example.com/signup" // Assuming ctaUrl is defined somewhere

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/images/colnect-logo.png" alt="Colnect logo" width={40} height={40} className="rounded-lg" />
              <span className="text-2xl font-bold text-blue-600">Colnect</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                Reviews
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                FAQ
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button onClick={() => setIsSignupModalOpen(true)}>Join Free</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  🎯 #1 Platform for Collectors Worldwide
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  The Smartest Way to <span className="text-blue-600">Collect and Swap</span> Collectibles Online
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Manage collectible items in one place with millions of item cataloging on Colnect. Utilize our tool
                  for auto-match, swap, and track effortlessly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                  onClick={() => setIsSignupModalOpen(true)}
                  aria-label="Join Colnect's global collectible exchange community"
                >
                  Start Free Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                  Watch Demo <Monitor className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>100% Free to Start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>400K+ Active Collectors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-purple-500" />
                  <span>250+ Countries</span>
                </div>
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
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Collectors Choose Colnect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Colnect connects you with collectors from 250+ countries via niche-friendly tools where you can trade,
              sell and buy in our marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Auto-Matching for Easy Swapping</h3>
              <p className="text-gray-600 leading-relaxed">
                Our intelligent system automatically finds collectors who have what you want and want what you have,
                making swapping effortless.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">The Collector's Marketplace: Safe and Secure Trading</h3>
              <p className="text-gray-600 leading-relaxed">
                Trade with confidence using our secure marketplace with verified collectors, ratings, and protected
                transactions.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Upload and Track Your Collection</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply upload photos of your items and our AI will identify them, automatically adding them to your
                organized collection.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Do You Want to Start on Colnect?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your path and start your collecting journey today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Collector Card */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">I'm a Collector</h3>
                <p className="text-gray-600">
                  Manage collectible items in one place with millions of item cataloging on Colnect. Utilize our tool
                  for auto-match, swap, and track effortlessly.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center text-yellow-600 mb-4">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Key Features:</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Personal Collection Manager with condition & quantity</span>
                  </li>
                  <li className="flex items-start">
                    <Search className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Auto-Matching with global collectors based on your wishlist</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Inventory system to organize duplicates</span>
                  </li>
                  <li className="flex items-start">
                    <Camera className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Image Search to identify items you own or wish</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setIsSignupModalOpen(true)}>
                Start Manage Your Collection. Its FREE.
              </Button>
            </Card>

            {/* Seller Card */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">I'm a Seller</h3>
                <p className="text-gray-600">
                  Manage 2M+ items in one place, auto-match, swap, and track effortlessly where you can trade, sell and
                  buy in our marketplace.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center text-yellow-600 mb-4">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Key Features:</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Globe className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Add your inventory with detailed item conditions</span>
                  </li>
                  <li className="flex items-start">
                    <Search className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Use Wishlist Matching to surface your items to ready buyers</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Track trades and manage swaps</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Get notified when users search for items you list</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => setIsSignupModalOpen(true)}>
                Start Sell/Buy
              </Button>
            </Card>

            {/* Explorer Card */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">I'm Just Exploring</h3>
                <p className="text-gray-600">
                  Discover the world of collecting and see what millions of collectors are passionate about.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center text-yellow-600 mb-4">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Key Features:</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Globe className="h-4 w-4 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Browse 40+ collectible categories with images & variants</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>View collector ratings & historical info</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Start your wishlist anytime</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-4 w-4 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Learn from community discussions</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => setIsSignupModalOpen(true)}>
                Join 400,000+ Collectors Worldwide
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Collectors Say About Colnect</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied collectors worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Swapping collectibles has never been this smooth. The auto-matching feature is incredible!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">MS</span>
                </div>
                <div>
                  <p className="font-semibold">Maria Santos</p>
                  <p className="text-sm text-gray-500">Stamp Collector, Brazil</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I've connected with collectors from over 50 countries. The community is amazing and supportive. Colnect
                makes managing my collection so simple!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">AK</span>
                </div>
                <div>
                  <p className="font-semibold">Anna Kowalski</p>
                  <p className="text-sm text-gray-500">Coin Collector, Poland</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The catalog is incredibly detailed and the mobile app makes it easy to manage my collection on the go.
                Swapping, selling and buying collectibles has never been this smooth."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">JW</span>
                </div>
                <div>
                  <p className="font-semibold">James Wilson</p>
                  <p className="text-sm text-gray-500">Banknote Collector, UK</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Final CTA Section */}
      <section className="w-full py-16 bg-blue-600 text-white print:hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Collect Smarter and Connect Faster?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Start your collecting journey today—it's completely free, and packed with tools to grow your collection
              with confidence.
            </p>

            <div className="mb-6">
              <a
                href={`${ctaUrl}&utm_content=final_cta_with_bonuses&ref=ebook_lp`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-6">
                  Start Free – Get Your Bonus Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>

            <p className="text-blue-100 text-lg">
              Get a Quick-start Guide & Exclusive Pro Tips Email Series for new members!
            </p>

            {/* Footer content integrated into CTA section */}
            <div className="text-center mt-8 pt-6 border-t border-blue-700">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Image
                  src="/images/colnect-logo.png"
                  alt="Colnect Logo"
                  width={70}
                  height={21}
                  className="h-auto brightness-0 invert"
                />
              </div>
              <p className="text-blue-100 text-sm mb-2 max-w-md mx-auto">
                Comprehensive catalog, automatic matching, and personal collection feature for collectors worldwide.
              </p>
              <p className="text-blue-200 text-xs">
                © {new Date().getFullYear()} Colnect Ltd. All rights reserved. Made with ❤️ for collectors worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      <SignupModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />
    </div>
  )
}
