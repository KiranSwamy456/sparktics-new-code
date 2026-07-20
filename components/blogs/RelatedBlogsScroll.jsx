"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "@/components/blogs/BlogCard";
import { blogs } from "@/components/blogs/blogsData";

const RelatedBlogsScroll = () => {
  // Duplicate for a smoother infinite loop
  const relatedBlogs = [...blogs, ...blogs];

  return (
    <section className="bg-background pb-0">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-extrabold text-white mb-8 md:mb-12 text-center md:text-left">
          Related Blogs
        </h2>
      </div>

      <Marquee pauseOnHover speed={40} gradient={false}>
        {relatedBlogs.map((item, index) => (
          <div key={index} className="mx-1.5 md:mx-2">
            <BlogCard
              item={item}
              index={index}
              className="block w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] shrink-0 aspect-[16/10]"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default RelatedBlogsScroll;
