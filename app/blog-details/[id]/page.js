import Image from "next/image";
import Marquee from "react-fast-marquee";
import ProjectCard from "@/components/home/ProjectCard";

const imageData = [
  {
    id: 1,
    title: "Sprite Marketing",
    year: 2017,
    src: "/assets/images/image-1.png",
    span: "md:col-span-4",
  },
  {
    id: 2,
    title: "Branding Project",
    year: 2017,
    src: "/assets/images/image-2.png",
    span: "md:col-span-5",
  },
  {
    id: 3,
    year: 2017,
    src: "/assets/images/image-3.png",
    span: "md:col-span-3",
  },
  {
    id: 4,
    year: 2017,
    src: "/assets/images/image-4.png",
    span: "md:col-span-5",
  },
  {
    id: 5,
    year: 2017,
    src: "/assets/images/image-4.png",
    span: "md:col-span-5",
  },
  {
    id: 6,
    year: 2017,
    src: "/assets/images/image-4.png",
    span: "md:col-span-5",
  },
  {
    id: 7,
    year: 2017,
    src: "/assets/images/image-4.png",
    span: "md:col-span-5",
  },
  {
    id: 8,
    year: 2017,
    src: "/assets/images/image-4.png",
    span: "md:col-span-5",
  },
  // Add more projects as necessary
];

// This function generates the static params for dynamic routing
export async function generateStaticParams() {
  return imageData.map((image) => ({
    id: image.id.toString(), // Ensure id is a string
  }));
}

export default function BlogDetails({ params }) {
  const project = imageData.find(item => item.id.toString() === params.id);

  if (!project) return <div>Project not found.</div>;

  return (
    <main>
      <section className="py-16 md:py-20">
        <div className="max-w-8xl mx-auto px-4 text-white flex items-center justify-between pb-10 md:py-10">
          <h2 className="text-xl lg:text-[48px] leading-[56px] font-semibold">
            {project.title}
          </h2>
          <p className="text-base lg:text-[32px] leading-9">{project.year}</p>
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
          <Image
            className="w-full h-[350px] lg:h-[720px]"
            src={"/assets/images/image-10.png"}
            width={400}
            height={720}
            alt="banner-image"
            priority={true}
          />
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

        {/* Other Projects Section */}
        <div className="max-w-8xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-[#CCCCCC]">Other projects</h1>
        </div>

        <div className="mt-10 overflow-hidden">
          <Marquee>
            {imageData.map((item, index) => (
              <ProjectCard
                key={index}
                item={item}
              />
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  );
}