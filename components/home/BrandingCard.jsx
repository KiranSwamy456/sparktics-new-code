"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const BrandingCard = ({ data, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cn("grid grid-cols-1 lg:grid-cols-2 w-full", className)}
      >
        <div className="relative">
          <Image
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              overflow: "hidden",
            }}
            className="h-[220px] lg:h-[300px] w-full object-cover"
            width={420}
            height={300}
            src={`/assets/images/${data.banner}`}
            alt={data.title}
          />
        </div>
        <div className="bg-secondary-2 flex items-center h-full text-white p-8 md:p-12 lg:px-14">
          <div className="w-full max-w-[340px] md:max-w-[380px]">
            <p className="font-montserrat font-semibold text-lg md:text-xl">
              {data.subtitle || "We focus on"}
            </p>
            <h2 className="font-montserrat uppercase text-3xl md:text-[48px] lg:text-[56px] leading-none font-bold tracking-normal mt-1">
              {data.title}
            </h2>
            <p className="font-montserrat text-base md:text-lg font-normal leading-[1.6] mt-6 text-justify">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandingCard;
