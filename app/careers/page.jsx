import { BlockIcon } from "@/components/icons";
import React from "react";

const Careers = () => {
  return (
    <main>
      <section className="max-w-8xl 2xl:max-w-[1629px] mx-auto px-4 md:px-12 py-[100px] lg:py-[200px]">
        <div className="relative flex items-start">
          <h1 className="uppercase text-[32px] leading-10 md:text-[85px] md:leading-[100px] text-white">
            Want to join the team?
          </h1>
          <div className="-ml-6 -mt-8 md:-ml-10 md:-mt-12 shrink-0">
            <BlockIcon
              className="size-[41px] md:size-[84px]"
              style={{ rotate: "90deg" }}
              color="#EE7D2E"
            />
          </div>
        </div>
        <p className="mt-8 md:mt-10 text-base md:text-3.5xl text-white">
          Currently we have no openings, stay tuned for more opportunities.
        </p>
      </section>
    </main>
  );
};

export default Careers;
