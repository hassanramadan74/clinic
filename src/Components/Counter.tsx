"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { theme } from "@/lib/theme";
import { Activity, Users, Calendar, Award } from "lucide-react";

interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    value: 1500,
    label: "Satisfied Patients",
    prefix: "+",
    icon: <Users size={24} />,
  },
  {
    value: 300,
    label: "Injections Performed",
    prefix: "+",
    icon: <Activity size={24} />,
  },
  {
    value: 100,
    label: "Conferences Attended",
    prefix: "+",
    icon: <Calendar size={24} />,
  },
  {
    value: 15,
    label: "Years Of Experience",
    prefix: "+",
    icon: <Award size={24} />,
  },
];

export default function StatsCounter() {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationStarted = useRef(false);

  useEffect(() => {
    if (inView && !animationStarted.current) {
      animationStarted.current = true;

      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds for animation
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const valueIncrement = stat.value / totalFrames;

        let currentFrame = 0;

        const counter = setInterval(() => {
          currentFrame++;

          setCounters((prev) => {
            const newCounters = [...prev];

            // Calculate the new value based on easeOutExpo function for smoother animation
            const progress = currentFrame / totalFrames;
            const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
            const newValue = Math.min(
              Math.round(stat.value * easedProgress),
              stat.value
            );

            newCounters[index] = newValue;
            return newCounters;
          });

          if (currentFrame === totalFrames) {
            clearInterval(counter);
          }
        }, frameDuration);
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: theme.colors.backgroundAlt }}
    >
      {/* Background decorative elements */}
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
              Our Impact
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
            Our Success in Numbers
          </h2>

          <p className="text-lg" style={{ color: theme.colors.darkMuted }}>
            We take pride in our achievements and the trust our patients place
            in us. These numbers reflect our commitment to excellence in
            aesthetic medicine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-6 text-center"
              style={{
                backgroundColor: theme.colors.background,
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.06)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: theme.colors.primaryLight }}
                >
                  <span style={{ color: theme.colors.primary }}>
                    {stat.icon}
                  </span>
                </div>

                <h3
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  {stat.prefix || ""}
                  {counters[index].toLocaleString()}
                </h3>

                <p
                  className="font-medium"
                  style={{ color: theme.colors.darkMuted }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
