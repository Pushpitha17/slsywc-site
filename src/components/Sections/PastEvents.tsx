import React from "react"

function PastEvents() {
  return (
    <section className="my-12">
      <div className="container">
        <div className="md:hidden text-center">
          <h2 className="text-2xl md:text-5xl font-bold bg-text-gradient text-transparent bg-clip-text uppercase">
            Glimpse from 2023
          </h2>
        </div>
        <div className="md:flex md:min-h-screen justify-center gap-6">
          <div className="md:w-1/2 md:h-max-content">
            <div className="hidden md:block mb-12">
              <h2 className="text-2xl md:text-5xl font-bold bg-text-gradient text-transparent bg-clip-text uppercase">
                Glimpse from 2023
              </h2>
            </div>
            <img
              src="/assets/past_desktop.png"
              className="hidden md:block duration-300 ease-in-out hover:filter hover:drop-shadow-[0_4px_30px_rgba(255,0,0,0.3)]"
              alt=""
            />
            <img
              src="/assets/past_mobile.png"
              className="md:hidden mx-auto my-12 w-full"
              alt=""
            />
          </div>
          <div className="md:w-1/2 md:max-w-[40ch]">
            <p className="text-justify md:text-left md:text-[22px] md:my-20">
              In 2023, the IEEE Sri Lanka Section Students | Young Professionals
              | Women in Engineering Congress in collaboration with the IEEE
              Signal Processing Society marked its 12th installment with the
              theme &quot;Dreams Conquer Boundaries.&quot; The event was held
              for over three inspiring days at the picturesque Carolina Beach
              Hotel in Chilaw, with over 200 participants from diverse
              backgrounds. Throughout the congress, attendees had the
              opportunity to engage with 20 speakers who shared their expertise
              and insights on various topics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PastEvents
