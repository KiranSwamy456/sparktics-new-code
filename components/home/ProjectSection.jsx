import React from "react";
import { BlockIcon } from "../icons";
import ProjectCard from "./ProjectCard";

const imageData = [
  {
    title: "100n",
    src: "/assets/images/image-1.png",
    span: "lg:col-span-4",
  },
  {
    title: "Anemone Vinkel",
    src: "/assets/images/image-2.png",
    span: "lg:col-span-5",
  },
  {
    title: "KortYard",
    src: "/assets/images/image-3.png",
    span: "lg:col-span-3",
  },
  {
    title: "IceTub",
    src: "/assets/images/image-4.png",
    span: "lg:col-span-5",
  },
  {
    title: "rudra techno feeds",
    src: "/assets/images/image-5.png",
    span: "lg:col-span-3",
  },
  {
    title: "bathula builders",
    src: "/assets/images/image-6.png",
    span: "lg:col-span-4",
  },
  {
    title: "detox bar",
    src: "/assets/images/image-7.png",
    span: "lg:col-span-4",
  },
  {
    title: "Anjaneya Jewellers",
    src: "/assets/images/image-8.png",
    span: "lg:col-span-8",
  },
];

const ProjectSection = () => {
  return (
    <section className="relative bg-background">
      <div className="max-w-8xl mx-auto py-20 lg:py-[120px] px-4 ">
        <div className="relative flex">
          <h1 className="uppercase text-xl md:text-4xl font-extrabold text-white text-center md:text-start">
            SPARKTIFIED BUSINESS
          </h1>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-16 md:mt-20">
          {imageData.map((item, index) => (
            <ProjectCard
              className={`col-span-1 ${item.span}`}
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* <div className="text-center py-10">
          <p className="text-secondary-2 font-2xl hover:underline">View All</p>
        </div> */}
      </div>
      <div className="hidden md:block absolute -right-16 bottom-16">
        <BlockIcon
          width={64}
          height={67}
          color="#EE7D2E"
          style={{ rotate: "180deg" }}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
