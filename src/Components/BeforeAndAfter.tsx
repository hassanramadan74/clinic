"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronRight, Maximize2 } from "lucide-react";
import { theme } from "@/lib/theme";

interface BeforeAfterItem {
  id: number;
  title: string;
  image: any;
  description?: string;
  procedureDetails?: string[];
}

const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Lip Filler Enhancement",
    image: "/images/BeforAfter1.jpg",
    description:
      "Natural-looking lip augmentation with premium dermal fillers for enhanced volume and definition.",
    procedureDetails: [
      "Dermal fillers are non-surgical treatments that are used to enhance the appearance of the dermal layer.",
      "They are typically made from a variety of materials, including but not limited to: keratin, keratinoids, and collagen.",
    ],
  },
  {
    id: 2,
    title: "Cheek Filler Contouring",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Restore youthful volume and enhance facial contours with strategic cheek augmentation.",
  },
  {
    id: 3,
    title: "Jawline Lifting & Chin Augmentation",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Define your facial profile with non-surgical jawline enhancement and chin augmentation.",
  },
  {
    id: 4,
    title: "Under-Eye Rejuvenation",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Reduce hollows and dark circles with specialized under-eye filler treatment.",
  },
];

function BeforeAfter() {
  const [selectedImage, setSelectedImage] = React.useState<any | null>(null);
  const [selectedItem, setSelectedItem] =
    React.useState<BeforeAfterItem | null>(null);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-pink-50 to-transparent opacity-70"></div>
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: theme.colors.primary }}
      ></div>
      <div
        className="absolute bottom-12 -left-12 w-40 h-40 rounded-full opacity-10"
        style={{ backgroundColor: theme.colors.secondary }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span
              className="h-[1px] w-6"
              style={{ backgroundColor: theme.colors.primary }}
            ></span>
            <span
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: theme.colors.primary }}
            >
              Transformations
            </span>
            <span
              className="h-[1px] w-6"
              style={{ backgroundColor: theme.colors.primary }}
            ></span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: theme.colors.dark }}
          >
            Stunning Before & After Results
          </h2>

          <p className="text-lg" style={{ color: theme.colors.darkMuted }}>
            Explore our gallery of remarkable transformations by Dr. Mohamed
            Elkholy, showcasing the artistry and precision behind each aesthetic
            procedure.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {beforeAfterItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                backgroundColor: theme.colors.backgroundAlt,
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.06)",
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`Before and after ${item.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <motion.button
                  className="absolute right-4 top-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(item.image);
                    setSelectedItem(item);
                  }}
                >
                  <Maximize2 size={18} style={{ color: theme.colors.dark }} />
                </motion.button>
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: theme.colors.dark }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm mb-4 line-clamp-2"
                  style={{ color: theme.colors.darkMuted }}
                >
                  {item.description}
                </p>

                <motion.button
                  className="inline-flex items-center text-sm font-medium"
                  style={{ color: theme.colors.primary }}
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    setSelectedImage(item.image);
                    setSelectedItem(item);
                  }}
                >
                  View details <ChevronRight size={16} className="ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && selectedItem && (
          <Dialog
            open={!!selectedImage}
            onOpenChange={(open) => !open && setSelectedImage(null)}
          >
            <DialogContent
              className="max-w-5xl p-0 overflow-hidden rounded-2xl"
              style={{ backgroundColor: theme.colors.background }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <motion.div
                  className="relative h-[300px] md:h-[500px] w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    src={selectedImage || "/placeholder.svg"}
                    alt={`Before and after ${selectedItem.title}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="p-8 flex flex-col">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: theme.colors.dark }}
                  >
                    {selectedItem.title}
                  </h3>

                  <p
                    className="text-base mb-6"
                    style={{ color: theme.colors.darkMuted }}
                  >
                    {selectedItem.description}
                  </p>

                  <div
                    className="p-4 rounded-lg mb-6"
                    style={{ backgroundColor: theme.colors.backgroundAlt }}
                  >
                    <h4
                      className="text-sm font-semibold mb-2"
                      style={{ color: theme.colors.dark }}
                    >
                      Procedure Details
                    </h4>
                    <ul
                      className="text-sm space-y-2"
                      style={{ color: theme.colors.darkMuted }}
                    >
                      {selectedItem.procedureDetails?.map((detail, index) => (
                        <li key={index}>• {detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <motion.button
                      className="w-full py-3 rounded-lg text-white font-medium"
                      style={{ backgroundColor: theme.colors.primary }}
                      whileHover={{
                        backgroundColor: theme.colors.primaryHover,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book a Consultation
                    </motion.button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}

export default BeforeAfter;
