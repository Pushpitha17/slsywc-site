import Footer from "@/components/Sections/Footer"
import Navbar from "@/components/Sections/Navbar"
import React from "react"

export default function RegisterPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen bg-[#000011] text-white">
    <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
    <Navbar></Navbar>
    {children}
    <Footer></Footer>
  </div>
}
