"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Zap } from "lucide-react"
import Link from "next/link"
import { SignupModal } from "@/app/components/signup-modal"
import { useTranslation } from "@/lib/use-language"

export default function PremiumPage() {
  const { t } = useTranslation()

  const plans = [
    {
      name: t("freeTitle"),
      price: t("freePrice"),
      description: t("freeDescription"),
      icon: Star,
      features: [
        t("basicCatalog"),
        t("limitedTrades"),
        t("communityAccess"),
        "Basic collection tracking",
        "Standard support",
      ],
      popular: false,
      cta: t("getStarted"),
    },
    {
      name: t("premiumTitle"),
      price: t("premiumPrice"),
      description: t("premiumDescription"),
      icon: Crown,
      features: [
        t("fullCatalog"),
        t("unlimitedTrades"),
        t("prioritySupport"),
        t("advancedTools"),
        "Price tracking",
        "Export capabilities",
        "Advanced search filters",
      ],
      popular: true,
      cta: t("choosePlan"),
    },
    {
      name: t("proTitle"),
      price: t("proPrice"),
      description: t("proDescription"),
      icon: Zap,
      features: [
        "Everything in Premium",
        t("dealerTools"),
        t("bulkOperations"),
        t("apiAccess"),
        t("customReports"),
        "White-label options",
        "Dedicated account manager",
      ],
      popular: false,
      cta: t("choosePlan"),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">Colnect</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">{t("pricingTitle")}</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">{t("pricingSubtitle")}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
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
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
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
                        {plan.cta}
                      </Button>
                    </SignupModal>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">Feature</th>
                  <th className="text-center py-4 px-6">Free</th>
                  <th className="text-center py-4 px-6">Premium</th>
                  <th className="text-center py-4 px-6">Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Catalog Access", "Basic", "Full", "Full"],
                  ["Monthly Trades", "10", "Unlimited", "Unlimited"],
                  ["Collection Tracking", "✓", "✓", "✓"],
                  ["Price Tracking", "✗", "✓", "✓"],
                  ["Advanced Search", "✗", "✓", "✓"],
                  ["API Access", "✗", "✗", "✓"],
                  ["Custom Reports", "✗", "✗", "✓"],
                  ["Priority Support", "✗", "✓", "✓"],
                ].map(([feature, free, premium, pro], index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">{feature}</td>
                    <td className="py-4 px-6 text-center">{free}</td>
                    <td className="py-4 px-6 text-center">{premium}</td>
                    <td className="py-4 px-6 text-center">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "Can I upgrade or downgrade my plan anytime?",
                answer:
                  "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle.",
              },
              {
                question: "Is there a free trial for premium plans?",
                answer:
                  "Yes, we offer a 14-day free trial for both Premium and Pro plans. No credit card required to start your trial.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.",
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer:
                  "Yes, you can cancel your subscription at any time. You'll continue to have access to premium features until the end of your billing period.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Collecting?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of collectors worldwide and take your hobby to the next level.
          </p>
          <SignupModal>
            <Button size="lg" variant="secondary" className="text-primary">
              {t("getStarted")}
            </Button>
          </SignupModal>
        </div>
      </section>
    </div>
  )
}
