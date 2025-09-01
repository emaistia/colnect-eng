"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Facebook, Twitter, Instagram, Youtube, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/colnect",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/colnect",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/colnect",
      color: "hover:text-pink-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/colnect",
      color: "hover:text-red-600",
    },
  ]

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Need help? Want to share feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* WhatsApp Contact */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp Support</h3>
              <p className="text-gray-600 mb-6">Get instant help from our support team via WhatsApp</p>
              <a
                href="https://wa.me/1234567890?text=Hello%20Colnect%20Support"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Chat on WhatsApp</Button>
              </a>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 mb-6">Send us an email and we'll get back to you within 24 hours</p>
              <a href="mailto:support@colnect.com">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Email</Button>
              </a>
            </CardContent>
          </Card>

          {/* Community Forum */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-100 rounded-full">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Forum</h3>
              <p className="text-gray-600 mb-6">Join discussions with other collectors in our community forum</p>
              <a href="https://forum.colnect.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Visit Forum</Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Office Information */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Colnect Ltd.</p>
                    <p className="text-gray-600">123 Collector's Street</p>
                    <p className="text-gray-600">Tel Aviv, Israel 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-600">+972-3-123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-600">info@colnect.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <p className="text-gray-600 mb-6">Stay updated with the latest news, tips, and community highlights</p>
              <div className="flex justify-center md:justify-start gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 rounded-full text-gray-600 transition-colors ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Support Hours</h4>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (GMT+2)</p>
            <p className="text-gray-600">Weekend: Community forum support available 24/7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
