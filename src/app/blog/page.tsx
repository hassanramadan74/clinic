"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import firstBlog from "../../../public/firstBlog.jpg"
import secondBlog from "../../../public/secondBlog.jpg"
import logo from "../../../public/doctor.webp"
import ImageSlider from "@/Components/ImageSlider"
import SideSlider from "@/Components/SideSlider"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: any
  authorImage: any
  slug: string
}

export default function BlogSection() {
  // Note: In a real implementation, you would import the images properly
  // For this example, we'll use placeholder images
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Lip Filler Aftercare: Things to Avoid After Lip Injections",
      excerpt:
        "Why lip filler aftercare is important? Want lips that make a statement? Full, plump lips have become a hot trend, and it's easy to see why. But getting lip fillers is just the first step. To make sure your results look amazing and last, there's a few things you need to do after the procedure. In this article, we'll give you some tips on how to take care of your lips so they heal quickly and look their best.",
      image: firstBlog,
      authorImage:logo,
      slug: "lip-filler-aftercare",
    },
    {
      id: 2,
      title: "Lip Filler FAQS: Finding the Best Options for you",
      excerpt:
        "You might be asking after deciding you need lip filler injection, what is the types of lip injection and what is the best results looks like, also what will be best option for you? All these questions will be answered by Dr rehab Zakaria. What are the best type of lip fillers? Restylane and juvederm are very well know types of fillers, and deliver great results. they are among the most popular used for lip fillers. If you are searching",
      image: firstBlog,
      authorImage:logo,
      slug: "lip-filler-faqs",
    },
    {
      id: 3,
      title: "What Is Skin Booster: All You Need To Know With Dr. Rehab Zakaria",
      excerpt:
        "Are you tired of dull, aging skin? Skin booster offer a non-invasive, effective solution to rejuvenate your complexion. This innovative treatment harnesses the power of hyaluronic acid to hydrate, revitalize, and restore your skin's youthful glow. What Are Skin Boosters? Skin booster (بوستر الجلد) is a type of injectable treatment that utilizes hyaluronic acid (HA) to enhance skin quality. HA is a naturally occurring substance found in the body that helps retain moisture and improve skin elasticity. How Does it",
      image: firstBlog,
      authorImage:logo,
      slug: "what-is-skin-booster",
    },
    {
      id: 4,
      title: "What Is Skin Booster: All You Need To Know With Dr. Rehab Zakaria",
      excerpt:
        "Are you tired of dull, aging skin? Skin booster offer a non-invasive, effective solution to rejuvenate your complexion. This innovative treatment harnesses the power of hyaluronic acid to hydrate, revitalize, and restore your skin's youthful glow. What Are Skin Boosters? Skin booster (بوستر الجلد) is a type of injectable treatment that utilizes hyaluronic acid (HA) to enhance skin quality. HA is a naturally occurring substance found in the body that helps retain moisture and improve skin elasticity. How Does it",
      image: firstBlog,
      authorImage:logo,
      slug: "what-is-skin-booster",
    },
  ]

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
  }

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
        delay: 0.2 + i * 0.1,
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
        delay: 0.3,
      },
    },
  }

  const authorImageVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.4 + i * 0.1,
      },
    }),
  }

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6 + i * 0.1,
      },
    }),
    hover: {
      x: 5,
      color: "#1d3644",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  }

  return (
    <>
      <motion.section
        className="py-16 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-4xl font-bold text-center text-[#2c4755] mb-12" variants={headingVariants}>
            BLOG
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                custom={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="relative h-56 w-full overflow-hidden" variants={imageVariants}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <motion.div className="absolute -bottom-6 left-4" custom={index} variants={authorImageVariants}>
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt="Dr. Rehab Zakaria"
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-white"
                    />
                  </motion.div>
                </motion.div>

                <div className="p-6 pt-8">
                  <motion.h3
                    className="text-xl font-bold text-[#2c4755] mb-3 line-clamp-2"
                    custom={index}
                    variants={textVariants}
                  >
                    {post.title}
                  </motion.h3>

                  <motion.p className="text-gray-600 text-sm mb-4 line-clamp-5" custom={index} variants={textVariants}>
                    {post.excerpt}
                  </motion.p>

                  <motion.div custom={index} variants={linkVariants} whileHover="hover">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#2c4755] font-medium text-sm"
                    >
                      READ MORE
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <ImageSlider />
      <SideSlider />
    </>
  )
}

