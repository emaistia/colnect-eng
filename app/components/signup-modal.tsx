"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Mail, User, Lock } from "lucide-react"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  userType?: "collector" | "seller" | "explorer" | null
}

export default function SignupModal({ isOpen, onClose, userType }: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData, "User type:", userType)
    // Redirect to Colnect signup with user type
    const signupUrl = `https://colnect.com/aff/_emLP/en/account/create?utm_source=landing_page&utm_medium=website&utm_campaign=colnect_promo&utm_content=${userType}_signup_modal&ref=ebook_lp`
    window.open(signupUrl, "_blank")
    onClose()
  }

  const getUserTypeTitle = () => {
    switch (userType) {
      case "collector":
        return "Start Your Collecting Journey"
      case "seller":
        return "Begin Selling Your Items"
      case "explorer":
        return "Start Exploring Collections"
      default:
        return "Join Colnect Today"
    }
  }

  const getUserTypeDescription = () => {
    switch (userType) {
      case "collector":
        return "Set up your collection and start finding perfect matches with collectors worldwide."
      case "seller":
        return "List your items and connect with buyers who are actively searching for what you have."
      case "explorer":
        return "Discover millions of collectibles and learn from our global community."
      default:
        return "Join the world's largest community of collectors."
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">{getUserTypeTitle()}</DialogTitle>
          <p className="text-gray-600 text-center">{getUserTypeDescription()}</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="pl-10"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-10"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                className="pl-10"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                required
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a
                  href="https://colnect.com/en/terms"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                  rel="noreferrer"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="https://colnect.com/en/privacy"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.subscribeNewsletter}
                onCheckedChange={(checked) => setFormData({ ...formData, subscribeNewsletter: checked as boolean })}
              />
              <Label htmlFor="newsletter" className="text-sm">
                Subscribe to our newsletter for collecting tips and updates
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            Create Account & Start Collecting
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="https://colnect.com/en/login"
            target="_blank"
            className="text-blue-600 hover:underline font-medium"
            rel="noreferrer"
          >
            Sign in here
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
