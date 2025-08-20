"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitToMailchimp } from "../actions/mailchimp"
import { useToast } from "@/components/ui/use-toast"

interface EmailSignupFormProps {
  campaign?: string
  source?: string
  medium?: string
  placeholder?: string
  buttonText?: string
}

export function EmailSignupForm({
  campaign = "newsletter",
  source = "website",
  medium = "form",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}: EmailSignupFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitToMailchimp({
        email,
        tags: [campaign, source, medium],
      })

      if (result.success) {
        toast({
          title: "Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        })
        setEmail("")
      } else {
        toast({
          title: "Subscription Failed",
          description: result.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "..." : buttonText}
      </Button>
    </form>
  )
}
