import React from "react"

function Organized() {
  return (
    <section className="my-12" id="organized">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-bold bg-text-gradient text-transparent bg-clip-text uppercase">
            Organized By
          </h2>
        </div>
        <div className="flex items-center justify-center gap-6 md:gap-12 my-12">
        <img src="/assets/ieee_slsac.png" className="h-16 md:h-32" alt="" />
          {/* <div className="w-1/2 flex justify-end">
            <img src="/assets/IEEE_logo.png" className="h-12 md:h-28" alt="" />
          </div>
          <div className="w-1/2 flex justify-start">
          <img src="/assets/SLSAC_logo.png" className="h-10 md:h-24" alt="" />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Organized
