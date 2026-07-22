import Image from "next/image";
import React from "react";
import RelatedBlogsScroll from "@/components/blogs/RelatedBlogsScroll";

const BlogDetailPage = () => {
  return (
    <main>
      <section className="bg-background border-b border-white/10">
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-10 md:py-14">
          <h1 className="font-montserrat text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug">
            Social Commerce India
          </h1>
        </div>
      </section>

      <section className="w-full">
        <Image
          src="/assets/images/blogs/blog9_Internal.png"
          alt="Social Commerce India"
          width={1920}
          height={900}
          className="w-full h-auto max-h-[70vh] object-cover"
          priority
        />
      </section>

      <section className="bg-background">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 py-10 md:py-14 space-y-5 md:space-y-6 text-white">
          <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white w-full">
            Picture this: a bustling marketplace right in your pocket, where
            every scroll, chat, and tap turns into a sale. In the dynamic realm
            of social commerce India, businesses are no longer just selling
            products - they&apos;re forging connections, sparking conversations,
            and sealing deals where Indians live their digital lives: on social
            media. Platforms like WhatsApp and Instagram have morphed from mere
            communication hubs into vibrant ecosystems for commerce,
            revolutionizing how people discover and purchase goods online.
          </p>

          <div className="w-full space-y-2">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-secondary-2">
              The Growth of Chat-Based Shopping on WhatsApp
            </h2>
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white">
              Regarding WhatsApp business marketing India, ease and reliability
              form the core. With more than 500 million active users across the
              country, WhatsApp serves as a virtual shop for countless vendors,
              ranging from local retailers to high-end labels. The app supports
              direct conversations, enabling sellers to distribute product
              lists, provide order notifications, and process transactions
              effortlessly through messaging. What elevates WhatsApp for social
              selling India isn&apos;t merely its tools, but the personal bonds
              it builds. Shoppers enjoy direct communication with companies,
              posing queries and receiving swift replies - mirroring the
              friendliness of physical store visits. For example, a pastry shop
              could share images of fresh pastries early in the day and secure
              same-day reservations by evening. This captures the spirit of
              chat-driven buying - intimate, immediate, and user-friendly.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-secondary-2">
              Instagram Shop: Converting Viewers into Customers
            </h2>
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white">
              Instagram Shop India has changed social media scrolling by
              introducing purchasable posts, videos, and tales. Businesses can
              inspire purchases with minimal effort, especially among younger
              demographics. A user might watch a video of a traditional saree
              and complete the purchase directly within the app. Companies are
              using creator collaborations and visual narratives to build
              communities that convert viewers into loyal customers.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-secondary-2">
              Real-Life Examples: Genuine Bonds Driving Expansion
            </h2>
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white">
              A beauty brand used WhatsApp business marketing for personalized
              skin advice sessions instead of broad ads, leading to increased
              loyalty and recurring purchases. A Kerala-based accessory maker
              leveraged Instagram Shop and short videos to show artisanal
              skills, resulting in a twofold increase in interactions and rising
              in-app sales within six months. A Delhi-based eatery combined
              social media marketing with WhatsApp alerts to share daily
              offerings, securing steady revenue without relying on external
              delivery services. These instances demonstrate how social selling
              India helps small enterprises rival giants through innovation and
              dialogue.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-secondary-2">
              The Path Ahead Is Social, Beyond Just Online
            </h2>
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-[1.7] text-white">
              The upcoming era of social commerce India focuses on synergy -
              blending WhatsApp, Instagram, and emerging platforms into a
              seamless flow of media, talks, and transactions. For businesses,
              the secret is merging tech with sincerity - staying attentive,
              empathetic, and credible. Ultimately, consumers aren&apos;t merely
              acquiring items; they&apos;re investing in narratives, adventures,
              and exchanges. And that&apos;s the true power of social commerce
              India - the ability to convert each message, reaction, or share
              into a valuable link that drives sales.
            </p>
          </div>
        </div>
      </section>

      <RelatedBlogsScroll />
    </main>
  );
};

export default BlogDetailPage;
