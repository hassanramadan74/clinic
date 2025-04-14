"use client";

import type React from "react";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, AnimatePresence } from "motion/react";
import { theme } from "@/lib/theme";
import { getReviews, Review as BackendReview } from "@/lib/reviews";

interface Testimonial {
  id?: number;
  name: string;
  date: string;
  avatar: string;
  rating: number;
  text: string | null;
}

export default function ReviewsSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch reviews from backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const reviews = await getReviews();

        if (reviews) {
          // Map backend review structure to our component's structure
          const mappedReviews = reviews.map(
            (review: BackendReview, index: number) => ({
              id: index + 1,
              name: review.name,
              date:
                review.publishAt ||
                new Date(review.publishedAtDate).toLocaleDateString(),
              avatar: review.photoUrl || "",
              rating: review.stars,
              text: review.text || "Great experience!",
            })
          );

          setTestimonials(mappedReviews);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error loading reviews:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");

  const getVisibleCount = useCallback(() => {
    if (isDesktop) return 3;
    if (isTablet) return 2;
    return 1;
  }, [isDesktop, isTablet]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Swipe functionality for mobile - moved here to follow React Hook rules
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setVisibleCount(getVisibleCount());
  }, [isDesktop, isTablet, getVisibleCount]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  // Auto-scroll functionality disabled as per requirement
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //
  //   return () => clearInterval(interval);
  // }, [currentIndex, maxIndex]);

  // If there's an error or no testimonials, don't render the component
  if (error || (!isLoading && testimonials.length === 0)) {
    return null;
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      prevSlide();
    }
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const ratingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  const cardVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.3,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    }),
    hover: {
      y: -5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  const arrowVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 0.2,
      },
    },
    tap: { scale: 0.9 },
  };

  // If there's an error or no testimonials, don't render the component
  if (error || (!isLoading && testimonials.length === 0)) {
    return null;
  }

  return (
    <motion.section
      className="py-8 md:py-12 lg:py-16"
      style={{ backgroundColor: theme.colors.background }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
            style={{ color: theme.colors.dark }}
            variants={headingVariants}
          >
            Here is what our customers say
          </motion.h2>

          {/* Google Review Rating */}
          <motion.div
            className="flex flex-col items-center justify-center mb-6 md:mb-10"
            variants={ratingVariants}
          >
            <motion.h3
              className="text-lg md:text-xl font-bold mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              EXCELLENT
            </motion.h3>
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={starVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  <Star
                    className="w-5 h-5 md:w-6 md:h-6"
                    style={{
                      fill: theme.colors.primary,
                      color: theme.colors.primary,
                    }}
                  />
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-sm text-gray-600 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Based on <strong>reviews</strong>
            </motion.p>
            <motion.div
              className="google-logo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="22"
                viewBox="0 0 272 92"
                className="md:w-[80px] md:h-[25px]"
              >
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
            </motion.div>
          </motion.div>

          {/* Testimonial Slider */}
          <div
            className="relative px-8 md:px-12"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 md:p-2 shadow-md hover:bg-white transition-all"
              aria-label="Previous testimonial"
              variants={arrowVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <ChevronLeft
                className="h-5 w-5 md:h-6 md:w-6"
                style={{ color: theme.colors.dark }}
              />
            </motion.button>

            <div className="flex justify-center gap-3 md:gap-6 overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="sync">
                {testimonials
                  .slice(currentIndex, currentIndex + visibleCount)
                  .map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      className="rounded-lg p-3 md:p-6 shadow-sm w-full flex flex-col min-h-[250px]"
                      style={{ backgroundColor: theme.colors.backgroundAlt }}
                      custom={direction}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover="hover"
                      layout
                    >
                      <div className="flex items-center mb-3 md:mb-4">
                        {testimonial.avatar ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          >
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={40}
                              height={40}
                              className="rounded-full mr-2 md:mr-3 w-8 h-8 md:w-10 md:h-10"
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-600 flex items-center justify-center text-white mr-2 md:mr-3 text-xs md:text-sm"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          >
                            {testimonial.name.charAt(0)}
                          </motion.div>
                        )}
                        <motion.div
                          className="flex flex-col"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <p className="font-medium text-xs md:text-sm">
                            {testimonial.name}
                          </p>
                          <p
                            className="text-[10px] md:text-xs"
                            style={{ color: theme.colors.darkMuted }}
                          >
                            {testimonial.date}
                          </p>
                        </motion.div>
                      </div>

                      <motion.div
                        className="flex mb-2 md:mb-3 justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            <Star
                              className="w-3 h-3 md:w-4 md:h-4"
                              style={{
                                fill: theme.colors.primary,
                                color: theme.colors.primary,
                              }}
                            />
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.p
                        className="text-xs md:text-sm flex-grow mb-2 md:mb-3 line-clamp-4 overflow-ellipsis"
                        style={{ color: theme.colors.darkMuted }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {testimonial.text}
                      </motion.p>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 md:p-2 shadow-md hover:bg-white transition-all"
              aria-label="Next testimonial"
              variants={arrowVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <ChevronRight
                className="h-5 w-5 md:h-6 md:w-6"
                style={{ color: theme.colors.dark }}
              />
            </motion.button>
          </div>

          {/* 'More Details' button removed as per requirement */}
        </div>
      </div>
    </motion.section>
  );
}
