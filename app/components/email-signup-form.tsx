"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { subscribeToMailchimp } from "@/app/actions/mailchimp"
import { useTranslation } from "@/lib/use-language"

export function EmailSignupForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { t } = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const result = await subscribeToMailchimp(email)

      if (result.success) {
        toast({
          title: t("subscribeSuccess"),
          description: "We'll keep you updated with the latest news and features.",
        })
        setEmail("")
      } else {
        toast({
          title: t("subscribeError"),
          description: result.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: t("subscribeError"),
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <Input
        type="email"
        placeholder={t("email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading || !email}>
        {isLoading ? t("loading") : t("signUp")}
      </Button>
    </form>
  )
}
