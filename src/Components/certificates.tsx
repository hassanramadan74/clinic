"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/Components/ui/dialog"
import { Card, CardContent } from "@/Components/ui/card"
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
  image: StaticImageData
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c4755] mb-3">Professional Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognized by leading international institutions for excellence in dermatology and aesthetic medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <Card
              key={certificate.id}
              className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-[#2c4755] mb-1">{certificate.name}</h3>
                <p className="text-gray-600 text-sm">{certificate.institute}</p>
                {certificate.date && <p className="text-gray-500 text-xs mt-2">{certificate.date}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedCertificate !== null} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
        <DialogContent className="sm:max-w-3xl">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl text-[#2c4755]">{selectedCertificate.name}</DialogTitle>
                <DialogDescription className="text-gray-600">
                  {selectedCertificate.institute}
                  {selectedCertificate.date && ` • ${selectedCertificate.date}`}
                </DialogDescription>
              </DialogHeader>

              <div className="relative w-full h-[400px] my-4">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              {selectedCertificate.description && (
                <p className="text-gray-700 mt-2">{selectedCertificate.description}</p>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
