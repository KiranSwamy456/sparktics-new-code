"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import ProjectCard from "@/components/home/ProjectCard";

const imageData = [
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-1.png",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-2.png",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-3.png",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-4.png",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-5.png",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-6.png",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-7.png",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-8.png",
  },
];

const SparktifiedScroll = () => {
  return (
    <section className="bg-background pb-0">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-extrabold text-white mb-8 md:mb-12 text-center md:text-left">
          Sparktified business
        </h2>
      </div>

      <Marquee pauseOnHover speed={40} gradient={false}>
        {imageData.map((item, index) => (
          <div key={index} className="mx-1.5 md:mx-2">
            <ProjectCard
              item={item}
              index={index}
              className="block w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] shrink-0 [&_img]:!h-[140px] sm:[&_img]:!h-[160px] md:[&_img]:!h-[180px] lg:[&_img]:!h-[200px]"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SparktifiedScroll;
