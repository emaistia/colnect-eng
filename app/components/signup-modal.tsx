"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import { subscribeToMailchimp } from "@/app/actions/mailchimp"
import { useToast } from "@/components/ui/use-toast"

interface SignupModalProps {
  children: React.ReactNode
  campaign?: string
  source?: string
  medium?: string
}

export function SignupModal({
  children,
  campaign = "default",
  source = "website",
  medium = "modal",
}: SignupModalProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    const formData = new FormData(event.currentTarget)

    // Add UTM parameters to form data
    formData.append("utm_campaign", campaign)
    formData.append("utm_source", source)
    formData.append("utm_medium", medium)

    try {
      const result = await subscribeToMailchimp(formData)

      if (result.success) {
        toast({
          title: "Welcome to Colnect!",
          description: result.message,
        })
        setOpen(false)
      } else {
        toast({
          title: "Subscription Failed",
          description: result.error,
          variant: "destructive",
        })
      }
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Colnect Today</DialogTitle>
          <DialogDescription>Start your collecting journey with millions of collectors worldwide.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-3">
            <Label>Collecting Interests (Optional)</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="stamps" name="interests" value="stamps" />
                <Label htmlFor="stamps" className="text-sm">
                  Stamps
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="coins" name="interests" value="coins" />
                <Label htmlFor="coins" className="text-sm">
                  Coins
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="banknotes" name="interests" value="banknotes" />
                <Label htmlFor="banknotes" className="text-sm">
                  Banknotes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="postcards" name="interests" value="postcards" />
                <Label htmlFor="postcards" className="text-sm">
                  Postcards
                </Label>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing Up...
              </>
            ) : (
              "Sign Up Free"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
