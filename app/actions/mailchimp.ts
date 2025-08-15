"use server"

import { z } from "zod"

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
})

export async function subscribeToMailchimp(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string

    // Validate the input
    const validatedData = emailSchema.parse({
      email,
      firstName,
      lastName,
    })

    const API_KEY = process.env.MAILCHIMP_API_KEY
    const SERVER_PREFIX = process.env.MAILCHIMP_SERVER
    const LIST_ID = process.env.MAILCHIMP_LIST_ID

    if (!API_KEY || !SERVER_PREFIX || !LIST_ID) {
      throw new Error("Mailchimp configuration is missing")
    }

    const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: validatedData.email,
        status: "subscribed",
        merge_fields: {
          FNAME: validatedData.firstName || "",
          LNAME: validatedData.lastName || "",
        },
        tags: ["colnect-landing-page"],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // Handle specific Mailchimp errors
      if (data.title === "Member Exists") {
        return {
          success: false,
          error: "This email is already subscribed to our newsletter.",
        }
      }

      throw new Error(data.detail || "Failed to subscribe to newsletter")
    }

    return {
      success: true,
      message: "Successfully subscribed to newsletter!",
    }
  } catch (error) {
    console.error("Mailchimp subscription error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid email address provided.",
      }
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}
