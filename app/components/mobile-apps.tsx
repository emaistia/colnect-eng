"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Apple, Smartphone } from "lucide-react"

interface AppLink {
  name: string
  url: string
  description: string
}

export default function MobileApps() {
  const [platform, setPlatform] = useState<"android" | "ios">("android")

  // Base UTM parameters
  const baseUtm = "utm_source=landing_page&utm_medium=website&utm_campaign=colnect_promo"

  const androidApps: AppLink[] = [
    {
      name: "Colnect Collectors Community",
      url: `https://colnect.com/aff/emaistia/platform/android/app/colnect_collectors_community?${baseUtm}&utm_content=main_app`,
      description: "The main Colnect app for all collectors",
    },
    {
      name: "World Stamps",
      url: `https://colnect.com/aff/emaistia/platform/android/app/world_stamps?${baseUtm}&utm_content=world_stamps`,
      description: "Catalog and manage your stamp collection",
    },
    {
      name: "US Stamps",
      url: `https://colnect.com/aff/emaistia/platform/android/app/us_stamps?${baseUtm}&utm_content=us_stamps`,
      description: "Specialized app for US stamp collectors",
    },
    {
      name: "World Coins",
      url: `https://colnect.com/aff/emaistia/platform/android/app/world_coins?${baseUtm}&utm_content=world_coins`,
      description: "Catalog and manage your coin collection",
    },
    {
      name: "World Banknotes",
      url: `https://colnect.com/aff/emaistia/platform/android/app/world_banknotes?${baseUtm}&utm_content=world_banknotes`,
      description: "Catalog and manage your banknote collection",
    },
    {
      name: "Stamp Identifier",
      url: `https://colnect.com/aff/emaistia/platform/android/app/stamp_identifier?${baseUtm}&utm_content=stamp_identifier`,
      description: "Identify stamps in your collection",
    },
    {
      name: "Coin Identifier",
      url: `https://colnect.com/aff/emaistia/platform/android/app/coin_identifier?${baseUtm}&utm_content=coin_identifier`,
      description: "Identify coins in your collection",
    },
    {
      name: "Banknote Identifier",
      url: `https://colnect.com/aff/emaistia/platform/android/app/banknote_identifier?${baseUtm}&utm_content=banknote_identifier`,
      description: "Identify banknotes in your collection",
    },
    {
      name: "Phonecard Identifier",
      url: `https://colnect.com/aff/emaistia/platform/android/app/phonecard_identifier?${baseUtm}&utm_content=phonecard_identifier`,
      description: "Identify phonecards in your collection",
    },
    {
      name: "Transport Ticket Identifier",
      url: `https://colnect.com/aff/emaistia/platform/android/app/transport_ticket_identifier?${baseUtm}&utm_content=transport_ticket_identifier`,
      description: "Identify transport tickets in your collection",
    },
  ]

  const iosApps: AppLink[] = [
    {
      name: "World Stamps",
      url: `https://colnect.com/aff/emaistia/platform/ios/app/world_stamps?${baseUtm}&utm_content=world_stamps_ios`,
      description: "Catalog and manage your stamp collection",
    },
    {
      name: "US Stamps",
      url: `https://colnect.com/aff/emaistia/platform/ios/app/us_stamps?${baseUtm}&utm_content=us_stamps_ios`,
      description: "Specialized app for US stamp collectors",
    },
    {
      name: "World Coins",
      url: `https://colnect.com/aff/emaistia/platform/ios/app/world_coins?${baseUtm}&utm_content=world_coins_ios`,
      description: "Catalog and manage your coin collection",
    },
    {
      name: "World Banknotes",
      url: `https://colnect.com/aff/emaistia/platform/ios/app/world_banknotes?${baseUtm}&utm_content=world_banknotes_ios`,
      description: "Catalog and manage your banknote collection",
    },
    {
      name: "Stamp Identifier",
      url: `https://colnect.com/aff/emaistia/platform/ios/app/stamp_identifier?${baseUtm}&utm_content=stamp_identifier_ios`,
      description: "Identify stamps in your collection",
    },
    {
      name: "Coin Identifier",
      url: `https://colnect.com/aff/emaistia/platform/ios/app/coin_identifier?${baseUtm}&utm_content=coin_identifier_ios`,
      description: "Identify coins in your collection",
    },
    {
      name: "Banknote Identifier",
      url: `https://colnect.com/aff/emaistia/platform/ios/app/banknote_identifier?${baseUtm}&utm_content=banknote_identifier_ios`,
      description: "Identify banknotes in your collection",
    },
    {
      name: "Phonecard Identifier",
      url: `https://colnect.com/aff/emaistia/platform/ios/app/phonecard_identifier?${baseUtm}&utm_content=phonecard_identifier_ios`,
      description: "Identify phonecards in your collection",
    },
    {
      name: "Transport Ticket Identifier",
      url: `https://colnect.com/aff/emaistia/platform/ios/app/transport_ticket_identifier?${baseUtm}&utm_content=transport_ticket_identifier_ios`,
      description: "Identify transport tickets in your collection",
    },
  ]

  return (
    <div className="w-full py-12 md:py-24 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">Mobile Apps for Collectors</h2>
          <p className="max-w-[700px] text-gray-600 md:text-lg">
            Take your collection on the go with our specialized mobile applications
          </p>
        </div>

        <Tabs defaultValue="android" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="android" onClick={() => setPlatform("android")} className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Android
              </TabsTrigger>
              <TabsTrigger value="ios" onClick={() => setPlatform("ios")} className="flex items-center gap-2">
                <Apple className="h-4 w-4" />
                iOS
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="android" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {androidApps.map((app, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{app.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{app.description}</p>
                    <a href={app.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Download</Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ios" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {iosApps.map((app, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{app.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{app.description}</p>
                    <a href={app.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Download</Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
