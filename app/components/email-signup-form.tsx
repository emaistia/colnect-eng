"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Mail, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function EmailSignupForm() {
  const [email, setEmail] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would typically call your API endpoint
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
      toast({
        title: "Success!",
        description: "You've been added to our mailing list. Check your email for confirmation.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          You've successfully joined our mailing list. Check your email for a confirmation message and your free
          collecting guide.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="email-signup">Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email-signup"
            type="email"
            placeholder="Enter your email address"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms-signup"
          checked={agreeToTerms}
          onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
          required
        />
        <Label htmlFor="terms-signup" className="text-sm">
          I agree to receive emails and accept the{" "}
          <a
            href="https://colnect.com/en/terms"
            target="_blank"
            className="text-blue-600 hover:underline"
            rel="noreferrer"
          >
            Terms of Service
          </a>
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing Up..." : "Get Free Guide"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <p className="text-xs text-gray-600 text-center">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  )
}
