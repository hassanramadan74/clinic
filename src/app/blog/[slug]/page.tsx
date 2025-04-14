import React from "react";
import BlogCardStandard from "@/components/single-blog";

async function getBlog(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${slug}/`,
      {
        next: { revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return <BlogCardStandard blog={blog} />;
}
