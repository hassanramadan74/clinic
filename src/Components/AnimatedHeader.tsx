"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { theme } from "@/lib/theme";

interface AnimatedHeaderProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  gradientClass: string;
  imagePosition: string;
}

export default function AnimatedHeader({
  imageUrl,
  title,
  subtitle,
  gradientClass,
  imagePosition,
}: AnimatedHeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const zoomVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      className="mb-12 relative rounded-lg overflow-hidden shadow-2xl h-[420px]"
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
      variants={zoomVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt="Header Image"
          fill
          className="object-cover object-center rounded-lg"
          style={{
            objectPosition: `center ${imagePosition}`,
          }}
        />
        <div className={cn("absolute inset-0", gradientClass)}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg uppercase"
            style={{ color: theme.colors.light }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-center drop-shadow-md"
            style={{ color: theme.colors.lightMuted }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {subtitle}
          </motion.h2>
        </div>
      </div>
    </motion.div>
  );
}
