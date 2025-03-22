"use client"

import React from 'react'
import { motion } from "motion/react";
import { Sparkles, Droplets, Syringe } from 'lucide-react'

function Services() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4 + (i * 0.2)
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0px 20px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.6 + (i * 0.2)
      }
    }),
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.5
      }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  }

  const ctaButtonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 1.2
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 },
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0.1)",
        "0px 8px 20px rgba(0, 0, 0, 0.15)",
        "0px 0px 0px rgba(0, 0, 0, 0.1)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  }

  const services = [
    {
      title: "FILLER",
      description: "Best Filler in New Cairo. Restore volume and contour to your face with our dermal fillers. Enhance your lips, cheeks, and overall facial structure.",
     
    },
    {
      title: "BOTOX",
      description: "Best Botox in New Cairo. Smooth away wrinkles and fine lines with our Botox treatments. Enjoy a more youthful and refreshed appearance.",

    },
    {
      title: "SKIN BOOSTERS",
      description: "Achieve a radiant and hydrated complexion with our skin boosters. Revitalize your skin from within for a luminous glow.",

    }
  ]

  return (
    <motion.section 
      className='bg-[#f2f2f2]'
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='container mx-auto p-4 pb-12'>
        <div className='text-center'>
          <motion.h2 
            className='text-4xl md:text-6xl font-[1000] mb-2 font-montserrat text-[#2c4755]'
            variants={headingVariants}
          >
            SERVICES
          </motion.h2>
          <motion.h2 
            className='font-[400] text-black text-xl font-montserrat'
            variants={subheadingVariants}
          >
            Learn Services to focus on your beauty
          </motion.h2>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 justify-center'>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className='bg-white rounded-3xl py-12 px-7 shadow-xl flex-col items-center flex justify-center font-montserrat text-center'
              custom={index}
              variants={cardVariants}
              whileHover="hover"
            >
              
              <h2 className='text-3xl font-[1000] mt-2 text-[#2c4755]'>{service.title}</h2>
              <h3 className='font-[500] text-[#2c4755] text-lg md:text-[25px] mt-4 mb-7 px-3'>{service.description}</h3>
              
              <motion.button 
                className="bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-6 py-4 text-[17px] font-medium font-montserrat cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                More Details
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <div className='flex justify-center mt-14 items-center'>
          <motion.button 
            className="bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-12 py-4 text-[19px] font-medium font-montserrat cursor-pointer"
            variants={ctaButtonVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap="tap"
            animate="pulse"
            viewport={{ once: true }}
          >
            Explore More of our Services
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}

export default Services
