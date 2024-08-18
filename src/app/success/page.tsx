import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function ConfrmPage({}) {
  return (
    <>
      <div className="text-primary-foreground py-10">
        <div className="container">
          <div className="items-center flex pb-6">
            <p className="md:text-2xl text-xl font-bold leading-5 md:text-center md:w-full text-center bg-text-gradient text-transparent bg-clip-text">
              Registration Successful.
            </p>
          </div>
          <div>Thank You for Registering to IEEE Sri Lanka Section Students | YP | WIE Congress 2024.</div>
          <div></div>
          <div className="py-5">
            <div>
              <Link href={"/"}>
                <span className="underline underline-offset-4 text-[#E71010] text-xs">
                  {" "}
                  Back to Home Page
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfrmPage
