import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import firstBlog from "../../../public/firstBlog.jpg"
import secondBlog from "../../../public/secondBlog.jpg"
import logo from "../../../public/doctor.webp"
import ImageSlider from "@/Components/ImageSlider"
import SideSlider from "@/Components/SideSlider"
interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  authorImage: string
  slug: string
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Lip Filler Aftercare: Things to Avoid After Lip Injections",
      excerpt: "Why lip filler aftercare is important? Want lips that make a statement? Full, plump lips have become a hot trend, and it's easy to see why. But getting lip fillers is just the first step. To make sure your results look amazing and last, there's a few things you need to do after the procedure. In this article, we'll give you some tips on how to take care of your lips so they heal quickly and look their best.",
      image: firstBlog,
      authorImage: logo,
      slug: "lip-filler-aftercare"
    },
    {
      id: 2,
      title: "Lip Filler FAQS: Finding the Best Options for you",
      excerpt: "You might be asking after deciding you need lip filler injection, what is the types of lip injection and what is the best results looks like, also what will be best option for you? All these questions will be answered by Dr rehab Zakaria. What are the best type of lip fillers? Restylane and juvederm are very well know types of fillers, and deliver great results. they are among the most popular used for lip fillers. If you are searching",
      image: secondBlog,
      authorImage: logo,
      slug: "lip-filler-faqs"
    },
    {
      id: 3,
      title: "What Is Skin Booster: All You Need To Know With Dr. Rehab Zakaria",
      excerpt: "Are you tired of dull, aging skin? Skin booster offer a non-invasive, effective solution to rejuvenate your complexion. This innovative treatment harnesses the power of hyaluronic acid to hydrate, revitalize, and restore your skin's youthful glow. What Are Skin Boosters? Skin booster (بوستر الجلد) is a type of injectable treatment that utilizes hyaluronic acid (HA) to enhance skin quality. HA is a naturally occurring substance found in the body that helps retain moisture and improve skin elasticity. How Does it",
      image: firstBlog,
      authorImage: logo,
      slug: "what-is-skin-booster"
    },
    {
        id: 4,
        title: "What Is Skin Booster: All You Need To Know With Dr. Rehab Zakaria",
        excerpt: "Are you tired of dull, aging skin? Skin booster offer a non-invasive, effective solution to rejuvenate your complexion. This innovative treatment harnesses the power of hyaluronic acid to hydrate, revitalize, and restore your skin's youthful glow. What Are Skin Boosters? Skin booster (بوستر الجلد) is a type of injectable treatment that utilizes hyaluronic acid (HA) to enhance skin quality. HA is a naturally occurring substance found in the body that helps retain moisture and improve skin elasticity. How Does it",
        image: secondBlog,
        authorImage: logo,
        slug: "what-is-skin-booster"
      }
  ]
  
  return (
    <>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2c4755] mb-12">BLOG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute -bottom-6 left-4">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt="Dr. Rehab Zakaria"
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-white"
                  />
                </div>
              </div>
              
              <div className="p-6 pt-8">
                <h3 className="text-xl font-bold text-[#2c4755] mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-5">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#2c4755] font-medium text-sm hover:text-[#1d3644]"
                >
                  READ MORE <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ImageSlider/>
    <SideSlider/>
    </>
  )
}
