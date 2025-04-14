import React from "react";
import AnimatedHeader from "@/components/AnimatedHeader";
import { BlogPost } from "@/components/all-blogs";
import axiosInstance from "@/lib/axios";
import AllBlogs from "@/components/all-blogs";

async function getBlogs() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/`,
      {
        next: { revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.map((blog: any) => ({
      id: blog.id,
      title: blog.title,
      excerpt: blog.description,
      image: blog.cover_image,
      slug: blog.slug,
    }));
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <>
      <AnimatedHeader
        imageUrl="/images/background.jpg"
        title="Expert Insights in Plastic Surgery"
        subtitle="Discover the Latest Trends, Techniques, and Transformations"
        gradientClass="bg-gradient-to-r from-purple-700/80 to-sky-500/80"
        imagePosition="70%"
      />
      <AllBlogs serverBlogs={blogs} />
    </>
  );
}
