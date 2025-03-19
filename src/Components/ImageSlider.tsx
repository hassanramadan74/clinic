"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import first from "../../public/BeforAfter1.jpg"
import second from "../../public/BeforAfter2.jpg"

function ImageSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100

    const newPosition = Math.max(0, Math.min(100, x))
    setSliderPosition(newPosition)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement> | TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const x = ((touch.clientX - rect.left) / rect.width) * 100
    const newPosition = Math.max(0, Math.min(100, x))
    setSliderPosition(newPosition)
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false)
    }

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (isDragging) {
        handleMouseMove(e)
      }
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    window.addEventListener("mousemove", handleMouseMoveGlobal)

    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
      window.removeEventListener("mousemove", handleMouseMoveGlobal)
    }
  }, [isDragging])

  return (
    <section>
      <div className="relative w-full overflow-hidden bg-white">
        <div className="container py-10 px-3 mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-center  gap-8">
            <div className="max-w-2xl">
              <h3 className="text-[20px] font-[500] font-montserrat text-[#2c4755] mb-2 uppercase">
                We seek your perfection
              </h3>
              <h2 className="text-[30px] font-montserrat font-[800] text-[#2c4755] mb-2">
                CHECK OUT SOME OF OUR INCREDIBLE BEFORE AND AFTERS
              </h2>

              <button className="bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-6 py-4 text-[17px] font-medium font-montserrat cursor-pointer">
                Check Before and After
              </button>
            </div>
            {/* before and after component */}
            <div className="w-full max-w-[800px] mt-4 md:mt-0">
  <div
    ref={containerRef}
    className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg shadow-lg cursor-ew-resize"
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    onTouchMove={handleTouchMove}
  >
    {/* "After" image (shown fully) */}
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={second || "/placeholder.svg"}
        alt="After"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>

    {/* "Before" image (clipped based on slider) */}
    <div
      className="absolute inset-0 h-full overflow-hidden"
      style={{ width: `${sliderPosition}%` }}
    >
      <Image
        src={first || "/placeholder.svg"}
        alt="Before"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>

    {/* Slider control */}
    <div
      className="absolute top-0 bottom-0 w-1 bg-[#1d3644] cursor-ew-resize"
      style={{
        left: `calc(${sliderPosition}% - 0.5px)`,
        transform: "translateX(-50%)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1d3644] rounded-full flex items-center justify-center shadow-md">
        <div className="flex items-center justify-center">
          <div className="w-1 h-4 bg-white rounded-full"></div>
          <div className="w-4 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>

    {/* Labels */}
    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 text-sm rounded">
      Before
    </div>
    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 text-sm rounded">
      After
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageSlider

