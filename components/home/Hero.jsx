"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const VIDEOS = {
  mobile: "/assets/videos/Sparktics Mobile View Front Page.mp4",
  tablet: "/assets/videos/Sparktics Tablet View Front Page.mp4",
  desktop: "/assets/videos/Sparktics Front Page Desktop.mp4",
};

const getVideoForWidth = (width) => {
  if (width < 768) return VIDEOS.mobile;
  if (width < 1024) return VIDEOS.tablet;
  return VIDEOS.desktop;
};

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(VIDEOS.desktop);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const updateVideo = () => {
      const nextSrc = getVideoForWidth(window.innerWidth);
      setVideoSrc((prev) => {
        if (prev !== nextSrc) {
          setShowTagline(false);
        }
        return nextSrc;
      });
    };

    updateVideo();
    window.addEventListener("resize", updateVideo);
    return () => window.removeEventListener("resize", updateVideo);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(window, { duration: 0.5, scrollTo: 0 });
    }, 1000);
  }, []);

  return (
    <section className="relative hero overflow-hidden bg-background">
      <div className="relative w-full">
        <video
          key={videoSrc}
          className="w-full h-auto max-h-[100vh] object-cover object-center"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setShowTagline(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <AnimatePresence>
        {showTagline && (
          <motion.div
            initial={{ y: 42, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-6 md:bottom-10 lg:bottom-16 2xl:bottom-24 flex items-center justify-center w-full"
          >
            <h3 className="text-center text-lg sm:text-2xl text-white">
              <span className="font-bold text-secondary-2">Your Brand</span>{" "}
              With Us
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
