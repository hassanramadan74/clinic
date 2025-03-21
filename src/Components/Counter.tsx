"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface StatItem {
  value: number
  label: string
  prefix?: string
}

export default function StatsCounter() {
  const stats: StatItem[] = [
    { value: 1500, label: "Satisfied Patients", prefix: "+" },
    { value: 300, label: "Injections Performed", prefix: "+" },
    { value: 100, label: "International Conferences Attended", prefix: "+" },
    { value: 15, label: "Years Of Experience", prefix: "+" },
  ]

  const [counters, setCounters] = useState<number[]>(stats.map(() => 0))
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const animationStarted = useRef(false)

  useEffect(() => {
    if (inView && !animationStarted.current) {
      animationStarted.current = true

      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds for animation
        const frameDuration = 1000 / 60 // 60fps
        const totalFrames = Math.round(duration / frameDuration)
        const valueIncrement = stat.value / totalFrames

        let currentFrame = 0

        const counter = setInterval(() => {
          currentFrame++

          setCounters((prev) => {
            const newCounters = [...prev]

            // Calculate the new value based on easeOutExpo function for smoother animation
            const progress = currentFrame / totalFrames
            const easedProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease out
            const newValue = Math.min(Math.round(stat.value * easedProgress), stat.value)

            newCounters[index] = newValue
            return newCounters
          })

          if (currentFrame === totalFrames) {
            clearInterval(counter)
          }
        }, frameDuration)
      })
    }
  }, [inView, stats])

  return (
    <section ref={ref} className="py-12 bg-[#f2f2f2]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#2c4755] mb-2">
                {stat.prefix || ""}
                {counters[index].toLocaleString()}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

