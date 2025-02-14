"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Duration of the scroll animation (in seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Easing function
    })

    function raf(time: number) {
      lenis.raf(time) // Update Lenis scroll on each frame
      requestAnimationFrame(raf) // Call the next animation frame
    }

    requestAnimationFrame(raf) // Start the animation loop

    return () => {
      lenis.destroy() // Clean up when the component is unmounted
    }
  }, [])

  return <>{children}</>
}

export default LenisProvider
