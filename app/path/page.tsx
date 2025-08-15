"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Globe, Shield, TrendingUp, Check, Menu, X, Clock, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { SignupModal } from "../components/signup-modal"
import { FaqSection } from "../components/faq-section"
import { LanguageSelector } from "../components/language-selector"
import { useTranslation } from "@/lib/use-language"

export default function PathPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const pathSteps = [
    {
      step: 1,
      icon: Target,
      title: "Define Your Focus",
      description: "Choose your collecting theme and set clear goals for what you want to achieve.",
      duration: "Week 1",
      actions: ["Pick a category", "Set budget limits", "Define collection scope"],
    },
    {
      step: 2,
      icon: Globe,
      title: "Research & Learn",
      description: "Study your chosen field, understand market values, and identify key items.",
      duration: "Weeks 2-4",
      actions: ["Study price guides", "Join collector forums", "Follow market trends"],
    },
    {
      step: 3,
      icon: Shield,
      title: "Start Collecting",
      description: "Make your first purchases from reputable sources and build your foundation.",
      duration: "Months 2-6",
      actions: ["Buy starter items", "Verify authenticity", "Document everything"],
    },
    {
      step: 4,
      icon: TrendingUp,
      title: "Grow & Refine",
      description: "Expand strategically, upgrade items, and develop expertise in your field.",
      duration: "Ongoing",
      actions: ["Upgrade collection", "Network with experts", "Share knowledge"],
    },
  ]

  const collectorLevels = [
    {
      level: "Beginner",
      description: "Just starting your collecting journey",
      timeframe: "0-6 months",
      focus: "Learning basics and building foundation",
      tips: ["Start small", "Focus on one category", "Learn to authenticate"],
      color: "bg-green-100 text-green-800",
    },
    {
      level: "Intermediate",
      description: "Building knowledge and expanding collection",
      timeframe: "6 months - 2 years",
      focus: "Strategic growth and specialization",
      tips: ["Specialize in subcategories", "Network with other collectors", "Track market values"],
      color: "bg-blue-100 text-blue-800",
    },
    {
      level: "Advanced",
      description: "Expert knowledge and refined collection",
      timeframe: "2+ years",
      focus: "High-value items and expertise sharing",
      tips: ["Seek rare items", "Mentor new collectors", "Consider selling duplicates"],
      color: "bg-purple-100 text-purple-800",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/colnect-logo.png" alt="Colnect Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-xl">Colnect</span>
            </Link>

            <div className="flex items-center gap-4">
              <LanguageSelector />
              <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost">{t("logIn")}</Button>
                <SignupModal>
                  <Button>{t("getStarted")}</Button>
                </SignupModal>
              </div>

              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">Your Personal Collecting Path</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow our proven step-by-step guide to build an amazing collection, from beginner to expert.
          </p>
          <SignupModal>
            <Button size="lg" className="text-lg px-8 py-6">
              Begin Your Path
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </SignupModal>
        </div>
      </section>

      {/* Path Steps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your 4-Step Collecting Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to building your dream collection
            </p>
          </div>

          <div className="space-y-8">
            {pathSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <div key={index} className={`flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="flex-1">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold text-lg">
                            {step.step}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="text-sm text-gray-500">{step.duration}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base">{step.description}</CardDescription>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Actions:</h4>
                          <ul className="space-y-1">
                            {step.actions.map((action, actionIndex) => (
                              <li key={actionIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block">{/* Spacer for alternating layout */}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Collector Levels Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Collector Development Levels</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understand where you are and what comes next in your collecting journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collectorLevels.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{level.level}</CardTitle>
                    <Badge className={level.color}>{level.timeframe}</Badge>
                  </div>
                  <CardDescription className="text-base">{level.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Primary Focus:</h4>
                    <p className="text-sm text-gray-600">{level.focus}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Tips:</h4>
                    <ul className="space-y-1">
                      {level.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Tracking Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Track Your Progress</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Monitor your collecting journey with our comprehensive tracking tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Collection Goals",
                description: "Set and track specific collecting objectives",
                metric: "12/20 Goals",
              },
              {
                icon: TrendingUp,
                title: "Value Tracking",
                description: "Monitor your collection's market value",
                metric: "+15% This Year",
              },
              {
                icon: Users,
                title: "Trading Activity",
                description: "Track successful trades and exchanges",
                metric: "47 Trades",
              },
              {
                icon: Star,
                title: "Expertise Level",
                description: "Measure your knowledge and experience",
                metric: "Intermediate",
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-3">{item.description}</CardDescription>
                    <div className="text-2xl font-bold text-primary">{item.metric}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Personalized Recommendations */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Get Personalized Guidance</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our AI-powered system provides customized recommendations based on your collecting interests and experience
            level.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {["Smart item suggestions", "Market timing alerts", "Expert collector matching"].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 justify-center">
                <Check className="h-5 w-5 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <SignupModal>
            <Button size="lg" className="text-lg px-8 py-6">
              Get My Personal Path
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </SignupModal>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

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
              <h4 className="font-semibold mb-4">Your Path</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Progress Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Expert Guidance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Personalized Tips
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Learning Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Video Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Expert Interviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Market Reports
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
                    Contact Us
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
