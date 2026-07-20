import ProjectCard from "@/components/home/ProjectCard";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const imageData = [
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-1.png",
    span: "md:col-span-4",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-2.png",
    span: "md:col-span-5",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-3.png",
    span: "md:col-span-3",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-4.png",
    span: "md:col-span-5",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-5.png",
    span: "md:col-span-3",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-6.png",
    span: "md:col-span-4",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-7.png",
    span: "md:col-span-4",
  },
  {
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-8.png",
    span: "md:col-span-8",
  },
];

export default function ProjectDetails() {
  return (
    <main>
      <section className="py-16 md:py-20">
        <div className="max-w-8xl mx-auto px-4 text-white flex items-center justify-between pb-10 md:py-10">
          <h2 className="text-xl lg:text-[48px] leading-[56px] font-semibold">
            Sprite Marketing
          </h2>
          <p className="text-base lg:text-[32px] leading-9">2017</p>
        </div>

        <div className="flex items-center flex-col lg:flex-row overflow-hidden">
          <Image
            className="w-full h-[350px] lg:h-[720px]"
            src={"/assets/images/image-9.png"}
            width={400}
            height={720}
            alt="banner-image"
            priority={true}
          />
          {/* <Image
            className="w-full h-[350px] lg:h-[720px]"
            src={"/assets/images/image-10.png"}
            width={400}
            height={720}
            alt="banner-image"
            priority={true}
          /> */}
        </div>
        <div className="max-w-8xl mx-auto  px-4 text-base md:text-[32px] md:leading-10 font-normal text-white py-16 md:py-24">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </p>
          <br />
          <br />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="max-w-8xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-[#CCCCCC]">
            Other projects
          </h1>
        </div>
        <div className="mt-10 overflow-hidden">
          <Marquee>
            {imageData.map((item, index) => (
              <ProjectCard
                className={"w-[250px] h-[200px] lg:w-[400px] block mx-4"}
                key={index}
                item={item}
                index={index}
              />
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  );
}
