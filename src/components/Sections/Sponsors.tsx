import React from "react"

const logorows = {
  desktop: [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png"
  ],
  mobile: {
    one: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png"
    ],
    two: ["9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png"]
  }
}

const path = "/assets/sponsors/"

function Sponsors() {
  return (
    <section className="my-12">
      <div className="py-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-bold bg-text-gradient text-transparent bg-clip-text uppercase">
            Past Sponsors
          </h2>
        </div>
        <div className="my-12 hidden md:block">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left">
              {logorows.desktop.map((item, index) => (
                <li key={index}>
                  <img src={path + item} className="h-20" />
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left"
              aria-hidden="true"
            >
              {logorows.desktop.map((item, index) => (
                <li key={index}>
                  <img key={index} src={path + item} className="h-20" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-12 md:hidden">
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll-left-mobile">
              {logorows.mobile.one.map((item, index) => (
                <li key={index}>
                  <img src={path + item} className="h-12" />
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll-left-mobile"
              aria-hidden="true"
            >
              {logorows.mobile.one.map((item, index) => (
                <li key={index}>
                  <img key={index} src={path + item} className="h-12" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-12 md:hidden">
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul className="flex items-center justify-center md:justify-end [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll-right-mobile">
              {logorows.mobile.two.map((item, index) => (
                <li key={index}>
                  <img src={path + item} className="h-12" />
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-center md:justify-end [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll-right-mobile"
              aria-hidden="true"
            >
              {logorows.mobile.two.map((item, index) => (
                <li key={index}>
                  <img key={index} src={path + item} className="h-12" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
