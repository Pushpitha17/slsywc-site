import React from "react"
import { MapPin } from "lucide-react"
import { ChevronRight } from "lucide-react"

function Hotel() {
  return (
    <section className="my-24">
      <div className="container">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold bg-text-gradient text-transparent bg-clip-text uppercase">
            Location
          </h2>
        </div>
        <div className="mb-8" >
          <h3 className="font-semibold text-xl md:text-4xl  md:mb-2">
            Hotel Sudu Araliya
          </h3>
          <div className="flex mb-4 md:mb-8">
            <MapPin />
            <span className="text-xl">Polonnaruwa</span>
          </div>
        </div>
        <div className="md:flex justify-center gap-6">
          <div className="md:w-1/2 md:h-max-content flex items-center justify-center">
            <img
              src="/assets/hotel.png"
              className="duration-300 ease-in-out hover:filter hover:drop-shadow-[0_4px_30px_rgba(255,0,0,0.3)]"
              alt=""
            />
          </div>
          <div className="md:w-1/2 md:max-w-[40ch] mt-12 md:mt-0 ">
            <div className="md:block hidden "> 
              <h3 className="font-semibold text-2xl md:text-4xl  md:mb-2">
                Hotel Sudu Araliya
              </h3>
              <div className="flex mb-4 md:mb-8">
                <MapPin />
                <span className="text-xl">Polonnaruwa</span>
              </div>
            </div>
            <p className="text-justify md:text-left mb-4 text-sm">
              The spectacular remains of Polonnaruwa, Sri Lanka&apos;s second ancient
              city, articulately depict some of the best-preserved architectural
              masterpieces of the era. Located in Sri Lanka&apos;s North Western
              Province, Polonnaruwa is about 230 kilometers away from Colombo,
              the country&apos;s capital. 
            </p>
            <div>
              <a
                href="https://www.araliyaresorts.com/hotel-sudu-araliya/"
                target="_blank"
                className="flex"
              >
                {/* border-solid border-b-[2px] border-[#9E0521]  */}
                <div className="flex bg-text-gradient text-transparent bg-clip-text ">
                  <p className="font-semibold underline  decoration-[#9E0521] underline-offset-4">
                    Visit Website
                  </p>
                  <ChevronRight color="#9E0521" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hotel
