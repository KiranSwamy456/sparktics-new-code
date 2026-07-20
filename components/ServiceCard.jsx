"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BlockIcon } from "./icons";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service, className }) => {
  const cardInner = (
    <div className="relative h-full w-full shadow-[inset_-66px_66px_66px_rgba(165,165,165,13.1%)]">
      <div className="h-full group-hover:shadow-none p-11 group-hover:bg-secondary-2 duration-300">
        <h1 className="text-3.5xl md:text-4xl md:leading-[45px] font-bold text-white uppercase">
          {service.title}
        </h1>
      </div>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-6 top-6 duration-300">
        <BlockIcon
          className="size-12 lg:size-[76px] rotate-90"
          color="#FFFFFF40"
        />
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "shadow-[inset_66px_-66px_66px_rgba(165,165,165,13.1%)] hover:shadow-none cursor-pointer h-[250px] md:h-[200px] group relative col-span-1",
        service.span,
        className
      )}
    >
      {service.slug ? (
        <Link href={`/service-details/${service.slug}/`} className="block h-full">
          {cardInner}
        </Link>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="block h-full w-full text-left">
              {cardInner}
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white p-5 md:p-10 max-w-[357px] md:max-w-[650px] max-h-[500px] md:max-h-full overflow-y-auto">
            <DialogTitle className="text-xl md:text-3xl uppercase">
              {service.title}
            </DialogTitle>
            <div className="mt-1 md:mt-5">
              <Image
                src="/assets/images/mail-marketing.png"
                width={797}
                height={358}
                alt="banner"
              />
              <h4 className="uppercase md:text-lg text-[#231F20] font-semibold mt-5">
                WE DESIGN PERSONALISED EMAIL CAMPAIGNS THAT DRIVE ENGAGEMENT AND
                CONVERSIONS.
              </h4>
              <div className="space-y-2 md:space-y-6 text-base text-[#231F20] mt-5">
                <p>
                  <strong>Email Strategy:</strong> Craftinga strategic plant to
                  impactfully reach your audience&apos;s in box while ensuring
                  campaigns arealigned with business objectives
                </p>
                <p>
                  <strong>Campaign Management:</strong> Creating and sending
                  creative, targeted email campaignst oreach and engage your
                  audience effectivel
                </p>
                <p>
                  <strong>Automation:</strong> Setting up automated email
                  sequences to improve campaign efficiency and deliver timely
                  content to your database.
                </p>
                <p>
                  <strong>Analytics & Reporting:</strong> Monitoring and analyzing
                  email performance to optimize campaigns, improve engagement
                  metrics, and drive conversions
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ServiceCard;
