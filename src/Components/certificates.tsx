"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/Components/ui/dialog"
import { CardContent } from "@/Components/ui/card"
import firstCertificate from "../../public/certificateOne.webp"
import secondCertificate from "../../public/certificateTwo.jpeg"
import thirdCertificate from "../../public/certificateThree.webp"
import fourthCertificate from "../../public/certificateFour.webp"
import fifthCertificate from "../../public/certificateFive.webp"
import sixthCertificate from "../../public/certificateSix.png"

interface Certificate {
  id: number
  name: string
  institute: string
  image: any
  date?: string
  description?: string
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const certificates: Certificate[] = [
    {
      id: 1,
      name: "Dermatology Specialist",
      institute: "American Academy of Dermatology",
      image: firstCertificate,
      date: "June 2018",
      description: "Certification in advanced dermatological procedures and treatments.",
    },
    {
      id: 2,
      name: "Cosmetic Laser Certification",
      institute: "European Society for Laser Dermatology",
      image: secondCertificate,
      date: "March 2019",
      description: "Specialized training in laser treatments for various skin conditions.",
    },
    {
      id: 3,
      name: "Advanced Injection Techniques",
      institute: "International Association of Physicians in Aesthetic Medicine",
      image: thirdCertificate,
      date: "November 2020",
      description: "Master certification in facial fillers and botulinum toxin injections.",
    },
    {
      id: 4,
      name: "Medical Aesthetics Fellowship",
      institute: "Royal College of Physicians",
      image: fourthCertificate,
      date: "January 2021",
      description: "Comprehensive training in medical aesthetics and non-surgical procedures.",
    },
    {
      id: 5,
      name: "Skin Cancer Detection & Treatment",
      institute: "International Dermatology Institute",
      image: fifthCertificate,
      date: "August 2022",
      description: "Advanced certification in skin cancer screening and treatment protocols.",
    },
    {
      id: 6,
      name: "Regenerative Medicine in Dermatology",
      institute: "Global Academy of Aesthetic Medicine",
      image: sixthCertificate,
      date: "February 2023",
      description:
        "Specialized training in PRP, stem cell therapies, and other regenerative approaches for skin rejuvenation.",
    },
  ]

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
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
        delay: 0.2 + i * 0.1,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0px 20px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
    tap: {
      scale: 0.98,
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.1,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
  }

  const dialogImageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  }

  const dialogContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4,
      },
    },
  }

  return (
    <motion.section
      className="py-16 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 className="text-3xl font-bold text-[#2c4755] mb-3" variants={headingVariants}>
            Professional Certifications
          </motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto" variants={textVariants}>
            Recognized by leading international institutions for excellence in dermatology and aesthetic medicine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedCertificate(certificate)}
              className="overflow-hidden cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300"
            >
              <motion.div className="relative h-48 w-full overflow-hidden" variants={imageVariants}>
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="text-sm font-medium">Click to view details</p>
                  </div>
                </motion.div>
              </motion.div>
              <CardContent className="p-4">
                <motion.h3
                  className="font-bold text-lg text-[#2c4755] mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  {certificate.name}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  {certificate.institute}
                </motion.p>
                {certificate.date && (
                  <motion.p
                    className="text-gray-500 text-xs mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {certificate.date}
                  </motion.p>
                )}
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <Dialog open={selectedCertificate !== null} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <DialogTitle className="text-xl text-[#2c4755]">{selectedCertificate.name}</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    {selectedCertificate.institute}
                    {selectedCertificate.date && ` • ${selectedCertificate.date}`}
                  </DialogDescription>
                </motion.div>
              </DialogHeader>

              <motion.div
                className="relative w-full h-[400px] my-4"
                variants={dialogImageVariants}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src={selectedCertificate.image || "/placeholder.svg"}
                  alt={selectedCertificate.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </motion.div>

              {selectedCertificate.description && (
                <motion.p
                  className="text-gray-700 mt-2"
                  variants={dialogContentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {selectedCertificate.description}
                </motion.p>
              )}
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

