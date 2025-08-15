"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Download, Star, Camera, Search, Bell } from "lucide-react"

export default function MobileApps() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="h-4 w-4" />
            Mobile Apps Available
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Collection in Your Pocket</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take Colnect with you wherever you go. Our mobile apps give you full access to your collection, instant item
            identification, and real-time notifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Mobile App Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-blue-600 h-12 flex items-center justify-center">
                  <div className="text-white text-sm font-medium">Colnect</div>
                </div>

                {/* App Content */}
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Search className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Quick Search</div>
                      <div className="text-xs text-gray-500">Find items instantly</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Camera className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Photo Recognition</div>
                      <div className="text-xs text-gray-500">Identify with camera</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Bell className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Smart Notifications</div>
                      <div className="text-xs text-gray-500">Never miss a match</div>
                    </div>
                  </div>

                  {/* Collection Preview */}
                  <div className="mt-6">
                    <div className="text-sm font-medium mb-2">Recent Items</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-gray-200 rounded"></div>
                      <div className="aspect-square bg-gray-200 rounded"></div>
                      <div className="aspect-square bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
              <Bell className="h-4 w-4" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-2 rounded-full shadow-lg">
              <Camera className="h-4 w-4" />
            </div>
          </div>

          {/* App Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Three Powerful Apps</h3>
              <p className="text-gray-600 mb-6">
                We've created specialized apps to give you the best mobile collecting experience possible.
              </p>
            </div>

            <div className="space-y-6">
              {/* Colnect App */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Colnect Mobile</h4>
                      <p className="text-gray-600 mb-3">
                        Full-featured app with complete access to your collection, trading, and community features.
                      </p>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">4.8 (2.1k reviews)</span>
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                          <Download className="h-4 w-4 mr-2" />
                          App Store
                        </Button>
                        <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
                          <Download className="h-4 w-4 mr-2" />
                          Google Play
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Catalog App */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-full flex-shrink-0">
                      <Search className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Colnect Catalog</h4>
                      <p className="text-gray-600 mb-3">
                        Browse our comprehensive catalog of 20M+ items with advanced search and filtering.
                      </p>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">4.7 (1.8k reviews)</span>
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                          <Download className="h-4 w-4 mr-2" />
                          App Store
                        </Button>
                        <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
                          <Download className="h-4 w-4 mr-2" />
                          Google Play
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recognition App */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                      <Camera className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Colnect Scanner</h4>
                      <p className="text-gray-600 mb-3">
                        Instantly identify collectibles using AI-powered image recognition technology.
                      </p>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">4.9 (3.2k reviews)</span>
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                          <Download className="h-4 w-4 mr-2" />
                          App Store
                        </Button>
                        <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
                          <Download className="h-4 w-4 mr-2" />
                          Google Play
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Sync Across All Devices</h4>
              <p className="text-gray-600 text-sm">
                Your collection, wishlists, and trading activity automatically sync between web and mobile apps. Start
                on your phone, continue on your computer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
