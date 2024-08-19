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
      <p>Thank you for registering for the 13th IEEE Sri Lanka Section Students | Young Professionals | Women in Engineering Congress, set to take place on September 14th,15th 16th, 2024. We appreciate your interest in joining us for this milestone event.
      </p>
      <p>Please keep an eye on your inbox for further updates on your selection status. Should you be selected, we’ll be sharing important details soon.
      </p>
      <p>Please find the delegate booklet attached <a href="https://drive.google.com/drive/folders/1D8_KqICYTGU6fx5Kf2GleKccP4cb_Dle?usp=sharing"
      target="_blank" style="text-decoration: underline;">here</a> </p>
      <p>Below is a summary of the responses you submitted during registration:
      </p>
  ${renderHtml(values)}
    <div style="margin-top: 50px;">
      <div>Thank you</div>
      <div>Organizing Committee IEEE SL SYW Congress 2024</div>
    </div>
  `

  const mailOptions = {
    from: "ieeeslsywc@gmail.com",
    to: registeredEmail,
    subject: "IEEE SL SYW Congress 2024 | Registration Form",
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
    foreign,
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

  if (foreign === "Yes") {
    html += `
  <div style="max-width: 660px;">
    <div style="margin-bottom: 20px;  font-weight: bold;">
      <p">Registration for IEEE Sri Lanka Section Students | YP | WIE Congress 2024</p>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Email</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${email}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Name with Initials</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${fullName}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">First Name</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${firstName}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Last Name</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${lastName}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Contact</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${contact}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">NIC Number</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${nic}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Gender</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${gender}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">IEEE Student Branch Affilliation</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${branch}</div>
    </div>
    ${
      otherAffiliations != "N/A"
        ? `<div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Other Affilliation</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${otherAffiliations}</div>
    </div>`
        : ""
    }
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Active IEEE Membersip</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${hasMembership}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">IEEE Membersip Number</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${membershipNo}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Memebership Category</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${membershipCategory}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Chapter Memberships</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;"> ${chapterMemberships
        .map((item: string) => `<div>${item}</div>`)
        .join("")}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">Reasons for Interest</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${whatEncouraged}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">IEEE accomplishments or Volunteering experiences</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${volunteeringExperience}</div>
    </div>
    <div style="margin-bottom: 20px; display : flex; align-items: start;">
      <div style="width:220px">T-Shirt Size</div> 
      <div style= "padding-right: 20px; font-weight:bold;">:</div>
      <div style="margin-left: 10px;">${tShirtSize}</div>
    </div>
  </div>

    `
  } else {
    html += ` 
<div style="max-width: 660px;">
<div style="margin-bottom: 20px;  font-weight: bold;">
  <p">Registration for IEEE Sri Lanka Section Students | YP | WIE Congress 2024</p>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Email</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${email}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Name with Initials</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${fullName}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">First Name</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${firstName}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Last Name</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${lastName}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Contact</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${contact}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">NIC Number</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${nic}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Gender</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${gender}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">IEEE Student Branch Affilliation</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${branch}</div>
</div>
${
  otherAffiliations != "N/A"
    ? `<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Other Affilliation</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${otherAffiliations}</div>
</div>`
    : ""
}
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Active IEEE Membersip</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${hasMembership}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">IEEE Membersip Number</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${membershipNo}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Memebership Category</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${membershipCategory}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Chapter Memberships</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;"> ${chapterMemberships
    .map((item: string) => `<div>${item}</div>`)
    .join("")}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Part of Executive Committe</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${partOfExCo}</div>
</div>

${
  partOfExCo === "Yes"
    ? `
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Executive Committee Member Entities</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;"> ${currentExcoEntities
    .map((item: string) => `<div>${item}</div>`)
    .join("")}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Positions</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${positions}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Joining Days</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${joiningDays}</div>
</div>
${
  joiningOneDay != "N/A"
    ? `<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Joining Day</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${joiningOneDay}</div>
</div>`
    : ""
}
`
    : `
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Entities Currently Volunteering in</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;"> ${volunteeringEntities
    .map((item: string) => `<div>${item}</div>`)
    .join("")}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">IEEE accomplishments or Volunteering experiences</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${volunteeringExperience}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Reasons for Interest</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${whatEncouraged}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Previous Participation</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;"> ${previousParticipations
    .map((item: string) => `<div>${item}</div>`)
    .join("")}</div>
</div>
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">Learn to become a member of IEEE Technical Societies</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${learn}</div>
</div>
`
}
<div style="margin-bottom: 20px; display : flex; align-items: start;">
  <div style="width:220px">T-Shirt Size</div> 
  <div style= "padding-right: 20px; font-weight:bold;">:</div>
  <div style="margin-left: 10px;">${tShirtSize}</div>
</div>
</div>
`
  }

  return html
}
