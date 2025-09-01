"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

interface EmailSignupFormProps {
  placeholder?: string
  buttonText?: string
  campaign?: string
  source?: string
  medium?: string
}

export function EmailSignupForm({
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  campaign = "default",
  source = "website",
  medium = "email",
}: EmailSignupFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading} className="bg-white text-blue-600 hover:bg-gray-100">
        {isLoading ? "..." : buttonText}
      </Button>
    </form>
  )
}
