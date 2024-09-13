import Footer from "@/components/Sections/Footer"
import Navbar from "@/components/Sections/Navbar"
import React from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function ThemePageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen w-screen bg-primary-background text-primary-foreground relative bg-[url('/assets/bg_3.png')] bg-cover">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <div className="absolute w-full top-0 h-[69px] md:h-[85px] z-50">
        <div className="py-3 md:py-6 flex justify-center items-center">
          <div className="w-full md:container">
            <div className="flex justify-between items-center  px-6 md:px-0">
              <div className="flex items-center flex-shrink-0">
                <a href="/#">
                  <img
                    className="mr-2 duration-500 h-12"
                    src="/assets/Congress Logo 2024.svg"
                    alt="Logo"
                  />
                </a>
              </div>
              <Link href="/" className="flex items-center text-sm">
                <ChevronLeft strokeWidth={3} color="#E71010" />
                {" Home"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="my-20"></div>
      <Footer></Footer>
    </main>
  )
}
