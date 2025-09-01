"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Star, Download, Zap, Shield, Globe } from "lucide-react"

export function MobileApps() {
  const features = [
    {
      icon: Zap,
      title: "Quick Access",
      description: "Instantly check your collection and wishlist",
    },
    {
      icon: Shield,
      title: "Secure Sync",
      description: "Your data stays synchronized across all devices",
    },
    {
      icon: Globe,
      title: "Offline Mode",
      description: "Browse your collection even without internet",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            📱 Available on iOS & Android
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Take Your Collection Anywhere</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access your complete collection, manage swaps, and discover new items with our powerful mobile apps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Everything you need on mobile</h3>
              <p className="text-gray-600 mb-6">
                Our mobile apps bring the full power of Colnect to your smartphone. Manage your collection, connect with
                collectors, and never miss a swap opportunity.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download for iOS
                </Button>
                <Button className="bg-green-600 text-white hover:bg-green-700 flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Get it on Android
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-semibold">4.8</span>
                <span>App Store</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-semibold">4.7</span>
                <span>Google Play</span>
              </div>
              <div>
                <span className="font-semibold">50K+</span>
                <span> downloads</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-12 text-center">
                <div className="relative">
                  <Smartphone className="h-48 w-48 mx-auto text-blue-600 mb-6" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent rounded-lg"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Mobile App Preview</h4>
                <p className="text-gray-600">Screenshots and app store previews coming soon</p>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
