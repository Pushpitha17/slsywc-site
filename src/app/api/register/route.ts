import { NextResponse } from "next/server"
import { google } from "googleapis"

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
        universe_domain: "googleapis.com"
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    })

    const sheets = google.sheets({ version: "v4", auth })

    const formData = await req.json()

    const newRow = Object.values(formData).map((value) =>
      Array.isArray(value) ? value.join(", ") : value
    )

    const update = await sheets.spreadsheets.values.append({
      spreadsheetId: "1tBM7UMLE9PQN5tyV3haikz9EBqqWZvxgtN1LCA0coWY",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toLocaleString( 'en-US' , { timeZone : "Asia/Colombo"}), ...newRow]]
      },
      range: "Sheet1"
    })

    const {
      email,
      fullName,
      firstName,
      lastName,
      contact,
      nic,
      gender,
      branch,
      otherAffiliations,
      partOfExCo,
      hasMembership,
      membershipNo,
      membershipCategory,
      currentExcoEntities,
      positions,
      joiningDays,
      joiningOneDay,
      volunteeringEntities,
      volunteeringExperience,
      whatEncouraged,
      previousParticipations,
      learn,
      tShirtSize
    } = formData
    if (partOfExCo === "Yes") {
      const RegistrationDetails = {
        email,
        fullName,
        firstName,
        lastName,
        contact,
        nic,
        gender,
        branch,
        otherAffiliations,
        hasMembership,
        membershipNo,
        membershipCategory,
        currentExcoEntities,
        positions,
        joiningDays,
        joiningOneDay,
        tShirtSize
      }

      const newRow = Object.values(RegistrationDetails).map((value) =>
        Array.isArray(value) ? value.join(", ") : value
      )
      const appendRow = [new Date().toLocaleString( 'en-US' , { timeZone : "Asia/Colombo"}), ...newRow]
      console.log(appendRow)

      const update = await sheets.spreadsheets.values.append({
        spreadsheetId: "1vHO1uqEgp_mWWLvotO8pNYxH2YMcqvlmviYNU7VdAC0",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [appendRow]
        },
        range: "Exco"
      })
      console.log(update)
    } else {
      const RegistrationDetails = {
        email,
        fullName,
        firstName,
        lastName,
        contact,
        nic,
        gender,
        branch,
        otherAffiliations,
        hasMembership,
        membershipNo,
        membershipCategory,
        currentExcoEntities,
        volunteeringEntities,
        volunteeringExperience,
        whatEncouraged,
        previousParticipations,
        learn,
        tShirtSize
      }

      const newRow = Object.values(RegistrationDetails).map((value) =>
        Array.isArray(value) ? value.join(", ") : value
      )
      const appendRow = [new Date().toLocaleString( 'en-US' , { timeZone : "Asia/Colombo"}), ...newRow]
      console.log(appendRow)
      const update = await sheets.spreadsheets.values.append({
        spreadsheetId: "1vHO1uqEgp_mWWLvotO8pNYxH2YMcqvlmviYNU7VdAC0",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [appendRow]
        },
        range: "NonExco"
      })
      console.log(update)
    }

    // For this example, we'll just echo back the received data
    return NextResponse.json({
      message: "Form submitted successfully",
      data: req.body
    })
  } catch (error) {
    console.log("Error processing form submission:", error)
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}
