"use client";
import type React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import filler from "../../public/filler.png";
import botox from "../../public/botox.png";
import skin from "../../public/skin.png";
import hair from "../../public/hair.png";
import chemical from "../../public/chemical.png";
import derma from "../../public/derma.png";

interface ServiceItem {
  id: string;
  title: string;

  description: React.ReactNode;
  showDetails?: boolean;
}

function SpecificService() {
  const services: ServiceItem[] = [
    {
      id: "fillers",
      title: "Fillers",

      description: (
        <>
          <p className="mb-4">
            <span className="text-yellow-400 font-medium">Fillers</span> are
            composed of hyaluronic acid, a substance naturally found in the
            body, which helps to hydrate and plump the skin.
          </p>
          <p>
            With precise injections, we can target areas such as the lips,
            cheeks, nasolabial folds, and more, leaving you with natural-looking
            and youthful results.
          </p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "botox",
      title: "Botox",

      description: (
        <>
          <p className="mb-4">
            Botox is a non-surgical, minimally invasive procedure that targets
            dynamic wrinkles caused by facial expressions.
          </p>
          <p className="mb-4">
            Our highly skilled practitioners will carefully administer the
            treatment, utilizing precise injections to temporarily relax the
            underlying muscles.
          </p>
          <p>
            As a result, the appearance of crow&apos;s feet, forehead lines, and
            frown lines can be significantly reduced, giving you a more
            refreshed and rejuvenated look.
          </p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "skin-boosters",
      title: "Skin Boosters",
      description: (
        <>
          <p className="mb-4">
            <span className="text-yellow-400 font-medium">Skin Boosters</span>{" "}
            are composed of hyaluronic acid, a naturally occurring substance in
            the body that helps maintain hydration and elasticity.
          </p>
          <p className="mb-4">
            When injected into the skin, these boosters provide deep hydration,
            improve skin texture, and promote collagen production.
          </p>
          <p>The result is smoother, firmer, and more radiant skin.</p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "dermapen",
      title: "Dermapen",
      description: (
        <>
          <p className="mb-4">
            Dermapen utilizes advanced micro-needling technology to stimulate
            collagen production and cellular renewal.
          </p>
          <p className="mb-4">
            The treatment involves a pen-like device with tiny needles that
            create controlled micro-injuries in the skin.
          </p>
          <p className="mb-4">
            These micro-injuries trigger the body natural healing response,
            leading to the production of new collagen and elastin fibers.
          </p>
          <p>
            The Dermapen treatment is effective in addressing various skin
            concerns, including fine lines, wrinkles, acne scars, and uneven
            skin texture. It is suitable for all skin types and requires minimal
            downtime.
          </p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "cold-peel",
      title: "Cold Peel",
      description: (
        <>
          <p className="mb-4">
            The Cold Peel is a non-invasive procedure that combines the power of
            exfoliation and cold therapy.
          </p>
          <p className="mb-4">
            It involves the application of a specially formulated solution that
            gently removes dead skin cells, unclogs pores, and evens out skin
            tone.
          </p>
          <p className="mb-4">
            The cold therapy component soothes and calms the skin, reducing
            redness and inflammation.
          </p>
          <p>
            This treatment is suitable for all skin types and can address
            various concerns, such as dullness, uneven skin tone, and texture
            irregularities.
          </p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "hair-treatment",
      title: "Hair Treatment",
      description: (
        <>
          <p className="mb-4">
            Hair treatments are designed to improve the quality of your hair.
            This is done through various ways, which include moisturizing the
            hair from the inside out, restoring and protecting your scalp, and
            boosting hair growth.
          </p>
          <p className="mb-4">
            Depending on your hair type and health, there are many types of hair
            treatments, and we advise you on which type will be suitable for
            your hair.
          </p>
        </>
      ),
      showDetails: true,
    },
  ];

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
    hidden: { opacity: 0, y: -50 },
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

  const subheadingVariants = {
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
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className="py-16 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-6xl font-bold text-[#2c4755] mb-2"
            variants={headingVariants}
          >
            SERVICES
          </motion.h2>
          <motion.p
            className="text-gray-600 text-2xl"
            variants={subheadingVariants}
          >
            We Provide The Following Services
          </motion.p>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services
            .filter((service) => service.showDetails)
            .map((service, index) => (
              <motion.div
                key={`${service.id}-details`}
                className="border border-gray-200 rounded-xl p-6 text-center shadow-xl overflow-hidden"
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                <motion.h3
                  className="text-2xl font-semibold text-[#4a9cca] mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  {service.title}
                </motion.h3>
                <motion.div
                  className="text-gray-600 text-xl font-medium"
                  variants={textVariants}
                >
                  {service.description}
                </motion.div>
                <motion.button
                  className="mt-6 bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-6 py-3 text-lg font-medium cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
}

export default SpecificService;
