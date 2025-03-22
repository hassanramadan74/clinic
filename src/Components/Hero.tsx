"use client";
import Image from "next/image";
import { motion } from "motion/react";
import doctor from "../../public/doctor.webp";

const details = {
  name: "Dr. Rehab Zakaria",
  title: "Clinic & beauty consultant",
  qualifications: [
    "Consultant in Dermatology, Cosmetic, and Laser",
    "Master's and Doctorate in Dermatology and Laser Diseases",
    "Certified Trainer",
    "Master Injector",
  ],
};

function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.4,
        duration: 0.8,
      },
    },
  };

  const qualificationVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
        type: "spring",
        stiffness: 200,
        damping: 10,
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

  const waveVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
          <motion.div
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-[40px] font-montserrat md:text-[55px] font-[1000] text-[#2c4755] mb-2"
              variants={itemVariants}
            >
              {details?.name}
            </motion.h1>

            <motion.h2
              className="text-[30px] font-[1000] font-montserrat text-[#2c4755] mb-6"
              variants={itemVariants}
            >
              {details?.title}
            </motion.h2>

            <motion.ul className="space-y-2 mb-8" variants={containerVariants}>
              {details?.qualifications.map((qualification, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  custom={index}
                  variants={qualificationVariants}
                >
                  <span className="text-[#2c4755] font-bold font-montserrat text-[20px] mr-2 mt-1">
                    •
                  </span>
                  <span className="text-[#2c4755] font-medium font-montserrat text-[20px]">
                    {qualification}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              className="bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-6 py-4 text-[17px] font-medium font-montserrat cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              More Details
            </motion.button>
          </motion.div>

          <motion.div
            className="relative w-full max-w-md md:max-w-lg"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={doctor || "/placeholder.svg"}
              alt="Dr. Rehab Zakaria"
              width={350}
              height={400}
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        variants={waveVariants}
        initial="hidden"
        animate="visible"
      >
        <svg
          id="wave"
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(242, 242, 242, 1)" offset="0%"></stop>
              <stop stopColor="rgba(242, 242, 242, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,70L26.7,60C53.3,50,107,30,160,20C213.3,10,267,10,320,21.7C373.3,33,427,57,480,58.3C533.3,60,587,40,640,28.3C693.3,17,747,13,800,13.3C853.3,13,907,17,960,28.3C1013.3,40,1067,60,1120,58.3C1173.3,57,1227,33,1280,30C1333.3,27,1387,43,1440,53.3C1493.3,63,1547,67,1600,71.7C1653.3,77,1707,83,1760,83.3C1813.3,83,1867,77,1920,76.7C1973.3,77,2027,83,2080,86.7C2133.3,90,2187,90,2240,76.7C2293.3,63,2347,37,2400,25C2453.3,13,2507,17,2560,16.7C2613.3,17,2667,13,2720,11.7C2773.3,10,2827,10,2880,23.3C2933.3,37,2987,63,3040,61.7C3093.3,60,3147,30,3200,28.3C3253.3,27,3307,53,3360,66.7C3413.3,80,3467,80,3520,81.7C3573.3,83,3627,87,3680,83.3C3733.3,80,3787,70,3813,65L3840,60L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default Hero;
