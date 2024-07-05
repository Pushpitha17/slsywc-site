import React from "react"

function PastEvents() {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-bold bg-text-gradient text-transparent bg-clip-text uppercase">
            Past Events
          </h2>
        </div>
        <div className="md:flex min-h-screen items-center justify-center gap-6">
          <div className="md:w-1/2">
            <img src="/assets/past_desktop.png" className="hidden md:block" alt="" />
            <img src="/assets/past_mobile.png" className="md:hidden mx-auto my-12" alt="" />
          </div>
          <div className="md:w-1/2 md:max-w-[40ch]">
            <p className="my-6 text-justify md:text-[22px]">
              In 2023, the IEEE Sri Lanka Section Student | Young Professionals
              | Women in Engineering Congress in collaboration with the IEEE
              Signal Processing Society marked its 12th installment with the
              theme &quot;Dreams Conquer Boundaries.&quot; The event was held for over
              three inspiring days at the picturesque Carolina Beach Hotel in
              Chilaw, with over 200 participants from diverse backgrounds.
              Throughout the congress, attendees had the opportunity to engage
              with 20 speakers who shared their expertise and insights on
              various topics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PastEvents
