"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const schedule1 = [
  {
    time: "11:30 AM",
    event: "Delegate Registration and Lunch "
  },
  {
    time: "01:00 PM",
    event: "Ushering of Guests "
  },
  {
    time: "01:10 PM",
    event: "Commencement of the Opening Ceremony "
  },
  {
    time: "01:20 PM",
    event: "Welcome Speech "
  },
  {
    time: "01:25 PM",
    event: "Speech by IEEE Sri Lanka Section Chair "
  },
  {
    time: "01:45 PM",
    event: "Inside Congress - An overview of Congress Protocols "
  },
  {
    time: "02:00 PM",
    event: "Oppurtunity pathways with IEEE "
  },
  {
    time: "02:30 PM",
    event: "Technical session (Key note + Panel discussion) "
  },
  {
    time: "04:30 PM",
    event: "Room Allocation "
  },
  {
    time: "05:30 PM",
    event: "Getting ready for Handawa and Dinner "
  },
  {
    time: "07:30 PM",
    event: "IEEE Handawa "
  }
]

const schedule2: { time: string; event: string }[] = [
  {
    time: "08:00 AM",
    event: "Breakfast"
  },
  {
    time: "09:00 AM",
    event: "Opening Pleanary"
  },
  {
    time: "19:05 AM",
    event: "Vision building session "
  },
  {
    time: "10:45 AM",
    event: "Student Track "
  },
  {
    time: "11:45 AM",
    event: "Group photo "
  },
  {
    time: "12:00 PM",
    event: "Lunch "
  },
  {
    time: "01:00 PM",
    event: "YP/WIE Track "
  },
  {
    time: "02:00 PM",
    event: "Chapter Stalls"
  },
  {
    time: "02:50 PM",
    event: "Outbound training activites "
  },
  {
    time: "04:30 PM",
    event: "Evening tea "
  },
  {
    time: "05:00 PM",
    event: "Preparation time for awards night"
  },
  {
    time: "07:00 PM",
    event: "Dinner"
  },
  {
    time: "08:00 PM",
    event: "Awards night and DJ"
  }
]

const schedule3: { time: string; event: string }[] = [
  {
    time: "08:00 AM",
    event: "Breakfast "
  },
  {
    time: "09:00 AM",
    event: "Opening Pleanary "
  },
  {
    time: "09:15 AM",
    event: "Technical session "
  },
  {
    time: "11:15 AM",
    event: "Commencement of the Closing Ceremony "
  },
  {
    time: "11:25 AM",
    event: "Prize giving and the after movie "
  },
  {
    time: "11:50 AM",
    event: "Vote of thanks "
  }
]

const Program = () => {
  const [activeElement, setActiveElement] = useState(1)
  const [schedule, setSchedule] = useState(schedule1)

  useEffect(() => {
    if (activeElement === 1) {
      setSchedule(schedule1)
    } else if (activeElement === 2) {
      setSchedule(schedule2)
    } else if (activeElement === 3) {
      setSchedule(schedule3)
    }
  }, [activeElement, setSchedule])

  return (
    <section className="my-24">
      <div className="container">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold bg-text-gradient text-transparent bg-clip-text uppercase">
            Event Schedule
          </h2>
        </div>
        <div>
          <div className="flex justify-center items-center gap-3">
            <button onClick={() => setActiveElement(1)}>
              <div className="border-gradient text-sm md:text-base p-[2px] rounded flex items-center justify-center">
                <div className="flex space-x-2 items-center py-2 px-3 bg-black border-none border rounded">
                  <span
                    className={`bg-text-gradient ${
                      activeElement === 1
                        ? "text-black"
                        : "text-transparent bg-clip-text"
                    }  font-bold uppercase px-1`}
                  >
                    DAY 1 (19th Sep 2024)
                  </span>
                </div>
              </div>
            </button>
            <button onClick={() => setActiveElement(2)}>
              <div className="border-gradient text-sm md:text-base p-[2px] rounded flex items-center justify-center">
                <div className="flex space-x-2 items-center py-2 px-3 bg-black border-none border rounded">
                  <span
                    className={`bg-text-gradient ${
                      activeElement === 2
                        ? "text-black"
                        : "text-transparent bg-clip-text"
                    }  font-bold uppercase px-1`}
                  >
                    DAY 2 (20th Sep 2024)
                  </span>
                </div>
              </div>
            </button>
            <button onClick={() => setActiveElement(3)}>
              <div className="border-gradient text-sm md:text-base p-[2px] rounded flex items-center justify-center">
                <div className="flex space-x-2 items-center py-2 px-3 bg-black border-none border rounded">
                  <span
                    className={`bg-text-gradient ${
                      activeElement === 3
                        ? "text-black"
                        : "text-transparent bg-clip-text"
                    }  font-bold uppercase px-1`}
                  >
                    DAY 3 (21th Sep 2024)
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex items-center text-sm md:text-base justify-center">
          <div className="flex flex-col gap-3 mt-10">
            {schedule.map((event, i) => (
              <div key={i} className="flex items-center justify-center gap-5">
                <div className="w-[80px] flex justify-end">{event.time}</div>
                <div>
                  <div className="w-[40px] h-[0.5px] bg-white/70"></div>
                </div>
                <div className="flex-1">{event.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Program
