import React from "react";
import { HoverCardContent } from "../ui/hover-card";
import { cn } from "@/lib/utils";

const WhyTitleHover = ({text, className}) => {
  return (
    <>
      <HoverCardContent
        sideOffset={-300}
        align="end"
        alignOffset={-200}
        className={cn("min-w-full md:min-w-[498px] bg-[#ffffff13] shadow-[inset_66px_-66px_66px_rgba(165,165,165,13.1%)] p-0 border-0", className)}
      >
        <div className=" relative  shadow-[inset_-66px_66px_66px_rgba(165,165,165,13.1%)] p-10 backdrop-blur-sm rounded-md pb-16">
          <p className="text-secondary-2 text-[32px] font-medium">
           {text}
          </p>
        </div>
      </HoverCardContent>
    </>
  );
};

export default WhyTitleHover;
