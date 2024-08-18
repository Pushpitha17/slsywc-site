import Footer from "@/components/Sections/Footer"
import React from "react"

export default function SuccessPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-[#000011] text-white">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <div className="container py-5">
        <div className="flex items-center flex-shrink-0">
          <a href="/#">
            <img
              className="mr-2 duration-500 h-12"
              src="/assets/Congress Logo 2024.svg"
              alt="Logo"
            />
          </a>
        </div>
      </div>
      {children}
      <Footer></Footer>
    </div>
  )
}
