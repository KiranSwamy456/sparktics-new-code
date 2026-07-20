import React from "react";
import Marquee from "react-fast-marquee";

const ServiceSection = () => {
  return (
    <section>
      <div className="bg-white py-[22px]">
        <Marquee>
          <h3 className="text-[#231F20] text-2xl font-bold mx-44">
            We focus on your{" "}
            <span className="font-bold text-secondary-2">Sequence Content</span>
          </h3>
          <h3 className="text-[#231F20] text-2xl font-bold mx-44">
            We focus on your{" "}
            <span className="font-bold text-secondary-2">Clicks</span>
          </h3>
          <h3 className="text-[#231F20] text-2xl font-bold mx-44">
            We focus on your{" "}
            <span className="font-bold text-secondary-2">Conversions</span>
          </h3>
          <h3 className="text-[#231F20] text-2xl font-bold mx-44">
            We focus on your{" "}
            <span className="font-bold text-secondary-2">Customers</span>
          </h3>
          <h3 className="text-[#231F20] text-2xl font-bold mx-44">
            We focus on your{" "}
            <span className="font-bold text-secondary-2">Growth</span>
          </h3>
        </Marquee>
      </div>
    </section>
  );
};

export default ServiceSection;
