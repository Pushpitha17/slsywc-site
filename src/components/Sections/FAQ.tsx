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
    ans: "The SLSYWC 2025 is open to a diverse group of participants including undergraduates, graduates, academics, and industry professionals. It is designed to cater participants from all of the above mentioned categories, providing valuable insights and opportunities for all attendees."
  },
  {
    q: "2. What is the delegate fee for the SLSYWC 2025?",
    ans: "The delegate fee for participating in the SLSYWC 2025 is 12,000 LKR per participant. This fee covers access to all sessions, workshops, and networking events over the three days, as well as meals and other congress materials."
  },
  {
    q: "3. How do I register for the IEEE SL SYW Congress 2025?",
    ans: "All attendees must register online via the official registration link: https://sywc.ieee.lk/register before the deadline of 25th August 2024 at 11:59:59 PM. Early registration is recommended due to limited on-site accommodation."
  },
  {
    q: "4. What happens if I miss the registration deadline?",
    ans: "Registrations after the deadline of 25th August 2024 may still be accepted under specific conditions set by the IEEE Sri Lanka Section. Late registrations may incur additional late fees, and acceptance is not guaranteed."
  },
  {
    q: "5. What are the payment options available for local and foreign delegates?",
    ans: "Local delegates can make payments through their respective student branches, affinity groups, or the IEEE Sri Lanka Section. Foreign delegates can pay via credit or debit cards through the online registration system. In special cases, bank transfers may be accepted with prior arrangement and may incur an additional processing fee."
  },
  {
    q: "6. Is it possible to cancel my registration or transfer it to someone else?",
    ans: "No, registrations for the IEEE SL SYW Congress 2024 are non-transferable and cannot be cancelled. Additionally, the registration fee is non-refundable under any circumstances."
  },

  {
    q: "7. What can participants expect from the SLSYWC 2024?",
    ans: "Participants can expect a variety of activities including keynote speeches from esteemed national and international speakers, technical sessions, workshops, outbound sessions and panel discussions. The congress will cover the latest trends and advancements in engineering and technology, and offer numerous networking opportunities with peers and industry leaders."
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
              <AccordionItem
                value={`item-${index}`}
                className="border-[rgba(0,76,241,1)]"
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
