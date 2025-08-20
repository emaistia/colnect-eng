"use server"

import { z } from "zod"

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  interests: z.array(z.string()).optional(),
})

export async function subscribeToMailchimp(formData: FormData) {
  try {
    // Extract form data
    const email = formData.get("email") as string
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const interests = formData.getAll("interests") as string[]

    // Validate the data
    const validatedData = emailSchema.parse({
      email,
      firstName,
      lastName,
      interests,
    })

    // Check if required environment variables are present
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_SERVER || !process.env.MAILCHIMP_LIST_ID) {
      throw new Error("Mailchimp configuration is missing")
    }

    // Prepare the request to Mailchimp API
    const url = `https://${process.env.MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`

    const data = {
      email_address: validatedData.email,
      status: "subscribed",
      merge_fields: {
        FNAME: validatedData.firstName || "",
        LNAME: validatedData.lastName || "",
      },
      interests:
        validatedData.interests?.reduce(
          (acc, interest) => {
            acc[interest] = true
            return acc
          },
          {} as Record<string, boolean>,
        ) || {},
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()

      // Handle specific Mailchimp errors
      if (errorData.title === "Member Exists") {
        return {
          success: false,
          error: "This email is already subscribed to our newsletter.",
        }
      }

      throw new Error(errorData.detail || "Failed to subscribe to newsletter")
    }

    const result = await response.json()

    return {
      success: true,
      message: "Successfully subscribed to newsletter!",
      data: result,
    }
  } catch (error) {
    console.error("Mailchimp subscription error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}
