"use client";
import BestSeller from "@/components/bestSeller";
import Footer from "@/components/footer";
import { Slideshow } from "@/components/slider";
import { SlideshowProduct } from "@/components/sliderProduct";
import { useInView, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-50px" });
  const experiencesRef = useRef();
  const isExperiencesRefInView = useInView(experiencesRef, { margin: "-50px" });
  return (
    <div ref={containerRef}>
      <Slideshow />
      <div className=" h-screen" ref={skillRef}>
        <BestSeller isSkillRefInView={isSkillRefInView} />
      </div>
      <motion.div
        className=" m-auto mt-10 md:mt-0 mb-6 w-fit px-3 py-1 rounded-md"
        initial={{ y: "0px", opacity: 0.5 }}
        animate={{ y: "50px", opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <h1 className=" text-xl md:text-6xl text-[#9A031E]">OUR PRODUCTS</h1>
      </motion.div>
      <SlideshowProduct />
      <Footer />
    </div>
  );
}
