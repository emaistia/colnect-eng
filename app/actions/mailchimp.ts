"use server"

import { z } from "zod"

// Form validation schema
const SignupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive updates",
  }),
})

type SignupFormData = z.infer<typeof SignupSchema>

export async function subscribeToMailchimp(formData: FormData) {
  // Validate form data
  const validatedFields = SignupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    consent: formData.get("consent") === "on",
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please check your information and try again.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email } = validatedFields.data

  try {
    // Get Mailchimp credentials from environment variables
    const apiKey = process.env.MAILCHIMP_API_KEY
    const server = process.env.MAILCHIMP_SERVER // e.g., "us1"
    const listId = process.env.MAILCHIMP_LIST_ID

    if (!apiKey || !server || !listId) {
      console.error("Mailchimp credentials not configured:", {
        hasApiKey: !!apiKey,
        hasServer: !!server,
        hasListId: !!listId,
      })
      return {
        success: false,
        message: "Email service not configured. Please contact the administrator.",
      }
    }

    // Split name into first and last name
    const nameParts = name.split(" ")
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : ""

    // Prepare data for Mailchimp
    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
    }

    console.log("Attempting to subscribe with:", {
      server,
      listId,
      email,
      hasApiKey: !!apiKey,
    })

    // Make API request to Mailchimp
    const response = await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()
    console.log("Mailchimp response:", {
      status: response.status,
      statusText: response.statusText,
      data: responseData,
    })

    // Handle already subscribed users
    if (response.status === 400 && responseData.title === "Member Exists") {
      return {
        success: true,
        message: "You're already subscribed! We'll keep you updated with the latest news.",
      }
    }

    if (!response.ok) {
      throw new Error(responseData.detail || "Failed to subscribe")
    }

    return {
      success: true,
      message: "Thanks for subscribing! Check your email for a confirmation.",
    }
  } catch (error) {
    console.error("Mailchimp subscription error:", error)
    return {
      success: false,
      message: "There was a problem subscribing you. Please try again later.",
    }
  }
}

export async function subscribeToNewsletter(email: string) {
  try {
    // Simulate API call to Mailchimp
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log(`Subscribing ${email} to newsletter`)

    return {
      success: true,
      message: "Successfully subscribed to newsletter!",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "Failed to subscribe. Please try again.",
    }
  }
}

// Alias for compatibility
export const submitToMailchimp = subscribeToNewsletter
