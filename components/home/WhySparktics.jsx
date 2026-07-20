import React from "react";
import Marquee from "react-fast-marquee";
import { HoverCard, HoverCardTrigger } from "../ui/hover-card";
import WhyTitleHover from "./WhyTitleHover";
import { Dialog, DialogTrigger } from "../ui/dialog";
import PopupContent from "./PopupContent";

const WhySparktics = () => {
  return (
    <section>
      <div className="bg-white py-[22px]">
        <Marquee>
          <h3 className="text-[#231F20] text-xl md:text-2xl font-bold mx-44">
            Why Sparktics ?
          </h3>
          <h3 className="text-[#231F20] text-xl md:text-2xl font-bold mx-44">
            Why Sparktics ?
          </h3>
          <h3 className="text-[#231F20] text-xl md:text-2xl font-bold mx-44">
            Why Sparktics ?
          </h3>
          <h3 className="text-[#231F20] text-xl md:text-2xl font-bold mx-44">
            Why Sparktics ?
          </h3>
        </Marquee>
      </div>
      <div className="py-24 md:py-28 border-b border-[#cccccc]">
        <div className="hidden md:block">
          <div className="max-w-[1260px] pl-[393px] border-b border-[#666666] pb-20">
            <p className="text-2xl text-white">because we have</p>
            <HoverCard>
              <HoverCardTrigger asChild>
                <h1 className="text-[72px] font-extrabold text-white cursor-pointer">
                  FEARLESS <span className="text-secondary-2">CREATIVITY</span>
                </h1>
              </HoverCardTrigger>
              <WhyTitleHover
                text=" We believe growth stems from fearless creativity. We bring together
                        some of the most creative minds in the industry to drive meaningful
                        change and spark innovation for your brand"
              />
            </HoverCard>
          </div>
          <div className="max-w-[1260px] pr-[393px] border-b border-[#666666] pb-20 ml-auto pt-16">
            <p className="text-2xl text-white">because we have</p>

            <HoverCard>
              <HoverCardTrigger asChild>
                <h1 className="text-[72px] font-extrabold text-white cursor-pointer">
                  REAL HUMAN <span className="text-secondary-2">INSIGHT</span>
                </h1>
              </HoverCardTrigger>
              <WhyTitleHover
                text=" We believe growth stems from fearless creativity. We bring together
                        some of the most creative minds in the industry to drive meaningful
                        change and spark innovation for your brand"
              />
            </HoverCard>
          </div>

          <div className="max-w-8xl mx-auto pt-16 px-4">
            <p className="text-2xl text-white">because we have</p>

            <HoverCard>
              <HoverCardTrigger asChild>
                <h1 className="text-[72px] font-extrabold text-white cursor-pointer">
                  <span className="text-secondary-2">RESULTS</span> DRIVEN
                  APPROACH
                </h1>
              </HoverCardTrigger>
              <WhyTitleHover
                text=" We believe growth stems from fearless creativity. We bring together
                        some of the most creative minds in the industry to drive meaningful
                        change and spark innovation for your brand"
              />
            </HoverCard>
          </div>
        </div>

        <div className="block md:hidden pl-8 space-y-10">
          <div>
            <p className="text-base text-white">because we have</p>
            <h1 className="text-lg font-extrabold text-white cursor-pointer">
              FEARLESS{" "}
              <Dialog>
                <DialogTrigger asChild>
                  <span className="text-secondary-2 underline underline-offset-4">
                    CREATIVITY
                  </span>
                </DialogTrigger>
                <PopupContent
                  title={"FEARLESS CREATIVITY"}
                  text={
                    "We believe growth stems from fearless creativity. We bring together some of the most creative minds in the industry to drive meaningful change and spark innovation for your brand"
                  }
                />
              </Dialog>
            </h1>
          </div>

          <div>
            <p className="text-base text-white">because we have</p>
            <h1 className="text-lg font-extrabold text-white cursor-pointer">
              REAL HUMAN{" "}
              <Dialog>
                <DialogTrigger asChild>
                  <span className="text-secondary-2 underline underline-offset-4">
                    INSIGHT
                  </span>
                </DialogTrigger>
                <PopupContent
                  title={"REAL HUMAN INSIGHT"}
                  text={
                    "We believe growth stems from fearless creativity. We bring together some of the most creative minds in the industry to drive meaningful change and spark innovation for your brand"
                  }
                />
              </Dialog>
            </h1>
          </div>
          <div>
            <p className="text-base text-white">because we have</p>
            <h1 className="text-lg font-extrabold text-white cursor-pointer">
              <Dialog>
                <DialogTrigger asChild>
                  <span className="text-secondary-2 underline underline-offset-4">
                    RESULTS{" "}
                  </span>
                </DialogTrigger>
                <PopupContent
                  title={"RESULTS DRIVEN APPROACH"}
                  text={
                    "We believe growth stems from fearless creativity. We bring together some of the most creative minds in the industry to drive meaningful change and spark innovation for your brand"
                  }
                />
              </Dialog>
              DRIVEN APPROACH
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySparktics;
