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
        <div className="mb-8 md:hidden block ">
          <h3 className="font-semibold text-xl md:text-4xl  md:mb-2">
            Cinnamon Life City of Dreams
          </h3>
          <div className="flex mb-4 md:mb-8">
            <MapPin />
            <span className="text-xl">Colombo</span>
          </div>
        </div>
        <div className="md:flex justify-center gap-6">
          <div className="md:w-1/2 md:h-max-content flex items-center justify-center">
            <img
              src="/2025/cinnamon-life.jpg"
              className="duration-300 ease-in-out hover:filter hover:drop-shadow-[0_4px_30px_rgba(37,99,235,0.3)]"
              alt=""
            />
          </div>
          <div className="md:w-1/2 md:max-w-[40ch] mt-12 md:mt-0 ">
            <div className="md:block hidden ">
              <h3 className="font-semibold text-2xl md:text-4xl  md:mb-2">
                Cinnamon Life City of Dreams
              </h3>
              <div className="flex mb-4 md:mb-8">
                <MapPin />
                <span className="text-xl">Colombo</span>
              </div>
            </div>
            <p className="text-justify md:text-left mb-4 text-sm">
              The magnificent Cinnamon Life – City of Dreams stands as a symbol
              of modern architectural brilliance, redefining Colombo’s skyline.
              Located in the heart of Sri Lanka’s vibrant capital, this iconic
              integrated development is set to be the ultimate hub for luxury,
              business, and entertainment. 
            </p>
            <div>
              <a
                href="https://www.cinnamonhotels.com/cinnamon-life-city-of-dreams-sri-lanka"
                target="_blank"
                className="flex"
              >
                {/* border-solid border-b-[2px] border-[#9E0521]  */}
                <div className="flex bg-text-gradient text-transparent bg-clip-text ">
                  <p className="font-semibold underline  decoration-[#2563eb] underline-offset-4">
                    Visit Website
                  </p>
                  <ChevronRight color="#2563eb" />
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
