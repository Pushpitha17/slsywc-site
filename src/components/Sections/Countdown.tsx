"use client"
import React, { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import AnimatedCounter from "../Elements/AnimatedCounter"
import { orbitron, silkscreen } from "@/app/fonts"

interface Counts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(0)
  const [counts, setCounts] = useState<Counts>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 750
  })

  const updateCount = (): void => {
    let difference = timeLeft

    let newCounts: Counts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }

    if (difference < 0) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      newCounts = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    setCounts(newCounts)
  }

  const updateTimeLeft = () => {
    const newTimeleft = new Date(timeLeft).getTime() - 1000
    setTimeLeft(newTimeleft)
    console.log("updating time", newTimeleft)
  }

  useEffect(() => {
    console.log("Counter Use EFfect Fired")

    const calculateTimeLeft = (): void => {
      let difference = +new Date(targetDate) - +new Date()
      setTimeLeft(difference)
    }

    if (inView && shouldAnimate) {
      calculateTimeLeft()
      setTimeout(() => {
        setShouldAnimate(false)
      }, 2000)
    }
  }, [targetDate, inView])

  useEffect(() => {
    updateCount()
  }, [timeLeft])

  useEffect(() => {
    if (!shouldAnimate) {
      setTimeout(updateTimeLeft, 1000)
    }
  }, [counts, shouldAnimate])

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center space-x-4 text-white bg-main-gradient h-56 md:h-72"
    >
      {" "}
      {/* <div className=" text-xl md:text-4xl tracking-widest">
        <p className={orbitron.className}>Event Concludes Successfully</p>
      </div> */}
      <div className=" text-xl md:text-4xl tracking-widest">
        <p className={`${orbitron.className} px-3 text-center`}>
          Gear Up for the Ultimate Experience – The Countdown Begins!
        </p>
      </div>
      {/* <div className="container flex justify-between max-w-[720px]">
        {(Object.entries(counts) as [keyof Counts, number][]).map(
          ([unit, value]) => (
            <div key={unit} className={`${orbitron.className} text-center`}>
              <div className="md:text-4xl font-bold mb-2">
                <AnimatedCounter value={value} shouldAnimate={shouldAnimate} />
              </div>
              <div className="text-sm uppercase">{unit}</div>
            </div>
          )
        )}
      </div> */}
    </div>
  )
}

export default CountdownTimer
