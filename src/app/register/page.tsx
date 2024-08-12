import RegisterForm from "@/components/Sections/RegisterForm/Form"
import React from "react"

function Register() {
  return (
    <div className="max-w-[720px] mx-auto text-primary-foreground">
      <div className="container">
        <div className="py-5">
          <div className="text-2xl">
            <p className="font-semibold">
              IEEE Sri Lanka Section Students | YP | WIE Congress 2024
              Registration Form
            </p>
          </div>
        </div>
        {/* <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScC5ZFzVA-QUgCV3uYS_d80qlecS5bDfpN4U-aE_OhJiKhXvA/viewform?embedded=true"
          width="640"
          height="765"
        >
          Loading…
        </iframe>
      </div> */}
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
