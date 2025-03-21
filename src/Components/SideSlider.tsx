"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import google from "../../public/googleImg.png"

interface Testimonial {
  id: number
  name: string
  date: string
  avatar: string
  rating: number
  text: string
  verified?: boolean
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Abeer Adel",
      date: "2024-04-11",
      avatar: "",
      rating: 5,
      text: "Dr Rehab is the most professional and honest doctor I have ever met, she says exactly what u need honestly ,she always meet her patient with cheerful smile ...",
      verified: true,
    },
    {
      id: 2,
      name: "Ali and li Allam",
      date: "2024-04-09",
      avatar: "",
      rating: 5,
      text: "أحلى دكتورة في الدنيا وأحلى عيادة صغير بجد ❤️",
      verified: true,
    },
    {
      id: 3,
      name: "donia matar",
      date: "2024-04-09",
      avatar: "",
      rating: 5,
      text: "I was amazing experience I really felt more young and more confident the doctor and the botox were very good",
      verified: true,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      date: "2024-04-05",
      avatar: "",
      rating: 5,
      text: "Excellent service and results! Dr. Rehab took the time to understand my concerns and provided personalized treatment.",
      verified: true,
    },
    {
      id: 5,
      name: "Mohammed Ali",
      date: "2024-04-02",
      avatar: "",
      rating: 5,
      text: "Professional clinic with state-of-the-art equipment. The staff is friendly and the results are amazing!",
      verified: true,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = testimonials.length - 3 // Show 3 testimonials at a time

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c4755] mb-8">Here is what our customers say</h2>

          {/* Google Review Rating */}
          <div className="flex flex-col items-center justify-center mb-10">
            <h3 className="text-xl font-bold mb-2">EXCELLENT</h3>
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-1">
              Based on <strong>reviews</strong>
            </p>
            <div className="google-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="25" viewBox="0 0 272 92">
                <path
                  fill="#EA4335"
                  d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                />
                <path
                  fill="#FBBC05"
                  d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                />
                <path
                  fill="#4285F4"
                  d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                />
                <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
                <path
                  fill="#EA4335"
                  d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                />
                <path
                  fill="#4285F4"
                  d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-20.49.01z"
                />
              </svg>
            </div>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-[#2c4755]" />
            </button>

            <div className="flex justify-center gap-6 overflow-hidden">
              {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm w-full max-w-xs flex flex-col">
                  <div className="flex items-center mb-4">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white mr-3">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    </div>
                    <div className="ml-auto">
                        <Image src={google} alt="verified" className="w-7 h-77" />
                    </div>
                  </div>

                  <div className="flex mb-3 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    {testimonial.verified && <span className="ml-2 text-white flex items-center justify-center text-xs bg-blue-500 w-5 h-5 rounded-full" >✓</span>}
                  </div>

                  <p className="text-sm flex-grow mb-3">{testimonial.text}</p>

                  <button className="text-sm text-gray-500 self-start hover:text-[#2c4755]">Read more</button>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-[#2c4755]" />
            </button>
          </div>

          <button className="bg-[#2c4755] hover:bg-[#1d3644] mt-8 text-white rounded-full px-6 py-4 text-[17px] font-medium font-montserrat cursor-pointer">
              More Details
            </button>        </div>
      </div>
    </section>
  )
}

