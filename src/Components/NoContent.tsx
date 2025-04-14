"use client";
import React from "react";
import { motion } from "motion/react";
import { theme } from "@/lib/theme";
import { FileX } from "lucide-react";

interface NoContentProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * A reusable component to display when content is not available
 * Used when fetch operations fail or return empty data
 */
const NoContent: React.FC<NoContentProps> = ({
  title = "No Content Available",
  message = "There is no content added here yet. Please check back later.",
  icon,
  className = "",
}) => {
  return (
    <motion.div
      className={`w-full py-16 px-4 flex flex-col items-center justify-center text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-6 p-6 rounded-full"
        style={{ backgroundColor: `${theme.colors.backgroundAlt}` }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        {icon || <FileX size={48} style={{ color: theme.colors.primary }} />}
      </motion.div>

      <motion.h3
        className="text-2xl font-bold mb-3"
        style={{ color: theme.colors.dark }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-base max-w-md mx-auto"
        style={{ color: theme.colors.darkMuted }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {message}
      </motion.p>
    </motion.div>
  );
};

export default NoContent;
