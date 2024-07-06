import React from "react"
import { ChevronRight } from "lucide-react"

function Theme() {
  return (
    <section>
      <div className="container">
        <div className="md:flex md:min-h-screen items-center justify-center gap-6 ">
          <div className="md:hidden mt-20">
            <p className="text-lg font-bold text-center  md:text-start">
              Introducing the Theme for
            </p>
            <p className="text-2xl font-bold bg-text-gradient text-transparent bg-clip-text text-center md:text-start">
              IEEE SLSYWC Congress 2024!
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/assets/theme.png" alt="" />
          </div>
          <div className="md:w-1/2 md:max-w-[40ch]">
            <div className="hidden md:block">
              <p className="text-lg font-bold text-center  md:text-start">
                Introducing the Theme for
              </p>
              <p className="text-2xl font-bold bg-text-gradient text-transparent bg-clip-text text-center md:text-start">
                IEEE SLSYWC Congress 2024!
              </p>
            </div>
            <p className="my-6 text-justify md:text-[22px]">
              The IEEE Sri Lanka Section Students | Young Professionals | Women
              in Engineering Congress 2024 will serve as the 13th installment of
              the largest technical conference in the country. It would pose as
              a platform that unites researchers, academics, students, and
              industry professionals from diverse backgrounds to discuss and
              share their insights and experiences in accordance with the theme
              “Revolutionizing the Digital Landscape”.
            </p>
            <div className="flex">
              <button className="py-2 pl-6 pr-3 text-foreground font-medium border border-red-700 rounded-[8px] text-base flex">
                More about the theme {"  "}{" "}
                <ChevronRight className="text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Theme
