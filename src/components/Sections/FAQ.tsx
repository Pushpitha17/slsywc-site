import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

const data = [
  {
    q: "1. What is the IEEE Sri Lanka Section Students | Young Professionals | Women in Engineering Congress (SLSYWC) 2024?",
    ans: "The SLSYWC 2024 is the biggest technical conference hosted by the IEEE Sri Lanka Section. It is a three-day event featuring national and international speakers, with over 200 delegates including undergraduates, graduates, academics, and industry professionals. The congress aims to provide a platform for networking, knowledge sharing, and professional development in the fields of engineering and technology."
  },
  {
    q: "2. Who can attend the SLSYWC 2024?",
    ans: "The SLSYWC 2024 is open to a diverse group of participants including undergraduates, graduates, academics, and industry professionals. It is designed to cater participants from all of the above mentioned categories, providing valuable insights and opportunities for all attendees."
  },
  {
    q: "3. What can participants expect from the SLSYWC 2024?",
    ans: "Participants can expect a variety of activities including keynote speeches from esteemed national and international speakers, technical sessions, workshops, outbound sessions and panel discussions. The congress will cover the latest trends and advancements in engineering and technology, and offer numerous networking opportunities with peers and industry leaders."
  },
  {
    q: "4. How can I register for the SLSYWC 2024?",
    ans: "Registration details for the SLSYWC 2024 will be available on the official congress website. Interested participants will need to fill out an online registration form and may need to pay a registration fee. Early registration is recommended to secure a spot and take advantage of any early bird discounts."
  },
  {
    q: "5. Where and when will the SLSYWC 2024 take place?",
    ans: "The SLSYWC 2024 will be held over three days. Specific dates and the venue details will be provided on the official congress website. Participants should check the website regularly for updates on the schedule, venue, and other important information related to the event."
  }
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
              <AccordionItem value={`item-${index}`} className="border-[#9f071a]" key={index}>
                <AccordionTrigger><p className="text-start">{item.q}</p></AccordionTrigger>
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
