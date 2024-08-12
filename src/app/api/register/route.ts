import { NextResponse } from "next/server"
import { google } from "googleapis";



export async function POST(req: Request) {
  // Only allow POST requests

  try {
    // Get the form data from the request body
    const auth = await google.auth.getClient({
      projectId: process.env.GCP_PROJECT_ID,
      credentials: {
        type: "service_account",
        private_key: process.env.GCP_PRIVATE_KEY,
        client_email: process.env.GCP_CLIENT_EMAIL,
        client_id: process.env.GCP_CLIENT_ID,
        token_url: process.env.GCP_TOKEN_URI,
        universe_domain: "googleapis.com",
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const formData = await req.json()
    console.log(formData)

    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: "1tBM7UMLE9PQN5tyV3haikz9EBqqWZvxgtN1LCA0coWY",
      range: "A1:B2",
    });

    const newRow = Object.values(formData)

    const update = await sheets.spreadsheets.values.append({
      spreadsheetId: "1tBM7UMLE9PQN5tyV3haikz9EBqqWZvxgtN1LCA0coWY",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values : [newRow]
      },
      range:"Sheet1"
    })

    // Here you would typically process the data
    // For example, save to a database, send an email, etc.
    console.log("sheet data received:", data.data.values)

    // For this example, we'll just echo back the received data
    return NextResponse.json({
      message: "Form submitted successfully",
      data: req.body
    })
  } catch (error) {
    console.error("Error processing form submission:", error)
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}
