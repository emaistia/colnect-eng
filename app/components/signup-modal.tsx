"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { subscribeToMailchimp } from "@/app/actions/mailchimp"
import { useTranslation } from "@/lib/use-language"

interface SignupModalProps {
  children: React.ReactNode
}

export function SignupModal({ children }: SignupModalProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const { toast } = useToast()
  const { t } = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name || !agreedToTerms) return

    setIsLoading(true)
    try {
      const result = await subscribeToMailchimp(email)

      if (result.success) {
        toast({
          title: t("subscribeSuccess"),
          description: "Welcome to Colnect! We'll send you updates about new features and collecting tips.",
        })
        setEmail("")
        setName("")
        setAgreedToTerms(false)
        setOpen(false)
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Colnect Today</DialogTitle>
          <DialogDescription>Start your collecting journey with millions of collectors worldwide.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-name">{t("name")}</Label>
            <Input
              id="signup-name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">{t("email")}</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              disabled={isLoading}
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the Terms of Service and Privacy Policy
            </Label>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading || !email || !name || !agreedToTerms}>
            {isLoading ? t("loading") : t("getStarted")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
