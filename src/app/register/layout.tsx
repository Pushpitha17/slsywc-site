import Footer from "@/components/Sections/Footer"
import Navbar from "@/components/Sections/Navbar"
import React from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function RegisterPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-[#000011] text-white">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>

      <div className="py-6 flex justify-center items-center">
        <div className="w-full max-w-[720px]">
          <div className="flex justify-between items-center  px-6">
            <div className="flex items-center flex-shrink-0">
              <a href="/#">
                <img
                  className="mr-2 duration-500 h-12"
                  src="/assets/Congress Logo 2024.svg"
                  alt="Logo"
                />
              </a>
            </div>
            <Link href="/">
              <ChevronLeft strokeWidth={3} color="#E71010" />
            </Link>
          </div>
        </div>
      </div>
      {/* <Navbar></Navbar> */}
      {children}
      <div className="my-20"></div>
      <Footer></Footer>
    </div>
  )
}
