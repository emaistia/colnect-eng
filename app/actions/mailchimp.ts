"use server"

export async function subscribeToMailchimp(email: string) {
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const SERVER_PREFIX = process.env.MAILCHIMP_SERVER
  const LIST_ID = process.env.MAILCHIMP_LIST_ID

  if (!API_KEY || !SERVER_PREFIX || !LIST_ID) {
    throw new Error("Mailchimp configuration is missing")
  }

  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      if (errorData.title === "Member Exists") {
        return { success: false, error: "This email is already subscribed!" }
      }
      throw new Error(errorData.detail || "Failed to subscribe")
    }

    return { success: true }
  } catch (error) {
    console.error("Mailchimp subscription error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to subscribe",
    }
  }
}
