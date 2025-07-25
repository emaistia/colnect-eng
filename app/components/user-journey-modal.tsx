"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { User, ShoppingCart, Search, CheckCircle, ArrowRight } from "lucide-react"

interface UserJourneyModalProps {
  isOpen: boolean
  onClose: () => void
  userType: "collector" | "seller" | "explorer" | null
  onCTAClick: (userType: string) => void
}

const journeyData = {
  collector: {
    title: "Your Collector Journey",
    icon: User,
    description: "Start managing and growing your collection today",
    steps: [
      {
        step: 1,
        title: "Create Your Free Account",
        description: "Sign up in seconds with just your email address",
        action: "Quick registration process",
      },
      {
        step: 2,
        title: "Add Your Collection",
        description: "Use our catalog to identify and add items you already own",
        action: "Browse 20M+ items in our database",
      },
      {
        step: 3,
        title: "Create Your Wishlist",
        description: "Mark items you want to find and add to your collection",
        action: "Build your want list",
      },
      {
        step: 4,
        title: "Find Swap Partners",
        description: "Our algorithm matches you with collectors who have what you want",
        action: "Auto-matching technology",
      },
      {
        step: 5,
        title: "Start Trading",
        description: "Connect with collectors worldwide and arrange swaps",
        action: "Join 400,000+ active collectors",
      },
    ],
    cta: "Start Collecting Now",
    benefits: [
      "Free forever - no hidden costs",
      "Auto-matching with global collectors",
      "Comprehensive item catalogs",
      "Secure trading environment",
    ],
  },
  seller: {
    title: "Your Seller Journey",
    icon: ShoppingCart,
    description: "Turn your collectibles into income",
    steps: [
      {
        step: 1,
        title: "Create Your Seller Account",
        description: "Register and verify your seller profile",
        action: "Professional seller setup",
      },
      {
        step: 2,
        title: "List Your Items",
        description: "Upload photos and descriptions of items you want to sell",
        action: "Easy listing tools",
      },
      {
        step: 3,
        title: "Set Your Prices",
        description: "Use market data to price your items competitively",
        action: "Smart pricing suggestions",
      },
      {
        step: 4,
        title: "Reach Global Buyers",
        description: "Your items are visible to collectors in 250+ countries",
        action: "Worldwide marketplace exposure",
      },
      {
        step: 5,
        title: "Complete Sales",
        description: "Manage orders, shipping, and payments securely",
        action: "Integrated payment processing",
      },
    ],
    cta: "Start Selling Now",
    benefits: [
      "Global marketplace reach",
      "Secure payment processing",
      "Professional seller tools",
      "Dedicated seller support",
    ],
  },
  explorer: {
    title: "Your Discovery Journey",
    icon: Search,
    description: "Explore the world of collecting",
    steps: [
      {
        step: 1,
        title: "Browse Our Catalogs",
        description: "Explore millions of collectible items from around the world",
        action: "No registration required",
      },
      {
        step: 2,
        title: "Learn About Collecting",
        description: "Read guides, tips, and stories from experienced collectors",
        action: "Educational resources",
      },
      {
        step: 3,
        title: "Find Your Interest",
        description: "Discover which types of collectibles appeal to you most",
        action: "Category exploration",
      },
      {
        step: 4,
        title: "Join the Community",
        description: "Create an account when you're ready to start collecting",
        action: "Free community access",
      },
      {
        step: 5,
        title: "Start Your Collection",
        description: "Begin your collecting journey with guidance from experts",
        action: "Beginner-friendly tools",
      },
    ],
    cta: "Start Exploring Now",
    benefits: ["No commitment required", "Educational resources", "Community support", "Expert guidance available"],
  },
}

export default function UserJourneyModal({ isOpen, onClose, userType, onCTAClick }: UserJourneyModalProps) {
  if (!userType || !journeyData[userType]) return null

  const journey = journeyData[userType]
  const IconComponent = journey.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-full">
              <IconComponent className="h-6 w-6 text-blue-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900">{journey.title}</DialogTitle>
          </div>
          <DialogDescription className="text-lg text-gray-600">{journey.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Steps */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Your Step-by-Step Journey</h3>
            <div className="space-y-4">
              {journey.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-blue-50 rounded-lg animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                      <CheckCircle className="h-4 w-4" />
                      {step.action}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Why Choose Colnect?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {journey.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <Button
              onClick={() => onCTAClick(userType)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-lg py-3"
            >
              {journey.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              I'll Decide Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
