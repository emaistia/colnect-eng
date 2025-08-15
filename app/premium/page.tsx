"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Zap, Shield, Users, TrendingUp, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SignupModal } from "@/app/components/signup-modal"
import { LanguageSelector } from "@/app/components/language-selector"
import { useLanguage } from "@/lib/use-language"

export default function PremiumPage() {
  const { t } = useLanguage()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const features = {
    free: [
      "Basic collection cataloging",
      "Community access",
      "Basic trading features",
      "Mobile app access",
      "Standard support",
    ],
    premium: [
      "Unlimited collection items",
      "Advanced analytics & insights",
      "Priority trading features",
      "Premium mobile features",
      "Advanced search & filters",
      "Export capabilities",
      "Priority support",
      "Ad-free experience",
      "Early access to new features",
    ],
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Stamp Collector",
      content:
        "Premium features have transformed how I manage my collection. The analytics help me make better collecting decisions.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Coin Enthusiast",
      content: "The advanced search and export features save me hours every week. Worth every penny!",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Postcard Collector",
      content: "Priority support is amazing. They helped me import my entire collection seamlessly.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/colnect-logo.png" alt="Colnect" width={40} height={40} className="rounded-lg" />
              <span className="text-2xl font-bold text-blue-600">Colnect</span>
            </Link>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <SignupModal campaign="premium_header" source="premium_page" medium="header">
                <Button variant="outline">{t("signUp")}</Button>
              </SignupModal>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <Crown className="w-4 h-4 mr-2" />
              Premium Features
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Unlock the Full Power of Collecting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take your collecting to the next level with advanced features, priority support, and exclusive tools
              designed for serious collectors.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={billingCycle === "monthly" ? "font-semibold" : "text-muted-foreground"}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={billingCycle === "yearly" ? "font-semibold" : "text-muted-foreground"}>
                Yearly
                <Badge variant="secondary" className="ml-2">
                  Save 20%
                </Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Free Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl">{t("freeTitle")}</CardTitle>
                  <CardDescription>Perfect for getting started with collecting</CardDescription>
                  <div className="text-4xl font-bold">{t("freePrice")}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {features.free.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <SignupModal campaign="premium_free" source="premium_page" medium="pricing_card">
                    <Button className="w-full bg-transparent" variant="outline">
                      Get Started Free
                    </Button>
                  </SignupModal>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative border-2 border-blue-600 shadow-lg">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {t("premiumTitle")}
                    <Crown className="h-6 w-6 text-yellow-500" />
                  </CardTitle>
                  <CardDescription>For serious collectors who want it all</CardDescription>
                  <div className="text-4xl font-bold">
                    ${billingCycle === "monthly" ? "9.99" : "7.99"}
                    <span className="text-lg text-muted-foreground">
                      /{billingCycle === "monthly" ? "month" : "month"}
                    </span>
                  </div>
                  {billingCycle === "yearly" && (
                    <p className="text-sm text-green-600">Billed annually ($95.88/year) - Save $23.88!</p>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {features.premium.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <SignupModal campaign="premium_upgrade" source="premium_page" medium="pricing_card">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Crown className="w-4 h-4 mr-2" />
                      Upgrade to Premium
                    </Button>
                  </SignupModal>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Premium Features in Detail</h2>
              <p className="text-xl text-muted-foreground">
                Discover what makes Premium the choice of serious collectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get detailed insights into your collection's value, growth trends, and market analysis to make
                    informed collecting decisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                  <CardTitle>Priority Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access new features first, get priority in trading queues, and enjoy faster processing for all your
                    collecting activities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Enhanced Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced security features, backup options, and priority recovery support to keep your valuable
                    collection data safe.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>Exclusive Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join premium-only forums, get access to expert collectors, and participate in exclusive trading
                    events.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-12 w-12 text-indigo-600 mb-4" />
                  <CardTitle>Global Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enhanced international trading features, currency conversion tools, and priority matching with
                    global collectors.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-12 w-12 text-orange-600 mb-4" />
                  <CardTitle>Premium Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 priority support, dedicated account manager, and direct access to our collecting experts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Premium Users Say</h2>
              <p className="text-xl text-muted-foreground">Join thousands of satisfied premium collectors</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Collecting?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of collectors who have upgraded to Premium and discovered the full potential of their
              collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignupModal campaign="premium_cta" source="premium_page" medium="cta_section">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Crown className="w-5 h-5 mr-2" />
                  Start Premium Today
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
            <p className="text-sm mt-4 opacity-75">30-day money-back guarantee • Cancel anytime • No setup fees</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Image src="/images/colnect-logo.png" alt="Colnect" width={32} height={32} className="rounded" />
                  <span className="text-xl font-bold">Colnect</span>
                </div>
                <p className="text-gray-400">
                  The world's largest collecting community with millions of collectors and items.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/premium" className="hover:text-white">
                      Premium
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                      API
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                      Status
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Colnect. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
