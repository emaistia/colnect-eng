"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Tablet, Download, Star, Users, Zap } from "lucide-react"
import { useTranslation } from "@/lib/use-language"

export function MobileApps() {
  const { t } = useTranslation()

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("mobileTitle")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("mobileSubtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Mobile Optimized</h3>
                  <p className="text-gray-600">Full-featured mobile experience designed for collectors on the go</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Lightning Fast</h3>
                  <p className="text-gray-600">Quick access to your collection and instant trading capabilities</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Stay Connected</h3>
                  <p className="text-gray-600">Never miss a trade opportunity or community update</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent">
                <Download className="h-5 w-5" />
                Download for Android
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.8</span>
                <span>App Store</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.7</span>
                <span>Google Play</span>
              </div>
              <div>
                <span className="font-medium">500K+</span>
                <span> downloads</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="transform rotate-3 hover:rotate-6 transition-transform">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">iOS</Badge>
                      <Smartphone className="h-6 w-6 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Colnect Mobile</h4>
                      <p className="text-sm text-gray-600">Your collection in your pocket</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                      </div>
                      <p className="text-xs text-gray-500">Collection: 1,247 items</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform -rotate-3 hover:-rotate-6 transition-transform mt-8">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Android</Badge>
                      <Tablet className="h-6 w-6 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Colnect Pro</h4>
                      <p className="text-sm text-gray-600">Advanced trading tools</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full w-3/5"></div>
                      </div>
                      <p className="text-xs text-gray-500">Active trades: 12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium transform rotate-12">
              New!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
