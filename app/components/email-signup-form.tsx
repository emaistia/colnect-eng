"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Mail, CheckCircle, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { subscribeToMailchimp } from "@/app/actions/mailchimp"

interface EmailSignupFormProps {
  campaign?: string
  source?: string
  medium?: string
  placeholder?: string
  buttonText?: string
  className?: string
}

export default function EmailSignupForm({
  campaign = "newsletter",
  source = "website",
  medium = "form",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  className = "",
}: EmailSignupFormProps) {
  const [email, setEmail] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)

    // Add UTM parameters to form data
    formData.append("utm_campaign", campaign)
    formData.append("utm_source", source)
    formData.append("utm_medium", medium)

    try {
      const result = await subscribeToMailchimp(formData)

      if (result.success) {
        toast({
          title: "Successfully subscribed!",
          description: result.message,
        })
        // Reset form
        const form = document.getElementById("email-signup-form") as HTMLFormElement
        form?.reset()
        setIsSubmitted(true)
      } else {
        toast({
          title: "Subscription failed",
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
    <form
      id="email-signup-form"
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        handleSubmit(formData)
      }}
      className={`space-y-4 max-w-md mx-auto ${className}`}
    >
      <div className="space-y-2">
        <Label htmlFor="email-signup">Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email-signup"
            name="email"
            type="email"
            placeholder={placeholder}
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
        disabled={isLoading || !agreeToTerms}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          <>
            <Mail className="mr-2 h-4 w-4" />
            {buttonText}
          </>
        )}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <p className="text-xs text-gray-600 text-center">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  )
}
