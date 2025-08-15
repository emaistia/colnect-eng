"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Star, Crown, Zap, Shield } from "lucide-react"

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("yearly")

  const baseUtm = "utm_source=premium_page&utm_medium=website&utm_campaign=colnect_premium"

  const plans = {
    monthly: {
      price: "$9.99",
      period: "month",
      savings: null,
      ctaUrl: `https://colnect.com/premium/monthly?${baseUtm}&utm_content=monthly_plan`,
    },
    yearly: {
      price: "$99.99",
      period: "year",
      savings: "Save 17%",
      ctaUrl: `https://colnect.com/premium/yearly?${baseUtm}&utm_content=yearly_plan`,
    },
  }

  const currentPlan = plans[selectedPlan]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation Bar */}
      <header className="w-full border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/colnect-logo.png"
              alt="Colnect - Collectors Community Platform"
              width={120}
              height={40}
              className="h-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Back to Home
            </a>
            <a
              href={`https://colnect.com/login?${baseUtm}&utm_content=header_login`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Login
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Crown className="h-4 w-4" />
              Premium Membership
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Unlock the Full Power of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Colnect
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Take your collecting to the next level with advanced features, priority support, and exclusive access to
              premium tools designed for serious collectors.
            </p>

            {/* Plan Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${selectedPlan === "monthly" ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                Monthly
              </span>
              <button
                onClick={() => setSelectedPlan(selectedPlan === "monthly" ? "yearly" : "monthly")}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    selectedPlan === "yearly" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm ${selectedPlan === "yearly" ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                Yearly
              </span>
              {selectedPlan === "yearly" && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Save 17%</span>
              )}
            </div>

            {/* Pricing Card */}
            <Card className="max-w-md mx-auto border-2 border-blue-200 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {currentPlan.price}
                    <span className="text-lg font-normal text-gray-600">/{currentPlan.period}</span>
                  </div>
                  {currentPlan.savings && <div className="text-green-600 font-medium">{currentPlan.savings}</div>}
                </div>

                <a href={currentPlan.ctaUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 mb-6"
                  >
                    Upgrade to Premium
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <p className="text-sm text-gray-600">30-day money-back guarantee • Cancel anytime</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything in the free plan, plus advanced tools and priority support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Advanced Analytics */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
                  <p className="text-gray-600 mb-4">
                    Get detailed insights into your collection value, growth trends, and market analysis with premium
                    analytics dashboard.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Collection value tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Market trend analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Investment performance reports
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Priority Matching */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                      <Star className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Priority Matching</h3>
                  <p className="text-gray-600 mb-4">
                    Get first access to new matches and priority placement in swap recommendations to find rare items
                    faster.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      First access to matches
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Priority in recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Advanced filtering options
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Premium Support */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Support</h3>
                  <p className="text-gray-600 mb-4">
                    Get priority customer support with faster response times and direct access to our collecting
                    experts.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Priority support queue
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Expert collecting advice
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Phone support available
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Unlimited Storage */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                      <CheckCircle className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Unlimited Storage</h3>
                  <p className="text-gray-600 mb-4">
                    Store unlimited high-resolution images of your collection with no restrictions on file size or
                    quantity.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Unlimited image uploads
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      High-resolution storage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Backup & sync across devices
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Advanced Search */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                      <Star className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Search</h3>
                  <p className="text-gray-600 mb-4">
                    Use powerful search filters and saved searches to find exactly what you're looking for in our vast
                    catalog.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Advanced filter options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Saved search alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Bulk operations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Exclusive Access */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                      <Crown className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Access</h3>
                  <p className="text-gray-600 mb-4">
                    Get early access to new features, exclusive events, and special collecting opportunities available
                    only to premium members.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Beta feature access
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Exclusive collecting events
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Premium member community
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Premium Members Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of collectors who have upgraded their collecting experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "The premium analytics helped me identify undervalued items in my collection. I've made better
                    trading decisions and my collection value has increased by 40% this year!"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">R</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Robert Chen</div>
                      <div className="text-gray-600 text-sm">Coin Collector, Premium Member</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "Priority matching is a game-changer! I found three rare stamps I'd been searching for years within
                    my first month of premium membership. Absolutely worth every penny."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">S</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                      <div className="text-gray-600 text-sm">Stamp Collector, Premium Member</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "The premium support team helped me authenticate a rare banknote and connected me with an expert
                    appraiser. Their knowledge and quick response time saved me from a costly mistake."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">M</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Michael Torres</div>
                      <div className="text-gray-600 text-sm">Banknote Collector, Premium Member</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Collecting Experience?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of collectors who have taken their hobby to the next level with Colnect Premium.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">
                    {currentPlan.price}
                    <span className="text-lg font-normal">/{currentPlan.period}</span>
                  </div>
                  {currentPlan.savings && <div className="text-green-300 font-medium mb-4">{currentPlan.savings}</div>}

                  <a href={currentPlan.ctaUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 mb-4">
                      Start Premium Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>

                  <p className="text-sm text-blue-200">30-day money-back guarantee</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-blue-200 text-sm">✓ Cancel anytime ✓ No setup fees ✓ Instant activation</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/images/colnect-logo.png"
              alt="Colnect Logo"
              width={80}
              height={24}
              className="h-auto brightness-0 invert"
            />
          </div>
          <p className="text-gray-400 text-sm mb-2">Premium features for serious collectors worldwide.</p>
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Colnect Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
