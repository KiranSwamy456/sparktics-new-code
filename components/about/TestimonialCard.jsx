import Image from "next/image";
import React from "react";

const TestimonialCard = ({ client }) => {
  return (
    <div className="shadow-[inset_66px_-66px_66px_rgba(165,165,165,13.1%)] ">
      <div className="shadow-[inset_-66px_66px_66px_rgba(165,165,165,13.1%)] bg-[#ffffff13] p-6 sm:p-10 space-y-10">
        <div className="">
          <Image
            className="rounded-full size-[120px] overflow-hidden"
            src={`/assets/images/clients/${client.image_url}`}
            width={120}
            height={120}
            alt={client.name}
          />
        </div>
        <div className="text-white space-y-2">
          <h2 className="text-2xl md:text-3.5xl">{client.name}</h2>
          <p className="text-base sm:text-2xl">{client.designation}</p>
        </div>
        <div className="text-white text-base sm:text-2xl">
          <p>"{client.text}"</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
