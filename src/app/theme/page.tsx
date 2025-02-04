import React from "react"
import Navbar from "@/components/Sections/Navbar"
import Footer from "@/components/Sections/Footer"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { data } from "./themeData"
import ThemeItem from "./ThemeItem"

function ThemePage() {
  return (
    <main className="min-h-screen w-full bg-primary-background text-primary-foreground relative bg-[url('/assets/bg_3.png')] bg-cover">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      {/* <Navbar></Navbar> */}
      <div className="absolute w-full top-0 z-50">
        <div className="container mx-auto px-4 relative lg:text-sm">
          <div className="py-3 md:py-4 flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <a href="/#">
                <img
                  className="h-12 md:h-16"
                  src="/assets/Congress Logo 2024.svg"
                  alt="Logo"
                />
              </a>
            </div>
            <Link href="/">
              <div className="flex ml-14 space-x-1 text-main-green items-center">
                <ChevronLeft strokeWidth={3} color="rgba(0,184,54,1)" />
                <span>Home</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[69px] md:h-[85px]"></div>
      <section className="w-full md:pt-8 pt-8">
        {/* <div className="text-2xl md:text-5xl font-bold md:w-2/3 text-center bg-text-gradient text-transparent bg-clip-text">
          Theme for SLSYWC'24 
        </div> */}
        <div className="container flex flex-col items-center">
          <div className="md:w-1/2 mx-auto">
            <img src="/assets/theme.png" alt="" />
          </div>
          <p className="my-12 max-w-[100ch] md:text-center">
            The IEEE Sri Lanka Section Student | Young Professionals | Women in
            Engineering Congress 2025 will be the 14th installment of the
            largest technical conference in the country. It will serve as a
            platform that unites researchers, academics, students, and industry
            professionals from diverse backgrounds to discuss and share their
            thoughts, insights, and experiences on the theme{"  "}
            <br />
            <span className="font-bold bg-text-gradient text-transparent bg-clip-text">
              &lsquo;Innovation for Sustainability&lsquo;.
            </span>
          </p>
        </div>
      </section>
      <section className="container py-5 mb-10">
        <div className="grid gird-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <ThemeItem
              key={i}
              number={item.number}
              title={item.title}
              description={item.description}
            ></ThemeItem>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default ThemePage

const themeItem = () => {}
