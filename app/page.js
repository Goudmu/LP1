"use client";
import BestSeller from "@/components/bestSeller";
import Footer from "@/components/footer";
import { Slideshow } from "@/components/slider";
import { SlideshowProduct } from "@/components/sliderProduct";
import { useInView, useScroll } from "framer-motion";
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
      <div className=" m-auto mb-6 bg-[#9A031E] w-fit px-3 py-1 rounded-md">
        <h1 className=" text-6xl text-white">OUR PRODUCTS</h1>
      </div>
      <SlideshowProduct />
      <Footer />
    </div>
  );
}
