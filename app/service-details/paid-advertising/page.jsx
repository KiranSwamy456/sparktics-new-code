import Image from "next/image";
import SparktifiedScroll from "@/components/about/SparktifiedScroll";
import React from "react";

const features = [
  {
    title: "PPC Campaigns",
    description:
      "Managing pay-per-click ads on platforms like Google and Bing to drive targeted traffic.",
  },
  {
    title: "Social Media Ads",
    description:
      "Creating visually compelling ads for platforms like Facebook, Instagram, and LinkedIn.",
  },
  {
    title: "Retargeting Ads",
    description:
      "Re-engaging previous visitors to turn interest into action.",
  },
  {
    title: "Campaign Analytics",
    description:
      "Monitoring ad performance to optimize spend and maximize results.",
  },
];

const PaidAdvertisingDetails = () => {
  return (
    <main>
      <section className="bg-background border-b border-white/10">
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-10 md:py-14">
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Paid Advertising
          </h1>
        </div>
      </section>

      <section className="w-full">
        <Image
          src="/assets/images/services/paid-advertising.png"
          alt="Paid Advertising"
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

export default PaidAdvertisingDetails;
