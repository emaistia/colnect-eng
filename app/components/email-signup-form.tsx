"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface EmailSignupFormProps {
  title?: string
  description?: string
  className?: string
}

export default function EmailSignupForm({
  title = "Get Your Free Bonuses",
  description,
  className = "bg-purple-50 p-8 rounded-lg shadow-md",
}: EmailSignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    message: string
    type: "success" | "error" | null
  }>({ message: "", type: null })
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setFormStatus({ message: "", type: null })

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const consent = formData.get("consent") === "on"

    // Validate form
    const newErrors: Record<string, string[]> = {}
    if (!name || name.length < 2) {
      newErrors.name = ["Name must be at least 2 characters"]
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = ["Please enter a valid email address"]
    }
    if (!consent) {
      newErrors.consent = ["You must agree to receive updates"]
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setFormStatus({
        message: "Please check your information and try again.",
        type: "error",
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success response
      setFormStatus({
        message: "Thanks for subscribing! Check your email for your free bonuses.",
        type: "success",
      })
      toast({
        title: "Success!",
        description: "Thanks for subscribing! Check your email for your free bonuses.",
        variant: "default",
      })
      // Reset form
      e.currentTarget.reset()
    } catch (error) {
      setFormStatus({
        message: "There was a problem subscribing you. Please try again later.",
        type: "error",
      })
      toast({
        title: "Error",
        description: "There was a problem subscribing you. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      {description && <p className="text-gray-600 mb-6">{description}</p>}

      {formStatus.type && (
        <div
          className={`mb-4 p-3 rounded ${
            formStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            className={`border-purple-200 focus:border-purple-500 ${errors.name ? "border-red-500" : ""}`}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            className={`border-purple-200 focus:border-purple-500 ${errors.email ? "border-red-500" : ""}`}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <Checkbox
            id="consent"
            name="consent"
            className={`data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 ${errors.consent ? "border-red-500" : ""}`}
            disabled={isSubmitting}
          />
          <Label
            htmlFor="consent"
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to receive tips & collector updates from Colnect.
          </Label>
        </div>
        {errors.consent && <p className="text-red-500 text-sm">{errors.consent[0]}</p>}

        <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Get Started Now - Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
