import React from "react";
import AllBlogs from "@/components/all-blogs";
import AnimatedHeader from "@/components/AnimatedHeader";
function Blog() {
  return (
    <>
      <AnimatedHeader
        imageUrl="/images/background.jpg"
        title="Expert Insights in Plastic Surgery"
        subtitle="Discover the Latest Trends, Techniques, and Transformations"
        gradientClass="bg-gradient-to-r from-pink-500/80 to-sky-500/80"
        imagePosition="70%"
      />
      <AllBlogs />
    </>
  );
}
export default Blog;
