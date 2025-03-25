"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CardContent } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { theme } from "@/lib/theme";

interface Certificate {
  id: number;
  name: string;
  institute: string;
  image: any;
  date?: string;
  description?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "Dermatology Specialist",
    institute: "American Academy of Dermatology",
    image: "/images/certificate1.jpg",
    date: "June 2018",
    description:
      "Certification in advanced dermatological procedures and treatments.",
  },
  {
    id: 2,
    name: "Cosmetic Laser Certification",
    institute: "European Society for Laser Dermatology",
    image: "/images/certificate2.jpg",
    date: "March 2019",
    description:
      "Specialized training in laser treatments for various skin conditions.",
  },
  {
    id: 3,
    name: "Advanced Injection Techniques",
    institute: "International Association of Physicians in Aesthetic Medicine",
    image: "/images/certificate3.jpg",
    date: "November 2020",
    description:
      "Master certification in facial fillers and botulinum toxin injections.",
  },
  {
    id: 4,
    name: "Medical Aesthetics Fellowship",
    institute: "Royal College of Physicians",
    image: "/images/certificate4.jpg",
    date: "January 2021",
    description:
      "Comprehensive training in medical aesthetics and non-surgical procedures.",
  },
  {
    id: 5,
    name: "Skin Cancer Detection & Treatment",
    institute: "International Dermatology Institute",
    image: "/images/certificate5.jpg",
    date: "August 2022",
    description:
      "Advanced certification in skin cancer screening and treatment protocols.",
  },
  {
    id: 6,
    name: "Regenerative Medicine in Dermatology",
    institute: "Global Academy of Aesthetic Medicine",
    image: "/images/certificate1.jpg",
    date: "February 2023",
    description:
      "Specialized training in PRP, stem cell therapies, and other regenerative approaches for skin rejuvenation.",
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

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
  };

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
  };

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
  };

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
  };

  return (
    <motion.section
      className="py-16"
      style={{ backgroundColor: theme.colors.background }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 mb-3"
            variants={headingVariants}
          >
            <span
              className="h-[1px] w-6"
              style={{ backgroundColor: theme.colors.primary }}
            ></span>
            <span
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: theme.colors.primary }}
            >
              Expertise
            </span>
            <span
              className="h-[1px] w-6"
              style={{ backgroundColor: theme.colors.primary }}
            ></span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: theme.colors.dark }}
            variants={headingVariants}
          >
            Professional Certifications
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto"
            style={{ color: theme.colors.darkMuted }}
            variants={textVariants}
          >
            Recognized by leading international institutions for excellence in
            dermatology and aesthetic medicine.
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
              className="overflow-hidden cursor-pointer rounded-xl border transition-all duration-300"
              style={{
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.border,
              }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full h-full z-10"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primaryLight}40, ${theme.colors.secondaryLight}40)`,
                  }}
                ></div>
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110 z-0"
                />
                <div
                  className="absolute top-3 right-3 z-20 px-2 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: "white",
                  }}
                >
                  {certificate.date}
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-full mt-1"
                    style={{ backgroundColor: theme.colors.primaryLight }}
                  >
                    <Award size={18} style={{ color: theme.colors.primary }} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg mb-1"
                      style={{ color: theme.colors.dark }}
                    >
                      {certificate.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: theme.colors.darkMuted }}
                    >
                      {certificate.institute}
                    </p>
                    <motion.button
                      className="mt-3 inline-flex items-center text-sm font-medium"
                      style={{ color: theme.colors.primary }}
                      whileHover={{ x: 5 }}
                    >
                      View certificate{" "}
                      <ExternalLink size={14} className="ml-1" />
                    </motion.button>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <Dialog
            open={selectedCertificate !== null}
            onOpenChange={(open) => !open && setSelectedCertificate(null)}
          >
            <DialogContent
              className="sm:max-w-3xl p-0 overflow-hidden rounded-xl"
              style={{ backgroundColor: theme.colors.background }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={selectedCertificate.image || "/placeholder.svg"}
                    alt={selectedCertificate.name}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.primaryLight}40, ${theme.colors.secondaryLight}40)`,
                    }}
                  ></div>
                </div>

                <div className="p-6">
                  <DialogHeader>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar
                        size={16}
                        style={{ color: theme.colors.primary }}
                      />
                      <span
                        className="text-sm font-medium"
                        style={{ color: theme.colors.primary }}
                      >
                        {selectedCertificate.date}
                      </span>
                    </div>
                    <DialogTitle
                      className="text-xl font-bold"
                      style={{ color: theme.colors.dark }}
                    >
                      {selectedCertificate.name}
                    </DialogTitle>
                    <DialogDescription
                      style={{ color: theme.colors.darkMuted }}
                    >
                      {selectedCertificate.institute}
                    </DialogDescription>
                  </DialogHeader>

                  <div
                    className="mt-4 p-4 rounded-lg"
                    style={{ backgroundColor: theme.colors.backgroundAlt }}
                  >
                    <h4
                      className="text-sm font-semibold mb-2"
                      style={{ color: theme.colors.dark }}
                    >
                      About this certification
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: theme.colors.darkMuted }}
                    >
                      {selectedCertificate.description}
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
