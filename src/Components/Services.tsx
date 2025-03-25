"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { theme } from "@/lib/theme";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/Services";

function ServiceTabs() {
  const [activeService, setActiveService] = useState(services[0].id);

  const selectedService =
    services.find((service) => service.id === activeService) || services[0];

  return (
    <section
      className="py-16"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
              Our Services
            </span>
            <span
              className="h-[1px] w-6"
              style={{ backgroundColor: theme.colors.primary }}
            ></span>
          </motion.div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.dark }}
          >
            Professional Aesthetic Services
          </h2>

          <p className="text-lg" style={{ color: theme.colors.darkMuted }}>
            Explore our range of premium treatments designed to enhance your
            natural beauty
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex justify-center min-w-max">
            <div
              className="flex rounded-full p-1"
              style={{ backgroundColor: theme.colors.backgroundAlt }}
            >
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap`}
                  style={{
                    color:
                      activeService === service.id
                        ? "white"
                        : theme.colors.darkMuted,
                    backgroundColor:
                      activeService === service.id
                        ? theme.colors.primary
                        : "transparent",
                  }}
                  onClick={() => setActiveService(service.id)}
                  whileHover={{
                    backgroundColor:
                      activeService === service.id
                        ? theme.colors.primary
                        : theme.colors.backgroundAlt,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {service.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Service Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: theme.colors.dark }}
            >
              {selectedService.title}
            </h3>

            <p
              className="text-lg mb-6"
              style={{ color: theme.colors.darkMuted }}
            >
              {selectedService.description}
            </p>

            <ul className="space-y-3 mb-8">
              {selectedService.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                    style={{ backgroundColor: theme.colors.primaryLight }}
                  >
                    <ChevronRight
                      size={14}
                      style={{ color: theme.colors.primary }}
                    />
                  </div>
                  <span style={{ color: theme.colors.darkMuted }}>
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
              style={{ backgroundColor: theme.colors.primary }}
              whileHover={{
                backgroundColor: theme.colors.primaryHover,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About {selectedService.title}
            </motion.button>
          </div>

          <div
            className="rounded-2xl overflow-hidden h-[400px] relative"
            style={{
              backgroundColor: theme.colors.backgroundAlt,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="absolute inset-0">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primaryLight}30, ${theme.colors.secondaryLight}30)`,
                }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceTabs;
