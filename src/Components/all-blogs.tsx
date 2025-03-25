// if used ai on that file please dont forget to handle to show message when there is no blogs exist

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { theme } from "@/lib/theme";
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: any;
  slug: string;
}

export default function AllBlogs() {
  // Note: In a real implementation, you would import the images properly
  // For this example, we'll use placeholder images
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Modern Rhinoplasty: Achieving Natural-Looking Results",
      excerpt:
        "Discover the latest advancements in rhinoplasty procedures that focus on creating harmonious, natural-looking results. Learn about the innovative techniques our surgeons use to enhance facial symmetry while maintaining your unique features. From computer-aided planning to advanced surgical methods, we'll explore how modern rhinoplasty can help you achieve the refined profile you desire.",
      image: "/images/temp/blog1.jpeg",
      slug: "modern-rhinoplasty-natural-results",
    },
    {
      id: 2,
      title: "The Art of Facial Contouring: Combining Different Techniques",
      excerpt:
        "Explore the sophisticated approach to facial contouring that combines multiple techniques for optimal results. From strategic filler placement to advanced lifting procedures, learn how our experts create balanced, youthful contours. We'll discuss how personalized treatment plans can enhance your natural features while maintaining facial harmony.",
      image: "/images/temp/blog2.jpeg",
      slug: "art-of-facial-contouring",
    },
    {
      id: 3,
      title: "Revolutionary Anti-Aging Treatments: Beyond Traditional Methods",
      excerpt:
        "Step into the future of anti-aging treatments with our comprehensive guide to cutting-edge procedures. Discover how combining advanced technologies with traditional techniques can provide superior results. From energy-based treatments to innovative injectables, learn about the latest solutions for maintaining youthful, radiant skin.",
      image: "/images/temp/blog3.jpeg",
      slug: "revolutionary-anti-aging-treatments",
    },
    {
      id: 4,
      title: "Understanding Body Contouring: Your Complete Guide",
      excerpt:
        "Dive deep into the world of body contouring procedures and learn how modern techniques can help sculpt your ideal silhouette. From non-invasive treatments to surgical options, we'll explore the full spectrum of body enhancement procedures. Understand the science behind different methods and how to choose the right approach for your goals.",
      image: "/images/temp/blog4.jpeg",
      slug: "understanding-body-contouring-guide",
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
  };

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
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

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
      color: theme.colors.dark,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

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
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: theme.colors.dark }}
            variants={headingVariants}
          >
            BLOGS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="block">
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="relative h-56 w-full overflow-hidden"
                    variants={imageVariants}
                  >
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>

                  <div className="p-6 pt-8">
                    <motion.h3
                      className="text-xl font-bold mb-3 line-clamp-2"
                      style={{ color: theme.colors.dark }}
                      custom={index}
                      variants={textVariants}
                    >
                      {post.title}
                    </motion.h3>

                    <motion.p
                      className="text-sm mb-4 line-clamp-5"
                      style={{ color: theme.colors.darkMuted }}
                      custom={index}
                      variants={textVariants}
                    >
                      {post.excerpt}
                    </motion.p>

                    <motion.div
                      custom={index}
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      <div
                        className="inline-flex items-center font-medium text-sm"
                        style={{ color: theme.colors.dark }}
                      >
                        READ MORE
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
