"use client"
import React from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/Components/ui/dialog"
import fillerJob from "../../public/fillerJob.png"
import fillerAlso from "../../public/fillerAlso.png"
import jawLine from "../../public/jawLine.png"
import lipFiller from "../../public/lipFiller.png"

interface BeforeAfterItem {
  id: number
  title: string
  image: StaticImageData
  category: string
}

function BeforeAndAfter() {
  const [selectedImage, setSelectedImage] = React.useState<StaticImageData | null>(null)

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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <p className="text-[#c9a96e] text-sm uppercase tracking-wider">DR. REHAB ZAKARIA</p>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#2c4755] mb-3">BEFORE AND AFTER</h2>
          <p className="text-[#c9a96e] max-w-3xl mx-auto">
            Before and After: Transform Your Appearance with the Best Dermatology in New Cairo Dr Rehab Zakaria. Best
            Filler and Botox in New Cairo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {beforeAfterItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow duration-300"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="p-3 text-center">
                <h3 className="text-[#c9a96e] font-medium">{item.title}</h3>
              </div>

              <div className="relative h-[300px] w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`Before and after ${item.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-3 text-center border-t border-gray-100 flex items-center justify-center">
                <div className="h-[1px] w-16 bg-[#c9a96e]"></div>
                <p className="text-[#c9a96e] text-xs mx-2">DR. REHAB ZAKARIA</p>
                <div className="h-[1px] w-16 bg-[#c9a96e]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="relative h-[500px] w-full">
              <Image src={selectedImage} alt="Before and after" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default BeforeAndAfter
