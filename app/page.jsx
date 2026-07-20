"use client";
import BrandingSection from "@/components/home/BrandingSection";
import Hero from "@/components/home/Hero";
import ServiceSection from "@/components/home/ServiceSection";

import WhySparktics from "@/components/home/WhySparktics";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ServiceSection />
      <BrandingSection />
      <WhySparktics />
    </main>
  );
}
