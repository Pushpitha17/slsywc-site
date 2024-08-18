import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function ConfrmPage({}) {
  return (
    <>
      <div className="text-primary-foreground py-10">
        <div className="container">
          <div className="items-center flex pb-6">
            <p className="md:text-2xl text-xl font-bold leading-5 md:w-full bg-text-gradient text-transparent bg-clip-text">
              Registration Successful.
            </p>
          </div>
          <div>
            Thank you for registering for the 13th IEEE Sri Lanka Section
            Students | Young Professionals | Women in Engineering Congress, set
            to take place on September 14th,15th 16th, 2024.
          </div>
          <div className="py-2">
            Please check your Email inbox for the confirmation.
          </div>
          <p className="py-2">
            {" "}
            If you have not received an Email Confirmation please let us know
            through our social media channels.
          </p>
          <div className="py-5">
            <h4 className="font-bold pb-4  min-w-[30ch]">Social Media Links</h4>
            <div className="flex items-center gap-4 ">
              <a href="https://www.facebook.com/IEEESLSYWC/" target="_blank">
                <img src="/assets/social/fb_logo.svg" alt="" className="h-8" />
              </a>
              <a
                href="https://www.instagram.com/ieeeslsywc/?hl=en"
                target="_blank"
              >
                <img
                  src="/assets/social/instagram_logo.svg"
                  alt=""
                  className="h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-slsywc/?originalSubdomain=lk"
                target="_blank"
              >
                <img
                  src="/assets/social/linkedin_logo.svg"
                  alt=""
                  className="h-8"
                />
              </a>
              <a href="https://x.com/ieeeslsywc" target="_blank">
                <img src="/assets/social/x_logo.svg" alt="" className="h-7" />
              </a>
            </div>
          </div>
          <div className="py-5">
            <div>
              <Link href={"/"}>
                <span className="underline underline-offset-4 text-[#E71010] text-xs">
                  {" < "}
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
