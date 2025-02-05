import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

const data = [
  {
    q: "1. Who can attend the SLSYWC 2025?",
    ans: `SLSYWC 2025 is open to a wide range of participants, including undergraduates, graduates, academics, tech enthusiasts, and industry professionals who are passionate about innovation and sustainability. `
  },
  {
    q: "2. When will SLSYWC 2025 be held?",
    ans: `The congress will take place on September 19th 20th, and 21st, 2025, in Colombo.`
  },
  {
    q: "3. How can I register for SLSYWC 2025?",
    ans: `All attendees must register online through the official registration link, which will be available on this website in late August or early September.`
  },
  {
    q: "4. How can I stay updated on event details?",
    ans: `Stay informed by following our official website and social media pages, where we will share the latest updates on schedules, speakers, and registration details.`
  },
  {
    q: "5. What is the theme of SLSYWC 2025?",
    ans: `The theme for this year’s congress is “Innovation for Sustainability”, focusing on how technology can drive sustainable solutions for a better future.`
  }
  // {
  //   q: "6. Is it possible to cancel my registration or transfer it to someone else?",
  //   ans: "No, registrations for the IEEE SL SYW Congress 2024 are non-transferable and cannot be cancelled. Additionally, the registration fee is non-refundable under any circumstances."
  // },

  // {
  //   q: "7. What can participants expect from the SLSYWC 2025?",
  //   ans: "Participants can expect a variety of activities including keynote speeches from esteemed national and international speakers, technical sessions, workshops, outbound sessions and panel discussions. The congress will cover the latest trends and advancements in engineering and technology, and offer numerous networking opportunities with peers and industry leaders."
  // }
]

function FAQ() {
  return (
    <section id="faq">
      <div className="container py-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-bold bg-text-gradient text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="my-12">
          <Accordion
            type="single"
            collapsible
            className="max-w-[760px] mx-auto"
          >
            {data.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                className="border-[rgba(0,184,54,1)]"
                key={index}
              >
                <AccordionTrigger>
                  <p className="text-start">{item.q}</p>
                </AccordionTrigger>
                <AccordionContent>{item.ans}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ
