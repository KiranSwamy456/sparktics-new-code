import { BlockIcon } from "@/components/icons";
import SparktifiedScroll from "@/components/about/SparktifiedScroll";
import ServiceCard from "@/components/ServiceCard";
import React from "react";

const services = [
  {
    id: 1,
    title: "Branding",
    span: "md:col-span-4",
    slug: "branding",
  },
  {
    id: 2,
    title: "Web Development",
    span: "md:col-span-5",
    slug: "web-development",
  },
  {
    id: 3,
    title: "Marketing Strategy",
    span: "md:col-span-3",
    slug: "marketing-strategy",
  },
  {
    id: 4,
    title: "Social Media Management",
    span: "md:col-span-7",
    slug: "social-media-management",
  },
  {
    id: 5,
    title: "Paid Advertising",
    span: "md:col-span-5",
    slug: "paid-advertising",
  },
  {
    id: 6,
    title: "SEO",
    span: "md:col-span-4",
    slug: "seo",
  },
  {
    id: 7,
    title: "Influencer Marketing",
    span: "md:col-span-4",
    slug: "influencer-marketing",
  },
  {
    id: 8,
    title: "Photography",
    span: "md:col-span-4",
    slug: "photography",
  },
  {
    id: 9,
    title: "Media Production",
    span: "md:col-span-4",
    slug: "media-production",
  },
];

const Services = () => {
  return (
    <main>
      <section className="max-w-8xl 2xl:max-w-[1500px] mx-auto px-4 pt-[100px] lg:pt-[160px] pb-12 lg:pb-16">
        <div className="relative flex">
          <h1 className="uppercase text-[32px] leading-10 md:text-[85px] md:leading-[120px] text-white">
            What we offer?
          </h1>
          <div className="ml-10 -mt-10">
            <BlockIcon
              className="size-[41px] md:size-[84px]"
              style={{ rotate: "90deg" }}
              color="#EE7D2E"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-12 md:mt-16">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </section>
      <SparktifiedScroll />
    </main>
  );
};

export default Services;
