import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ieeeslsywc@gmail.com",
      pass: process.env.GMAIL_PW
    }
  })

  const { registeredEmail, name } = await req.json()

  const mailOptions = {
    from: "ieeeslsywc@gmail.com",
    to: registeredEmail,
    subject: "IEEE SLSYW Congress 2024 Registration",
    text: "This is a test email sent using Nodemailer.",
    html: `
      <p>Dear ${name},</p>
      <p>You have successfully registered to <strong>IEEE Sri Lanka Section Students | YP | WIE Congress 2024.</strong></p>
      <p>Kind regards,<br>SLSYWC Organizing Team</p>
    `
    // attachments: [
    //   {
    //     filename: "registration_form.pdf",
    //     content: attchment
    //   }
    // ]
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email: ", error)
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}
