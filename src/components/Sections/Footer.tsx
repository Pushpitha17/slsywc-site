import React from "react"

function Footer() {
  return (
    <section className="relative">
      <hr className="h-px my-4 bg-gray-800 border-0"/>
      <div className="container py-6">
        <div className="md:flex justify-between">
          <div className="max-w-[50ch]">
            <p className="font-bold text-2xl md:text-5xl pb-4 bg-text-gradient text-transparent bg-clip-text">SLSYWC&apos;24</p>
            <p>
              IEEE SLSYW Congress, the flagship event of the IEEE Sri Lanka
              Section promotes fostering technological innovation while
              providing opportunities for the undergraduates of the country,
              to network, and brainstorm.
            </p>
          </div>
          <div className="py-6 md:py-0 min-w-[30ch]">
            <h4 className="font-bold pb-2">General Links</h4>
            <ul >
              <li className="underline mb-1">
                <a href="https://ieee.lk/"  target="_blank">IEEE Sri Lanka Section</a>
              </li>
              <li className="underline mb-1">
                <a href="https://ieee.lk/community/student-activities-committee/"  target="_blank">SLSAC</a>
              </li>
              <li className="underline mb-1">
                <a href="https://ieee.lk/community/young-professionals/"  target="_blank">Young Professionals</a>
              </li>
              <li className="underline mb-1">
                <a href="https://ieeewie.lk/"  target="_blank">WIE</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold pb-4  min-w-[30ch]">Social Media Links</h4>
            <div className="flex items-center gap-4 ">
              <a href="https://www.facebook.com/IEEESLSYWC/" target="_blank">
                <img src="/assets/social/fb_logo.svg" alt="" className="h-8" />
              </a>
              <a href="https://www.instagram.com/ieeeslsywc/?hl=en" target="_blank">
                <img
                  src="/assets/social/instagram_logo.svg"
                  alt=""
                  className="h-8"
                />
              </a>
              <a href="https://www.linkedin.com/company/ieee-slsywc/?originalSubdomain=lk" target="_blank">
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
        </div>
      </div>
      <div className="h-[2px] w-full bg-main-gradient absolute bottom-0 z-50"></div>
    </section>
  )
}

export default Footer
