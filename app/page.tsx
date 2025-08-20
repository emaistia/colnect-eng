"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Shield, Smartphone, Star, Zap, Target } from "lucide-react"
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
              {t("startCollection")}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              🌟 Trusted by 400,000+ collectors worldwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">{t("heroTitle")}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">{t("heroSubtitle")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => setShowSignupModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              {t("startCollection")} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 py-4 text-lg bg-transparent">
              <Link href="https://colnect.com/en/collectors" target="_blank">
                Browse Collections
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">400K+</div>
              <div className="text-gray-600">Active Collectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">20M+</div>
              <div className="text-gray-600">Catalog Items</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("featuresTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why collectors from around the world choose Colnect as their go-to platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{t("feature1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t("feature1Description")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">{t("feature2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t("feature2Description")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">{t("feature3Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t("feature3Description")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">{t("feature4Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t("feature4Description")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle className="text-xl">{t("feature5Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t("feature5Description")}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("howItWorksTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get started with Colnect in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("step1Title")}</h3>
              <p className="text-gray-600">{t("step1Description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("step2Title")}</h3>
              <p className="text-gray-600">{t("step2Description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("step3Title")}</h3>
              <p className="text-gray-600">{t("step3Description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("testimonialsTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our collectors have to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">"{t("testimonial1")}"</blockquote>
                <cite className="text-sm text-gray-500">— {t("testimonial1Author")}</cite>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">"{t("testimonial2")}"</blockquote>
                <cite className="text-sm text-gray-500">— {t("testimonial2Author")}</cite>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">"{t("testimonial3")}"</blockquote>
                <cite className="text-sm text-gray-500">— {t("testimonial3Author")}</cite>
              </CardContent>
            </Card>
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
            <p>{t("footerText")}</p>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </div>
  )
}
