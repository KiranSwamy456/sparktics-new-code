import Image from "next/image";
import React from "react";
import RelatedBlogsScroll from "@/components/blogs/RelatedBlogsScroll";

const BlogDetailPage = () => {
  return (
    <main>
      <section className="bg-background border-b border-white/10">
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-10 md:py-14">
          <h1 className="font-montserrat text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug">
            The Importance of Digital Marketing for Different Business Sectors
          </h1>
        </div>
      </section>

      <section className="w-full">
        <Image
          src="/assets/images/blogs/blog1_internal.png"
          alt="The Importance of Digital Marketing for Different Business Sectors"
          width={1920}
          height={900}
          className="w-full h-auto max-h-[70vh] object-cover"
          priority
        />
      </section>

      <section className="bg-background">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 py-10 md:py-14 space-y-5 md:space-y-6 text-white">
          <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white w-full">
            In this contemporary fast-paced environment, digital marketing for
            businesses is essential for achieving success across various sectors.
            Whether it involves clothing brands, real estate, healthcare, or
            entertainment venues such as pubs and clubs, the significance of
            digital marketing is clear. Ensuring extensive reach and interaction,
            the growth of digital marketing in India has transformed how
            businesses engage with their target audiences.
          </p>

          <div className="w-full space-y-2">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-secondary-2">
              Boosting Fashion Brands with Digital Marketing
            </h2>
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white">
              The fashion sector relies heavily on visibility and trends, making
              digital marketing vital for clothing brands. Social media
              initiatives, partnerships with influencers, and targeted advertising
              enable brands to connect with their ideal customers. With the growth
              of digital marketing in India, e-commerce platforms and tailored
              advertising strategies have simplified the process for clothing
              brands to increase sales and improve brand awareness.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-secondary-2">
              Transforming Real Estate Marketing
            </h2>
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white">
              In the real estate sector, digital marketing has already proven to
              be a transformative force. Given the intense competition in this
              field, traditional marketing methods are no longer adequate. By
              utilizing digital marketing for real estate, businesses can present
              properties through virtual tours, targeted advertising, and SEO
              techniques that drive website traffic. Furthermore, real estate
              digital marketing ensures that potential buyers discover suitable
              listings through optimized search results, resulting in higher
              conversion rates.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-secondary-2">
              Upgrading Healthcare Marketing
            </h2>
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white">
              The healthcare sector has also gained substantial rewards from
              digital marketing strategies. From hospitals to clinics and
              specialized services, health care marketing aids in establishing
              trust and delivering valuable information to patients. Features like
              online appointment scheduling, patient testimonials, and informative
              content marketing are crucial for enhancing patient engagement. As
              the growth of digital marketing in India progresses, healthcare
              providers can utilize digital platforms to improve their services
              and broaden their reach.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-secondary-2">
              Digital Marketing for Pubs and Clubs
            </h2>
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white">
              Entertainment establishments, including pubs and clubs, depend
              significantly on engaging their audience. Social media marketing,
              event promotions, and collaborations with influencers play an
              important role in promoting a vibrant nightlife atmosphere. Through
              digital marketing for businesses, pubs and clubs can draw in the
              right clientele using location-based advertising, personalized
              promotions, and captivating content, leading to increased foot
              traffic and customer loyalty.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-secondary-2">
              Key Takeaways
            </h2>
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white">
              The impact of digital marketing for businesses is apparent across
              various industries, making it an essential element for success. From
              strengthening brand visibility in clothing and healthcare to driving
              conversions in real estate and entertainment, digital strategies
              remain critical. With the continued growth of digital marketing in
              India, businesses that adapt early gain a lasting competitive edge.
            </p>
          </div>
        </div>
      </section>

      <RelatedBlogsScroll />
    </main>
  );
};

export default BlogDetailPage;
