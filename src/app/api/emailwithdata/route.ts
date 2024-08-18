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

  const { registeredEmail, name, values } = await req.json()


  let emailBody = `
  <p>Dear ${name},</p>
  <p>You have successfully registered to <strong>IEEE Sri Lanka Section Students | YP | WIE Congress 2024.</strong></p>
  <p>Kind regards,<br>SLSYWC Organizing Team</p>
  ${renderHtml(values)}
` 
  console.log(values)

  const mailOptions = {
    from: "ieeeslsywc@gmail.com",
    to: registeredEmail,
    subject: "IEEE SLSYW Congress 2024 Registration",
    text: "This is a test email sent using Nodemailer.",
    html: emailBody
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

const renderHtml = (values: any) => {
  let html = ""

  let {
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
    tShirtSize,
    chapterMemberships
  } = values

  html += ` 
  <div style="max-width: 600px; margin: auto; margin-top : 50px;">
  <div style="margin-bottom: 20px;  font-weight: bold;">
      <p">Registration for IEEE Sri Lanka Section Students | YP | WIE Congress 2024</p>
  </div>
  <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <span style= width: 100px">Email</span> 
      <span style="float: right;">:</span>
      <p style="margin-left: 10px;">${email}</p>
  </div>
  <div style="margin-bottom: 20px;">
      <span>Name with Initials</span> 
      <span style="float: right;">:</span>
      <p style="margin-left: 10px;">${fullName}</p>
  </div>
  <div style="margin-bottom: 20px;">
      <span>First Name</span> 
      <span style="float: right;">:</span>
      <p style="margin-left: 10px;">${firstName}</p>
  </div>
  <div style="margin-bottom: 20px;">
      <span>Last Name</span> 
      <span style="float: right;">:</span>
      <p style="margin-left: 10px;">${lastName}</p>
  </div>
  <div style="margin-bottom: 20px;">
      <span>Last Name</span> 
      <span style="float: right;">:</span>
      <p style="margin-left: 10px;">${lastName}</p>
  </div>
  <div style="margin-bottom: 20px;">
      <span>Contact</span> 
      <span style="float: right;">:</span>
      <p style="margin-left: 10px;">${contact}</p>
  </div>

  
</div>
`
  return html
}
