'use client'
import React, { useEffect, useState } from "react"

const Countdown = () => {

  const targetDate = "2024/07/10"

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }


    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    if (initialLoad) {
      // Animate to the remaining time from zero
      const animationDuration = 1000 // 1 second for animation
      const increment = 100 // interval for the animation
      const steps = animationDuration / increment

      let counter = 0
      const interval = setInterval(() => {
        const currentStep = {
          days: Math.floor((timeLeft.days / steps) * counter),
          hours: Math.floor((timeLeft.hours / steps) * counter),
          minutes: Math.floor((timeLeft.minutes / steps) * counter),
          seconds: Math.floor((timeLeft.seconds / steps) * counter)
        }
        setTimeLeft(currentStep)

        if (counter >= steps) {
          clearInterval(interval)
          setInitialLoad(false)
        }
        counter++
      }, increment)

      return () => clearInterval(interval)
    } else {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft())
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [timeLeft, initialLoad])


  return (
    <div>
      <div>{timeLeft.days} Days</div>
      <div>{timeLeft.hours} Hours</div>
      <div>{timeLeft.minutes} Minutes</div>
      <div>{timeLeft.seconds} Seconds</div>
    </div>
  )
}

export default Countdown
