import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ item, index, className }) => {
  const href = item.slug
    ? `/blog-details/${item.slug}/`
    : "/blogs";

  return (
    <Link
      href={href}
      className={cn(
        "w-full relative group overflow-hidden block aspect-[16/10]",
        className
      )}
    >
      <Image
        src={item.src}
        fill
        priority={index < 2}
        className="object-cover"
        alt={item.title}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-secondary-2 p-6 md:p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white space-y-4 max-w-md">
          <h3 className="font-montserrat text-lg md:text-2xl font-semibold leading-snug">
            {item.title}
          </h3>
          <span className="flex justify-center">
            <ArrowRight className="size-6 md:size-7" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
