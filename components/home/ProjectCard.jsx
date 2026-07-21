import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const toSlug = (title = "") =>
  title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

const ProjectCard = ({ item, index, className }) => {
  const slug = item.slug || toSlug(item.title);

  return (
    <>
      <Link
        href={`/project-details/${slug}`}
        className={cn(` w-full relative group overflow-hidden`, className)}
      >
        <Image
          src={item.src}
          height={250}
          width={400}
          priority={true}
          className="w-full h-[250px] object-cover"
          alt={`Business image ${index + 1}`}
        />
        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 duration-500 flex absolute inset-0 z-20 bg-secondary-2 p-5 items-center justify-center">
          <div className="text-center text-white space-y-3">
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            {item.year ? (
              <p className="text-2xl font-light">{item.year}</p>
            ) : null}
            <span className="flex justify-center">
              <ArrowRight className="-translate-x-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0 duration-500" />
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
