"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const schedule1 = [
  {
    time: "12:00",
    event: "Deletgate Registration"
  },
  {
    time: "13:00",
    event: "Networking Activities - Ice breaker session"
  },
  {
    time: "13:30",
    event: "Ushering of Guests"
  },
  {
    time: "13:45",
    event: "Commencement of the Opening Ceremony"
  },
  {
    time: "13:55",
    event: "Welcome Speech"
  },
  {
    time: "14:05",
    event: "Speech on IEEE Sri Lanka"
  },
  {
    time: "14:25",
    event: "Key Note Speech (Motivational)"
  },
  {
    time: "15:05",
    event: "Evening Tea"
  },
  {
    time: "15:35",
    event: "Inside Congress: An Overview of Congress Protocols"
  },
  {
    time: "15:55",
    event: "IAS Session"
  },
  {
    time: "17:55",
    event: "Evening Plenary - Team Activity"
  },
  {
    time: "18:40",
    event: "Dinner Preparations"
  },
  {
    time: "19:40",
    event: "Dinner"
  },
  {
    time: "21:10",
    event: "End of Day 1 (IEEE Handawa)"
  }
]

const schedule2: { time: string; event: string }[] = []
const schedule3: { time: string; event: string }[] = []

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
                <div>{event.time}</div>
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
