import React from "react"
// import { ChevronRight } from "lucide-react"

function Theme() {
  return (
    <section id="theme" className="my-12">
      <div className="container flex-col">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl md:text-5xl font-bold md:w-2/3 text-center bg-text-gradient text-transparent bg-clip-text">
            Introducing the Theme of IEEE SLSYWC Congress 2024!
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
          <div className="md:w-1/2 duration-300 ease-in-out hover:filter hover:drop-shadow-[0_4px_30px_rgba(255,0,0,0.3)]">
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
              share their insights and experiences in accordance with the theme {"  "}
              <span className="font-bold text-foreground">&lsquo;Revolutionizing the Digital Landscape&lsquo;</span>.
            </p>
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
