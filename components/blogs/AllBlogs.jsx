import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "./blogsData";

const AllBlogs = () => {
  return (
    <section className="relative bg-background">
      <div className="max-w-8xl mx-auto py-20 lg:py-[120px] px-4">
        <h1 className="uppercase text-xl md:text-4xl font-extrabold text-white">
          Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16">
          {blogs.map((item, index) => (
            <BlogCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
