"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Camera, Wifi, Star, Download } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/use-language"

export function MobileApps() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("mobileTitle")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("mobileSubtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mobile App Mockups */}
            <div className="relative">
              <div className="flex justify-center items-end space-x-4">
                {/* Phone Mockup */}
                <div className="relative">
                  <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      <div className="bg-blue-600 h-20 flex items-center justify-center">
                        <Image
                          src="/images/colnect-logo.png"
                          alt="Colnect"
                          width={120}
                          height={40}
                          className="brightness-0 invert"
                        />
                      </div>
                      <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">My Collection</h3>
                          <Badge variant="secondary">2,847 items</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-100 rounded-lg p-3 text-center">
                            <div className="w-12 h-12 bg-red-200 rounded-lg mx-auto mb-2"></div>
                            <p className="text-xs font-medium">Stamps</p>
                            <p className="text-xs text-gray-500">1,234</p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 text-center">
                            <div className="w-12 h-12 bg-yellow-200 rounded-lg mx-auto mb-2"></div>
                            <p className="text-xs font-medium">Coins</p>
                            <p className="text-xs text-gray-500">856</p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 text-center">
                            <div className="w-12 h-12 bg-green-200 rounded-lg mx-auto mb-2"></div>
                            <p className="text-xs font-medium">Banknotes</p>
                            <p className="text-xs text-gray-500">432</p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 text-center">
                            <div className="w-12 h-12 bg-blue-200 rounded-lg mx-auto mb-2"></div>
                            <p className="text-xs font-medium">Postcards</p>
                            <p className="text-xs text-gray-500">325</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full p-3 shadow-lg">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Tablet Mockup */}
                <div className="relative hidden md:block">
                  <div className="w-80 h-60 bg-gray-900 rounded-2xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                      <div className="bg-blue-600 h-12 flex items-center justify-center">
                        <Image
                          src="/images/colnect-logo.png"
                          alt="Colnect"
                          width={80}
                          height={24}
                          className="brightness-0 invert"
                        />
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-4 gap-2">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-gray-100 rounded-lg p-2 text-center">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-200 to-purple-200 rounded mx-auto mb-1"></div>
                              <p className="text-xs">Item {i + 1}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Powerful Mobile Features</h3>
                <p className="text-muted-foreground">
                  Our mobile apps bring the full power of Colnect to your pocket, with features designed specifically
                  for collectors on the go.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Camera className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Smart Camera Recognition</h4>
                    <p className="text-muted-foreground">
                      Take a photo of any collectible and our AI will help identify it and add it to your collection
                      instantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Wifi className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Offline Access</h4>
                    <p className="text-muted-foreground">
                      Access your collection even without internet connection. Perfect for shows, markets, and remote
                      locations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Native Performance</h4>
                    <p className="text-muted-foreground">
                      Lightning-fast native apps optimized for iOS and Android with smooth animations and intuitive
                      gestures.
                    </p>
                  </div>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Download className="h-5 w-5" />
                  Download for Android
                </Button>
              </div>

              {/* App Ratings */}
              <div className="flex items-center gap-6 pt-4 border-t">
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">4.8 on App Store</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">4.7 on Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
