import Image from "next/image";
import SparktifiedScroll from "@/components/about/SparktifiedScroll";
import React from "react";

const features = [
  {
    title: "Brand Identity",
    description:
      "Developing logos, color schemes, and visual elements that establish your unique and memorable brand image.",
  },
  {
    title: "Messaging and Voice",
    description:
      "Crafting a consistent tone and message that resonates with your audience and reflects your brand's values.",
  },
  {
    title: "Competitive Positioning",
    description:
      "Strategizing to position your brand distinctly in a competitive marketplace.",
  },
  {
    title: "Rebranding",
    description:
      "Refreshing your brand identity to align with evolving business goals and market trends.",
  },
];

const BrandingDetails = () => {
  return (
    <main>
      {/* Title band */}
      <section className="bg-background border-b border-white/10">
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-10 md:py-14">
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Branding
          </h1>
        </div>
      </section>

      {/* Hero image */}
      <section className="w-full">
        <Image
          src="/assets/images/services/Branding.png"
          alt="Branding"
          width={1920}
          height={900}
          className="w-full h-auto max-h-[70vh] object-cover"
          priority
        />
      </section>

      {/* Feature list */}
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

export default BrandingDetails;
