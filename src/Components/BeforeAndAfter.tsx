"use client"
import React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent } from "@/Components/ui/dialog"
import fillerJob from "../../public/fillerJob.png"
import fillerAlso from "../../public/fillerAlso.png"
import jawLine from "../../public/jawLine.png"
import lipFiller from "../../public/lipFiller.png"

interface BeforeAfterItem {
  id: number
  title: string
  image: any
  category: string
}

function BeforeAndAfter() {
  const [selectedImage, setSelectedImage] = React.useState<any | null>(null)
  const [selectedTitle, setSelectedTitle] = React.useState<string>("")

  const beforeAfterItems: BeforeAfterItem[] = [
    {
      id: 1,
      title: "Lip filler",
      image: lipFiller,
      category: "Fillers",
    },
    {
      id: 2,
      title: "FILLER JOB",
      image: fillerAlso,
      category: "Fillers",
    },
    {
      id: 3,
      title: "JAWLINE LIFTING & CHIN AUGMENTATION",
      image: jawLine,
      category: "Fillers",
    },
    {
      id: 4,
      title: "FILLER JOB",
      image: fillerJob,
      category: "Fillers",
    },
  ]

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
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
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

  const subtitleVariants = {
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
        delay: 0.3 + i * 0.1,
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0px 20px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
    tap: {
      scale: 0.98,
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
        delay: 0.2,
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
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.3,
      },
    },
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "4rem",
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <motion.p
            className="text-[#c9a96e] text-sm uppercase tracking-wider"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            DR. REHAB ZAKARIA
          </motion.p>
        </motion.div>

        <div className="text-center mb-8">
          <motion.h2 className="text-4xl font-bold text-[#2c4755] mb-3" variants={titleVariants}>
            BEFORE AND AFTER
          </motion.h2>
          <motion.p className="text-[#c9a96e] max-w-3xl mx-auto" variants={subtitleVariants}>
            Before and After: Transform Your Appearance with the Best Dermatology in New Cairo Dr Rehab Zakaria. Best
            Filler and Botox in New Cairo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {beforeAfterItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow duration-300"
              onClick={() => {
                setSelectedImage(item.image)
                setSelectedTitle(item.title)
              }}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="p-3 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-[#c9a96e] font-medium">{item.title}</h3>
              </motion.div>

              <motion.div className="relative h-[300px] w-full overflow-hidden" variants={imageVariants}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`Before and after ${item.title}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.span
                    className="text-white text-sm font-medium px-3 py-1 bg-[#c9a96e]/80 rounded-full"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Click to enlarge
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div
                className="p-3 text-center border-t border-gray-100 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <motion.div className="h-[1px] bg-[#c9a96e]" variants={lineVariants}></motion.div>
                <p className="text-[#c9a96e] text-xs mx-2">DR. REHAB ZAKARIA</p>
                <motion.div className="h-[1px] bg-[#c9a96e]" variants={lineVariants}></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-3xl">
              <motion.div
                className="relative h-[500px] w-full"
                variants={dialogImageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt={`Before and after ${selectedTitle}`}
                  fill
                  className="object-contain"
                />
                <motion.div
                  className="absolute bottom-4 left-0 right-0 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="bg-[#c9a96e] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {selectedTitle}
                  </span>
                </motion.div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default BeforeAndAfter

