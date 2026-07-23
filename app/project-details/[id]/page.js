import ProjectCard from "@/components/home/ProjectCard";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const projects = [
  {
    title: "100n",
    slug: "100n",
    src: "/assets/business/100n_external.svg",
    bannerSrc: "/assets/business/100n_internal.svg",
    challenges:
      "Develop a compelling brand identity for a quick-service restaurant offering a fresh menu inspired by fruits and vegetables.",
    solutions: [
      "Crafted a visually striking logo and cohesive branding elements that embody the brand's commitment to freshness and quality.",
      "Designed innovative and functional packaging solutions, including custom sandwich boxes and juice glasses, to reinforce brand recognition.",
      "Applied thoughtfully created brand patterns across offline stores for consistent visual storytelling.",
      "Managed social media platforms to drive brand awareness and foster customer engagement through targeted content strategies.",
    ],
  },
  {
    title: "Anemone Vinkel",
    slug: "anemone-vinkel",
    src: "/assets/business/anomene_vinkle_external.svg",
    bannerSrc: "/assets/business/anomene_vinkle_internal.svg",
    challenges:
      "Establish a distinctive brand identity for a sustainable handloom clothing brand inspired by tradition and tailored for modern lifestyles.",
    solutions: [
      "Designed a sophisticated logo and branding elements that reflect the brand's ethos of sustainability and timeless elegance.",
      "Strategically managed social media platforms to amplify brand visibility, foster audience connection, and drive engagement through curated, on-brand content.",
    ],
  },
  {
    title: "KortYard",
    slug: "kortyard",
    src: "/assets/business/kortyard_external.png",
    bannerSrc: "/assets/business/kortyard_internal.svg",
    challenges:
      "Create a brand presence and enhance online visibility for a Mediterranean cuisine restaurant through social media management.",
    solutions: [
      "Managed and optimized social media platforms to build brand awareness, highlight culinary offerings, and engage with the target audience.",
      "Developed engaging content and campaigns tailored to the brand's Mediterranean essence to establish a strong digital footprint.",
    ],
  },
  {
    title: "IceTub",
    slug: "icetub",
    src: "/assets/business/icetub_external.png",
    bannerSrc: "/assets/business/ice_tub_internal.svg",
    challenges:
      "Establish a compelling brand identity for IceTub, a wellness brand specializing in cold plunges and steam saunas, to attract a health-conscious audience.",
    solutions: [
      "Designed a sleek and modern logo alongside cohesive branding elements that embody rejuvenation and wellness.",
      "Spearheaded the brand's launch on social media, crafting engaging and visually appealing content to build awareness and drive engagement.",
      "Managed social media platforms post-launch to foster a growing community and ensure consistent messaging aligned with the brand ethos.",
    ],
  },
  {
    title: "rudra techno feeds",
    slug: "rudra-techno-feeds",
    src: "/assets/business/rudra_techno_feeds_external.png",
    bannerSrc: "/assets/business/rudra_techno_feeds_internal.svg",
    challenges:
      "Increase brand visibility for a leading fish and shrimp feed manufacturer through a professional online presence.",
    solutions: [
      "Designed a custom, SEO-friendly website to effectively communicate the brand’s focus on high-quality feed solutions.",
      "Highlighted key messaging around optimizing aquaculture nutrition to deliver maximum returns on investment, attracting both current and potential customers.",
    ],
  },
  {
    title: "bathula builders",
    slug: "bathula-builders",
    src: "/assets/business/bathula_builders_external.png",
    bannerSrc: "/assets/business/bathula_builders_internal.svg",
    challenges:
      "Promote the brand and its portfolio of premium villa construction projects to enhance visibility in the real estate sector.",
    solutions: [
      "Executed result-driven social media campaigns to showcase world-class villa designs and construction expertise.",
      "Managed social media platforms with consistent, high-quality content to elevate the brand's position as a leader in luxury real estate.",
    ],
  },
  {
    title: "detox bar",
    slug: "detox-bar",
    src: "/assets/business/detox_bar_external.png",
    bannerSrc: "/assets/business/detox_bar_internal.svg",
    challenges:
      "Create a vibrant brand identity for Detox Bar, a juice brand emphasizing health, wellness, and a refreshing lifestyle.",
    solutions: [
      "Developed a refreshing and vibrant logo with branding elements that effectively convey the brand’s commitment to health and vitality.",
      "Orchestrated a successful multi-platform brand launch, leveraging social media to connect with health-conscious audiences and maximize visibility.",
      "Executed offline branding initiatives, including in-store materials and promotional assets, to complement the brand's digital presence and solidify its identity.",
    ],
  },
  {
    title: "Anjaneya Jewellers",
    slug: "anjaneya-jewellers",
    src: "/assets/business/anjaneya_external.png",
    bannerSrc: "/assets/business/anjaneya_internal.svg",
    challenges:
      "Introduce a legacy jewellery brand into a new market, Hyderabad, while reinforcing its 50+ years of trust and excellence.",
    solutions: [
      "Conceptualized and executed a high-impact launch campaign, highlighting the brand's legacy and craftsmanship to captivate the Hyderabad market.",
      "Managed social media platforms with tailored content strategies to engage the local audience and establish a strong digital presence.",
      "Delivered premium offline branding solutions, including captivating newspaper advertisements and high-visibility billboards, to maximize awareness and foot traffic.",
    ],
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug,
  }));
}

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project =
    projects.find((item) => item.slug === id) ||
    projects.find((item) => item.title.toLowerCase() === id?.toLowerCase());

  const title = project?.title || id?.replace(/-/g, " ") || "Project";
  const bannerSrc =
    project?.bannerSrc || project?.src || "/assets/images/image-1.png";
  const otherProjects = projects.filter((item) => item.slug !== project?.slug);

  return (
    <main>
      <section className="py-16 md:py-20">
        <div className="max-w-8xl mx-auto px-4 text-white flex items-center justify-between pb-10 md:py-10">
          <h2 className="text-xl lg:text-[48px] leading-[56px] font-semibold uppercase">
            {title}
          </h2>
        </div>

        <div className="flex items-center flex-col lg:flex-row overflow-hidden">
          <Image
            className="w-full h-[350px] lg:h-[720px] object-cover"
            src={bannerSrc}
            width={400}
            height={720}
            alt={`${title} banner`}
            priority={true}
          />
        </div>

        {project?.challenges || project?.solutions?.length ? (
          <div className="max-w-8xl mx-auto px-4 text-white py-16 md:py-24 space-y-10 md:space-y-14 text-base md:text-[32px] md:leading-10 font-normal">
            {project?.challenges ? (
              <div>
                <h3 className="font-semibold mb-4 md:mb-6">Challenges</h3>
                <p>{project.challenges}</p>
              </div>
            ) : null}

            {project?.solutions?.length ? (
              <div>
                <h3 className="font-semibold mb-4 md:mb-6">
                  Strategic Solution
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {project.solutions.map((solution, index) => (
                    <p key={index}>{solution}</p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="max-w-8xl mx-auto px-4 mt-16 md:mt-24">
          <h1 className="text-xl md:text-4xl font-extrabold uppercase text-white">
            SPARKTIFIED BUSINESS
          </h1>
        </div>
        <div className="mt-10 overflow-hidden">
          <Marquee>
            {otherProjects.map((item, index) => (
              <ProjectCard
                className={"w-[250px] h-[200px] lg:w-[400px] block mx-4"}
                key={item.slug}
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
