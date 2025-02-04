import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

function Theme() {
  return (
    <section id="theme" className="my-24">
      <div className="container flex-col">
        <div className="flex items-center justify-center h-full mb-5 md:mb-0">
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
          <div className="md:w-1/2 relative duration-300 ease-in-out hover:filter hover:drop-shadow-[0_4px_30px_rgba(37,99,235,0.3)]">
            <img
              className="object-cover object-center"
              src="/2025/theme-logo.svg"
              alt=""
            />
          </div>
          <div className="md:w-1/2 md:max-w-[40ch] my-5 md:my-0 ">
            {/* <div className="hidden md:block">
              <p className="text-lg font-bold text-center  md:text-start">
                Introducing the Theme for
              </p>
              <p className="text-2xl font-bold bg-text-gradient text-transparent bg-clip-text text-center md:text-start">
                IEEE SLSYWC Congress 2024!
              </p>
            </div> */}
            <p className=" text-justify md:text-left md:text-[22px]">
              Witness the inspiring experience of an attempt to empower
              innovations for a better tomorrow with the 14th installment of the
              largest technical conference in the country. Uniting researchers,
              academics, industry professionals, and students from diverse
              backgrounds to share their thoughts, insights, and experiences,
              the SLSYW Congress 2025 will unravel under the theme{"  "}
              <span className="font-bold bg-text-gradient text-transparent bg-clip-text">
                &lsquo;Innovation for Sustainability&lsquo;
              </span>
              .
            </p>
            <div className="my-6">
              <div className="flex">
                <Link href="/theme">
                  <div className="border-gradient p-[2px] rounded flex items-center justify-center">
                    <div className="flex space-x-2 items-center py-2 px-3 bg-black border-none border rounded">
                      <span className="bg-text-gradient text-transparent bg-clip-text font-bold uppercase">
                        More about our Theme{" "}
                      </span>
                      <ChevronRight color="#2563eb" />
                    </div>
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
