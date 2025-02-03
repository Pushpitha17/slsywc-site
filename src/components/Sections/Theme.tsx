import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

function Theme() {
  return (
    <section id="theme" className="my-24">
      <div className="container flex-col">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl md:text-5xl font-bold md:w-2/3 text-center bg-text-gradient text-transparent bg-clip-text md:mb-8">
            Introducing the Theme of IEEE SLSYWC Congress 2025!
          </p>
        </div>
        <div className="md:flex items-center justify-center gap-6 ">
          {/* <div className="md:hidden mt-20">
            <p className="text-lg font-bold text-center  md:text-start">
              Introducing the Theme for
            </p>
            <p className="text-2xl font-bold bg-text-gradient text-transparent bg-clip-text text-center md:text-start">
              IEEE SLSYWC Congress 2024!
            </p>
          </div> */}
          <div className="md:w-1/2 duration-300 ease-in-out hover:filter hover:drop-shadow-[0_4px_30px_rgba(37,99,235,0.3)]">
            <img src="/assets/theme.png" alt="" />
          </div>
          <div className="md:w-1/2 md:max-w-[40ch]">
            {/* <div className="hidden md:block">
              <p className="text-lg font-bold text-center  md:text-start">
                Introducing the Theme for
              </p>
              <p className="text-2xl font-bold bg-text-gradient text-transparent bg-clip-text text-center md:text-start">
                IEEE SLSYWC Congress 2024!
              </p>
            </div> */}
            <p className="my-6 text-justify md:text-left md:text-[22px]">
              Embark on a transformative journey into the future of digital
              innovation at this year&apos;s largest technical conference in the
              country, serving as the 13th installment. It would pose as a
              platform that unites researchers, academics, students, and
              industry professionals from diverse backgrounds to discuss and
              share their insights and experiences in accordance with the theme{" "}
              {"  "}
              <span className="font-bold text-foreground text-[#2563eb]">
                &lsquo;Innovation for sustainability&lsquo;
              </span>
              .
            </p>
            <div className="my-6">
              <div className="flex">
                <Link href="/theme">
                  <div className="flex space-x-2 items-center py-2 px-3 border border-[#2563eb] rounded">
                    <span className="bg-text-gradient text-transparent bg-clip-text font-bold uppercase">
                      More about our Theme{" "}
                    </span>
                    <ChevronRight color="#2563eb" />
                  </div>
                </Link>
              </div>
            </div>
            {/* <div className="flex">
              <button className="py-2 pl-6 pr-3 text-foreground font-medium border border-red-700 rounded-[8px] text-base flex">
                More about the theme {"  "}{" "}
                <ChevronRight className="text-foreground" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Theme
