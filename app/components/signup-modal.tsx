"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

function SignupModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    language: "en",
    consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-[120px] h-[40px] relative">
              <Image src="/images/colnect-logo.png" alt="Colnect Logo" fill className="object-contain" />
            </div>
          </div>
          <DialogTitle className="text-center">Join Colnect Today</DialogTitle>
          <DialogDescription className="text-center">
            Create your free account to start swapping collectibles.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="signup-name">Name</Label>
            <Input
              id="signup-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              id="signup-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="language">Preferred Language</Label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-purple-200 focus:border-purple-500"
            >
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
              <option value="it">Italiano</option>
              <option value="pt">Português</option>
              <option value="ru">Русский</option>
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
              <option value="ar">العربية</option>
              <option value="nl">Nederlands</option>
              <option value="pl">Polski</option>
              <option value="tr">Türkçe</option>
              <option value="ko">한국어</option>
            </select>
          </div>
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="signup-consent"
              checked={formData.consent}
              onCheckedChange={handleCheckboxChange}
              className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
            />
            <Label
              htmlFor="signup-consent"
              className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to receive tips & collector updates from Colnect.
            </Label>
          </div>
          <DialogFooter className="pt-4">
            <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white">
              Create Account
            </Button>
          </DialogFooter>
        </form>
        <div className="text-center text-sm text-gray-500 pt-2">
          Already have an account?{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Sign in
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SignupModal
export { SignupModal }
