import React, { useLayoutEffect, useRef } from "react";
import ProjectSection from "./ProjectSection";
import BrandingCard from "./BrandingCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { cn } from "@/lib/utils";
import { BlockIcon } from "../icons";
import Image from "next/image";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const data = [
  {
    id: 1,
    title: "Content",
    subtitle: "We focus on",
    text: "We craft compelling content and strategies to build your brand's voice and captivate your target audience.",
    banner: "content.jpeg",
  },
  {
    id: 2,
    title: "Clicks",
    subtitle: "We focus on",
    text: "Our paid ad campaigns drive traffic, ensuring maximum reach and engagement with your audience.",
    banner: "clicks.jpeg",
  },
  {
    id: 3,
    title: "Conversions",
    subtitle: "We focus on",
    text: "Through retargeting and lead generation, we turn interest into action and drive meaningful results.",
    banner: "conversions.jpeg",
  },
  {
    id: 4,
    title: "Customers",
    subtitle: "We focus on",
    text: "We transform leads into loyal customers with proven strategies that nurture trust and long-term relationships.",
    banner: "customers.jpeg",
  },
  {
    id: 5,
    title: "Growth",
    subtitle: "We focus on",
    text: "Our efforts are focused on sustainable growth, helping your brand achieve measurable success and expand its impact.",
    banner: "growth.jpeg",
  },
];

const BrandingSection = () => {
  const contentRef = useRef(null);
  const targetRef = useRef(null);

  useLayoutEffect(() => {
    const cardContents = gsap.utils.toArray(".card-content");
    const contentHeight = cardContents.reduce(
      (total, el) => total + el.offsetHeight,
      0
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#trigger",
        start: "40% 50%",
        end: `+=${contentHeight}`, // Dynamically calculate end value
        pin: true,
        scrub: 1,
        // markers: true,
      },
    }); // Create a GSAP timeline

    data.forEach((_, i) => {
      if (i === data.length - 1) return;

      timeline.to(`#image-${i}`, {
        keyframes: {
          "50%": {
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 50% 50%, 0 0%, 0 0)",
          },

          "100%": {
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 100% 0%, 100% 0%, 100% 0%, 0 0)",
          },
        },
        duration: 0.5, // Animation duration
        ease: "none",
      });
    });

    timeline.to(
      cardContents,
      {
        yPercent: -100 * (cardContents.length - 1),
        ease: "none",
        duration: 2,
      },
      0
    );
    timeline.to(
      "#arrow",
      {
        x: 540,
        y: -525,
        duration: 0.5,
        ease: "none",
        repeat: data.length - 2,
      },
      0
    );

    return () => {
      // Cleanup ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useLayoutEffect(() => {
    // small device
    const mobileCard = gsap.utils.toArray(".overlap-card");
    const mobileCardsHeight = mobileCard.reduce(
      (total, el) => total + el.offsetHeight,
      0
    );

    const mobileTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#mobileTrigger",
        start: "top 5%",
        end: `+=${mobileCardsHeight}`, // Dynamically calculate end value
        scrub: 1,
      },
    });

    mobileCard.forEach((dt, index) => {
      mobileTimeLine.to(
        dt,
        {
          duration: 1,
          ease: "none",
          scale: 0.8,
          opacity: 0,
        },
        index
      );
    });

    return () => {
      // Cleanup ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-8xl mx-auto px-4 pt-[100px]">
      <div className="space-y-10 relative">
        <div className="hidden lg:block">
          <div id={`trigger`} className={cn(" grid grid-cols-2 h-[628px]")}>
            <div
              id="imageContainer"
              className="relative overflow-hidden  bg-gray-500 "
            >
              {data.map((item, i) => (
                <div
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 100%, 0 0)", // Initial clip-path
                    overflow: "hidden", // Ensure the image respects the clipping
                    zIndex: data?.length - i,
                  }}
                  id={`image-${i}`} // Unique ID for each image container
                  key={i}
                  className="w-full h-full absolute inset-0"
                >
                  <Image
                    className="h-full"
                    width={820}
                    height={800}
                    src={`/assets/images/${item.banner}`}
                    alt={item.title}
                  />
                </div>
              ))}

              <div
                id="arrow"
                className=" absolute z-20 bottom-5  left-5 w-full flex items-end"
              >
                <BlockIcon
                  color="#ffffff"
                  className={"size-[81px] rotate-90"}
                />
              </div>
            </div>
            <div
              className="bg-secondary-2 h-[628px] overflow-hidden relative"
              ref={contentRef}
            >
              {data.map((item, i) => (
                <div
                  style={{ zIndex: data?.length - i }}
                  key={i}
                  id={`content-${i}`}
                  className="card-content flex items-center text-white px-10 xl:px-16 2xl:px-20 bg-secondary-2 h-[628px]"
                >
                  <div className="w-full max-w-[340px] xl:max-w-[380px]">
                    <p className="font-montserrat font-semibold text-xl xl:text-2xl">
                      {item.subtitle}
                    </p>
                    <h2 className="font-montserrat uppercase text-[42px] xl:text-[56px] 2xl:text-[64px] leading-none font-bold tracking-normal mt-1">
                      {item.title}
                    </h2>
                    <p className="font-montserrat text-base xl:text-lg font-normal leading-[1.6] mt-8 text-justify">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10 block lg:hidden" id="mobileTrigger">
          {data.map((item) => (
            <div key={item.id} className="sticky top-10 overlap-card">
              <BrandingCard data={item} />
            </div>
          ))}

          <div className="sticky top-10 z-20 h-auto " ref={targetRef}>
            <ProjectSection />
          </div>
        </div>

        <div className="" ref={targetRef}>
          <ProjectSection />
        </div>
      </div>
    </div>
  );
};

export default BrandingSection;
