import React from "react";
import { BlockIcon } from "@/components/icons";

const AboutHero = () => {
  return (
    <>
      <section className="max-w-8xl mx-auto px-4 py-[100px] lg:py-[200px]">
        <div className="relative flex">
          <h1 className="upercase text-[32px] leading-10 md:text-[85px] md:leading-[120px] text-white">
            TRANSFORMING DIGITAL INTERACTIONS INTO MEASURABLE SUCCESS
          </h1>
          <div className="absolute md:right-[130px] right-12 md:-top-14 -top-10">
            <BlockIcon
              className={"size-[41px] md:size-[84px]"}
              style={{ rotate: "90deg" }}
              color="#EE7D2E"
            />
          </div>
        </div>
        <div className="text-base text-center lg:text-start lg:text-[32px] lg:leading-10 text-white mt-10 space-y-8 lg:space-y-10">
          <p>
            At Sparktics, we are your brand&apos;s dynamic digital partner,
            relentlessly committed to driving growth and success for your
            business. With over 7 years of digital expertise, we&apos;ve
            empowered 70+ satisfied clients across 12+ diverse industries,
            crafting meaningful digital conversations that deliver visible,
            measurable results.
          </p>
          <p>
            Fueled by an unyielding curiosity, we innovate to create
            transformative digital experiences, implement strategic solutions,
            and embrace the trends shaping the future of the digital world. Let
            us help you turn interactions into impact and pave the way to your
            brand&apos;s success.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
