import React from "react"
import Navbar from "@/components/Sections/Navbar"
import Footer from "@/components/Sections/Footer"

function ThemePage() {
  return (
    <main className="min-h-screen w-full bg-primary-background text-primary-foreground relative bg-[url('/assets/bg_3.png')] bg-cover">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <Navbar></Navbar>
      <div className="h-[69px] md:h-[85px]"></div>
      <section className="w-full min-h-screen md:pt-20 pt-16">
        {/* <div className="text-2xl md:text-5xl font-bold md:w-2/3 text-center bg-text-gradient text-transparent bg-clip-text">
          Revolutionizing the Digital Landscape
        </div> */}
        <div className="container flex flex-col items-center">
          <div className="md:w-1/2 mx-auto">
            <img src="/assets/theme.png" alt="" />
          </div>
          <p className="my-12 max-w-[100ch] text-center">
            The IEEE Sri Lanka Section Student | Young Professionals | Women in
            Engineering Congress 2024 will serve as the 13th installment of the
            largest technical conference in the country. It would pose as a
            platform that unites researchers, academics, students, and industry
            professionals from diverse backgrounds to discuss and share their
            insights and experiences in accordance with the theme {"  "}{" "}
            <span className="font-bold">
              “Revolutionizing the Digital Landscape”.
            </span>
          </p>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default ThemePage
