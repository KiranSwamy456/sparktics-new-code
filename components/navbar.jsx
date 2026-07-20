"use client";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BlockIcon } from "./icons";
import { MenuIcon, X } from "lucide-react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import ContactForm from "./ContactForm";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const items = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Blogs",
    url: "/blogs",
  },
  {
    id: 5,
    title: "Careers",
    url: "/careers",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-secondary-2 lg:border-white py-6 px-4 lg:px-10 flex items-center md:justify-between drop-shadow-md">
      <Sheet>
        <SheetTrigger asChild>
          <button className="lg:hidden">
            <MenuIcon className="text-white size-6" />
          </button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          closeIconClass="hidden"
          className="w-full border-none"
        >
          <div className="flex items-center">
            <SheetClose asChild>
              <button>
                <X size={20} className="text-white" />
              </button>
            </SheetClose>
            <div className="flex justify-center flex-grow">
              <Link href={"/"}>
                <Image
                  src={"/assets/sparktics-logo.svg"}
                  width={170}
                  height={60}
                  alt="logo"
                  priority="false"
                />
              </Link>
            </div>
          </div>

          <div className="mt-28 flex flex-col justify-between h-4/5">
            <ul className="flex flex-col space-y-10 px-5 flex-grow">
              {items.map((item) => (
                <li key={item.id} className="">
                  <Link
                    href={item.url}
                    className={cn(
                      "flex items-center justify-between text-white",
                      { "font-bold": pathname === item.url }
                    )}
                  >
                    {item.title}
                    <span className="pt-0.5 flex items-center justify-center">
                      <BlockIcon
                        className="size-4"
                        color={pathname === item.url ? "#EE7D2E" : "#666666"}
                        style={{ rotate: "90deg" }}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="uppercase bg-secondary-2 rounded-full text-white px-[38px] py-2 font-bold text-base ">
                    Contact us
                  </button>
                </DialogTrigger>
                <ContactForm />
              </Dialog>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex justify-center lg:justify-start flex-grow">
        <Link href={"/"}>
          <Image
            src={"/assets/sparktics-logo.svg"}
            width={170}
            height={60}
            alt="logo"
            priority="false"
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-center text-white text-base font-normal gap-24 uppercase">
        <ul className="flex items-center gap-14">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className={cn(
                  "flex flex-col items-center gap-1",
                  { "font-bold": pathname === item.url }
                )}
              >
                {item.title}
                <BlockIcon
                  className="size-4"
                  color={pathname === item.url ? "#EE7D2E" : "#666666"}
                  style={{ rotate: "90deg" }}
                />
              </Link>
            </li>
          ))}
        </ul>
        <Dialog>
          <DialogTrigger asChild>
            <button className="uppercase bg-secondary-2 rounded-full text-white px-8 py-2.5 font-bold text-sm">
              Contact us
            </button>
          </DialogTrigger>
          <ContactForm />
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;
