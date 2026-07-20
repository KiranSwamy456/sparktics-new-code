import Image from "next/image";
import SparktifiedScroll from "@/components/about/SparktifiedScroll";
import React from "react";

const features = [
  {
    title: "Custom Design",
    description:
      "Creating visually stunning, user-centric designs tailored to your brand and audience.",
  },
  {
    title: "Responsive Development",
    description:
      "Ensuring seamless website functionality across all devices for a flawless user experience.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Building robust online stores optimized for performance and user-friendly navigation.",
  },
  {
    title: "Website Maintenance",
    description:
      "Providing regular updates and support to ensure your site stays secure and current.",
  },
];

const WebDevelopmentDetails = () => {
  return (
    <main>
      <section className="bg-background border-b border-white/10">
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-10 md:py-14">
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Web Development
          </h1>
        </div>
      </section>

      <section className="w-full">
        <Image
          src="/assets/images/services/Web_Design.png"
          alt="Web Development"
          width={1920}
          height={900}
          className="w-full h-auto max-h-[70vh] object-cover"
          priority
        />
      </section>

      <section className="bg-background">
        <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 space-y-12 md:space-y-16">
          {features.map((feature) => (
            <div key={feature.title} className="max-w-3xl">
              <h2 className="font-montserrat text-xl md:text-2xl font-semibold text-white">
                {feature.title}
              </h2>
              <p className="font-montserrat mt-3 md:mt-4 text-base md:text-lg text-white/90 font-normal leading-[1.7] text-justify max-w-2xl">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SparktifiedScroll />
    </main>
  );
};

export default WebDevelopmentDetails;
